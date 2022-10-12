// SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;
/**
* @notice Staking is a contract who is ment to be inherited by other contract that wants Staking capabilities
*/
abstract contract Staking {


    /**
    * @notice Constructor since this contract is not ment to be used without inheritance
    * push once to stakeholders for it to work proplerly
     */
    constructor() {
        // This push is needed so we avoid index 0 causing bug of index-1
      //  stakeholders.push();
    }

    struct Stake{
        address user;
        uint256 amount;
        uint256 since;
        // This claimable field is new and used to tell how big of a reward is currently available if the user stakes again, otherwise
        uint256 unclaimed;
        uint256 avgtime;
    }
    mapping(address => Stake) internal stakes;
    

    uint internal totalStaked;

    mapping(address => bool) private hasStake;

    struct Claim{
        address user;
        uint256 amount;
        uint256 lastClaimed;
    }
    mapping(address => Claim) internal claims;

    struct Unstake{
        address user;
        uint256 amount;
        uint256 lastUnstaked;
    }
    mapping(address => Unstake) internal unstakes;

    struct StakeItem{
        address user;
        uint256 amount;
        uint256 time;
    }
    mapping(address => StakeItem[]) internal stakeitems;
    mapping(address => StakeItem[]) internal claimitems;
    mapping(address => StakeItem[]) internal unstakeitems;


    event Staked(address indexed user, uint256 amount, uint256 total, uint256 unamt, uint256 timestamp);
    event Claimed(address indexed user, uint256 amount, uint256 total, uint256 unamt, uint256 timestamp);
    event Unstaked(address indexed user, uint256 amount, uint256 total, uint256 unamt, uint256 timestamp);



    function _getStake(address addr) internal view returns (uint256, uint256, uint256){
        Stake memory stk = stakes[addr];     
        if(stk.amount>0 || stk.unclaimed>0){
            return (stk.amount,stk.unclaimed,stk.since);
        }else{
            return (0,0,0);       
        }
    }

    function _stake(uint256 _amount, uint256 _minStakeDur) internal{
        // Simple check so that user does not stake 0 
        require(_amount > 0, "Cannot stake nothing");
        
        uint total = 0;
        uint timestamp = 0;
        uint256 unclaimed =0;
        // has stake so, add to existing stake, check unclaimed rewards and add to unclaimed reward running balance
        if(hasStake[msg.sender]){
            Stake memory stk = stakes[msg.sender];
            
            if(stk.amount>0){
                unclaimed = calculateStakeReward(stk);
            }
            stk.amount += _amount;
            stk.since = block.timestamp;
            stk.unclaimed += unclaimed;
            if(stk.avgtime>0){
                uint256 midpoint = (block.timestamp + stk.avgtime)/2;
                stk.avgtime = (block.timestamp - midpoint >_minStakeDur/2 )? block.timestamp : midpoint;
            }else{
                stk.avgtime = block.timestamp;
            }
            unclaimed = stk.unclaimed;
            stakes[msg.sender] = stk;

            total = stk.amount;
            timestamp = stk.since;

        }else{
            Stake memory stk = Stake(msg.sender, _amount, block.timestamp, 0, block.timestamp);
            stakes[msg.sender] = stk;
            total = _amount;
            timestamp = block.timestamp;
        }
            totalStaked += _amount;
            hasStake[msg.sender] =true;

            emit Staked(msg.sender, _amount, total, unclaimed, timestamp);

        /*

        // Mappings in solidity creates all values, but empty, so we can just check the address
        uint256 index = stakes[msg.sender];
        // block.timestamp = timestamp of the current block in seconds since the epoch
        uint256 timestamp = block.timestamp;
        // See if the staker already has a staked index or if its the first time
        if(index == 0){
            // This stakeholder stakes for the first time
            // We need to add him to the stakeHolders and also map it into the Index of the stakes
            // The index returned will be the index of the stakeholder in the stakeholders array
            index = _addStakeholder(msg.sender);
        }

        // Use the index to push a new Stake
        // push a newly created Stake with the current block timestamp.
        stakeholders[index].address_stakes.push(Stake(msg.sender, _amount, timestamp,0));
        // Emit an event that the stake has occured


        */

    }


    function _claim() internal returns(uint256){
        uint total = 0;
        uint256 unclaimed=0;
        // has stake so, add to existing stake, check unclaimed rewards and add to unclaimed reward running balance
        if(hasStake[msg.sender]){

            Stake memory stk = stakes[msg.sender];     
            if(stk.amount>0 || stk.unclaimed>0){
                unclaimed = calculateStakeReward(stk);
                unclaimed += stk.unclaimed;
                stk.unclaimed = 0;
                if(stk.amount<=0){
                    stk.avgtime=0;
                }
                stk.since = block.timestamp;
                stakes[msg.sender] = stk;
                if(stk.amount<=0 && stk.unclaimed<=0){
                    delete stakes[msg.sender];
                    delete hasStake[msg.sender];
                }
            }else{
               revert("Cannot claim if no stake");       
            }
        }else{
             revert("Cannot claim if no stake");
        }
        emit Claimed(msg.sender, unclaimed, total, unclaimed, block.timestamp);
        return unclaimed;
    }


       /**
       * @notice
       rewardPerHour is 1000 because it is used to represent 0.001, since we only use integer numbers
       This will give users 0.1% reward for each staked token / H
       */
       uint256 internal rewardPerHour = 1000;

       /** 
       reward is 0.3% per day which is 0.003 in fraction
       reward is 0.003/86400s = 0.0000000347222 % per second because there are 86400s in a day
       reward is 0.00000003472222 fr per second /1     
       for simplicity inverse / 1 it to 28800001; per second
       for testing  divide /24 1 it to 1200000 so it happens per hour rather than per day
       */
      uint256 internal rewardFracPerSecond = 28800000;


      function calculateStakeReward(Stake memory _current_stake) internal view returns(uint256){
          // First calculate how long the stake has been active
          // Use current seconds since epoch - the seconds since epoch the stake was made
          // The output will be duration in SECONDS ,
          // We will reward the user 0.1% per Hour So thats 0.1% per 3600 seconds
          // the alghoritm is  seconds = block.timestamp - stake seconds (block.timestap - _stake.since)
          // hours = Seconds / 3600 (seconds /3600) 3600 is an variable in Solidity names hours
          // we then multiply each token by the hours staked , then divide by the rewardPerHour rate 
          // return (((block.timestamp - _current_stake.since) / 1 hours) * _current_stake.amount) / rewardPerHour;

          return ((block.timestamp - _current_stake.since) * _current_stake.amount) /  rewardFracPerSecond;

      }



    function _unstake(uint256 _amount) internal returns(uint256, uint256){
        uint total = 0;
        uint256 unclaimed=0;
        // has stake so, add to existing stake, check unclaimed rewards and add to unclaimed reward running balance
        if(hasStake[msg.sender]){

            Stake memory stk = stakes[msg.sender];    
            require(stk.amount>=_amount, "Cannot unstake more than your amt");             
            unclaimed = calculateStakeReward(stk);
            stk.amount -= _amount;
            stk.unclaimed += unclaimed;
            unclaimed = stk.unclaimed;
            stk.since = block.timestamp;
            stakes[msg.sender] = stk;
            totalStaked -= _amount;
            emit Unstaked(msg.sender, _amount, total, unclaimed, block.timestamp);
            return (_amount, stk.avgtime);

        }else{
             revert("Cannot claim if no stake");
        }
    }


}
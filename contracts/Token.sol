// SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./ITokenSale.sol";
import "./Staking.sol";
import "./IPancakeRouter02.sol";


contract Token is Ownable, Staking {

    using SafeMath for uint256;
    uint private _totalSupply;
    uint256 private _decimals;
    string private _symbol;
    string private _name;
    uint private  _taxFee = 5;
    uint private  burnFee = 5;
    uint private _tokenRate = 1000000;
    ITokenSale private _tokenSale;
    uint256 private _curSale = 1;
    uint256 private _minStakeDur = 0;
   

   // Mainnet
    address private constant PANCAKE_FACTORY = 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73;  
    address private constant PANCAKE_ROUTER = 0x10ED43C718714eb63d5aA57B78B54704E256024E;
    address private constant WBNB = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
    address private constant BUSD = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;

    address private constant DEPLOYER = 0xf09634cB0Df7eccfAe04dBf457069FD5eF9e9fE1;
    address private constant STAKELOCK = 0xA9E4fa7a2C0eA3f48b1b63B84eEeE9945ab23167; //will hold staking only zero sum
    address private constant REWARDER = 0x48FF4fF2dD19306C06D21dafcF747578805075Db; //will hold refrwd  and send rwd
    address private constant FEEADDR = 0xf94D878f9491894eFC06C76fD62a35985f0c28BC; //will hold refrwd  and send rwd
    address private constant STAKERWD = 0x5206D8be5993fC07AbA3F569Ded43c52B58bd11F; // Will pay stake rewards

    // ///Testnet
    // address private constant PANCAKE_FACTORY = 0x6725F303b657a9451d8BA641348b6761A6CC7a17;  
    // address private constant PANCAKE_ROUTER = 0xD99D1c33F9fC3444f8101754aBC46c52416550D1 ;
    // address private constant WBNB = 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd;
    // address private constant BUSD = 0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47;

    // address private constant DEPLOYER = 0x3BbDC27116FBA9546Cd826C721D1952B2d9f0d8E;
    // address private constant STAKELOCK = 0xbaBCE06552fac3ad8e44311e3e7C162f89eC27c0; //will hold staking only zero sum
    // address private constant REWARDER = 0x3d5fFDf997096c8aF1cB2BA3C03207BA45C423Fa; //will hold refrwd  and send rwd
    // address private constant FEEADDR = 0xdE448d5582310a5e7bAd427D237c3FD7F7712749; //will hold refrwd  and send rwd
    // address private constant STAKERWD = 0xa356e0fb5e7aCCa746fEA4CFfB0dd4FD0F0E86c4; // Will pay stake rewards

    //Public Stats
    uint256 public totStaked = 0;
    uint256 public totClaimed = 0;
    uint256 public totUnstaked = 0;
    uint256 public totRefpaid = 0;
    bool public stkDisabled = false;
    bool public clmDisabled = false;
    // uint256 public totStkAccts = 0;
    uint256 public totFees = 0;


    struct StakedCol {
      uint bno;
      address addr;
      uint amt;
      uint ts;
    }
    struct UnStakedCol {
      uint bno;
      address addr;
      uint amt;
      uint ts;
    }
    StakedCol[] public stkCol;
    UnStakedCol[] public utkCol;





 


  /**
  * @notice _balances is a mapping that contains a address as KEY 
  * and the balance of the address as the value
  */
  mapping (address => uint256) private _balances;
  /**
  * @notice _allowances is used to manage and control allownace
  * An allowance is the right to use another accounts balance, or part of it
   */
   mapping (address => mapping (address => uint256)) private _allowances;

  /**
  * @notice Events are created below.
  * Transfer event is a event that notify the blockchain that a transfer of assets has taken place
  *
  */
  event Transfer(address indexed from, address indexed to, uint256 value);
  /**
   * @notice Approval is emitted when a new Spender is approved to spend Tokens on
   * the Owners account
   */
  event Approval(address indexed owner, address indexed spender, uint256 value);

  /**
   * @notice Purchased is emitted when the message sender swaps native token for the contract token to
   * the senders account
   */

  event Purchased(address indexed owner, uint256 bnbamt, uint256 tokenamt);


  event RefClaimed(address indexed owner, uint256 value, uint256 fee);



  /**
  * @notice constructor will be triggered when we create the Smart contract
  * _name = name of the token
  * _short_symbol = Short Symbol name for the token
  * token_decimals = The decimal precision of the Token, defaults 18
  * _totalSupply is how much Tokens there are totally 
  */
  constructor(string memory token_name, string memory short_symbol, uint256 token_decimals, uint256 token_totalSupply, uint256 minStakeDur) payable {
      _name = token_name;
      _symbol = short_symbol;
      _decimals = token_decimals;
     /// _totalSupply = Tokefy(token_totalSupply);
      _mint(msg.sender, Tokefy(token_totalSupply));       
      _minStakeDur = minStakeDur;
      emit Transfer(address(0), msg.sender, _totalSupply);

  }


   // fallback function to rcv bnb
    fallback() external payable  {
     // Purchase();
     _tokenSale.purchase(_curSale);
    } 
    receive() external payable  {
     // Purchase();
     _tokenSale.purchase(_curSale);
    }

  function setDefaultSale(uint256 no) external onlyOwner {
    _curSale = no;
  }

  function initSale(address tokenSaleAddress) external onlyOwner { 
    _tokenSale = ITokenSale(tokenSaleAddress);
  }

  function getTokenAmt(uint256 amt) external view returns (uint256) {

       address[] memory path = new address[](2);
       path[0] = WBNB;
       path[1] = BUSD;   

       IPancakeRouter02 pancakeRouterz = IPancakeRouter02(PANCAKE_ROUTER);
       uint256[] memory amountOutMins = pancakeRouterz.getAmountsOut(amt, path);

        return amountOutMins[path.length -1];  
  }

  modifier onlyRewarder() {
    require(msg.sender == REWARDER, "caller is not the Rewarder");
    _;
  }

  function Tokefy(uint256 value) internal view returns (uint256) {
     return value * (10 ** _decimals);
  }

  function Natify(uint256 value) internal view returns (uint256) {
     return value / (10 ** _decimals);
  }
  // need to normify ETH amts before interacting with the contract
  function Normify(uint256 value) internal view returns (uint256) {
     return value / (10 ** (18-_decimals));
  }
  /**
  * @notice decimals will return the number of decimal precision the Token is deployed with
  */
  function decimals() external view returns (uint256) {
    return _decimals;
  }
  /**
  * @notice symbol will return the Token's symbol 
  */
  function symbol() external view returns (string memory){
    return _symbol;
  }
  /**
  * @notice name will return the Token's symbol 
  */
  function name() external view returns (string memory){
    return _name;
  }
  /**
  * @notice totalSupply will return the tokens total supply of tokens
  */
  function totalSupply() external view returns (uint256){
    return _totalSupply;
  }
  /**
  * @notice balanceOf will return the account balance for the given account
  */
  function balanceOf(address account) external view returns (uint256) {
    return _balances[account];
  }
    /**
  * @notice IsClmDisabled return true if claiming is disabled (For migration purposes)
  */
  function IsClmDisabled() external view returns (bool) {
    return clmDisabled;
  }


  function setTokenRate(uint256 rate) public onlyOwner {
      _tokenRate = rate;
  }



  /**
  * @notice _mint will create tokens on the address inputted and then increase the total supply
  *
  * It will also emit an Transfer event, with sender set to zero address (adress(0))
  * 
  * Requires that the address that is recieveing the tokens is not zero address
  */
  function _mint(address account, uint256 amount) internal {
    require(account != address(0), "Cannot mint to zero address");
    // Increase total supply
    _totalSupply = _totalSupply + (amount);
    // Add amount to the account balance using the balance mapping
    _balances[account] = _balances[account] + amount;
    // Emit our event to log the action
    emit Transfer(address(0), account, amount);
  }
  /**
  * @notice _burn will destroy tokens from an address inputted and then decrease total supply
  * An Transfer event will emit with receiever set to zero address
  * 
  * Requires 
  * - Account cannot be zero
  * - Account balance has to be bigger or equal to amount
  */
  function _burn(address account, uint256 amount) internal {
    require(account != address(0), "Token: cannot burn from zero address");
    require(_balances[account] >= amount, "Token: Cannot burn more than the account owns");

    // Remove the amount from the account balance
    _balances[account] = _balances[account] - amount;
    // Decrease totalSupply
    _totalSupply = _totalSupply - amount;
    // Emit event, use zero address as reciever
    emit Transfer(account, address(0), amount);
  }
  /**
  * @notice burn is used to destroy tokens on an address
  * 
  * See {_burn}
  * Requires
  *   - msg.sender must be the token owner
  *
   */
  function burn(uint256 amount) public returns(bool) {
    _burn(msg.sender, Tokefy(amount));
    return true;
  }

    /**
  * @notice mint is used to create tokens and assign them to msg.sender
  * 
  * See {_mint}
  * Requires
  *   - msg.sender must be the token owner
  *
   */
  function mint(address account, uint256 amount) public onlyOwner returns(bool){
    _mint(account, Tokefy(amount));
    return true;
  }

  /**
  * @notice transfer is used to transfer funds from the sender to the recipient
  * This function is only callable from outside the contract. For internal usage see 
  * _transfer
  *
  * Requires
  * - Caller cannot be zero
  * - Caller must have a balance = or bigger than amount
  *
   */
  function transfer(address recipient, uint256 amount) external returns (bool) {
    _transfer(msg.sender, recipient, amount);
    return true;
  }

  
  /**
  * @notice _transfer is used for internal transfers
  * 
  * Events
  * - Transfer
  * 
  * Requires
  *  - Sender cannot be zero
  *  - recipient cannot be zero 
  *  - sender balance most be = or bigger than amount
   */
  function _transfer(address sender, address recipient, uint256 amount) internal {
    require(sender != address(0), "Token: transfer from zero address");
    require(recipient != address(0), "Token: transfer to zero address");
    //string memory err = string(abi.encodePacked("Token: cant transfer more than your account holds ", Strings.toString(amount), " ", Strings.toString(_balances[sender])));
    require(_balances[sender] >= amount, "Token: can't transfer more than the account holds");

    _balances[sender] = _balances[sender] - amount;
    _balances[recipient] = _balances[recipient] + amount;

    emit Transfer(sender, recipient, amount);
  }
  /**
  * @notice getOwner just calls Ownables owner function. 
  * returns owner of the token
  * 
   */
  function getOwner() external view returns (address) {
    return owner();
  }
  /**
  * @notice allowance is used view how much allowance an spender has
   */
   function allowance(address owner, address spender) external view returns(uint256){
     return _allowances[owner][spender];
   }
  /**
  * @notice approve will use the senders address and allow the spender to use X amount of tokens on his behalf
  */
   function approve(address spender, uint256 amount) external returns (bool) {
     _approve(msg.sender, spender, amount);
     return true;
   }

   /**
   * @notice _approve is used to add a new Spender to a Owners account
   * 
   * Events
   *   - {Approval}
   * 
   * Requires
   *   - owner and spender cannot be zero address
    */
    function _approve(address owner, address spender, uint256 amount) internal {
      require(owner != address(0), "Token: approve cannot be done from zero address");
      require(spender != address(0), "Token: approve cannot be to zero address");
      // Set the allowance of the spender address at the Owner mapping over accounts to the amount
      _allowances[owner][spender] = amount;

      emit Approval(owner,spender,amount);
    }
    /**
    * @notice transferFrom is uesd to transfer Tokens from a Accounts allowance
    * Spender address should be the token holder
    *
    * Requires
    *   - The caller must have a allowance = or bigger than the amount spending
     */


    function transferFrom(address spender, address recipient, uint256 amount) external returns(bool){
      // Make sure spender is allowed the amount 

      require(_allowances[spender][msg.sender] >= amount, "Token: You cannot spend that much on this account");
      // Transfer first
      _transfer(spender, recipient, amount);
      // Reduce current allowance so a user cannot respend
      _approve(spender, msg.sender, _allowances[spender][msg.sender] - amount);
      return true;
    }
    /**
    * @notice increaseAllowance
    * Adds allowance to a account from the function caller address
    */
    function increaseAllowance(address spender, uint256 amount) public returns (bool) {
      amount = Tokefy(amount);
      _approve(msg.sender, spender, _allowances[msg.sender][spender]+amount);
      return true;
    }
  /**
  * @notice decreaseAllowance
  * Decrease the allowance on the account inputted from the caller address
   */
    function decreaseAllowance(address spender, uint256 amount) public returns (bool) {
      amount = Tokefy(amount);
      _approve(msg.sender, spender, _allowances[msg.sender][spender]-amount);
      return true;
    }


    /**
    * Add functionality like burn to the _stake afunction
    *
     */
    function stake(uint256 amount) public {
      // Make sure staker actually is good for it
      require(!stkDisabled, "Staking is disabled");
      require(amount > 0, "Cannot stake Zero");
      amount = Tokefy(amount);
      require(amount <= _balances[msg.sender], "Cannot stake more than you own");
      _stake(amount, _minStakeDur);
      // Burn the amount of tokens on the sender
      //_burn(msg.sender, amount);
      _transfer(msg.sender, STAKELOCK, amount);
      totStaked += amount;
      stkCol.push(StakedCol (block.number, msg.sender, amount, block.timestamp));
    }


    /**
    * @notice unstake is used to withdraw stakes from the account holder
     */
    function claim()  public {
      require(!clmDisabled, "Claiming is disabled");
      uint256 amount = _claim();
      require(_balances[STAKERWD] >= amount, "Insufficient Balance. Try again later");
      // Return staked tokens to user
     // _mint(msg.sender, amount);
      totClaimed += amount;
      _transfer(STAKERWD, msg.sender, amount);
    }


    /**
    * @notice unstake is used to withdraw stakes from the account holder
     */
    function unstake(uint256 amount)  public {
      require(amount > 0, "Cannot unstake Zero");
      amount = Tokefy(amount);
      
      (uint256 amount_to_utk, uint256 avgtime) = _unstake(amount);    
      uint256 time = block.timestamp;
      uint256 diff = time - avgtime;   
        
      if(diff > _minStakeDur){ //no fee
        _transfer(STAKELOCK, msg.sender, amount_to_utk);  
      }else{
        uint256 fee_payable = amount_to_utk.mul(_taxFee).div(100);
        uint256 amt_payable = amount_to_utk-fee_payable;
        _transfer(STAKELOCK, msg.sender, amt_payable);
        _transfer(STAKELOCK, FEEADDR, fee_payable);    
      }
      totStaked = amount>totStaked? 0: totStaked-amount;
      utkCol.push(UnStakedCol(block.number, msg.sender, amount_to_utk, block.timestamp));
    }

    /**
    * @notice stakeAmt is used to withdraw stakes from the account holder
     */
    function getStake(address addr)  public view returns (uint256,uint256,uint256) {
      return _getStake(addr);
    }

    /**
    * @notice claimref is used for the user to claim referral commission
    */
    function claimref(address addr, uint256 amount, uint256 fee) public onlyRewarder returns (uint256) {
      require(amount > 0, "Cannot claim Zero");
      uint256 total = amount + fee;  
      require(_balances[REWARDER] >= total, "Exceeding Balance");  
      // Allow user to withdraw claim rewards
      _transfer(REWARDER, addr, amount);
      _transfer(REWARDER, FEEADDR, fee);
      emit RefClaimed(addr,amount, fee);
      totFees += fee;
      totRefpaid += amount;
      return amount;

    }


    function getSpclBal() public onlyOwner view returns (uint256,uint256, uint256, bool, bool) {
       return (_balances[STAKERWD], _balances[REWARDER],  _balances[FEEADDR], stkDisabled, clmDisabled);
    }

    function stakerAdj(uint256 amount, bool isAdd) public onlyOwner returns (uint256) {
      require(amount > 0, "Cannot Be zero");
         amount = Tokefy(amount);
      if(isAdd){
         _transfer(owner(), STAKERWD, amount);     
      }else{
         _transfer(STAKERWD, owner(),  amount);
      }
      return _balances[STAKERWD];
    }

    
    function rewarderAdj(uint256 amount, bool isAdd) public onlyOwner returns (uint256) {
      require(amount > 0, "Cannot Be zero");
         amount = Tokefy(amount);
      if(isAdd){
         _transfer(owner(), REWARDER, amount);     
      }else{
         _transfer(REWARDER, owner(),  amount);
      }
      return _balances[REWARDER];
    }


    function getStkCol(uint256 max) external view returns (StakedCol[] memory){

        StakedCol[] memory info = new StakedCol[](max); 
        if(stkCol.length<1) return info;
        uint stkColLen = stkCol.length-1;

        for (uint i = 0; i< max; i++){
            StakedCol memory stk = stkCol[stkColLen-i];
            info[i] = stk;
            if(stkColLen==i) break;

        }
        return info;
    }

    function getUtkCol(uint256 max) external view returns (UnStakedCol[] memory){

        UnStakedCol[] memory info = new UnStakedCol[](max); 
        if(utkCol.length<1) return info;
        uint utkColLen = utkCol.length-1;

        for (uint i = 0; i< max; i++){
            UnStakedCol memory utk = utkCol[utkColLen-i];
            info[i] = utk;
            if(utkColLen==i) break;

        }
        return info;
    }



    function getStats() external view returns(uint256[5] memory){
      uint256[5] memory stats;
      stats[0] =totStaked;
      stats[1] =totClaimed;
      stats[2] =totUnstaked;
      stats[3] =totRefpaid;
      stats[4] =totFees;

      return stats;

    }

    function stkStatus(bool action) public onlyOwner {
      stkDisabled = action;
    }

    function clmStatus(bool action) public onlyOwner {
      clmDisabled = action;
    }



    


}


// SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;
// pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./IToken.sol";
import "./Staking.sol";
import "./IPancakeRouter02.sol";


contract TokenSale is Ownable {
    using SafeMath for uint256;
    enum Network { development, testnet, bsc }
    address private immutable  _owner;
    address private immutable _tokenAddress;
    uint256 private immutable _decimals;
    IToken private immutable _token;
    uint256 private _prcdec = 2;
    uint256 private _saleCap;
    uint256 private _totSold;
    Network _net;

    struct Sale {
        uint256 num;
        bytes32 name;
        uint rate; //inverse of price w 2 decimals -  (1/0.0003) 333333
        uint cap;
        bool active;
        uint sold;
        uint lim;
    }

    Sale[] public Sales;
    uint public saleCnt=0;
    event Purchased(uint256 no, address indexed owner, uint256 bnbamt, uint256 tokenamt);


    constructor(address tokenAddress, address owner, uint256 deci, uint256 saleCap, uint256 net){
        _tokenAddress = tokenAddress;
        _token = IToken(tokenAddress);
        _owner = owner;
        _decimals = deci;
        _saleCap = saleCap;

        if(net == 0){
           _net = Network.development;
        }else if(net == 1){
           _net = Network.testnet;
        }else{
           _net = Network.bsc;
        }
        

        //After
        Sales.push(Sale(1, "PrivSale1", 200000, 2000000000, true, 0, 25000000));
        Sales.push(Sale(2, "PrivSale2", 100000, 200000000, false, 0, 25000000));
        Sales.push(Sale(3, "IDOSale1",  66666, 200000000, false, 0, 25000000));
        Sales.push(Sale(4, "IDOSale2",  50000, 200000000, false, 0, 25000000));
        Sales.push(Sale(5, "IDOSale3",  40000, 200000000, false, 0, 25000000));

    }

    
    //Testnet
    address private constant PANCAKE_FACTORY_TEST = 0x6725F303b657a9451d8BA641348b6761A6CC7a17;  
    address private constant PANCAKE_ROUTER_TEST = 0xD99D1c33F9fC3444f8101754aBC46c52416550D1;
    address private constant WBNB_TEST = 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd;
    address private constant BUSD_TEST = 0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47;

    //Mainnet
    address private constant PANCAKE_FACTORY_MAIN = 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73;  
    address private constant PANCAKE_ROUTER_MAIN = 0x10ED43C718714eb63d5aA57B78B54704E256024E;
    address private constant WBNB_MAIN = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
    address private constant BUSD_MAIN = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;

    mapping (address => uint256) private _balances;

    fallback() external payable  {
      purchase(5);
    } 
    receive() external payable  {
      purchase(5);
    }

    function balanceOf(address account) external view returns (uint256) {
        return _balances[account];
    }

    function Tokefy(uint256 value) internal view returns (uint256) {
     return value * (10 ** _decimals);
    }

    function Natify(uint256 value) internal view returns (uint256) {
        return value / (10 ** _decimals);
    }

    function decimals() external view returns (uint256) {
        return _decimals;
    }

    function Normify(uint256 value) internal view returns (uint256) {
        return value / (10 ** (18-_decimals));
    }
    
    function Ethify(uint256 value) internal pure returns (uint256) {
        return value * (10 ** 18);
    }
    
    function stats() external view returns(Sale[] memory){
      return Sales;
    }

    function startStop(uint256 no, bool active) external onlyOwner {
        require(no<=Sales.length && no>0, "Sale does not exist.");
        no-=1;
        Sale memory item = Sales[no];
        item.active = active;
        Sales[no] = item;
    }

    function addMinCap(uint no, uint256 amt, bool positive) external onlyOwner {
        require(no<=Sales.length && no>0, "Sale does not exist.");
        require(amt>0,"Amount Invalid!");
        no-=1;
        Sale memory item = Sales[no];              
        if(positive){
            item.cap = item.cap + amt;
        }else{
            item.cap = item.cap - amt;
        }
        Sales[no] = item;
    }

    function addMinLim(uint no, uint256 amt, bool positive) external onlyOwner {
        require(no<=Sales.length && no>0, "Sale does not exist.");
        require(amt>0,"Amount Invalid!");
        no-=1;
        Sale memory item = Sales[no];              
        if(positive){
            item.lim = item.lim + amt;
        }else{
            item.lim = item.lim - amt;
        }
        Sales[no] = item;
    }

    function chgPrc(uint no, uint256 amt) external onlyOwner {
        require(no<=Sales.length && no>0, "Sale does not exist.");
        require(amt>0,"Amount Invalid!");
        no-=1;
        Sale memory item = Sales[no];      
        item.rate = amt;
        Sales[no] = item;
    }

    function purchase(uint256 no) public payable {

        require(msg.value>0, "Amount cannot be zero:");
        require(no<=Sales.length && no>0, "Sale does not exist.");
        no-=1;
        Sale memory item = Sales[no];
        require(item.active==true, "Not Active");   

        address[] memory path = new address[](2);
        IPancakeRouter02 pancakeRouterz;
        uint256[] memory Out = new uint256[](2);
        if(_net==Network.development){
            Out[0] = Ethify(1);
            Out[1] = Ethify(500);
        }else if(_net==Network.testnet){
             path[0] = WBNB_TEST;
             path[1] = BUSD_TEST;  
             pancakeRouterz = IPancakeRouter02(PANCAKE_ROUTER_TEST);
             Out = pancakeRouterz.getAmountsOut(msg.value, path);
        }else{
            path[0] = WBNB_MAIN;
            path[1] = BUSD_MAIN;  
             pancakeRouterz = IPancakeRouter02(PANCAKE_ROUTER_MAIN);
             Out = pancakeRouterz.getAmountsOut(msg.value, path);
        }

        uint256 bnbRate = Normify(Out[1]); 
        uint256 tokenAmount = bnbRate * item.rate / 100;
        uint256 tokenAmt = Natify(bnbRate * item.rate) / 100; //because rate are x100
        uint256 userBal = Natify(_token.balanceOf(msg.sender));
        require(tokenAmt +  item.sold < item.cap, "Over Max Cap!");
        require(tokenAmt + userBal < item.lim, "Over Max Limit!");
        
        _token.transferFrom(_owner, msg.sender, tokenAmount);
        payable(_owner).transfer(msg.value);  
        item.sold += tokenAmt;
        Sales[no] = item;

        _totSold += tokenAmt;

        emit Purchased(no, msg.sender, msg.value, tokenAmt);

       // return tokenAmt;  
    }

    function endSale(uint256 pswd) external onlyOwner {
        require(pswd==213314, "Wrong Password");
        selfdestruct(payable(_owner)); 
    }


    

    


}
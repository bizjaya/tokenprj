// SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Whitelist.sol";

contract IdoSale1 is Pausable, Whitelist {
    using SafeMath for uint256;
    uint256 increment = 0;

     ERC20 public erc20;
     uint public decimals = 0;


    constructor(address _tokenAddress, bool _hasWhitelisting) Whitelist(_hasWhitelisting) {

        erc20 = ERC20(_tokenAddress);
        decimals = erc20.decimals();

    }


}
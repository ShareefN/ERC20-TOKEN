// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Token is ERC20 {
  constructor(uint256 supply, string memory _name, string memory _symbol) ERC20(_name, _symbol) {
    _mint(msg.sender, supply * (10 ** decimals()));
  }
}
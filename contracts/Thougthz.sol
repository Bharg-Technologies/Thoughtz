//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './lossless-v4/contracts/utils/first-version/LERC20.sol';

interface IAntisnipe {
    function assureCanTransfer(
        address sender,
        address from,
        address to,
        uint256 amount
    ) external returns (bool response);
}

contract Thougthz is LERC20, Ownable {
    uint256 public totalSupply_ = 900_000_000 ether;

    constructor(address lossless_, uint256 timelockPeriod_)
        LERC20(
            totalSupply_,
            'Thoughtz',
            'THZ',
            msg.sender,
            msg.sender,
            timelockPeriod_,
            lossless_
        )
    {}

    IAntisnipe public antisnipe = IAntisnipe(address(0));
    bool public antisnipeDisable;

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        if (from == address(0) || to == address(0)) return;
        if (!antisnipeDisable && address(antisnipe) != address(0))
            antisnipe.assureCanTransfer(msg.sender, from, to, amount);
    }

    function setAntisnipeDisable() external onlyOwner {
        require(!antisnipeDisable);
        antisnipeDisable = true;
    }

    function setAntisnipeAddress(address addr) external onlyOwner {
        antisnipe = IAntisnipe(addr);
    }
}

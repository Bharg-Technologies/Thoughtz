/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISafeERC20Holder,
  ISafeERC20HolderInterface,
} from "../ISafeERC20Holder";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawToken",
    type: "event",
  },
];

export class ISafeERC20Holder__factory {
  static readonly abi = _abi;
  static createInterface(): ISafeERC20HolderInterface {
    return new utils.Interface(_abi) as ISafeERC20HolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISafeERC20Holder {
    return new Contract(address, _abi, signerOrProvider) as ISafeERC20Holder;
  }
}
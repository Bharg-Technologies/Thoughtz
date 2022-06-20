/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBlacklistToken,
  IBlacklistTokenInterface,
} from "../IBlacklistToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "blacklist",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "collect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBlacklistToken__factory {
  static readonly abi = _abi;
  static createInterface(): IBlacklistTokenInterface {
    return new utils.Interface(_abi) as IBlacklistTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBlacklistToken {
    return new Contract(address, _abi, signerOrProvider) as IBlacklistToken;
  }
}

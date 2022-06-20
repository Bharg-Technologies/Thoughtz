/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTransfer, MockTransferInterface } from "../MockTransfer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lerc20Token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lerc20Token",
    outputs: [
      {
        internalType: "contract ILERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sameTimestampMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103f7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063ab1b648d14610046578063b9e5fb981461005b578063c4d66de814610090575b600080fd5b6100596100543660046102f3565b6100a3565b005b600054610074906201000090046001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61005961009e36600461032f565b6101b6565b6000546040516323b872dd60e01b81526001600160a01b03858116600483015284811660248301526044820184905262010000909204909116906323b872dd906064016020604051808303816000875af1158015610105573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101299190610351565b506000546040516323b872dd60e01b81526001600160a01b03858116600483015284811660248301526044820184905262010000909204909116906323b872dd906064016020604051808303816000875af115801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b09190610351565b50505050565b60006101c26001610246565b905080156101da576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610242576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60008054610100900460ff1615610296578160ff1660011480156102695750303b155b61028e5760405162461bcd60e51b815260040161028590610373565b60405180910390fd5b506000919050565b60005460ff8084169116106102bd5760405162461bcd60e51b815260040161028590610373565b506000805460ff191660ff92909216919091179055600190565b919050565b80356001600160a01b03811681146102d757600080fd5b60008060006060848603121561030857600080fd5b610311846102dc565b925061031f602085016102dc565b9150604084013590509250925092565b60006020828403121561034157600080fd5b61034a826102dc565b9392505050565b60006020828403121561036357600080fd5b8151801515811461034a57600080fd5b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea264697066735822122091f56de6af9024251cc1ce6ddfe8e6e69f68d94c99b0e5040aa30ebf158c81d564736f6c634300080b0033";

export class MockTransfer__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTransfer> {
    return super.deploy(overrides || {}) as Promise<MockTransfer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockTransfer {
    return super.attach(address) as MockTransfer;
  }
  connect(signer: Signer): MockTransfer__factory {
    return super.connect(signer) as MockTransfer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTransferInterface {
    return new utils.Interface(_abi) as MockTransferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTransfer {
    return new Contract(address, _abi, signerOrProvider) as MockTransfer;
  }
}
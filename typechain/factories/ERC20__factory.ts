/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000eda38038062000eda83398101604081905262000034916200032b565b6200003f3362000080565b6200004b3382620000d0565b825162000060906004906020860190620001b8565b50815162000076906005906020850190620001b8565b5050505062000402565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166200012b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600360008282546200013f91906200039e565b90915550506001600160a01b038216600090815260016020526040812080548392906200016e9084906200039e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001c690620003c5565b90600052602060002090601f016020900481019282620001ea576000855562000235565b82601f106200020557805160ff191683800117855562000235565b8280016001018555821562000235579182015b828111156200023557825182559160200191906001019062000218565b506200024392915062000247565b5090565b5b8082111562000243576000815560010162000248565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200028657600080fd5b81516001600160401b0380821115620002a357620002a36200025e565b604051601f8301601f19908116603f01168101908282118183101715620002ce57620002ce6200025e565b81604052838152602092508683858801011115620002eb57600080fd5b600091505b838210156200030f5785820183015181830184015290820190620002f0565b83821115620003215760008385830101525b9695505050505050565b6000806000606084860312156200034157600080fd5b83516001600160401b03808211156200035957600080fd5b620003678783880162000274565b945060208601519150808211156200037e57600080fd5b506200038d8682870162000274565b925050604084015190509250925092565b60008219821115620003c057634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003da57607f821691505b60208210811415620003fc57634e487b7160e01b600052602260045260246000fd5b50919050565b610ac880620004126000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c578063a457c2d711610066578063a457c2d7146101cd578063a9059cbb146101e0578063dd62ed3e146101f3578063f2fde38b1461022c57600080fd5b8063715018a6146101a05780638da5cb5b146101aa57806395d89b41146101c557600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016457806370a082311461017757600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761023f565b6040516101049190610905565b60405180910390f35b61012061011b366004610976565b6102d1565b6040519015158152602001610104565b6003545b604051908152602001610104565b6101206101503660046109a0565b6102e9565b60405160128152602001610104565b610120610172366004610976565b61030d565b6101346101853660046109dc565b6001600160a01b031660009081526001602052604090205490565b6101a861034c565b005b6000546040516001600160a01b039091168152602001610104565b6100f76103b7565b6101206101db366004610976565b6103c6565b6101206101ee366004610976565b610458565b6101346102013660046109fe565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101a861023a3660046109dc565b610466565b60606004805461024e90610a31565b80601f016020809104026020016040519081016040528092919081815260200182805461027a90610a31565b80156102c75780601f1061029c576101008083540402835291602001916102c7565b820191906000526020600020905b8154815290600101906020018083116102aa57829003601f168201915b5050505050905090565b6000336102df818585610531565b5060019392505050565b6000336102f7858285610655565b6103028585856106e7565b506001949350505050565b3360008181526002602090815260408083206001600160a01b03871684529091528120549091906102df9082908690610347908790610a6c565b610531565b6000546001600160a01b031633146103ab5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6103b560006108b5565b565b60606005805461024e90610a31565b3360008181526002602090815260408083206001600160a01b03871684529091528120549091908381101561044b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103a2565b6103028286868403610531565b6000336102df8185856106e7565b6000546001600160a01b031633146104c05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103a2565b6001600160a01b0381166105255760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103a2565b61052e816108b5565b50565b6001600160a01b0383166105935760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103a2565b6001600160a01b0382166105f45760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103a2565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526002602090815260408083209386168352929052205460001981146106e157818110156106d45760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103a2565b6106e18484848403610531565b50505050565b6001600160a01b03831661074b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103a2565b6001600160a01b0382166107ad5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103a2565b6001600160a01b038316600090815260016020526040902054818110156108255760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103a2565b6001600160a01b0380851660009081526001602052604080822085850390559185168152908120805484929061085c908490610a6c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108a891815260200190565b60405180910390a36106e1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208083528351808285015260005b8181101561093257858101830151858201604001528201610916565b81811115610944576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461097157600080fd5b919050565b6000806040838503121561098957600080fd5b6109928361095a565b946020939093013593505050565b6000806000606084860312156109b557600080fd5b6109be8461095a565b92506109cc6020850161095a565b9150604084013590509250925092565b6000602082840312156109ee57600080fd5b6109f78261095a565b9392505050565b60008060408385031215610a1157600080fd5b610a1a8361095a565b9150610a286020840161095a565b90509250929050565b600181811c90821680610a4557607f821691505b60208210811415610a6657634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610a8d57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220ed141f2b4b270331f51367704142bdd490d5f892a7ddd781eac8f45b3636f5f764736f6c634300080b0033";

export class ERC20__factory extends ContractFactory {
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
    name_: string,
    symbol_: string,
    totalSupply_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(
      name_,
      symbol_,
      totalSupply_,
      overrides || {}
    ) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    totalSupply_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      totalSupply_,
      overrides || {}
    );
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}

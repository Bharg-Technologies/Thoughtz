/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LosslessStakingV2,
  LosslessStakingV2Interface,
} from "../LosslessStakingV2";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ILssGovernance",
        name: "_newContract",
        type: "address",
      },
    ],
    name: "NewGovernanceContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ILssReporting",
        name: "_newContract",
        type: "address",
      },
    ],
    name: "NewReportingContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ILERC20",
        name: "_token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_reportId",
        type: "uint256",
      },
    ],
    name: "NewStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_newAmount",
        type: "uint256",
      },
    ],
    name: "NewStakingAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ILERC20",
        name: "_newToken",
        type: "address",
      },
    ],
    name: "NewStakingToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract ILERC20",
        name: "_token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_reportID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "StakerClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "HUNDRED",
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
    name: "MILLION",
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
        internalType: "uint256",
        name: "_reportId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getIsAccountStaked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reportId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getStakerCoefficient",
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
    name: "getVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILssReporting",
        name: "_losslessReporting",
        type: "address",
      },
      {
        internalType: "contract ILssController",
        name: "_losslessController",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakingAmount",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "losslessController",
    outputs: [
      {
        internalType: "contract ILssController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "losslessGovernance",
    outputs: [
      {
        internalType: "contract ILssGovernance",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "losslessReporting",
    outputs: [
      {
        internalType: "contract ILssReporting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "reportCoefficient",
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
        internalType: "contract ILssGovernance",
        name: "_losslessGovernance",
        type: "address",
      },
    ],
    name: "setLosslessGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILssReporting",
        name: "_losslessReporting",
        type: "address",
      },
    ],
    name: "setLssReporting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakingAmount",
        type: "uint256",
      },
    ],
    name: "setStakingAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILERC20",
        name: "_stakingToken",
        type: "address",
      },
    ],
    name: "setStakingToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reportId",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reportId",
        type: "uint256",
      },
    ],
    name: "stakerClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reportId",
        type: "uint256",
      },
    ],
    name: "stakerClaimableAmount",
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
    name: "stakingAmount",
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
    name: "stakingToken",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611a77806100206000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80635c975abb116100b8578063a694fc3a1161007c578063a694fc3a146102c9578063c8eca387146102dc578063d0ab1226146102ef578063d5cb96d814610302578063f85fc0ab14610315578063fc0cf0121461031d57600080fd5b80635c975abb146102875780636c5ec2121461029257806372f702f3146102a5578063739a3e02146102b85780638456cb59146102c157600080fd5b806332bc934c1161010a57806332bc934c146101d057806338274599146101da5780633a719d58146101ed5780633f230872146102235780633f4ba83a146102365780635b38b5111461023e57600080fd5b80630a187b22146101475780630d8e6e2c146101775780631794bb3c146101885780631e9b12ef1461019d5780632cd7f1a9146101b0575b600080fd5b60665461015a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60025b60405190815260200161016e565b61019b6101963660046116d6565b610330565b005b61019b6101ab366004611717565b6103d5565b61017a6101be36600461173b565b606b6020526000908152604090205481565b61017a620f424081565b61017a6101e836600461173b565b6104f5565b61017a6101fb366004611754565b6001600160a01b03166000908152606a60209081526040808320938352929052206001015490565b61019b61023136600461173b565b610666565b61019b6107e2565b61027761024c366004611754565b6001600160a01b03166000908152606a60209081526040808320938352929052206003015460ff1690565b604051901515815260200161016e565b60335460ff16610277565b61019b6102a0366004611717565b6108bd565b60655461015a906001600160a01b031681565b61017a60695481565b61019b6109d4565b61019b6102d736600461173b565b610aad565b61019b6102ea366004611717565b610f48565b60685461015a906001600160a01b031681565b61019b61031036600461173b565b61105f565b61017a606481565b60675461015a906001600160a01b031681565b600061033c60016112d7565b90508015610354576000805461ff0019166101001790555b606680546001600160a01b038087166001600160a01b0319928316179092556067805492861692909116919091179055606982905580156103cf576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b606760009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015610428573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044c9190611784565b6001600160a01b0316336001600160a01b0316146104855760405162461bcd60e51b815260040161047c906117a1565b60405180910390fd5b6001600160a01b0381166104ab5760405162461bcd60e51b815260040161047c906117cd565b606580546001600160a01b0319166001600160a01b0383169081179091556040517f440200cffeb6e2a5452bfbf38f210983589ee79d8f9277b2bd9e64d93ba5d24390600090a250565b600080606660009054906101000a90046001600160a01b03166001600160a01b0316630572b0cc6040518163ffffffff1660e01b8152600401608060405180830381865afa15801561054b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056f9190611804565b6068546040516327b4317760e21b815260048101899052919550600094506001600160a01b03169250639ed0c5dc9150602401602060405180830381865afa1580156105bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e3919061183a565b9050600060646105f38484611869565b6105fd9190611888565b336000908152606a60209081526040808320898452825280832060010154606b90925282205492935091610634620f424085611869565b61063e9190611888565b90506000620f42406106508484611869565b61065a9190611888565b98975050505050505050565b606760009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dd9190611784565b6001600160a01b0316336001600160a01b03161461070d5760405162461bcd60e51b815260040161047c906117a1565b6000811161075d5760405162461bcd60e51b815260206004820152601e60248201527f4c53533a204d7573742062652067726561746572207468616e207a65726f0000604482015260640161047c565b6069548114156107af5760405162461bcd60e51b815260206004820152601f60248201527f4c53533a20416c72656164792073657420746f207468617420616d6f756e7400604482015260640161047c565b606981905560405181907f501b7f24bc4bcc569d4d6d18c08717bec05cefdd0d6f2488bd8a329154cbcdf390600090a250565b606760009054906101000a90046001600160a01b03166001600160a01b0316632f11d6536040518163ffffffff1660e01b8152600401602060405180830381865afa158015610835573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108599190611784565b6001600160a01b0316336001600160a01b0316146108b35760405162461bcd60e51b81526020600482015260176024820152762629a99d1026bab9ba103132903830bab9b2a0b236b4b760491b604482015260640161047c565b6108bb611364565b565b606760009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015610910573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109349190611784565b6001600160a01b0316336001600160a01b0316146109645760405162461bcd60e51b815260040161047c906117a1565b6001600160a01b03811661098a5760405162461bcd60e51b815260040161047c906117cd565b606680546001600160a01b0319166001600160a01b0383169081179091556040517f7f8882a3606acef8365389764b9e326b26c7412f8f5d3eb969acd6e6fb36e5c290600090a250565b606760009054906101000a90046001600160a01b03166001600160a01b0316632f11d6536040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4b9190611784565b6001600160a01b0316336001600160a01b031614610aa55760405162461bcd60e51b81526020600482015260176024820152762629a99d1026bab9ba103132903830bab9b2a0b236b4b760491b604482015260640161047c565b6108bb6113f7565b606754604051633e7e4af960e21b81523360048201526001600160a01b039091169063f9f92be490602401602060405180830381865afa158015610af5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1991906118ba565b15610b665760405162461bcd60e51b815260206004820152601760248201527f4c53533a20596f752063616e6e6f74206f706572617465000000000000000000604482015260640161047c565b60335460ff1615610b895760405162461bcd60e51b815260040161047c906118d5565b606854604051630b18acb760e21b8152600481018390526001600160a01b0390911690632c62b2dc90602401602060405180830381865afa158015610bd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf691906118ba565b15610c435760405162461bcd60e51b815260206004820152601c60248201527f4c53533a205265706f727420616c7265616479207265736f6c76656400000000604482015260640161047c565b336000908152606a6020908152604080832084845290915280822060665491516303fd300d60e51b815260048101859052909291829182916001600160a01b031690637fa601a09060240160e060405180830381865afa158015610cab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccf91906118ff565b505060038901549497509095509350505060ff1615610d265760405162461bcd60e51b81526020600482015260136024820152721314d4ce88185b1c9958591e481cdd185ad959606a1b604482015260640161047c565b336001600160a01b0384161415610d7f5760405162461bcd60e51b815260206004820152601b60248201527f4c53533a207265706f727465722063616e206e6f74207374616b650000000000604482015260640161047c565b6066546040805163492a023d60e11b8152905184926000926001600160a01b0390911691639254047a916004808201926020929091908290030181865afa158015610dce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df2919061183a565b9050600087118015610e0c575042610e0a8284611989565b115b610e585760405162461bcd60e51b815260206004820152601b60248201527f4c53533a207265706f727420646f6573206e6f74206578697374730000000000604482015260640161047c565b600042610e658385611989565b610e6f91906119a1565b428855600180890182905560038901805460ff191690911790556000898152606b6020526040812080549293508392909190610eac908490611989565b9091555050606554606954610ece916001600160a01b0316903390309061144f565b606954876002016000828254610ee49190611989565b9091555050606954336000818152606c602090815260408083208d84529091528082209390935591518a926001600160a01b038816917f21ed7388df53e1bd56c33fd695bc2429685f2eca4f72839f39743aa22bccd6429190a45050505050505050565b606760009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbf9190611784565b6001600160a01b0316336001600160a01b031614610fef5760405162461bcd60e51b815260040161047c906117a1565b6001600160a01b0381166110155760405162461bcd60e51b815260040161047c906117cd565b606880546001600160a01b0319166001600160a01b0383169081179091556040517ffb63970612c4356d3217d8f62d2e878e96269335085c35374c27b713cfa3e9b990600090a250565b60335460ff16156110825760405162461bcd60e51b815260040161047c906118d5565b336000908152606a6020908152604080832084845290915290206003810154610100900460ff16156110f65760405162461bcd60e51b815260206004820152601860248201527f4c53533a20596f7520616c726561647920636c61696d65640000000000000000604482015260640161047c565b60685460405163c3d8ca2f60e01b8152600481018490526001600160a01b039091169063c3d8ca2f90602401602060405180830381865afa15801561113f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116391906118ba565b6111af5760405162461bcd60e51b815260206004820152601d60248201527f4c53533a205265706f727420736f6c766564206e656761746976656c79000000604482015260640161047c565b60038101805461ff00191661010017905560006111cb836104f5565b6066546040516303fd300d60e51b8152600481018690529192506000916001600160a01b0390911690637fa601a09060240160e060405180830381865afa15801561121a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123e91906118ff565b505094505050505061125181338461158d565b606554336000818152606c60209081526040808320898452909152902054611283926001600160a01b0316919061158d565b83816001600160a01b0316336001600160a01b03167fd1f69ecb6d175a3c5ce5d2fdec0f13b867394898b1634e1445c22c8434d16d19856040516112c991815260200190565b60405180910390a450505050565b60008054610100900460ff161561131e578160ff1660011480156112fa5750303b155b6113165760405162461bcd60e51b815260040161047c906119b8565b506000919050565b60005460ff8084169116106113455760405162461bcd60e51b815260040161047c906119b8565b506000805460ff191660ff92909216919091179055600190565b919050565b60335460ff166113ad5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161047c565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60335460ff161561141a5760405162461bcd60e51b815260040161047c906118d5565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113da3390565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916114b39190611a06565b6000604051808303816000865af19150503d80600081146114f0576040519150601f19603f3d011682016040523d82523d6000602084013e6114f5565b606091505b509150915081801561151f57508051158061151f57508080602001905181019061151f91906118ba565b6115855760405162461bcd60e51b815260206004820152603160248201527f5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472604482015270185b9cd9995c919c9bdb4819985a5b1959607a1b606482015260840161047c565b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916115e99190611a06565b6000604051808303816000865af19150503d8060008114611626576040519150601f19603f3d011682016040523d82523d6000602084013e61162b565b606091505b509150915081801561165557508051158061165557508080602001905181019061165591906118ba565b6116b75760405162461bcd60e51b815260206004820152602d60248201527f5472616e7366657248656c7065723a3a736166655472616e736665723a20747260448201526c185b9cd9995c8819985a5b1959609a1b606482015260840161047c565b5050505050565b6001600160a01b03811681146116d357600080fd5b50565b6000806000606084860312156116eb57600080fd5b83356116f6816116be565b92506020840135611706816116be565b929592945050506040919091013590565b60006020828403121561172957600080fd5b8135611734816116be565b9392505050565b60006020828403121561174d57600080fd5b5035919050565b6000806040838503121561176757600080fd5b823591506020830135611779816116be565b809150509250929050565b60006020828403121561179657600080fd5b8151611734816116be565b6020808252601290820152712629a99d1026bab9ba1031329030b236b4b760711b604082015260600190565b6020808252601e908201527f4c45524332303a2043616e6e6f74206265207a65726f20616464726573730000604082015260600190565b6000806000806080858703121561181a57600080fd5b505082516020840151604085015160609095015191969095509092509050565b60006020828403121561184c57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561188357611883611853565b500290565b6000826118a557634e487b7160e01b600052601260045260246000fd5b500490565b8051801515811461135f57600080fd5b6000602082840312156118cc57600080fd5b611734826118aa565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b600080600080600080600060e0888a03121561191a57600080fd5b8751611925816116be565b6020890151909750611936816116be565b6040890151909650611947816116be565b606089015160808a0151919650945061195f816116be565b925061196d60a089016118aa565b915061197b60c089016118aa565b905092959891949750929550565b6000821982111561199c5761199c611853565b500190565b6000828210156119b3576119b3611853565b500390565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000825160005b81811015611a275760208186018101518583015201611a0d565b81811115611a36576000828501525b50919091019291505056fea26469706673582212200d5ffa5b56cd7bb8e9a5735517a1560c56fb3dd985a6631091141075685053e364736f6c634300080b0033";

export class LosslessStakingV2__factory extends ContractFactory {
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
  ): Promise<LosslessStakingV2> {
    return super.deploy(overrides || {}) as Promise<LosslessStakingV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LosslessStakingV2 {
    return super.attach(address) as LosslessStakingV2;
  }
  connect(signer: Signer): LosslessStakingV2__factory {
    return super.connect(signer) as LosslessStakingV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LosslessStakingV2Interface {
    return new utils.Interface(_abi) as LosslessStakingV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LosslessStakingV2 {
    return new Contract(address, _abi, signerOrProvider) as LosslessStakingV2;
  }
}

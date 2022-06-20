/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LosslessReporting,
  LosslessReportingInterface,
} from "../LosslessReporting";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_adr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "CompensationRetrieve",
    type: "event",
  },
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
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "NewCommitteeReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ILssGovernance",
        name: "_adr",
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
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "NewLosslessReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "NewReportLifetime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "NewReporterReward",
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
    name: "NewReportingAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "NewStakersReward",
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
    name: "ReportSubmission",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reporter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_reportId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "ReporterClaim",
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
    name: "SecondReportSubmission",
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
    name: "committeeReward",
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
    ],
    name: "getReportInfo",
    outputs: [
      {
        internalType: "address",
        name: "reporter",
        type: "address",
      },
      {
        internalType: "address",
        name: "reportedAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "secondReportedAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "reportTimestamps",
        type: "uint256",
      },
      {
        internalType: "contract ILERC20",
        name: "reportTokens",
        type: "address",
      },
      {
        internalType: "bool",
        name: "secondReports",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "reporterClaimStatus",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "_reporter",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lossless",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_committee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stakers",
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
        internalType: "contract ILssController",
        name: "_losslessController",
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
    name: "losslessReward",
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
        internalType: "contract ILERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "report",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reportCount",
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
    name: "reportLifetime",
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
    ],
    name: "reporterClaim",
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
    name: "reporterClaimableAmount",
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
    name: "reporterReward",
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
    name: "reportingAmount",
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
        name: "_adr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "retrieveCompensation",
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
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "secondReport",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "setCommitteeReward",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "setLosslessReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lifetime",
        type: "uint256",
      },
    ],
    name: "setReportLifetime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "setReporterReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reportingAmount",
        type: "uint256",
      },
    ],
    name: "setReportingAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "setStakersReward",
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
    inputs: [],
    name: "stakersReward",
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
  "0x608060405234801561001057600080fd5b50612628806100206000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637fa601a01161010f578063c8eca387116100a2578063ddb4694511610071578063ddb4694514610468578063f005ce611461047b578063f85fc0ab1461048e578063fc0cf0121461049657600080fd5b8063c8eca38714610426578063cfc97d6914610439578063d0ab12261461044c578063db6a5d541461045f57600080fd5b80639254047a116100de5780639254047a146103e4578063a8dfddad146103ed578063b68a23cb14610400578063c4d66de81461041357600080fd5b80637fa601a01461031b5780638456cb59146103ca57806384d8e67d146103d25780638ca77fdd146103db57600080fd5b80631fe2a95911610187578063411d2b3311610156578063411d2b33146102be5780635c975abb146102c75780636a00f42e146102dd57806372f702f3146102f057600080fd5b80631fe2a959146102875780632337cc8a1461029a5780633d359abf146102ad5780633f4ba83a146102b657600080fd5b80630d8e6e2c116101c35780630d8e6e2c146102515780630fb861f014610258578063185c6f841461026b5780631e9b12ef1461027457600080fd5b80630572b0cc146101ea57806309dbca4b1461021b5780630bf81b4214610230575b600080fd5b6065546066546068546067546040805194855260208501939093529183015260608201526080015b60405180910390f35b61022e61022936600461237b565b6104a9565b005b61024361023e36600461237b565b610620565b604051908152602001610212565b6001610243565b61022e6102663660046123a9565b6106b5565b610243606b5481565b61022e6102823660046123d5565b6107ff565b61022e6102953660046123f2565b6109a4565b61022e6102a836600461237b565b610eda565b61024360665481565b61022e610fd6565b61024360685481565b60335460ff166040519015158152602001610212565b6102436102eb366004612422565b6110b1565b606c54610303906001600160a01b031681565b6040516001600160a01b039091168152602001610212565b61037f61032936600461237b565b600090815260706020526040902080546001820154600283015460038401546004909401546001600160a01b0393841695928416949184169391929181169160ff600160a01b8304811692600160a81b90041690565b604080516001600160a01b0398891681529688166020880152948716948601949094526060850192909252909316608083015291151560a082015290151560c082015260e001610212565b61022e61174a565b610243606a5481565b61024360655481565b61024360695481565b61022e6103fb36600461237b565b611823565b61022e61040e36600461237b565b611934565b61022e6104213660046123d5565b611a45565b61022e6104343660046123d5565b611ad3565b61022e61044736600461237b565b611c78565b606e54610303906001600160a01b031681565b61024360675481565b61022e61047636600461237b565b611ffb565b61022e61048936600461237b565b6120f7565b610243606481565b606d54610303906001600160a01b031681565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190612450565b6001600160a01b0316336001600160a01b0316146105595760405162461bcd60e51b81526004016105509061246d565b60405180910390fd5b60665481141561057b5760405162461bcd60e51b815260040161055090612499565b606681905560405181907fa541140f0e2766edd981ed85d94c876a8235c08da1fc2639228bc185c9d4288190600090a260646067546068546066546065546105c391906124e6565b6105cd91906124e6565b6105d791906124e6565b111561061d5760405162461bcd60e51b815260206004820152601560248201527404c53533a20546f74616c206578636565642031303605c1b6044820152606401610550565b50565b606e546040516327b4317760e21b81526004810183905260009182916001600160a01b0390911690639ed0c5dc90602401602060405180830381865afa15801561066e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069291906124fe565b90506064606554826106a49190612517565b6106ae9190612536565b9392505050565b606e546001600160a01b031633146107025760405162461bcd60e51b815260206004820152601060248201526f4c53533a204c7373205343206f6e6c7960801b6044820152606401610550565b606c5460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af1158015610755573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107799190612558565b6107c55760405162461bcd60e51b815260206004820152601f60248201527f4c53533a20436f6d70656e736174696f6e207265747269657665206661696c006044820152606401610550565b60405181906001600160a01b038416907f22dd40ff7382975ed05c4811f2ddf8c4b4694b851e84a67ae0c4f66e042c12d390600090a35050565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108769190612450565b6001600160a01b0316336001600160a01b0316146108a65760405162461bcd60e51b81526004016105509061246d565b6001600160a01b0381166108fc5760405162461bcd60e51b815260206004820152601b60248201527f4c53533a2043616e6e6f74206265207a65726f206164647265737300000000006044820152606401610550565b606c546001600160a01b038281169116141561095a5760405162461bcd60e51b815260206004820152601b60248201527f4c53533a2043616e6e6f742062652073616d65206164647265737300000000006044820152606401610550565b606c80546001600160a01b0319166001600160a01b0383169081179091556040517f440200cffeb6e2a5452bfbf38f210983589ee79d8f9277b2bd9e64d93ba5d24390600090a250565b60335460ff16156109c75760405162461bcd60e51b81526004016105509061257a565b6001600160a01b038116610a1d5760405162461bcd60e51b815260206004820152601f60248201527f4c53533a2043616e6e6f74207265706f7274207a65726f2061646472657373006044820152606401610550565b606e54604051630b18acb760e21b8152600481018490526001600160a01b0390911690632c62b2dc90602401602060405180830381865afa158015610a66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8a9190612558565b158015610b015750606e5460405163c3d8ca2f60e01b8152600481018490526001600160a01b039091169063c3d8ca2f90602401602060405180830381865afa158015610adb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aff9190612558565b155b610b4d5760405162461bcd60e51b815260206004820152601a60248201527f4c53533a205265706f727420616c726561647920736f6c7665640000000000006044820152606401610550565b606d54604051634d8c928d60e11b81526001600160a01b03838116600483015290911690639b19251a90602401602060405180830381865afa158015610b97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbb9190612558565b15610c085760405162461bcd60e51b815260206004820152601f60248201527f4c53533a2043616e6e6f74207265706f7274204c53532070726f746f636f6c006044820152606401610550565b606d54604051630de6793560e11b81526001600160a01b03838116600483015290911690631bccf26a906024016020604051808303816000875af1158015610c54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c789190612558565b15610cbe5760405162461bcd60e51b8152602060048201526016602482015275098a6a6744086c2dcdcdee840e4cae0dee4e84088caf60531b6044820152606401610550565b6000828152607060205260409020600381015460048201546001600160a01b03168415801590610cfa57504260695483610cf891906124e6565b115b610d465760405162461bcd60e51b815260206004820152601b60248201527f4c53533a207265706f727420646f6573206e6f742065786973747300000000006044820152606401610550565b6004830154600160a01b900460ff1615610da25760405162461bcd60e51b815260206004820152601e60248201527f4c53533a20416e6f7468657220616c7265616479207375626d697474656400006044820152606401610550565b82546001600160a01b03163314610df35760405162461bcd60e51b81526020600482015260156024820152742629a99d1034b73b30b634b2103932b837b93a32b960591b6044820152606401610550565b6004838101805460ff60a01b1916600160a01b1790556001600160a01b038281166000908152606f60209081526040808320898516808552925291829020899055606d5491516344337ea160e01b81529384015216906344337ea190602401600060405180830381600087803b158015610e6c57600080fd5b505af1158015610e80573d6000803e3d6000fd5b505050506002830180546001600160a01b0319166001600160a01b0386811691821790925560405187928416907f57b24a5e43670bc970bdb990f514431dd52083ca07c76331e7b2d587c3fd815190600090a45050505050565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f519190612450565b6001600160a01b0316336001600160a01b031614610f815760405162461bcd60e51b81526004016105509061246d565b606954811415610fa35760405162461bcd60e51b815260040161055090612499565b606981905560405181907f9f92e7b8b720b941cbbb3fab387cb8b9b23f68468990ee330b2ebcf2b044fd2490600090a250565b606d60009054906101000a90046001600160a01b03166001600160a01b0316632f11d6536040518163ffffffff1660e01b8152600401602060405180830381865afa158015611029573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104d9190612450565b6001600160a01b0316336001600160a01b0316146110a75760405162461bcd60e51b81526020600482015260176024820152762629a99d1026bab9ba103132903830bab9b2a0b236b4b760491b6044820152606401610550565b6110af612208565b565b606d54604051633e7e4af960e21b81523360048201526000916001600160a01b03169063f9f92be490602401602060405180830381865afa1580156110fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111e9190612558565b1561116b5760405162461bcd60e51b815260206004820152601760248201527f4c53533a20596f752063616e6e6f74206f7065726174650000000000000000006044820152606401610550565b60335460ff161561118e5760405162461bcd60e51b81526004016105509061257a565b6001600160a01b0382166111e45760405162461bcd60e51b815260206004820152601f60248201527f4c53533a2043616e6e6f74207265706f7274207a65726f2061646472657373006044820152606401610550565b606d54604051634d8c928d60e11b81526001600160a01b03848116600483015290911690639b19251a90602401602060405180830381865afa15801561122e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112529190612558565b1561129f5760405162461bcd60e51b815260206004820152601f60248201527f4c53533a2043616e6e6f74207265706f7274204c53532070726f746f636f6c006044820152606401610550565b606d54604051630de6793560e11b81526001600160a01b03848116600483015290911690631bccf26a906024016020604051808303816000875af11580156112eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130f9190612558565b156113555760405162461bcd60e51b8152602060048201526016602482015275098a6a6744086c2dcdcdee840e4cae0dee4e84088caf60531b6044820152606401610550565b6001600160a01b038084166000908152606f60209081526040808320938616835292905220548015806113a5575060695460008281526070602052604090206003015442916113a3916124e6565b105b8061148e5750606e54604051630b18acb760e21b8152600481018390526001600160a01b0390911690632c62b2dc90602401602060405180830381865afa1580156113f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114189190612558565b801561148e5750606e5460405163c3d8ca2f60e01b8152600481018390526001600160a01b039091169063c3d8ca2f90602401602060405180830381865afa158015611468573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148c9190612558565b155b6114da5760405162461bcd60e51b815260206004820152601a60248201527f4c53533a205265706f727420616c7265616479206578697374730000000000006044820152606401610550565b6001606b60008282546114ed91906124e6565b9091555050606b5460008181526070602081815260408084208054336001600160a01b0319918216811783556001600160a01b038c8116808952606f87528589208d83168a5287528589208a9055978990529590945242600383015560049182018054909116909517909455606c54606a5491516323b872dd60e01b815294850192909252306024850152604484015292935091909116906323b872dd906064016020604051808303816000875af11580156115ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d19190612558565b61161d5760405162461bcd60e51b815260206004820152601b60248201527f4c53533a205265706f7274696e67207374616b65206661696c656400000000006044820152606401610550565b606d546040516344337ea160e01b81526001600160a01b038581166004830152909116906344337ea190602401600060405180830381600087803b15801561166457600080fd5b505af1158015611678573d6000803e3d6000fd5b5050506000828152607060205260409081902060010180546001600160a01b0319166001600160a01b0387811691909117909155606d5491516333be4fc360e21b815287821660048201529116915063cef93f0c90602401600060405180830381600087803b1580156116ea57600080fd5b505af11580156116fe573d6000803e3d6000fd5b5050505080836001600160a01b0316856001600160a01b03167f7a4f628ad963089af5e788e54ab94a42e8ef86ddb2246e4243008bc93245d0f360405160405180910390a49392505050565b606d60009054906101000a90046001600160a01b03166001600160a01b0316632f11d6536040518163ffffffff1660e01b8152600401602060405180830381865afa15801561179d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c19190612450565b6001600160a01b0316336001600160a01b03161461181b5760405162461bcd60e51b81526020600482015260176024820152762629a99d1026bab9ba103132903830bab9b2a0b236b4b760491b6044820152606401610550565b6110af61229b565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015611876573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189a9190612450565b6001600160a01b0316336001600160a01b0316146118ca5760405162461bcd60e51b81526004016105509061246d565b6067548114156118ec5760405162461bcd60e51b815260040161055090612499565b606781905560405181907f286a6076d6f092a586a37b483571815698ca6052d304b4aa62c2240f970d638b90600090a260646067546068546066546065546105c391906124e6565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015611987573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ab9190612450565b6001600160a01b0316336001600160a01b0316146119db5760405162461bcd60e51b81526004016105509061246d565b6068548114156119fd5760405162461bcd60e51b815260040161055090612499565b606881905560405181907f50180f977fd6b8a623d5dfc1a5c07358f673e46b4068575873f7af7c63799ad890600090a260646067546068546066546065546105c391906124e6565b6000611a5160016122f3565b90508015611a69576000805461ff0019166101001790555b6000606b55606d80546001600160a01b0319166001600160a01b0384161790558015611acf576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4a9190612450565b6001600160a01b0316336001600160a01b031614611b7a5760405162461bcd60e51b81526004016105509061246d565b6001600160a01b038116611bd05760405162461bcd60e51b815260206004820152601b60248201527f4c53533a2043616e6e6f74206265207a65726f206164647265737300000000006044820152606401610550565b606e546001600160a01b0382811691161415611c2e5760405162461bcd60e51b815260206004820152601b60248201527f4c53533a2043616e6e6f742062652073616d65206164647265737300000000006044820152606401610550565b606e80546001600160a01b0319166001600160a01b0383169081179091556040517ffb63970612c4356d3217d8f62d2e878e96269335085c35374c27b713cfa3e9b990600090a250565b60335460ff1615611c9b5760405162461bcd60e51b81526004016105509061257a565b6000818152607060205260409020546001600160a01b03163314611cf65760405162461bcd60e51b81526020600482015260126024820152712629a99d1027b7363c903932b837b93a32b960711b6044820152606401610550565b606e5460405163c3d8ca2f60e01b8152600481018390526001600160a01b039091169063c3d8ca2f90602401602060405180830381865afa158015611d3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d639190612558565b611daf5760405162461bcd60e51b815260206004820152601d60248201527f4c53533a205265706f727420736f6c766564206e656761746976656c790000006044820152606401610550565b60008181526070602052604090206004810154600160a81b900460ff1615611e195760405162461bcd60e51b815260206004820152601860248201527f4c53533a20596f7520616c726561647920636c61696d656400000000000000006044820152606401610550565b60048101805460ff60a81b1916600160a81b1790556000611e3983610620565b60048381015460405163a9059cbb60e01b81523392810192909252602482018390529192506001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015611e92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb69190612558565b611f025760405162461bcd60e51b815260206004820152601a60248201527f4c53533a20546f6b656e207472616e73666572206661696c65640000000000006044820152606401610550565b606c54606a5460405163a9059cbb60e01b815233600482015260248101919091526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015611f57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f7b9190612558565b611fc75760405162461bcd60e51b815260206004820152601b60248201527f4c53533a205265706f7274696e67207374616b65206661696c656400000000006044820152606401610550565b6040518190849033907f863545f27822d259c84600f7fff4b2f00300c6bc3110cc34d3766c120d11ee0190600090a4505050565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa15801561204e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120729190612450565b6001600160a01b0316336001600160a01b0316146120a25760405162461bcd60e51b81526004016105509061246d565b80606a5414156120c45760405162461bcd60e51b815260040161055090612499565b606a81905560405181907f7244d4e293a4118a019957569f7f98d6c9192473e513f040f50246e33dfc6fb890600090a250565b606d60009054906101000a90046001600160a01b03166001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa15801561214a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061216e9190612450565b6001600160a01b0316336001600160a01b03161461219e5760405162461bcd60e51b81526004016105509061246d565b6065548114156121c05760405162461bcd60e51b815260040161055090612499565b606581905560405181907f6ba592e51cd5e91d041b4695b1c4fa1d8eb187bd268ae9c01aeac311dbbf331090600090a260646067546068546066546065546105c391906124e6565b60335460ff166122515760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610550565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60335460ff16156122be5760405162461bcd60e51b81526004016105509061257a565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861227e3390565b60008054610100900460ff161561233a578160ff1660011480156123165750303b155b6123325760405162461bcd60e51b8152600401610550906125a4565b506000919050565b60005460ff8084169116106123615760405162461bcd60e51b8152600401610550906125a4565b506000805460ff191660ff92909216919091179055600190565b60006020828403121561238d57600080fd5b5035919050565b6001600160a01b038116811461061d57600080fd5b600080604083850312156123bc57600080fd5b82356123c781612394565b946020939093013593505050565b6000602082840312156123e757600080fd5b81356106ae81612394565b6000806040838503121561240557600080fd5b82359150602083013561241781612394565b809150509250929050565b6000806040838503121561243557600080fd5b823561244081612394565b9150602083013561241781612394565b60006020828403121561246257600080fd5b81516106ae81612394565b6020808252601290820152712629a99d1026bab9ba1031329030b236b4b760711b604082015260600190565b6020808252601f908201527f4c53533a20416c72656164792073657420746f207468617420616d6f756e7400604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082198211156124f9576124f96124d0565b500190565b60006020828403121561251057600080fd5b5051919050565b6000816000190483118215151615612531576125316124d0565b500290565b60008261255357634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561256a57600080fd5b815180151581146106ae57600080fd5b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea2646970667358221220a93ab5afdac21713492d18e8efbac91ec97d854d2978bb0a57c59ec3e511780264736f6c634300080b0033";

export class LosslessReporting__factory extends ContractFactory {
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
  ): Promise<LosslessReporting> {
    return super.deploy(overrides || {}) as Promise<LosslessReporting>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LosslessReporting {
    return super.attach(address) as LosslessReporting;
  }
  connect(signer: Signer): LosslessReporting__factory {
    return super.connect(signer) as LosslessReporting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LosslessReportingInterface {
    return new utils.Interface(_abi) as LosslessReportingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LosslessReporting {
    return new Contract(address, _abi, signerOrProvider) as LosslessReporting;
  }
}

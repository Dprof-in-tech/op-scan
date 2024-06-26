const abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_submissionInterval",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_l2BlockTime",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_startingBlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_startingTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "_proposer", type: "address", internalType: "address" },
      { name: "_challenger", type: "address", internalType: "address" },
      {
        name: "_finalizationPeriodSeconds",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "CHALLENGER",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "FINALIZATION_PERIOD_SECONDS",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "L2_BLOCK_TIME",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "PROPOSER",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "SUBMISSION_INTERVAL",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "challenger",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "computeL2Timestamp",
    inputs: [
      {
        name: "_l2BlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deleteL2Outputs",
    inputs: [
      {
        name: "_l2OutputIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "finalizationPeriodSeconds",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getL2Output",
    inputs: [
      {
        name: "_l2OutputIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Types.OutputProposal",
        components: [
          {
            name: "outputRoot",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "timestamp",
            type: "uint128",
            internalType: "uint128",
          },
          {
            name: "l2BlockNumber",
            type: "uint128",
            internalType: "uint128",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getL2OutputAfter",
    inputs: [
      {
        name: "_l2BlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Types.OutputProposal",
        components: [
          {
            name: "outputRoot",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "timestamp",
            type: "uint128",
            internalType: "uint128",
          },
          {
            name: "l2BlockNumber",
            type: "uint128",
            internalType: "uint128",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getL2OutputIndexAfter",
    inputs: [
      {
        name: "_l2BlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_startingBlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_startingTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "l2BlockTime",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "latestBlockNumber",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "latestOutputIndex",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextBlockNumber",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextOutputIndex",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proposeL2Output",
    inputs: [
      { name: "_outputRoot", type: "bytes32", internalType: "bytes32" },
      {
        name: "_l2BlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_l1BlockHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_l1BlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "proposer",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "startingBlockNumber",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "startingTimestamp",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "submissionInterval",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OutputProposed",
    inputs: [
      {
        name: "outputRoot",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "l2OutputIndex",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "l2BlockNumber",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "l1Timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OutputsDeleted",
    inputs: [
      {
        name: "prevNextOutputIndex",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "newNextOutputIndex",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

export default abi;

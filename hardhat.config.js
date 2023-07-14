require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
require("hardhat-abi-exporter");
dotenv.config();

const {
  SENDER_PRIVATE_KEY,
  RECEIVER_PRIVATE_KEY,
  RECEIVER2_PRIVATE_KEY,
  RECEIVER3_PRIVATE_KEY,
  MUMBAI_API_KEY,
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: {
      polygonMumbai: MUMBAI_API_KEY,
    },
  },
  abiExporter: {
    path: "./abi",
    runOnCompile: true,
    clear: true,
    spacing: 2,
  },
  networks: {
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [
        SENDER_PRIVATE_KEY,
        RECEIVER2_PRIVATE_KEY,
        RECEIVER3_PRIVATE_KEY,
        RECEIVER_PRIVATE_KEY,
      ],
      // gas: 2100000,
      // gasPrice: 8000000,
      // blockGasLimit:80000
    },

    hardhat: {
      // allowUnlimitedContractSize: true,
    },
  },
};

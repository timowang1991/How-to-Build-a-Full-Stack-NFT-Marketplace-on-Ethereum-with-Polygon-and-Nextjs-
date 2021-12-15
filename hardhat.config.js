require("@nomiclabs/hardhat-waffle");

const {
  INFURA_ENDPOINT_MUMBAI,
  INFURA_ENDPOINT_MAINNET,
  ACCOUNT1_PRIVATE_KEY
} = process.env

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: INFURA_ENDPOINT_MUMBAI,
      accounts: [ACCOUNT1_PRIVATE_KEY]
    },
    mainnet: {
      url: INFURA_ENDPOINT_MAINNET,
      accounts: [ACCOUNT1_PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};

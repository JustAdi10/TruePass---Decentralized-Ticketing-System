require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.INFURA_API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
//   gasReporter: {
//     enabled: true,
//     currency: "USD",
//     coinmarketcap: process.env.COINMARKETCAP_API_KEY,
//   },
};

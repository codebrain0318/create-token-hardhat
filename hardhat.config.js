require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/EJEOqA76VOEmtWYsaPzVPm0ReJsunR-_",
      accounts: ["a153d93b0b181c2a52de39f4052bbfa61ef82dca16d0742f72025cd0138aa275"]
    }
  },
  etherscan: {
    apiKey: "IWMTSGB56S3V63KU67WA2F1FX31C44QZ9N"
   }
};

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
       rinkeby: {
      url: 'https://speedy-nodes-nyc.moralis.io/2be1730aae9746216b41f137/eth/rinkeby',
      accounts: ['here comes the private key']
    },
    hardhat: {
      // gas: "auto",
      // gas: 3368616000000000,
      initialBaseFeePerGas: 7,
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/qT8Lq9WWhfHIlKeGlCpGcLxz1rTnh8lV",
        blockNumber: 14979369,
      }
    }
  },
   etherscan: {
    apiKey: "Q7B1AKHUAN497J7HY58YS44S4W3J3VSXD3",
  },
};


// contract address greeter: '0xFcF6A54A571B645Ae67A8D2208D1a434D6F5cdCE'
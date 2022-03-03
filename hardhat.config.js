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
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/zmG2pC112-Sae2KT1R8SDQQ99xAiWMaB',
      accounts: [
        'c945cc4ebcfe1193bf4d6952ce829757b4d773c70f802668b1391aaae361de3d'
      ]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "S8XP35Q1SR8GPC4CFBD7F4T4PG3NWG12SY"
  }
};

// rinkeby:0x54000e4A3FF0b6350C0F8DcDE8d850fA45D02088
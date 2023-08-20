require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = 
{
  networks: {
    hardhat: {
        forking: {
            url: "https://eth-mainnet.g.alchemy.com/v2/I3xn2uUjmVRsCtduoVuTZcOh3G4-p66a", // Replace with your Alchemy or other Ethereum node URL
        },
        accounts: [{
                privateKey: "0xf10e9070017e57f33a7e8a3ea0126a74868e92bc5779558a5af9c429300bd870", // Replace with your desired private key
                balance: "100000000000000000000", // 100 ETH in wei
            },
            {
                privateKey: "0x6649373d6e89340d2621d748d562525c3b6b01215eb9343d885f0116a3a029f9", // Replace with your desired private key
                balance: "100000000000000000000", // 100 ETH in wei
            }
        ],
    },
},
  solidity: "0.8.15",
};

const { ethers } = require("hardhat");
const { abi } = require("../artifacts/contracts/DID.sol/DID.json")
const crypto = require("crypto");
const { base64 } = require("ethers/lib/utils");
const { Console } = require("console");

async function main() {
    // const private = "f10e9070017e57f33a7e8a3ea0126a74868e92bc5779558a5af9c429300bd870"
    // const private2 = "0x6649373d6e89340d2621d748d562525c3b6b01215eb9343d885f0116a3a029f9"
    // const RPC = "http://127.0.0.1:8545"

    // const provider = new ethers.providers.JsonRpcProvider(RPC)
    // const deployer = new ethers.Wallet(private, provider);
    // const runner = new ethers.Wallet()
    const privateKey = "0x6649373d6e89340d2621d748d562525c3b6b01215eb9343d885f0116a3a029f9";
    const contractAddress = "0x9A3b2a354b10837DC15f49633a3Ad5c7f3F57f8A"; // Replace with your contract address
    const rpcURL = "http://127.0.0.1:8545"; // Replace with your RPC URL

    const provider = new ethers.providers.JsonRpcProvider(rpcURL);
    const signer = new ethers.Wallet(privateKey, provider);

    //const contractAddress = "0x9A3b2a354b10837DC15f49633a3Ad5c7f3F57f8A"

    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    const add = "0x0ba94de3fe2ae3e298cd5c95880ef1abcc90a78d"
    const hashName = "0xaad9d66f235ae014ee73daedc29613322d7d3e6a31a7d50c22273f8bfad9bc78"
    const hashedAge = "0x3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"
    
    try {
        // Call the contract's register function with hashed values
        const tx = await contract.verify(add,hashName , hashedAge);

        // Wait for the transaction to be mined
        await tx.wait();

        console.log("Transaction successful. Hashed data added to the contract.");
    } catch (error) {
        console.error("Error:", error);
    }
}
    








main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
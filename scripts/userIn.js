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
    const privateKey = "f10e9070017e57f33a7e8a3ea0126a74868e92bc5779558a5af9c429300bd870";
    const contractAddress = "0x9A3b2a354b10837DC15f49633a3Ad5c7f3F57f8A"; // Replace with your contract address
    const rpcURL = "http://127.0.0.1:8545"; // Replace with your RPC URL

    const provider = new ethers.providers.JsonRpcProvider(rpcURL);
    const signer = new ethers.Wallet(privateKey, provider);

    //const contractAddress = "0x9A3b2a354b10837DC15f49633a3Ad5c7f3F57f8A"

    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    const email = "ibrahim@omar.com"
    const name = "Ibra"
    const age = "13"
    console.log("Past 1")
    const hashedEmail = crypto.createHash("sha256").update(email).digest('hex')
    const hashedName = crypto.createHash("sha256").update(name).digest('hex')
    const hashedAge = crypto.createHash("sha256").update(age).digest('hex')

    const hashe = "0x"+hashedEmail
    const hashn = '0x'+hashedName
    const hasha = '0x'+hashedAge
    console.log("hashed Email, ", hashe)
    console.log("hashed name, ", hashn)
    console.log("hashed age, ", hasha)

    
    try {
        // Call the contract's register function with hashed values
        const tx = await contract.register(hashe, hashn, hasha);

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
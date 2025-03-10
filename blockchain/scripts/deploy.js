const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    // ✅ Fix: Don't pass constructor arguments
    const TruePassNFT = await ethers.getContractFactory("TruePassNFT");
    const truePassNFT = await TruePassNFT.deploy();

    await truePassNFT.deployed();
    console.log("Contract deployed at:", truePassNFT.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

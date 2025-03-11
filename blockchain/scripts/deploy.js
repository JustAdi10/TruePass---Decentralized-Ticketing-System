const { ethers } = require("hardhat");

async function main() {
    console.log("Starting deployment...");

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    try {
        const balance = await ethers.provider.getBalance(deployer.address);
        console.log("Account balance:", ethers.utils.formatEther(balance));
    } catch (error) {
        console.error("Error fetching balance:", error);
    }

    try {
        const TruePassNFT = await ethers.getContractFactory("TruePassNFT");
        console.log("Contract factory obtained.");

        const truePassNFT = await TruePassNFT.deploy();
        console.log("Contract deployment transaction sent.");

        await truePassNFT.deployed();
        console.log("Contract deployed at:", truePassNFT.address);
    } catch (error) {
        console.error("Error deploying contract:", error);
    }
}

main().catch((error) => {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
});

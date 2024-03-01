const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/Token.sol/Token.json");

const CONTRACT_ADDRESS = "0x47DFB3dae04EE209aB5fa0d073270B901a60eA87";

const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, ethers.provider);

async function main() {
    const name = await tokenContract.name();
    const symbol = await tokenContract.symbol();
    const totolSupply = await tokenContract.totalSupply();
    const owner = await tokenContract.owner();
    const balancesOfOwner = await tokenContract.balanceOf(owner);
    console.log("The name is: " + name);
    console.log("The symbol is: " + symbol);
    console.log("The totolSupply is: " + totolSupply);
    console.log("The owner is: " + owner);
    console.log("The balancesOfOwner is: " + balancesOfOwner);

    console.log("...");
    const signer = (await ethers.getSigners())[0];
    const tx = await tokenContract.connect(signer).transfer("0x6AB3023B5708D5A49E9B7207cFeFA73d03D1CAd4", 200);
    await tx.wait();

    const newBalancesOfOwner = await tokenContract.balanceOf(owner);
    console.log("The newBalancesOfOwner is: " + newBalancesOfOwner);
}

main();
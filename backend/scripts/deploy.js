const hre = require("hardhat");

async function main() {
  console.log(`Deploying Jurly NFT contract to: ${hre.network}`);

  const NFT = await hre.ethers.getContractFactory("Jurly");
  const nft = await NFT.deploy();
  await nft.deployed();
  [owner] = await ethers.getSigners();

  console.log("NFT deployed to:", nft.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

const hre = require("hardhat");

async function main() {
  console.log('Deploying Digital NFT contract');
  const ClippyDigitalFactory = await hre.ethers.getContractFactory("ClippyDigital");
  const clippyDigital = await ClippyDigitalFactory.deploy();
  await clippyDigital.deployed();
  console.log("NFT digital contract deployed to:", clippyDigital.address);

  console.log(`Deploying Phygital NFT contract to network: ${hre.network}`);
  const ClippyPhygitalFactory = await hre.ethers.getContractFactory("ClippyPhygital");
  const clippyPhygital = await ClippyPhygitalFactory.deploy(clippyDigital.address);
  await clippyPhygital.deployed();
  console.log("NFT phygital contract deployed to:", clippyPhygital.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

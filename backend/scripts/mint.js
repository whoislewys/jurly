const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("Jurly");
  const URI = "ipfs://bafkreiat4qpjh7gybbxg5ecjgikwlrjimd6qqzh4nnlw42s3odbskqd2by"
  const WALLET_ADDRESS = "0x3A7D6a7650D69FeF57C307e03Bb8B4439aFD84d4"
  const CONTRACT_ADDRESS = "0x8797847c9d63D8Ed9C30B058F408d4257A33B76C"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
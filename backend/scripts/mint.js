const ethers = require('ethers');
const hre = require("hardhat");
const ClippyPhygitalAbi = require('../artifacts/contracts/ClippyPhygital.sol/ClippyPhygital.json');

async function main() {
  // const NFT = await hre.ethers.getContractFactory("ClippyPhygital");
  const URI = "ipfs://bafkreiat4qpjh7gybbxg5ecjgikwlrjimd6qqzh4nnlw42s3odbskqd2by"
  const WALLET_ADDRESS = "0x3A7D6a7650D69FeF57C307e03Bb8B4439aFD84d4"
  const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  // const contract = NFT.attach(CONTRACT_ADDRESS);

  const signer = await provider.getSigner(accounts[0]);

  // to instantiate contract need address and abi
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ClippyPhygitalAbi.abi)
  console.log('contract: ', contract);

  await contract.mint(WALLET_ADDRESS, URI, {
    value: ethers.utils.parseEther('0.1'),
  });
  
  const bal = await contract.balanceOf(WALLET_ADDRESS);
  console.log('phygital balance: ', bal);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
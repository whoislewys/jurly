const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFT', function () {
  let JurlyContract, owner, addr1, addr2;

  beforeEach(async () => {
    const JurlyContractFactory = await ethers.getContractFactory('Jurly');
    JurlyContract = await JurlyContractFactory.deploy();
    await JurlyContract.deployed();

    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it('Should throw when trying to mint with less than 0.1E', async () => {
    const URI = 'ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv';
    const recipient = '0x7028f6756a9b815711bc2d37e8d5be23fdac846d';
    // const mintFunc = () => {
    //   JurlyContract.mint(recipient, URI, {
    //     value: ethers.utils.parseEther('0.1'),
    //   });
    // }

    // const mintFunc = () => {
    //   JurlyContract.mint(recipient, URI);
    // }


    const mintPromise = JurlyContract.mint(recipient, URI);

    expect(mintPromise).to.be.revertedWith('0.1E required to mint');
  });

  it('Should set the correct URI when minting a token', async () => {
    const URI = 'ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv';
    const recipient = '0x7028f6756a9b815711bc2d37e8d5be23fdac846d';
    await JurlyContract.mint(recipient, URI, {
      value: ethers.utils.parseEther('0.1'),
    });
    expect(await JurlyContract.tokenURI(1)).to.equal(URI);
  });
});

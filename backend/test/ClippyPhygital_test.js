const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFT', function () {
  let ClippyPhygital, ClippyDigital, owner, addr1, addr2;

  beforeEach(async () => {
    const ClippyDigitalFactory = await ethers.getContractFactory('ClippyDigital');
    ClippyDigital = await ClippyDigitalFactory.deploy();
    await ClippyDigital.deployed();
    const clippyDigitalAddress = ClippyDigital.address;

    const ClippyPhygitalFactory = await ethers.getContractFactory('ClippyPhygital');
    ClippyPhygital = await ClippyPhygitalFactory.deploy(clippyDigitalAddress);
    await ClippyPhygital.deployed();

    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it('Should throw when trying to mint with less than 0.1E', async () => {
    const URI = 'ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv';
    const mintPromise = ClippyPhygital.mint(addr1.address, URI);

    expect(mintPromise).to.be.revertedWith('0.1E required to mint');
  });

  it('Should set the correct URI when minting a token', async () => {
    // arrange
    const URI = 'ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv';

    // act
    await ClippyPhygital.mint(addr1.address, URI, {
      value: ethers.utils.parseEther('0.1'),
    });

    // assert
    expect(await ClippyPhygital.tokenURI(1)).to.equal(URI);
  });

  it('Should mint the recipient 1 phygital & 1 digital NFT', async () => {
    // arrange
    const URI = 'ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv';
    const balbefore = await ClippyPhygital.balanceOf(addr1.address);
    // console.log('balb4: ', balbefore);

    // act
    await ClippyPhygital.mint(addr1.address, URI, {
      value: ethers.utils.parseEther('0.1'),
    });

    // assert
    expect(await ClippyPhygital.balanceOf(addr1.address)).to.equal(1);
    expect(await ClippyDigital.balanceOf(addr1.address)).to.equal(1);
  });
});

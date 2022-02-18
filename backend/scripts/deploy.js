const hre = require('hardhat')

async function main() {
  console.log(`Deploying to network: ${hre.network.name}`)
  console.log(`with chainid: ${hre.network.config.chainId}`)

  console.log('Deploying Digital NFT contract')
  const ClippyDigitalFactory = await hre.ethers.getContractFactory(
    'ClippyDigital',
  )
  const clippyDigital = await ClippyDigitalFactory.deploy()
  await clippyDigital.deployed()
  console.log('NFT digital contract deployed to:', clippyDigital.address)

  const ClippyPhygitalFactory = await hre.ethers.getContractFactory(
    'ClippyPhygital',
  )
  const clippyPhygital = await ClippyPhygitalFactory.deploy(
    clippyDigital.address,
  )
  console.log('NFT phygital contract deployed to:', clippyPhygital.address)

  // console.log('Deploying generic NFT')
  // const genericNFTFactory = await hre.ethers.getContractFactory('GenericNFT')
  // const genericNFT = await genericNFTFactory.deploy()
  // await genericNFT.deployed()
  // console.log('Generic NFT deployed to: ', genericNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

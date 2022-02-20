# jurly

## Setup

#### Backend

We are currently using hardhat for our development/testing environment

The easiest way to start developing is using a local hardhat node

###### Running a Local Hardhat Node

To install all dependencies and run a local evm with hardhat, run:

```bash
cd backend
npm i
npx hardhat node
```

> For this to work, you need `PRIVATE_KEY`, and `INFURA_PROJECT_ID` in your `backend/.env` file. Reach out to luis for these values

To connect to this with Metamask, make sure your node is running. Then,

1. Open your metamask browser extension and click the dropdown
    <img width="1440" alt="metamask_walkthrough_1" src="https://user-images.githubusercontent.com/46409039/154831276-c9d6f4b7-1423-4b1c-b373-d649412d312c.png">

2. Make sure test networks are being shown
    <img width="1440" alt="metamask_walkthrough_2" src="https://user-images.githubusercontent.com/46409039/154831290-e64893ce-3a02-4dee-80d0-7c2ff9786e43.png">

3.If test networks are not being shown, set "show test networks" to "on"
    <img width="1440" alt="metamask_walkthrough_3" src="https://user-images.githubusercontent.com/46409039/154831305-fe2069bb-0b6e-4e99-88ff-fd08b40291ea.png">
    
4. Connect to "Localhost 8545"
    <img width="1440" alt="metamast_walkthrough_4_updated" src="https://user-images.githubusercontent.com/46409039/154831495-75fc76d5-e9ed-4713-bbd5-1be8969e251d.png">

###### Deploying to Local Testnet

npx hardhat run scripts/deploy.js --network localhost

###### Deploying to Polygon Testnet

**TODO**

###### Testing
Make sure to write a unit test for every branch of code in the smart contract.

To run tests:

```bash
cd backend
npx hardhat test
```

###### Deploying

**TODO**

#### Frontend

We are using react for the frontend. Install dependencies and run the app with:

```bash
cd frontend
npm i
npm run start
```



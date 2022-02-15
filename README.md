# jurly

## Setup

#### Backend

We are currently using hardhat for our development/testing environment

The easiest way to start developing is using a local hardhat node

###### Running a Local Hardhat Node

To install all dependencies and run a local evm with hardhat, run:

```bash
npm i
npx hardhat node
```

> For this to work, you need `PRIVATE_KEY`, and `INFURA_PROJECT_ID` in your `backend/.env` file. Reach out to luis for these values

To connect to this with Metamask, make sure your node is running. Then,

1. Open your metamask browser extension and click the dropdown

    ![image](https://user-images.githubusercontent.com/25728778/153986498-060f1427-b190-4e06-80d9-11503de506f5.png)
        
2. Scroll down to the bottom and click "Add Network"
    ![image](https://user-images.githubusercontent.com/25728778/153986712-95356a91-ff68-472c-9e4f-2c12873e0d7d.png)

3. For "Network Name", enter something like "Hardhat Local". For "New RPC URL", enter "http://127.0.0:8545", for "Chain ID" enter "31337", for "Currency Symbol" enter "MATIC", and click "Save"


###### Deploying to Local Testnet

npx hardhat run scripts/deploy.js --network hardhat

###### Minting on Local Testnet

npx hardhat run scripts/mint.js --network hardhat

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



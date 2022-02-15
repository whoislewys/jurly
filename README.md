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



# Flow-NFT-Marketplace

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/42184833/129153520-5102d849-6883-4fda-b110-6adebc8a3e63.png"/> 
</p>

## Install Flow cli

***macOS***

`brew install flow-cli`

***Linux***

`sh -ci “$(curl -fsSL https://storage.googleapis.com/flow-cli/install.sh)"`

***Windows***

`iex “& { $(irm ‘https://storage.googleapis.com/flow-cli/install.ps1') }”`

## Flow fcl-dev-wallet

 1. `cd fcl-dev-wallet`

 2. `git clone git@github.com:onflow/fcl-dev-wallet.git .`

 3. `cp .env.example .env.local`

 4. Update `.env.local` as `flow.json`

 5. `npm i`

 6. ` npm run dev`

 7. Update `REACT_APP_WALLET_DISCOVERY`
		-  go to frontend/.evn.local
		- update url with local server url
			- `REACT_APP_WALLET_DISCOVERY=http://localhost:3000/fcl/authz`

## Start Flow

### Creating the contract and minting a token
flow project start-emulator

flow project deploy

flow keys generate

flow transactions send ./transactions/MintPinataParty.cdc --signer emulator-account

flow scripts execute ./scripts/CheckTokenMetadata.cdc

### Creating an app to view NFTs created through this contract

### Creating a marketplace to transfer NFTs to others while also transferring the NFT's underlying assets on IPFS

flow transactions send ./transactions/LinkPinnie.cdc

flow transactions send ./transactions/MintPinnie.cdc --signer emulator-account

flow scripts execute ./scripts/CheckPinnieBalance.cdc

#### To make sure to mint some and deposit them into a fresh account for someone else

flow keys generate

flow accounts create --key <NewPublicKey>

flow transactions status <TransactionID>

flow transactions send ./transactions/ListTokensForSale.cdc

flow transactions send ./transactions/CreateEmptyPinnieVault.cdc --signer second-account

flow transactions send ./transactions/LinkPinnie.cdc --signer second-account

flow transactions send ./transactions/TransferPinnieTokens.cdc --signer emulator-account

## Start React

1. `cd frontend`
2. `npm install`
3. `npm start`

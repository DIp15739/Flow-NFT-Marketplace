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

***flow Terminal 1***

1. `flow project start-emulator`

***flow Terminal 2***

01. `flow project deploy`
02. `flow transactions send transactions/LinkPinnie.cdc`
03. `flow transactions send transactions/MintPinnie.cdc --signer emulator-account`
04. `flow scripts execute scripts/CheckPinnieBalance.cdc`
05. `flow keys generate`
06. `flow accounts create --key YourNewPublicKey`
07. `flow transactions status  YourTransactionId`
08. update second-account key as `flow keys generate` private key in `flow.json`
09. `flow transactions send transactions/CreateEmptyPinnieVault.cdc --signer second-account`
10. `flow transactions send transactions/LinkPinnie.cdc --signer second-account`
11. `flow transactions send transactions/TransferPinnieTokens.cdc --signer emulator-account`
12. for checking second account balance update `CheckPinnieBalance.cdc` *acct1* address second-account as `flow.json`
13. `flow scripts execute scripts/CheckPinnieBalance.cdc`
14. `flow transactions send transactions/ListTokensForSale.cdc`

## Start React

1. `npm install`
2. `npm start`

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/42184833/128836851-ec6a0b46-7692-4d97-b25d-1f6ce9c2d404.png"/> 
</p>
---
title: Step-by-Step Testnet User Guide
---

# Step-by-Step Testnet User Guide

## Step 1: Wallet Connection & Key Generation

* Access `testnet.zendex.fi` and connect your EVM-compatible wallet (e.g., MetaMask).
* Approve the network prompt to switch to **Horizen Testnet (Chain ID: 2651420)**.
* Sign the cryptographic key generation message to instantiate your local ZENDEX public/private keypair.

## Step 2: Depositing Assets

* Navigate to **The Vault** interface and select the token asset (e.g., tUSDC).
* Input the deposit amount and approve the contract spending allowance.
* Execute the deposit transaction. Your public tokens are transferred to `ZendexVault`, and a private commitment is minted to your private keypair.

## Step 3: Executing a Private Swap

* Open the **AMM Swap** page and select your trading pair (e.g., tUSDC to tZEN).
* Input your swap parameters. Your client device will construct a Noir `SwapVerifier` proof.
* Confirm the transaction. Upon verification, your input commitment is nullified and a new commitment containing your output tZEN balance is added to the Merkle tree.

## Step 4: Placing a Private Limit Order

* Navigate to the **Order Book** tab.
* Select **Buy** or **Sell**, enter your target price and order quantity, and click **Create Order**.
* Client-side software generates a `CreateOrderVerifier` proof, creating a spot commitment on-chain. The order remains invisible in the order book state until matched by the operator.

## Step 5: Withdrawing to L1/L2

* Go to **The Vault** and choose **Withdraw**.
* Specify the target public address and amount.
* The system constructs a `WithdrawVerifier` proof, publishes the corresponding nullifier, and transfers underlying ERC-20 assets directly from `ZendexVault` to your designated external wallet.

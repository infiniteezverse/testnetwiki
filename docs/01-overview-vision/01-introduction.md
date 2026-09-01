---
title: Introduction & Testnet
---

# ZENDEX Testnet Technical & Operational Documentation

Welcome to the official ZENDEX Public Testnet Documentation. This documentation serves as the comprehensive technical and operational reference for traders, liquidity providers, institutional partners, and developers participating in the testnet release at `testnet.zendex.fi`.

## Introduction to ZENDEX

ZENDEX is a privacy-preserving hybrid decentralized exchange deployed on the Horizen EVM execution layer. By unifying a private Automated Market Maker (AMM) based on constant-product pricing with a hidden Limit Order Book under a single Zero-Knowledge (ZK) framework, ZENDEX allows market participants to execute trades, deploy capital, and manage order flow without exposing balances, trade sizes, order intent, or wallet identity on-chain.

Traditional decentralized exchanges publish all state changes directly to a public mempool, exposing user activity to predatory tactics. ZENDEX eliminates state exposure by replacing public balance accounting with cryptographic commitments, zero-knowledge proofs, and zero-knowledge identity compliance layers.

## ZENDEX Testnet

The ZENDEX Public Testnet (`testnet.zendex.fi`) is the live, sandbox deployment designed to stress-test protocol performance, validate client-side UltraPlonk proof generation, and benchmark the execution dynamics of shielded DeFi primitives on the Horizen Testnet (Chain ID: `2651420`).

**Core ZENDEX Testnet Links:**

Mint Horizen Testnet ETH here: [https://hub-testnet.horizen.io/](https://hub-testnet.horizen.io/)

Use the ZENDEX Testnet here: [https://www.testnet.zendex.fi/](https://www.testnet.zendex.fi/)

The ZENDEX Testnet phase is not only a technical proving ground, but it is a community ignition phase for professional DeFi executors who believe in decentralized technologies and private on-chain execution. ZENDEX has built and will continue to build on Horizen.

Our goal is to continue to cultivate a core group of early users, operators, developers, and institutional observers who understand the value of shielded DeFi and help shape its evolution. This public testnet phase is launched with Hacken's incentivized Dual Defense programme as we continue to run testnet private swaps, hidden orders, and ZK-based workflows in order to gather real ecosystem feedback, refine the ZENDEX UX, and harden circuits under load if needed. As our tight knit ecosystem grows, usership increases and Dual Defense concludes, this community becomes the foundation upon which we transition with into mainnet. We aim to enter mainnet as an aligned group of decentralized, on-chain, privacy enthusiasts who understand ZENDEX' unique mechanics, and are ready to become or onboard unique partners ready who are ready to integrate these advanced features, and who aim to take this validated and operational pipeline into a future where ZENDEX continues to enhance a DeFi principles and as ZENDEX prepares to launch these first steps towards our Horizen Mainnet we are prepared to innovate this zk-private, decentralized, DeFi protocol smoothly, securely, and with momentum.

### The Shielded Testnet Identity Creation Process

Unlike standard EVM dApps where a wallet connection exposes your address and token balances directly to the protocol state, interaction on ZENDEX requires establishing a **ZENDEX Shielded Identity**:

1. **Prerequisite (Acquiring Gas):** Before initiating any on-chain actions, participants must acquire Horizen Testnet ETH to pay for transaction gas fees on the Horizen EVM execution layer. Users can claim testnet gas directly from the official faucet: [https://hub-testnet.horizen.io/](https://hub-testnet.horizen.io/).
2. **Key Derivation:** Upon connecting an EVM wallet to `testnet.zendex.fi`, the client signs an off-chain identity creation message. This deterministic signature derives a dedicated client-side ZK public/private keypair $(\text{pk}_x, \text{pk}_y)$ used strictly inside Noir zero-knowledge circuits.
3. **Vault Deposit & Identity Anchoring:** The onboarding process completes when the user executes an initial asset deposit into the non-upgradeable `ZendexVault` contract. The deposit locks public testnet tokens and generates a initial Poseidon commitment:

$$C = \text{Poseidon}\left(\text{asset\_id}, \text{amount}, \text{Poseidon}\left(\text{random\_blinding}, \text{pk}_x, \text{pk}_y\right)\right)$$

4. **Merkle Leaf Minting:** The output commitment $C$ is appended to the `TreeOperator` incremental Merkle tree. This single cryptographic leaf establishes the user's active ZENDEX Testnet Identity, shielding their real wallet address while granting them full authority to generate valid inclusion and spend proofs for all subsequent swaps, limit orders, and liquidity operations.

```
+-----------------------------------------------------------------------------------+
|                        ZENDEX TESTNET ONBOARDING PROCESS                          |
+-----------------------------------------------------------------------------------+
  [Step 1: Horizen Faucet]  ---> Obtain Horizen Testnet ETH at hub-testnet.horizen.io
                                      |
                                      v
  [Step 2: Key Derivation]  ---> Sign message to generate local ZK keypair (pk_x, pk_y)
                                      |
                                      v
  [Step 3: Vault Deposit]   ---> Lock public ERC-20 tokens into ZendexVault
                                      |
                                      v
  [Step 4: Leaf Minting]    ---> Poseidon Commitment appended to TreeOperator
                                      |
                                      v
  [Shielded Identity Live]  ---> Perform private AMM swaps, place limit orders, split/join
```

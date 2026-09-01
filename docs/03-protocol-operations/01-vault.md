---
title: 'Module 1: The Vault'
---

# Module 1: The Vault (Shielded Asset Management)

`ZendexVaultManager` coordinates token custody, private balance creation, and balance restructuring. The system supports four distinct operational flows:

* **Deposit:** Locks public ERC-20 tokens into the non-upgradeable `ZendexVault` contract and mints an equivalent private commitment in `TreeOperator`.
* **Withdraw:** Verifies a client-side `WithdrawVerifier` proof and nullifier, releases underlying ERC-20 tokens from `ZendexVault`, and transfers them to a designated public destination address.
* **Split:** Consumes a single high-value commitment and produces two smaller output commitments (e.g., splitting a 100 USDC commitment into two 50 USDC commitments) without moving funds publicly.
* **Join:** Merges two separate commitments of the same asset type into a single consolidated output commitment.

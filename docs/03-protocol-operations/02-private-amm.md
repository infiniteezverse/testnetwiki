---
title: 'Module 2: The Private ZK-AMM'
---

# Module 2: The Private ZK-AMM

The `ZendexAmmManager` operates a constant-product automated market maker ($x \cdot y = k$) executed under zero-knowledge constraints.

* **Private Swaps:** Users supply an input asset commitment, a desired output asset identifier, and a `SwapVerifier` proof. The Noir circuit verifies that the pricing adheres to constant-product curves, validates slippage boundaries, nullifies the input commitment, and appends the new asset commitment to `TreeOperator`.
* **Slippage Protection:** All swaps enforce a maximum hardcoded slippage tolerance limit of **5% (500 basis points)** within the circuit. Trades exceeding this tolerance fail client-side verification.
* **Dust Redirection:** Non-zero fractional dust balances resulting from fixed-precision circuit arithmetic are routed to a dedicated protocol fee balance managed by `RewardsEngine`.

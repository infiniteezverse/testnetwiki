---
title: The ZENDEX Solution
---

# The ZENDEX Solution

ZENDEX resolves public state exposure by decoupling execution from public record-keeping:

* **Shielded Asset Accounting:** Token balances are transformed into encrypted cryptographic commitments inside the `ZendexVault`.
* **Zero-Knowledge Execution:** Swaps, limit orders, split/join balance adjustments, and liquidity deployments are executed via client-side generated UltraPlonk proofs.
* **Hidden Order Intent:** Limit orders are placed as private spot commitments in an off-chain/on-chain hybrid order book, remaining unreadable to third parties until batch matching and execution occur.
* **Horizen Settlement:** All state transitions settle directly onto the Horizen EVM layer, inheriting the security and finality of the underlying network.

---
title: Single-Epoch Inclusion Proof Reuse
---

# Single-Epoch Inclusion Proof Reuse

In standard ZK privacy protocols, every private transaction requires the user to submit a complete Merkle membership proof demonstrating that their commitment exists within the current state root. This requirement creates high computational overhead for client devices and leads to race conditions when other users update the Merkle tree root concurrently.

ZENDEX solves this bottleneck via **Single-Epoch Inclusion Proof Reuse**:

1. **Epoch Assignment:** When a commitment is created, an off-chain background service generates a single inclusion proof establishing that commitment $C$ exists in the Merkle tree at Epoch $E$.
2. **Compact Tag Verification:** For subsequent operations (swaps, limit order placements, splits) occurring within the same epoch window, the client provides a lightweight tag verified on-chain:

$$\text{tag} = \text{Poseidon}\left(\text{epoch\_id}, \text{commitment}, \text{salt}\right)$$

3. **Performance Gains:** The user reuses a single inclusion proof across multiple sequential trading actions within Epoch $E$, drastically reducing client proof-generation times and lowering on-chain gas costs.

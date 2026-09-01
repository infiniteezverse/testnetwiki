---
title: Glossary
---

# Glossary

The following terms define the cryptographic and operational components of ZENDEX:

| Term | Cryptographic / Operational Definition |
| --- | --- |
| **ZK Proof** | A mathematical proof demonstrating that a state transition is valid without revealing the private inputs used to compute it. |
| **UltraPlonk** | An advanced ZK proof system built on Plonk that supports custom gates and lookup tables without requiring a per-circuit trusted setup. |
| **Noir** | A domain-specific language developed by Aztec for writing zero-knowledge circuits compiled down to Barretenberg proof keys. |
| **Barretenberg** | The backend C++ proving library used to construct and verify UltraPlonk zero-knowledge proofs. |
| **Poseidon Hash** | A cryptographic hash function optimized for low constraint counts within ZK circuit environments. |
| **Commitment** | An opaque cryptographic hash representing owned assets: $C = \text{Poseidon}(\text{asset\_id}, \text{amount}, \text{Poseidon}(\text{blinding}, \text{pk}_x, \text{pk}_y))$. |
| **Nullifier** | A unique single-use cryptographic value derived from a commitment to mark it as spent without revealing its identity: $N = \text{Poseidon}(\text{Poseidon}(\text{blinding}), \text{pk}_x, \text{pk}_y)$. |
| **Incremental Merkle Tree** | An append-only tree data structure storing active asset commitments. Managed on-chain by `TreeOperator`. |
| **Epoch** | A specific state index of the Merkle tree that bounds the validity window of inclusion proofs. |
| **Spot Commitment** | A private record stored in the tree representing an unexecuted limit order in the order book module. |
| **TreeOperator** | The non-upgradeable contract responsible for appending commitments and maintaining root history. |
| **Boost Manager** | The upgradeable contract calculating yield multipliers for users staking \$ZKZ governance tokens. |
| **Basis Points (bps)** | Unit of measure representing hundredths of a percent ($1\% = 100\text{ bps}$). |

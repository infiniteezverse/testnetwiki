---
title: The ZK Proving Stack
---

# The ZK Proving Stack

ZENDEX constructs its privacy infrastructure using modern zero-knowledge tooling:

1. **Noir DSL:** All business logic, cryptographic checks, balance constraints, and signature verifications are defined in Noir zero-knowledge circuits.
2. **Barretenberg Backend:** Circuits are compiled into bytecode and processed by Aztec's Barretenberg proving engine using UltraPlonk constraints.
3. **Solidity Verifier Contracts:** Barretenberg exports single-purpose Solidity verifier contracts deployed on-chain to validate proof submission gas-efficiently.

By adopting UltraPlonk, ZENDEX eliminates the risk of per-circuit trusted setups associated with Groth16 while maintaining small proof sizes and low verification gas costs on the Horizen EVM.

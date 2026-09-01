---
title: Commitment & Nullifier Lifecycle
---

# Commitment & Nullifier Lifecycle

Assets inside ZENDEX do not exist as ERC-20 balances tied to a public address. Instead, they exist as opaque leaf nodes in an incremental Merkle tree managed by `TreeOperator`.

## Commitment Creation

When a user deposits funds or receives trade outputs, a commitment $C$ is constructed:

$$C = \text{Poseidon}\left(\text{asset\_id}, \text{amount}, \text{Poseidon}\left(\text{random\_blinding}, \text{public\_key}_x, \text{public\_key}_y\right)\right)$$

This value is appended to the `TreeOperator` Merkle tree. Observers cannot reverse the hash to identify the asset type, amount, or recipient address.

## Nullifier Emission

To spend an existing commitment (e.g., during a swap, withdrawal, or limit order creation), the user generates a ZK proof demonstrating ownership of a valid leaf in the tree. To prevent double-spending without revealing which leaf was spent, the transaction publishes a nullifier $N$:

$$N = \text{Poseidon}\left(\text{Poseidon}\left(\text{random\_blinding}\right), \text{public\_key}_x, \text{public\_key}_y\right)$$

The contract verifies that $N$ has not been previously recorded in the nullifier registry, marks it as spent, and executes the requested state update.

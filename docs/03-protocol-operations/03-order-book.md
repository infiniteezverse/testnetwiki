---
title: 'Module 3: The Private Order Book'
---

# Module 3: The Private Order Book

`ZendexOrderBookManager` facilitates fully non-custodial, shielded limit orders through operator-assisted execution:

1. **Order Creation:** The user submits a `CreateOrderVerifier` proof that nullifies their active balance commitment and emits a private **Spot Commitment** containing the order details (side, asset pair, price, amount) into the state tree.
2. **Batch Execution:** The authorized `ORDER_BOOK_OPERATOR_ROLE` aggregates matching spot commitments off-chain, constructs an execution batch, and submits an `ExecuteOrders` proof on-chain.
3. **Settlement:** The on-chain contract verifies the batch execution proof, updates `TreeOperator` with output commitments for both counterparties, and records protocol execution fees. The operator cannot redirect user funds or execute non-matching orders.
4. **Order Cancellation:** The maker can cancel an active order at any time by submitting a `RequestCancelOrderVerifier` proof, releasing a refund commitment back to their private control.

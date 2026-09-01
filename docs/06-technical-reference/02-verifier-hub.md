---
title: ZendexVerifierHub & Circuit Registry
---

# ZendexVerifierHub & Circuit Registry

All zero-knowledge verifier contracts are registered inside `ZendexVerifierHub`. The hub coordinates circuit routing and verifier upgrades across 10 specialized Noir circuits:

| Circuit Name | Functional Verification Scope |
| --- | --- |
| **DepositVerifier** | Verifies valid commitment creation parameters during asset deposits. |
| **InclusionVerifier** | Validates commitment membership within an epoch root of `TreeOperator`. |
| **WithdrawVerifier** | Checks ownership, balance authorization, and nullifier generation on withdrawal. |
| **SplitVerifier** | Ensures an input commitment correctly splits into two output commitments equal in value. |
| **JoinVerifier** | Ensures two input commitments correctly merge into one valid output commitment. |
| **AddLiquidityVerifier** | Validates private LP token minting and underlying asset ratio balance. |
| **RemoveLiquidityVerifier** | Confirms LP commitment burning and output token calculation under ZK rules. |
| **SwapVerifier** | Validates constant-product pricing ($x \cdot y = k$), slippage ($\le 5\%$), and nullifiers. |
| **CreateOrderVerifier** | Validates private limit order spot commitment formation. |
| **RequestCancelOrderVerifier** | Validates ownership authorization during order cancellation requests. |

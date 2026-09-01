---
title: Contract Architecture
---

# Contract Architecture

ZENDEX organizes smart contract responsibilities across specialized modular controllers utilizing Universal Upgradeable Proxy Standard (UUPS) patterns to support protocol updates while maintaining stable contract addresses:

```
                          ZENDEX SYSTEM ARCHITECTURE
                                       |
  +--------------------+---------------+--------------------+--------------------+
  |                    |                                    |                    |
  v                    v                                    v                    v
[VAULT MODULE]   [AMM MODULE]                      [ORDER BOOK MODULE]   [FEES & STAKING]
  |                    |                                    |                    |
  +--ZendexVaultMgr    +--ZendexAmmManager                  +--ZendexOrderBook   +--RewardsEngine
  +--ZendexVault*      +--ZendexFactory                        Manager           +--ZendexStaking
  +--TreeOperator*     +--ZendexRouter                                           +--BoostManager
                       +--ZendexPair*
                                       |
                                       v
                             [ZendexVerifierHub]
                                       |
                         (10x Auto-Generated Verifiers)
(* Denotes Non-Upgradeable Contracts)
```

---
title: 'Module 4: Fees, Staking & Yield Engine'
---

# Module 4: Fees, Staking & Yield Engine

ZENDEX implements a transparent, protocol-wide fee collection and revenue-sharing framework:

* **Base Fee Rate:** Trades incur a base platform fee of **0.25% (25 basis points)** collected in the traded asset.
* **\$ZEN Protocol Fee Splitter:** 10% of all platform fee revenues are periodically swept by `RewardsEngine`, routed through `ZendexRouter` to convert assets into native \$ZEN, and deposited directly into the Horizen \$ZEN Staking Contract to boost ecosystem yields.
* **Staking Boost Formula:** Users staking \$ZKZ governance tokens in `ZendexStaking` unlock boosted cashback yields calculated by `BoostManager`:

$$\text{Boost (bps)} = 500 + 2000 \times \text{Average}\left(\text{Amount Factor}, \text{Duration Factor}\right)$$

Maximum staking boost is capped at **2,500 basis points (25% extra yield multiplier)**.

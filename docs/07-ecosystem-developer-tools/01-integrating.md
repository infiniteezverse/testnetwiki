---
title: Integrating with ZENDEX
---

# Integrating with ZENDEX

Developers can interact with ZENDEX's shielded liquidity pools using the standard Solidity SDK and on-chain contract queries.

## Querying the Verifier Registry

To verify that a specific verifier contract is registered and active, query `ZendexVerifierHub`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IZendexVerifierHub {
    function getVerifier(bytes32 circuitId) external view returns (address);
    function isVerifierValid(bytes32 circuitId, address verifier) external view returns (bool);
}

contract ExternalProtocolIntegration {
    IZendexVerifierHub public immutable verifierHub;

    constructor(address _verifierHub) {
        verifierHub = IZendexVerifierHub(_verifierHub);
    }

    function verifySwapCircuit(bytes32 circuitId, address verifierAddress) external view returns (bool) {
        return verifierHub.isVerifierValid(circuitId, verifierAddress);
    }
}
```

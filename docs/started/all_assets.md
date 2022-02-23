---
title: All Coins' Information supported by MixPay 
---

> GET https://mixpay.me/api/v1/setting/assets

Response:

````json
{
    "code": 0,
    "success": true,
    "message": "",
    "data": [
        {
            "name": "Bitcoin",
            "symbol": "BTC",
            "iconUrl": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
            "assetUuid": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
            "isChain": 1, // Whether to support on-chain payment
            "linkNetwork": "Bitcoin",
            "chainAsset": {
                "uuid": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
                "symbol": "BTC",
                "name": "Bitcoin",
                "iconUrl": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
            }
        }
    ],
    "timestampMs": 1645588240845
}
````

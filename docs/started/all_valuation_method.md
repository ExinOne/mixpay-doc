---
title: All valuation Method Information supported by MixPay 
---

> GET https://mixpay.me/api/v1/setting/valuation_method

Response:

````json
{
    "code": 0,
    "success": true,
    "message": "",
    "data": [
        {
            "symbol": "USD",
            "iconUrl": "https://mixpay.me/fiats/us.svg",
            "minPrice": "0.1",
            "maxPrice": "1000",
            "decimalDigit": 2,
            "isAsset": 0,// 0 fiat currency 1 crypto currency
            "assetUuid": "usd"
        },
        {
            "symbol": "BTC",
            "iconUrl": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
            "minPrice": "0.00000263",
            "maxPrice": "0.02632853",
            "decimalDigit": 8,
            "isAsset": 1,
            "assetUuid": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
            "chainAsset": {
                "uuid": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
                "symbol": "BTC",
                "name": "Bitcoin",
                "iconUrl": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
            }
        },
    ],
    "timestampMs": 1645588240845
}
````

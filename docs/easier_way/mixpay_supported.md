---
title: Assets and pricing methods supported by MixPay
---

> GET https://mixpay.me/api/v1/setting

Response:

````json
{
    "code": 0,
    "success": true,
    "message": "",
    "data": {
        "assets": [
            {
                "id": 17,
                "name": "USDCoin",
                "symbol": "USDC",
                "iconUrl": "iconUrl",
                "assetUuid": "assetUuid",
                "isAsset": 1 // 0 fiat currency 1 crypto currency
            }
        ],
        "valuationMethod": [
            {
                "id": 22,
                "symbol": "USD",
                "iconUrl": "iconUrl",
                "minPrice": "0.1",
                "maxPrice": "1000",
                "decimalDigit": 2,
                "isAsset": 0// 0 fiat currency 1 crypto currency
            }
        ]
    },
    "timestampMs": 1636705653503
}
````

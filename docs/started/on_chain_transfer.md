---
title: Create On-chain Transfer
---

> POST https://mixpay.me/api/v1/transfer

Request:

| Parameter        | Type    | Description                                                  |
| ---------------- | ------- | ------------------------------------------------------------ |
| payAssetUuid     | string  | Required, Cryptocurrency to be paid                          |
| receiveAssetUuid | string  | Required, Cryptocurrency to be received                      |
| receiveUserUuid  | string  | Required, UUID of the receiving user                         |
| amount           | numeric | Required, Corresponding to the number of valuationUuid, for example, the current commodity value is 10 USD |
| valuationUuid    | string  | Required, The pricing method of the payment amount supports fiat currency and cryptocurrency, and the specific supported types can be obtained in the setting interface. |
| isChain          | boolean | Payment Method. Default 'false', use Mixin Wallet. 'true' use On-chain Transfer |
| remark           | string  | Optional, For payer. |
| note             | string  | Optional, For receiver. |
| traceId          | string  | Optional，Used to prevent duplicate payment. 36 char UUID |


Response:

````
{
    "code": 0,
    "success": true,
    "message": "",
    "data": {
        "asset": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",
        "amount": "3.53999999",
        "address": "eoswithmixin",
        "memo": "34ecadd22731e070a3d3f26b0eae0ca2",
        "trace": "fcb08a40-0e85-4de9-a8a2-7664bbe5d788",
        "valuationSymbol": "USDT",
        "valuation": "12",
        "price": "payAssetUuid/valuationUuid",
        "expire": 1640585297
    },
    "timestampMs": 1640585177150
}
````

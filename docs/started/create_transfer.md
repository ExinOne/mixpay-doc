---
title: Create Mixin Pay
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
        "recipient": "recipient uuid", // MixPay's robot uuid
        "asset": "asset uuid", // Assets to be paid by the user
        "amount": "0.1", // The amount of assets to be paid by the user
        "memo": "MHwwMzU1ZTRjMC1iYTNhLTRiYTYtODJjMC02MzExZTMzMmY1N2F8OWIxODBhYjYtNmFiZS0zZGMwLWExM2YtMDQxNjllYjM0YmZh",
        "trace": "trace id", // The trace when the user pays, to get the result of payment
        "price": "payAssetUuid/valuationUuid",
        "expire": 1636444630 // Payment expiration time
    },
    "timestampMs": 1636705653503
}
````

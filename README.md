## Introduction

MixPay is a decentralized instant payment platform built on the Mixin Network. You only need to specify a certain amount of currency to MixPay, the user chooses any cryptocurrency to pay, and MixPay will automatically exchange it. For example, suppose there is a current commodity valued at $10 that needs to be traded, the merchant can choose to charge $10 in BTC or any cryptocurrency, and the user can choose to pay $10 in USDT or any cryptocurrency. And all this can be achieved only by scanning the QR code using Mixin Messenger.

## Getting started

Assuming that you want the other party to pay $10, the other party can choose to use cryptocurrency to pay. At this time, we need to create a link that allows the other party to evoke Mixin payment. You can get the complete parameters for evoke Mixin payment from the interface below to transfer assets.

### Create transfer

> POST https://mixpay.me/api/v1/transfer

Request:

| Parameter        | Type    | Description                                                  |
| ---------------- | ------- | ------------------------------------------------------------ |
| payAssetUuid     | string  | Required, Cryptocurrency to be paid                          |
| receiveAssetUuid | string  | Required, Cryptocurrency to be received                      |
| receiveUserUuid  | string  | Required, UUID of the receiving user                         |
| amount           | numeric | Required, Corresponding to the number of valuationUuid, for example, the current commodity value is 10 USD |
| valuationUuid    | string  | Required, The pricing method of the payment amount supports fiat currency and cryptocurrency, and the specific supported types can be obtained in the setting interface. |
| remark           | string  | Optional, For marking the source of payment channels, such as shop A and shop B |

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
        "expire": 1636444630 // Payment expiration time
    },
    "timestampMs": 1636705653503
}
````

### Get payment result

> GET https://mixpay.me/api/v1/pay_result?payTraceId=xxxxxx

Response:

````json
{
    "code": 0,
    "success": true,
    "message": "",
    "data": {
        "status": 1// 0 Unpaid 1 Paid -1 Paid but overdue refund
    },
    "timestampMs": 1636705653503
}
````

## Looking forward to an easier way? Check this out

If you don't want to develop the payment page yourself, you can use the official payment interface of MixPay to generate the QR code with the following link, and users can scan the code through Mixin Messenger to pay.

### Use MixPay QR code

> GET https://mixpay.me/#/pay?recipient=0355e4c0-ba3a-4ba6-82c0-6311e332f57a&receiveAsset=c6d0c728-2624-429b-8e0d-d9d19b6592fa&valuationUuid=usd&amount=1&remark=Store%20A

Request:

| Parameter     | Type   | Description                                                  |
| ------------- | ------ | ------------------------------------------------------------ |
| recipient     | string | Required                                                     |
| receiveAsset  | string | Optional, If left blank, the user pays what cryptocurrency is, the recipient will receive what cryptocurrency is. |
| valuationUuid | string | Optional, The pricing method ID is supported by MixPay, and the supported types can be queried for related interfaces. You can leave it blank, and you can choose if you don’t fill it. View the setting interface for the pricing method ID |
| amount        | string | Optional, Quantity receive, if left blank, the user can manually enter |
| remark        | string | Optional, For recording the source of funds                  |

Example: Transfer 1 USD (amount) to user A, user A receives BTC (asset)
https://mixpay.me/#/pay?recipient=0355e4c0-ba3a-4ba6-82c0-6311e332f57a&asset=c6d0c728-2624-429b-8e0d-d9d19b6592fa&valuationUuid=usd&amount=1&remark=Store%20A

### Assets and pricing methods supported by MxinPay

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

## Global error response

Example:

````json
{
    "code": 10008,
    "success": false,
    "message": "The system is under maintenance and cannot be paid temporarily. If you have any questions, please contact customer service.",
    "data": [],
    "timestampMs": 1635734004508
}

All Code Explain

| code  | message                                                      |
| ----- | ------------------------------------------------------------ |
| -1    | Server error, please try again later.                        |
| -2    | Insufficient permissions                                     |
| -3    | Unpaid                                                       |
| 404   | The address you visited does not exist.                      |
| 1017  | Parameter error                                              |
| 1429  | Your request frequency is too high, please try again later.  |
| 10000 | Mixin authorization expired                                  |
| 10001 | User does not exist                                          |
| 10002 | The currency does not exist or does not support the currency exchange |
| 10003 | Does not support this pricing method                         |
| 10004 | The price is too small                                       |
| 10005 | The price is too big                                         |
| 10006 | The transfer amount exceeds 1000 USDT                        |
| 10007 | We can't provide service to you.                             |
| 10008 | Payments are suspended temporarily due to system maintenance. Please contact customer service if you have any questions. |
| 10009 | Withdrawals are suspended temporarily due to system maintenance. Please contact customer service if you have any questions.The system is under maintenance and the withdrawal of coins has been suspended. If you have any questions, please contact customer service. |
| 10010 | Insufficient balance of assets                               |

### Mixpay Transfer Memo Specification

Each field is separated by `|` and encoded in `base64`
`RESULT|TRACE|SOURCE|TYPE`

| Parameter                                                    | RESULT                | TRACE                             | SOURCE             | TYPE          | CODE       |
| ------------------------------------------------------------ | --------------------- | --------------------------------- | ------------------ | ------------- | ---------- |
| Description                                                  | Success 0 / Failure 1 | UUID used to track the source     | Source of behavior | Behavior type | error code |
| Withdraw                                                     | 0                     | Trace ID for users to pay for EPC | WD (WithDraw)      | RL(ReLease)   |            |
| Failed to execute and refund cryptocurrency due to non-compliance with rules, etc. | 1                     | Trace ID paid by the user         | SN (SNapshot)      | RF (RFund)    | code       |
| The EPC airdrop when you receive the transfer for the first time | 0                     | Trace ID paid by the user         | SE(SendEPC)        | RL (ReLease)  |            |

### Code in Memo

| MixPay | Reason for refund                                            |
| ------ | ------------------------------------------------------------ |
| 40000  | Payment overtime                                             |
| 40001  | The recipient does not exist in memo                         |
| 40002  | The asset to be traded in memos does not exist or does not support the asset exchange |
| 40003  | The transfer amount exceeds 1000 USDT                        |
| 40005  | The minimum number of decimal places in memo exceeds the limit |
| 40006  | The minimum number of integer digits in memo exceeds the limit |
| 40008  | Insufficient balance of assets                               |
| 40009  | Server error                                                 |
| 40011  | The system temporarily stops service                         |

### About withdrawal and your Asset
To view the assets received and to perform operations related to withdrawals, please use MixPay's Mixin bot 7000104220.


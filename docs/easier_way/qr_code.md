---
title: Use MixPay QR code
---

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

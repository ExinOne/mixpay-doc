---
title: Get short link
---

Set a short link

> POST https://mixpay.me/api/v1/short_link

Request:

| Parameter        | Type    | Description                                                  |
| ---------------- | ------- | ------------------------------------------------------------ |
| recipient        | string  | Required, UUID of the receiving user                         |
| amount           | numeric | Required, Corresponding to the number of valuationUuid, for example, the current commodity value is 10 USD |
| valuationUuid    | string  | Required, The pricing method of the payment amount supports fiat currency and cryptocurrency, and the specific supported types can be obtained in the setting interface. |
| receiveAssetUuid | string  | Required, Cryptocurrency to be received                      |
| remark           | string  | Optional, For payer. |
| isTemp           | boolean | whether to use it only once |

Response:

````
{
    "code": 0,
    "success": true,
    "message": "",
    "data": {
        "code": "525502dd-e552-4505-b114-32fe32ff23c2"
    },
    "timestampMs": 1645411665245
}
````

You can use https://mixpay.me/code/525502dd-e552-4505-b114-32fe32ff23c2

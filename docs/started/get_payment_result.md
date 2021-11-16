---
title: Get payment result
---

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

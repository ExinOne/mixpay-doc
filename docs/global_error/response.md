---
title: Global error response
---

Example:

````json
{
    "code": 10008,
    "success": false,
    "message": "The system is under maintenance and cannot be paid temporarily. If you have any questions, please contact customer service.",
    "data": [],
    "timestampMs": 1635734004508
}
````

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

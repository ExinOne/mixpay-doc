---
title: Mixpay Transfer Memo Specification
---

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

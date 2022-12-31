/*
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/termuxl.js
[mitm]
hostname = buy.itunes.apple.com
*/


var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];
if (bundle_id == "com.pureformstudio.diaryOSX") {
  obj ={
  "environment" : "Production",
  "receipt" : {
      "receipt_type" : "Production",
      "app_item_id" : 1387167765,
      "receipt_creation_date" : "2022-12-30 22:26:34 Etc/GMT",
      "bundle_id" : "com.pureformstudio.diaryOSX",
      "original_purchase_date" : "2022-12-30 14:56:00 Etc/GMT",
      "in_app" : [
      {
          "quantity" : "1",
          "purchase_date_ms" : "1672415112000",
          "expires_date" : "2032-12-31 04:55:55 Etc/GMT",
          "expires_date_pst" : "2032-12-30 20:55:55 America/Los_Angeles",
          "is_in_intro_offer_period" : "false",
          "transaction_id" : "180001478504613",
          "is_trial_period" : "true",
          "original_transaction_id" : "180001478504613",
          "purchase_date" : "2022-12-30 15:45:12 Etc/GMT",
          "product_id" : "com.pureformstudio.diary.yearly_2022_promo",
          "original_purchase_date_pst" : "2022-12-30 07:45:14 America/Los_Angeles",
          "in_app_ownership_type" : "PURCHASED",
          "original_purchase_date_ms" : "1672415114000",
          "web_order_line_item_id" : "180000680711393",
          "expires_date_ms" : "1988081755000",
          "purchase_date_pst" : "2022-12-30 07:45:12 America/Los_Angeles",
          "original_purchase_date" : "2022-12-30 15:45:14 Etc/GMT"
      }
      ],
      "adam_id" : 1387167765,
      "receipt_creation_date_pst" : "2022-12-30 14:26:34 America/Los_Angeles",
      "request_date" : "2022-12-30 22:27:02 Etc/GMT",
      "request_date_pst" : "2022-12-30 14:27:02 America/Los_Angeles",
      "version_external_identifier" : 853975912,
      "request_date_ms" : "1672439222980",
      "original_purchase_date_pst" : "2022-12-30 06:56:00 America/Los_Angeles",
      "application_version" : "1483",
      "original_purchase_date_ms" : "1672412160000",
      "receipt_creation_date_ms" : "1672439194000",
      "original_application_version" : "1483",
      "download_id" : 502050927409104000
      },
      "pending_renewal_info" : [
      {
          "product_id" : "com.pureformstudio.diary.yearly_2022_promo",
          "original_transaction_id" : "180001478504613",
          "auto_renew_product_id" : "com.pureformstudio.diary.yearly_2022_promo",
          "auto_renew_status" : "1"
      }
      ],
      "status" : 0,
      "latest_receipt_info" : [
      {
          "quantity" : "1",
          "purchase_date_ms" : "1672415112000",
          "expires_date" : "2032-12-31 04:55:55 Etc/GMT",
          "expires_date_pst" : "2032-12-30 20:55:55 America/Los_Angeles",
          "is_in_intro_offer_period" : "false",
          "transaction_id" : "180001478504613",
          "is_trial_period" : "true",
          "original_transaction_id" : "180001478504613",
          "purchase_date" : "2022-12-30 15:45:12 Etc/GMT",
          "product_id" : "com.pureformstudio.diary.yearly_2022_promo",
          "original_purchase_date_pst" : "2022-12-30 07:45:14 America/Los_Angeles",
          "in_app_ownership_type" : "PURCHASED",
          "subscription_group_identifier" : "20574086",
          "original_purchase_date_ms" : "1672415114000",
          "web_order_line_item_id" : "180000680711393",
          "expires_date_ms" : "1988081755000",
          "purchase_date_pst" : "2022-12-30 07:45:12 America/Los_Angeles",
          "original_purchase_date" : "2022-12-30 15:45:14 Etc/GMT"
      }
      ],
      "latest_receipt" : "MIIUNAYJKoZIhvcNAQcCoIIUJTCCFCECAQExCzAJBgUrDgMCGgUAMIID1QYJKoZIhvcNAQcBoIIDxgSCA8IxggO+MAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICAP0wDQIBDQIBAQQFAgMCS+QwDgIBAQIBAQQGAgRSroAVMA4CAQMCAQEEBgwEMTQ4MzAOAgEJAgEBBAYCBFAyNTYwDgIBCwIBAQQGAgQAobmaMA4CARACAQEEBgIEMuajaDAOAgETAgEBBAYMBDE0ODMwEgIBDwIBAQQKAggG96Sok2AEmDAUAgEAAgEBBAwMClByb2R1Y3Rpb24wGAIBBAIBAgQQ1iwohfmP5iw3l+rGe0mw3zAcAgEFAgEBBBR6E7JCwiwEGSxZ5PRu9YfN/to0bjAeAgEIAgEBBBYWFDIwMjItMTItMzBUMTU6NDc6MjNaMB4CAQwCAQEEFhYUMjAyMi0xMi0zMFQyMjoyNzowMlowHgIBEgIBAQQWFhQyMDIyLTEyLTMwVDE0OjU2OjAwWjAlAgECAgEBBB0MG2NvbS5wdXJlZm9ybXN0dWRpby5kaWFyeU9TWDA9AgEHAgEBBDU6lAlf0w+s39MK72LtoOedwjmAbSU2KoN4QH62PTBnhCXXDPg0u/c5ZiZHB/8U42Aw+Zr2iTBGAgEGAgEBBD70p51AMxAurtCF07iK4HAAu7p4Ld5WT/yQGlhUxnAvioJ0TqltnEY06TX2zkS5XBr6a/SoKK6ONVqJg4m4njCCAaYCARECAQEEggGcMYIBmDALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQEwDAICBrcCAQEEAwIBADAMAgIGugIBAQQDAgEAMA8CAgauAgEBBAYCBF+hBiEwEgICBq8CAQEECQIHAKO1rKIU4TAaAgIGpwIBAQQRDA8xODAwMDE0Nzg1MDQ2MTMwGgICBqkCAQEEEQwPMTgwMDAxNDc4NTA0NjEzMB8CAgaoAgEBBBYWFDIwMjItMTItMzBUMTU6NDU6MTJaMB8CAgaqAgEBBBYWFDIwMjItMTItMzBUMTU6NDU6MTRaMB8CAgasAgEBBBYWFDIwMjMtMDEtMDZUMTU6NDU6MTJaMDUCAgamAgEBBCwMKmNvbS5wdXJlZm9ybXN0dWRpby5kaWFyeS55ZWFybHlfMjAyMl9wcm9tb6CCDmUwggV8MIIEZKADAgECAggO61eH554JjTANBgkqhkiG9w0BAQUFADCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTAeFw0xNTExMTMwMjE1MDlaFw0yMzAyMDcyMTQ4NDdaMIGJMTcwNQYDVQQDDC5NYWMgQXBwIFN0b3JlIGFuZCBpVHVuZXMgU3RvcmUgUmVjZWlwdCBTaWduaW5nMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClz4H9JaKBW9aH7SPaMxyO4iPApcQmyz3Gn+xKDVWG/6QC15fKOVRtfX+yVBidxCxScY5ke4LOibpJ1gjltIhxzz9bRi7GxB24A6lYogQ+IXjV27fQjhKNg0xbKmg3k8LyvR7E0qEMSlhSqxLj7d0fmBWQNS3CzBLKjUiB91h4VGvojDE2H0oGDEdU8zeQuLKSiX1fpIVK4cCc4Lqku4KXY/Qrk8H9Pm/KwfU8qY9SGsAlCnYO3v6Z/v/Ca/VbXqxzUUkIVonMQ5DMjoEC0KCXtlyxoWlph5AQaCYmObgdEHOwCl3Fc9DfdjvYLdmIHuPsB8/ijtDT+iZVge/iA0kjAgMBAAGjggHXMIIB0zA/BggrBgEFBQcBAQQzMDEwLwYIKwYBBQUHMAGGI2h0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtd3dkcjA0MB0GA1UdDgQWBBSRpJz8xHa3n6CK9E31jzZd7SsEhTAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFIgnFwmpthhgi+zruvZHWcVSVKO3MIIBHgYDVR0gBIIBFTCCAREwggENBgoqhkiG92NkBQYBMIH+MIHDBggrBgEFBQcCAjCBtgyBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDYGCCsGAQUFBwIBFipodHRwOi8vd3d3LmFwcGxlLmNvbS9jZXJ0aWZpY2F0ZWF1dGhvcml0eS8wDgYDVR0PAQH/BAQDAgeAMBAGCiqGSIb3Y2QGCwEEAgUAMA0GCSqGSIb3DQEBBQUAA4IBAQANphvTLj3jWysHbkKWbNPojEMwgl/gXNGNvr0PvRr8JZLbjIXDgFnf4+LXLgUUrA3btrj+/DUufMutF2uOfx/kd7mxZ5W0E16mGYZ2+FogledjjA9z/Ojtxh+umfhlSFyg4Cg6wBA3LbmgBDkfc7nIBf3y3n8aKipuKwH8oCBc2et9J6Yz+PWY4L5E27FMZ/xuCk/J4gao0pfzp45rUaJahHVl0RYEYuPBX/UIqc9o2ZIAycGMs/iNAGS6WGDAfK+PdcppuVsq1h1obphC9UynNxmbzDscehlD86Ntv0hgBgw2kivs3hi1EdotI9CO/KBpnBcbnoB7OUdFMGEvxxOoMIIEIjCCAwqgAwIBAgIIAd68xDltoBAwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTEzMDIwNzIxNDg0N1oXDTIzMDIwNzIxNDg0N1owgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDKOFSmy1aqyCQ5SOmM7uxfuH8mkbw0U3rOfGOAYXdkXqUHI7Y5/lAtFVZYcC1+xG7BSoU+L/DehBqhV8mvexj/avoVEkkVCBmsqtsqMu2WY2hSFT2Miuy/axiV4AOsAX2XBWfODoWVN2rtCbauZ81RZJ/GXNG8V25nNYB2NqSHgW44j9grFU57Jdhav06DwY3Sk9UacbVgnJ0zTlX5ElgMhrgWDcHld0WNUEi6Ky3klIXh6MSdxmilsKP8Z35wugJZS3dCkTm59c3hTO/AO0iMpuUhXf1qarunFjVg0uat80YpyejDi+l5wGphZxWy8P3laLxiX27Pmd3vG2P+kmWrAgMBAAGjgaYwgaMwHQYDVR0OBBYEFIgnFwmpthhgi+zruvZHWcVSVKO3MA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01/CF4wLgYDVR0fBCcwJTAjoCGgH4YdaHR0cDovL2NybC5hcHBsZS5jb20vcm9vdC5jcmwwDgYDVR0PAQH/BAQDAgGGMBAGCiqGSIb3Y2QGAgEEAgUAMA0GCSqGSIb3DQEBBQUAA4IBAQBPz+9Zviz1smwvj+4ThzLoBTWobot9yWkMudkXvHcs1Gfi/ZptOllc34MBvbKuKmFysa/Nw0Uwj6ODDc4dR7Txk4qjdJukw5hyhzs+r0ULklS5MruQGFNrCk4QttkdUGwhgAqJTleMa1s8Pab93vcNIx0LSiaHP7qRkkykGRIZbVf1eliHe2iK5IaMSuviSRSqpd1VAKmuu0swruGgsbwpgOYJd+W+NKIByn/c4grmO7i77LpilfMFY0GCzQ87HUyVpNur+cmV6U/kTecmmYHpvPm0KdIBembhLoz2IYrF+Hjhga6/05Cdqa3zr/04GpZnMBxRpVzscYqCtGwPDBUfMIIEuzCCA6OgAwIBAgIBAjANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMDYwNDI1MjE0MDM2WhcNMzUwMjA5MjE0MDM2WjBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDkkakJH5HbHkdQ6wXtXnmELes2oldMVeyLGYne+Uts9QerIjAC6Bg++FAJ039BqJj50cpmnCRrEdCju+QbKsMflZ56DKRHi1vUFjczy8QPTc4UadHJGXL1XQ7Vf1+b8iUDulWPTV0N8WQ1IxVLFVkds5T39pyez1C6wVhQZ48ItCD3y6wsIG9wtj8BMIy3Q88PnT3zK0koGsj+zrW5DtleHNbLPbU6rfQPDgCSC7EhFi501TwN22IWq6NxkkdTVcGvL0Gz+PvjcM3mo0xFfh9Ma1CWQYnEdGILEINBhzOKgbEwWOxaBDKMaLOPHd5lc/9nXmW8Sdh2nzMUZaF3lMktAgMBAAGjggF6MIIBdjAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUK9BpR5R2Cf70a40uQKb3R01/CF4wHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01/CF4wggERBgNVHSAEggEIMIIBBDCCAQAGCSqGSIb3Y2QFATCB8jAqBggrBgEFBQcCARYeaHR0cHM6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvMIHDBggrBgEFBQcCAjCBthqBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMA0GCSqGSIb3DQEBBQUAA4IBAQBcNplMLXi37Yyb3PN3m/J20ncwT8EfhYOFG5k9RzfyqZtAjizUsZAS2L70c5vu0mQPy3lPNNiiPvl4/2vIB+x9OYOLUyDTOMSxv5pPCmv/K/xZpwUJfBdAVhEedNO3iyM7R6PVbyTi69G3cN8PReEnyvFteO3ntRcXqNx+IjXKJdXZD9Zr1KIkIxH3oayPc4FgxhtbCS+SsvhESPBgOJ4V9T0mZyCKM2r3DYLP3uujL/lTaltkwGMzd/c6ByxW69oPIQ7aunMZT7XZNn/Bh1XZp5m5MkL72NVxnn6hUrcbvZNCJBIqxw8dtk2cXmPIS4AXUKqK1drk/NAJBzewdXUhMYIByzCCAccCAQEwgaMwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkCCA7rV4fnngmNMAkGBSsOAwIaBQAwDQYJKoZIhvcNAQEBBQAEggEAG1azZzcH9TJEO+6obJwJmNmXjy7GxlwcgkQeWXF1eeGkqOzCHqBiksFDMKXw38YqPgZOMgF7rc0B5BYiH5N7006esVYnaylOE2nSY7yYIcCehLMU1srWApOnqZe73BeghI22G0jYEwvNiLuM2zs/wf64u+3nNYMfB4ASH/ewosd4HWinnYTVoOelmECfQ0y7Rib3iF2EG0/ORTREEXwIOd2C71H27zgAfBT92Dxg2cq8l7L+L5tcrt2kZQ+64ZBo1/HbHvsdu4zVBBC0jtjmq6zqCOQmgj5bxUhAhk0zeKwiszQCzknghQy377u8TGg3ixW3LjXzzfCKRtELr+/s3A=="
};
}
$done({body:JSON.stringify(obj)});

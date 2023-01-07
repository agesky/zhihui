/*
[rewrite_local]
^https:\/\/api\.apphud\.com\/v1\/(customers|subscriptions) url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/paste.js
[mitm]
hostname = api.apphud.com
*/


var obj = JSON.parse($response.body);
  obj ={
  "data" : {
    "results" : {
      "locale" : "zh_CN",
      "id" : "54b64f7d-4228-411c-9eed-0328d4979d23",
      "created_at" : "2022-12-23T13:48:33.984Z",
      "subscriptions" : [
      {
          "id" : "46260714-5baa-421f-8e16-808de6317cc4",
          "unit" : "year",
          "group_id" : "237801a2",
          "autorenew_enabled" : true,
          "expires_at" : "2033-01-06T14:51:12.000Z",
          "in_retry_billing" : false,
          "introductory_activated" : true,
          "cancelled_at" : null,
          "platform" : "ios",
          "product_id" : "com.wiheads.paste.macos.subscription.annual",
          "retries_count" : 0,
          "started_at" : "2022-12-23T14:51:14.000Z",
          "local" : false,
          "next_check_at" : "2033-01-06T14:58:12.000Z",
          "kind" : "autorenewable",
          "units_count" : 1,
          "environment" : "production",
          "status" : "trial"
      }
      ],
      "paywalls" : [
      {
        "default" : true,
        "variation_identifier" : null,
        "variation_name" : null,
        "id" : "e8f6c54e",
        "items" : [
        {
            "product_id" : "com.wiheads.paste.macos.subscription.monthly",
            "id" : "661199d9",
            "store" : "app_store",
            "name" : "Monthly Subscription"
        },
        {
            "product_id" : "com.wiheads.paste.macos.subscription.annual",
            "id" : "516a4f97",
            "store" : "app_store",
            "name" : "Annual Subscription"
        },
        {
            "product_id" : "com.wiheads.paste.macos.subscription.annual.family",
            "id" : "b2cd7cfe",
            "store" : "app_store",
            "name" : "Annual Family Subscription"
        }
        ],
        "from_paywall" : null,
        "identifier" : "default",
        "experiment_id" : null,
        "experiment_name" : null,
        "json" : null,
        "name" : "Default Paywall"
      }
      ],
      "user_id" : "8FC6F507-E366-4735-B36E-5938DC06A741",
      "currency" : {
      "id" : "a5604c08-9833-4d8b-a677-f31e7717d8e5",
      "country_code" : "CN",
      "code" : "CNY"
      },
      "devices" : [

      ]
    },
    "meta" : null
    },
  "errors" : null
  };

$done({body:JSON.stringify(obj)});

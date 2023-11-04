
/*******************************

[rewrite_local]

https://dayone.app/api/users url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/dayone.js

[mitm] 

hostname = dayone.app

*******************************/

let obj = JSON.parse($response.body);

obj = {
  "profileColor" : null,
  "key" : {
    "fingerprint" : "EC5F3C14A899214A1876F690F24921F6605BC62898453FDE351AE1372B06DE06"
  },
  "signupDate" : 1555288813000,
  "credentials" : [
    "Apple ID",
    "SIWA"
  ],
  "subscription" : {
    "source" : [
      "Receipt"
    ],
    "premium" : true,
    "product_id" : "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
    "is_trial" : true,
    "is_in_billing_retry_period" : false,
    "auto_renew" : true,
    "plus_on_ios" : true,
    "is_eligible_for_trial" : false,
    "plus_on_mac" : true,
    "expires" : "2028-10-29T23:34:50.000Z"
  },
  "sharedProfile" : null,
  "initials" : null,
  "displayName" : "马郅徽",
  "realName" : "马郅徽",
  "bio" : null,
  "featureEnrollments" : [
    {
      "status" : "active",
      "id" : 0,
      "feature" : "publish",
      "createDate" : "2011-11-11T00:00:00.000Z",
      "isActive" : true
    },
    {
      "status" : "active",
      "id" : 0,
      "feature" : "backup",
      "createDate" : "2011-11-11T00:00:00.000Z",
      "isActive" : true
    },
    {
      "status" : "active",
      "id" : 0,
      "feature" : "sync",
      "createDate" : "2011-11-11T00:00:00.000Z",
      "isActive" : true
    }
  ],
  "sharedJournalOrder" : [

  ],
  "chocolateSyncResetRequested" : 1601501104538,
  "id" : "139521570",
  "isAdmin" : false,
  "isEligibleForTrial" : false,
  "email" : "zhihui@live.com",
  "website" : null,
  "minimumSubscription" : null,
  "journalOrder" : [
    291856369
  ],
  "basic_storage" : {
    "switch_allowed_interval" : 0,
    "active_device_name" : "iPhone",
    "active_device" : "69F4C8BD-2927-417A-B1BC-78481FDDA38F",
    "switch_allowed_on" : "2021-11-29T03:00:36.461Z",
    "activated" : "2021-11-29T03:00:36.461Z"
  },
  "featureBundle" : {
    "featuresFull" : [
      {
        "name" : "journalLimit",
        "limit" : 200,
        "canUpgrade" : false
      },
      {
        "name" : "backup",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "sync",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "discountedSubscription",
        "enabled" : false,
        "canUpgrade" : false
      },
      {
        "name" : "printingDiscount",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "prioritySupport",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "scanToPDF",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "attachmentsPerEntry",
        "limit" : 30,
        "canUpgrade" : false
      },
      {
        "name" : "journalViaSMS",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachPhoto",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachVideo",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachAudio",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachDrawing",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachPDF",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachSharedPhoto",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachSharedVideo",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachSharedAudio",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachSharedDrawing",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "canAttachSharedPDF",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "attachmentsPerSharedEntry",
        "limit" : 30,
        "canUpgrade" : false
      },
      {
        "name" : "instagram",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "ifttt",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "colors",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "emailToJournal",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "appIcons",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "moonPhase",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "foursquareNearbyVenues",
        "enabled" : true,
        "canUpgrade" : false
      },
      {
        "name" : "createSharedJournal",
        "enabled" : false,
        "canUpgrade" : true
      }
    ],
    "features" : [
      {
        "name" : "imagesPerEntry",
        "limit" : 30,
        "canUpgrade" : false
      },
      {
        "name" : "imagesPerSharedEntry",
        "limit" : 30,
        "canUpgrade" : false
      },
      {
        "name" : "journalLimit",
        "limit" : 200,
        "canUpgrade" : false
      },
      {
        "name" : "audioPerEntry",
        "limit" : 10,
        "canUpgrade" : false
      },
      {
        "name" : "sync",
        "limit" : null,
        "canUpgrade" : false
      },
      {
        "name" : "backup",
        "limit" : null,
        "canUpgrade" : false
      },
      {
        "name" : "printingDiscount",
        "limit" : null,
        "canUpgrade" : false
      },
      {
        "name" : "prioritySupport",
        "limit" : null,
        "canUpgrade" : false
      },
      {
        "name" : "drawingsPerEntry",
        "limit" : 30,
        "canUpgrade" : false
      },
      {
        "name" : "scanToPDF",
        "limit" : 30,
        "canUpgrade" : false
      },
      {
        "name" : "videosPerEntry",
        "limit" : 30,
        "canUpgrade" : false
      },
      {
        "name" : "journalViaSMS",
        "limit" : null,
        "canUpgrade" : false
      }
    ],
    "reason" : "purchase",
    "bundleName" : "premium"
  },
  "avatar" : null,
  "syncUploadBaseUrl" : "https://dayone-syncmedia-production-new.s3.amazonaws.com/incoming/6046/139521570",
  "master_key_storage" : [
    "cloudkit"
  ],
  "etag" : "bc8654c3ad2eedfb567a4337f27e3504",
  "mercurySyncResetRequested" : null
}

$done({body: JSON.stringify(obj)});
  

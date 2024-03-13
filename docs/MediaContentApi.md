# PsResTfulServiceApi.MediaContentApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMediaContent**](MediaContentApi.md#getMediaContent) | **GET** /v1.1.0/suppliers/{supplier_code}/medias/{product_id} | Get Media Content
[**getMediaDateModified**](MediaContentApi.md#getMediaDateModified) | **GET** /v1.1.0/suppliers/{supplier_code}/media-modified-since/ | Get Media Date Modified

<a name="getMediaContent"></a>
# **getMediaContent**
> MediaContentDetailsResponse getMediaContent(supplierCode, productId, opts)

Get Media Content

### Example
```javascript
import {PsResTfulServiceApi} from 'ps_res_tful_service_api';
let defaultClient = PsResTfulServiceApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PsResTfulServiceApi.MediaContentApi();
let supplierCode = null; // Object | 
let productId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'cultureName': null, // Object | The language culture name.  This tailors the response to a specific culture. i.e. language, units of measure, etc. Null assumes en-US. Valid values follows `ISO 639x`, ex: en-US, en-GB, fr-FR, etc.
  'mediaType': Image, // Object | 
  'partId': null, // Object | 
  'classType': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getMediaContent(supplierCode, productId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierCode** | [**Object**](.md)|  | 
 **productId** | [**Object**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **cultureName** | [**Object**](.md)| The language culture name.  This tailors the response to a specific culture. i.e. language, units of measure, etc. Null assumes en-US. Valid values follows &#x60;ISO 639x&#x60;, ex: en-US, en-GB, fr-FR, etc. | [optional] 
 **mediaType** | [**Object**](.md)|  | [optional] [default to Image]
 **partId** | [**Object**](.md)|  | [optional] 
 **classType** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**MediaContentDetailsResponse**](MediaContentDetailsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMediaDateModified"></a>
# **getMediaDateModified**
> GetMediaDateModifiedResponse getMediaDateModified(supplierCode, opts)

Get Media Date Modified

### Example
```javascript
import {PsResTfulServiceApi} from 'ps_res_tful_service_api';
let defaultClient = PsResTfulServiceApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PsResTfulServiceApi.MediaContentApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'cultureName': us_en, // Object | The language culture name.
  'since': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getMediaDateModified(supplierCode, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierCode** | [**Object**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **cultureName** | [**Object**](.md)| The language culture name. | [optional] [default to us_en]
 **since** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetMediaDateModifiedResponse**](GetMediaDateModifiedResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


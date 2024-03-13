# PsResTfulServiceApi.PurchaseOrderApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSupportedOrderTypes**](PurchaseOrderApi.md#getSupportedOrderTypes) | **GET** /v1.0.0/suppliers/{supplier_code}/supported-order-types/ | Get Supported Order Types
[**sendPo**](PurchaseOrderApi.md#sendPo) | **POST** /v1.0.0/suppliers/{supplier_code}/purchase-orders/ | Send Po

<a name="getSupportedOrderTypes"></a>
# **getSupportedOrderTypes**
> GetSupportedOrderTypesResponse getSupportedOrderTypes(supplierCode, opts)

Get Supported Order Types

This function returns the supported Order Types the vendor accepts.

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

let apiInstance = new PsResTfulServiceApi.PurchaseOrderApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getSupportedOrderTypes(supplierCode, opts, (error, data, response) => {
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
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetSupportedOrderTypesResponse**](GetSupportedOrderTypesResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendPo"></a>
# **sendPo**
> SendPOResponse sendPo(body, supplierCode, opts)

Send Po

This function will send blank, sample, simple or configured purchase order to a supplier. The purchase order service is designed to work in conjunction with data from PPC service

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

let apiInstance = new PsResTfulServiceApi.PurchaseOrderApi();
let body = new PsResTfulServiceApi.BodySendPo(); // BodySendPo | 
let supplierCode = null; // Object | 
let opts = { 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.sendPo(body, supplierCode, opts, (error, data, response) => {
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
 **body** | [**BodySendPo**](BodySendPo.md)|  | 
 **supplierCode** | [**Object**](.md)|  | 
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**SendPOResponse**](SendPOResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


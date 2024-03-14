# psrestful.InventoryApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFilterValues**](InventoryApi.md#getFilterValues) | **GET** /v{api_version}/suppliers/{supplier_code}/inventory/filter-values/{product_id} | Get Filter Values
[**getInventoryByProductV121**](InventoryApi.md#getInventoryByProductV121) | **GET** /v1.2.1/suppliers/{supplier_code}/inventory/{product_id} | Get Inventory By Product V121
[**getInventoryByProductV200**](InventoryApi.md#getInventoryByProductV200) | **GET** /v2.0.0/suppliers/{supplier_code}/inventory/{product_id} | Get Inventory By Product V200

<a name="getFilterValues"></a>
# **getFilterValues**
> FilterValuesResponseV200 getFilterValues(supplierCode, apiVersion, productId, opts)

Get Filter Values

### Example
```javascript
import {psrestful} from 'ps_res_tful_service_api';
let defaultClient = psrestful.ApiClient.instance;

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

let apiInstance = new psrestful.InventoryApi();
let supplierCode = null; // Object | 
let apiVersion = null; // Object | 
let productId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'productIdType': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getFilterValues(supplierCode, apiVersion, productId, opts, (error, data, response) => {
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
 **apiVersion** | [**Object**](.md)|  | 
 **productId** | [**Object**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **productIdType** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**FilterValuesResponseV200**](FilterValuesResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryByProductV121"></a>
# **getInventoryByProductV121**
> InventoryLevelsResponseV121 getInventoryByProductV121(supplierCode, productId, opts)

Get Inventory By Product V121

### Example
```javascript
import {psrestful} from 'ps_res_tful_service_api';
let defaultClient = psrestful.ApiClient.instance;

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

let apiInstance = new psrestful.InventoryApi();
let supplierCode = null; // Object | 
let productId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getInventoryByProductV121(supplierCode, productId, opts, (error, data, response) => {
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
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**InventoryLevelsResponseV121**](InventoryLevelsResponseV121.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryByProductV200"></a>
# **getInventoryByProductV200**
> InventoryLevelsResponseV200 getInventoryByProductV200(supplierCode, productId, opts)

Get Inventory By Product V200

### Example
```javascript
import {psrestful} from 'ps_res_tful_service_api';
let defaultClient = psrestful.ApiClient.instance;

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

let apiInstance = new psrestful.InventoryApi();
let supplierCode = null; // Object | 
let productId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getInventoryByProductV200(supplierCode, productId, opts, (error, data, response) => {
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
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**InventoryLevelsResponseV200**](InventoryLevelsResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


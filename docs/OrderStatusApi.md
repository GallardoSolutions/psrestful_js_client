# PsResTfulServiceApi.OrderStatusApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIssueV200**](OrderStatusApi.md#getIssueV200) | **GET** /v2.0.0/suppliers/{supplier_code}/issues/{issue_id}/ | Get Issue
[**getOrderStatusDetailsV100**](OrderStatusApi.md#getOrderStatusDetailsV100) | **GET** /v1.0.0/suppliers/{supplier_code}/order-status-details/ | Get Order Status Details
[**getOrderStatusTypesV100**](OrderStatusApi.md#getOrderStatusTypesV100) | **GET** /v1.0.0/suppliers/{supplier_code}/order-status-types/ | Get Order Status Types
[**getOrderStatusV200**](OrderStatusApi.md#getOrderStatusV200) | **GET** /v2.0.0/suppliers/{supplier_code}/order-status/ | Get Order Status
[**getServiceMethodsV200**](OrderStatusApi.md#getServiceMethodsV200) | **GET** /v2.0.0/suppliers/{supplier_code}/service-methods/ | Get Service Methods

<a name="getIssueV200"></a>
# **getIssueV200**
> GetIssueResponseV200 getIssueV200(supplierCode, issueId, opts)

Get Issue

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

let apiInstance = new PsResTfulServiceApi.OrderStatusApi();
let supplierCode = null; // Object | 
let issueId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getIssueV200(supplierCode, issueId, opts, (error, data, response) => {
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
 **issueId** | [**Object**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetIssueResponseV200**](GetIssueResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderStatusDetailsV100"></a>
# **getOrderStatusDetailsV100**
> OrderStatusDetailsResponse getOrderStatusDetailsV100(supplierCode, queryType, opts)

Get Order Status Details

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

let apiInstance = new PsResTfulServiceApi.OrderStatusApi();
let supplierCode = null; // Object | 
let queryType = new PsResTfulServiceApi.PsDomainModelOrderStatusV100QueryType(); // PsDomainModelOrderStatusV100QueryType | 
let opts = { 
  'body': null, // Object | 
  'referenceNumber': null, // Object | 
  'statusTimestamp': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getOrderStatusDetailsV100(supplierCode, queryType, opts, (error, data, response) => {
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
 **queryType** | [**PsDomainModelOrderStatusV100QueryType**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **referenceNumber** | [**Object**](.md)|  | [optional] 
 **statusTimestamp** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**OrderStatusDetailsResponse**](OrderStatusDetailsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderStatusTypesV100"></a>
# **getOrderStatusTypesV100**
> OrderStatusTypesResponse getOrderStatusTypesV100(supplierCode, opts)

Get Order Status Types

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

let apiInstance = new PsResTfulServiceApi.OrderStatusApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getOrderStatusTypesV100(supplierCode, opts, (error, data, response) => {
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

[**OrderStatusTypesResponse**](OrderStatusTypesResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderStatusV200"></a>
# **getOrderStatusV200**
> GetOrderStatusResponseV200 getOrderStatusV200(supplierCode, queryType, opts)

Get Order Status

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

let apiInstance = new PsResTfulServiceApi.OrderStatusApi();
let supplierCode = null; // Object | 
let queryType = new PsResTfulServiceApi.PsDomainModelOrderStatusV100QueryType(); // PsDomainModelOrderStatusV100QueryType | 
let opts = { 
  'body': null, // Object | 
  'referenceNumber': null, // Object | 
  'statusTimestamp': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getOrderStatusV200(supplierCode, queryType, opts, (error, data, response) => {
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
 **queryType** | [**PsDomainModelOrderStatusV100QueryType**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **referenceNumber** | [**Object**](.md)|  | [optional] 
 **statusTimestamp** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetOrderStatusResponseV200**](GetOrderStatusResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getServiceMethodsV200"></a>
# **getServiceMethodsV200**
> GetServiceMethodsResponseV200 getServiceMethodsV200(supplierCode, opts)

Get Service Methods

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

let apiInstance = new PsResTfulServiceApi.OrderStatusApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getServiceMethodsV200(supplierCode, opts, (error, data, response) => {
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

[**GetServiceMethodsResponseV200**](GetServiceMethodsResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


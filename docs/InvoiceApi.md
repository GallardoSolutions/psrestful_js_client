# PsResTfulServiceApi.InvoiceApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoices**](InvoiceApi.md#getInvoices) | **GET** /v1.0.0/suppliers/{supplier_code}/invoices/ | Get Invoices
[**getVoidedInvoices**](InvoiceApi.md#getVoidedInvoices) | **GET** /v1.0.0/suppliers/{supplier_code}/voided-invoices/ | Get Voided Invoices

<a name="getInvoices"></a>
# **getInvoices**
> GetInvoiceResponse getInvoices(supplierCode, queryType, opts)

Get Invoices

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

let apiInstance = new PsResTfulServiceApi.InvoiceApi();
let supplierCode = null; // Object | 
let queryType = new PsResTfulServiceApi.PsDomainModelInvoiceQueryType(); // PsDomainModelInvoiceQueryType | 
let opts = { 
  'body': null, // Object | 
  'referenceNumber': null, // Object | 
  'requestedDate': null, // Object | 
  'availableTimestamp': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getInvoices(supplierCode, queryType, opts, (error, data, response) => {
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
 **queryType** | [**PsDomainModelInvoiceQueryType**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **referenceNumber** | [**Object**](.md)|  | [optional] 
 **requestedDate** | [**Object**](.md)|  | [optional] 
 **availableTimestamp** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetInvoiceResponse**](GetInvoiceResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVoidedInvoices"></a>
# **getVoidedInvoices**
> GetVoidedResponse getVoidedInvoices(supplierCode, queryType, opts)

Get Voided Invoices

This endpoint is used to retrieve a list of voided invoices. When QueryType&#x3D;1(PO_NUMBER_SEARCH) or 2(INVOICE_NUMBER_SEARCH) reference_number must be filled in.

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

let apiInstance = new PsResTfulServiceApi.InvoiceApi();
let supplierCode = null; // Object | 
let queryType = new PsResTfulServiceApi.PsDomainModelInvoiceQueryType(); // PsDomainModelInvoiceQueryType | 
let opts = { 
  'body': null, // Object | 
  'referenceNumber': null, // Object | 
  'requestedDate': null, // Object | 
  'availableTimestamp': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getVoidedInvoices(supplierCode, queryType, opts, (error, data, response) => {
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
 **queryType** | [**PsDomainModelInvoiceQueryType**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **referenceNumber** | [**Object**](.md)|  | [optional] 
 **requestedDate** | [**Object**](.md)|  | [optional] 
 **availableTimestamp** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetVoidedResponse**](GetVoidedResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


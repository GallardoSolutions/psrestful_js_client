# PsResTfulServiceApi.ProductDataApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSellableProductIds**](ProductDataApi.md#getAllSellableProductIds) | **GET** /v{api_version}/suppliers/{supplier_code}/sellable-product-ids | Get All Sellable Product Ids
[**getProductCloseoutV100**](ProductDataApi.md#getProductCloseoutV100) | **GET** /v1.0.0/suppliers/{supplier_code}/products-closeout | Get Product Closeout V100
[**getProductCloseoutV200**](ProductDataApi.md#getProductCloseoutV200) | **GET** /v2.0.0/suppliers/{supplier_code}/products-closeout | Get Product Closeout V200
[**getProductDateModifiedV100**](ProductDataApi.md#getProductDateModifiedV100) | **GET** /v1.0.0/suppliers/{supplier_code}/products-modified-since | Get Product Date Modified V100
[**getProductDateModifiedV200**](ProductDataApi.md#getProductDateModifiedV200) | **GET** /v2.0.0/suppliers/{supplier_code}/products-modified-since | Get Product Date Modified V200
[**getProductSellableV100**](ProductDataApi.md#getProductSellableV100) | **GET** /v1.0.0/suppliers/{supplier_code}/sellable-products | Get Sellables V100
[**getProductSellableV200**](ProductDataApi.md#getProductSellableV200) | **GET** /v2.0.0/suppliers/{supplier_code}/sellable-products | Get Sellables V200
[**getProductV100**](ProductDataApi.md#getProductV100) | **GET** /v1.0.0/suppliers/{supplier_code}/products/{product_id} | Get Product V100
[**getProductV200**](ProductDataApi.md#getProductV200) | **GET** /v2.0.0/suppliers/{supplier_code}/products/{product_id} | Get Product V200

<a name="getAllSellableProductIds"></a>
# **getAllSellableProductIds**
> Object getAllSellableProductIds(supplierCode, apiVersion, opts)

Get All Sellable Product Ids

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let apiVersion = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getAllSellableProductIds(supplierCode, apiVersion, opts, (error, data, response) => {
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
 **body** | [**Object**](Object.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

**Object**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductCloseoutV100"></a>
# **getProductCloseoutV100**
> ProductCloseOutResponseV100 getProductCloseoutV100(supplierCode, opts)

Get Product Closeout V100

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductCloseoutV100(supplierCode, opts, (error, data, response) => {
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

[**ProductCloseOutResponseV100**](ProductCloseOutResponseV100.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductCloseoutV200"></a>
# **getProductCloseoutV200**
> ProductCloseOutResponseV200 getProductCloseoutV200(supplierCode, opts)

Get Product Closeout V200

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductCloseoutV200(supplierCode, opts, (error, data, response) => {
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

[**ProductCloseOutResponseV200**](ProductCloseOutResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductDateModifiedV100"></a>
# **getProductDateModifiedV100**
> ProductDateModifiedResponseV100 getProductDateModifiedV100(supplierCode, since, opts)

Get Product Date Modified V100

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let since = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductDateModifiedV100(supplierCode, since, opts, (error, data, response) => {
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
 **since** | [**Object**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**ProductDateModifiedResponseV100**](ProductDateModifiedResponseV100.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductDateModifiedV200"></a>
# **getProductDateModifiedV200**
> ProductDateModifiedResponseV200 getProductDateModifiedV200(supplierCode, since, opts)

Get Product Date Modified V200

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let since = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductDateModifiedV200(supplierCode, since, opts, (error, data, response) => {
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
 **since** | [**Object**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**ProductDateModifiedResponseV200**](ProductDateModifiedResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductSellableV100"></a>
# **getProductSellableV100**
> GetProductSellableResponseV100 getProductSellableV100(supplierCode, opts)

Get Sellables V100

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductSellableV100(supplierCode, opts, (error, data, response) => {
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

[**GetProductSellableResponseV100**](GetProductSellableResponseV100.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductSellableV200"></a>
# **getProductSellableV200**
> GetProductSellableResponseV200 getProductSellableV200(supplierCode, opts)

Get Sellables V200

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductSellableV200(supplierCode, opts, (error, data, response) => {
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

[**GetProductSellableResponseV200**](GetProductSellableResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductV100"></a>
# **getProductV100**
> ProductResponseV100 getProductV100(supplierCode, productId, opts)

Get Product V100

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let productId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'localizationCountry': US, // Object | 
  'localizationLanguage': en, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductV100(supplierCode, productId, opts, (error, data, response) => {
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
 **localizationCountry** | [**Object**](.md)|  | [optional] [default to US]
 **localizationLanguage** | [**Object**](.md)|  | [optional] [default to en]
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**ProductResponseV100**](ProductResponseV100.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductV200"></a>
# **getProductV200**
> ProductResponseV200 getProductV200(supplierCode, productId, opts)

Get Product V200

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

let apiInstance = new PsResTfulServiceApi.ProductDataApi();
let supplierCode = null; // Object | 
let productId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'localizationCountry': US, // Object | 
  'localizationLanguage': en, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getProductV200(supplierCode, productId, opts, (error, data, response) => {
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
 **localizationCountry** | [**Object**](.md)|  | [optional] [default to US]
 **localizationLanguage** | [**Object**](.md)|  | [optional] [default to en]
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**ProductResponseV200**](ProductResponseV200.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


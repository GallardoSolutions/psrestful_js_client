# PsResTfulServiceApi.ProductPriceAndConfigurationApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvailableCharges**](ProductPriceAndConfigurationApi.md#getAvailableCharges) | **GET** /v1.0.0/suppliers/{supplier_code}/available-charges/{product_id} | Get Available Charges
[**getAvailableLocations**](ProductPriceAndConfigurationApi.md#getAvailableLocations) | **GET** /v1.0.0/suppliers/{supplier_code}/available-locations/{product_id} | Get Available Locations
[**getConfigurationAndPricing**](ProductPriceAndConfigurationApi.md#getConfigurationAndPricing) | **GET** /v1.0.0/suppliers/{supplier_code}/pricing-and-configuration/{product_id} | Get Configuration And Pricing
[**getDecorationColors**](ProductPriceAndConfigurationApi.md#getDecorationColors) | **GET** /v1.0.0/suppliers/{supplier_code}/decoration-colors/{product_id} | Get Decoration Colors
[**getFobPoints**](ProductPriceAndConfigurationApi.md#getFobPoints) | **GET** /v1.0.0/suppliers/{supplier_code}/fob-points/{product_id} | Get Fob Points

<a name="getAvailableCharges"></a>
# **getAvailableCharges**
> AvailableChargesResponse getAvailableCharges(supplierCode, productId, opts)

Get Available Charges

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

let apiInstance = new PsResTfulServiceApi.ProductPriceAndConfigurationApi();
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
apiInstance.getAvailableCharges(supplierCode, productId, opts, (error, data, response) => {
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

[**AvailableChargesResponse**](AvailableChargesResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableLocations"></a>
# **getAvailableLocations**
> AvailableLocationsResponse getAvailableLocations(supplierCode, productId, opts)

Get Available Locations

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

let apiInstance = new PsResTfulServiceApi.ProductPriceAndConfigurationApi();
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
apiInstance.getAvailableLocations(supplierCode, productId, opts, (error, data, response) => {
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

[**AvailableLocationsResponse**](AvailableLocationsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConfigurationAndPricing"></a>
# **getConfigurationAndPricing**
> ConfigurationAndPricingResponse getConfigurationAndPricing(supplierCode, productId, currency, fobId, priceType, opts)

Get Configuration And Pricing

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

let apiInstance = new PsResTfulServiceApi.ProductPriceAndConfigurationApi();
let supplierCode = null; // Object | 
let productId = null; // Object | 
let currency = null; // Object | 
let fobId = null; // Object | 
let priceType = new PsResTfulServiceApi.PriceType(); // PriceType | 
let opts = { 
  'body': null, // Object | 
  'configurationType': Decorated, // Object | 
  'partId': null, // Object | 
  'localizationCountry': US, // Object | 
  'localizationLanguage': en, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getConfigurationAndPricing(supplierCode, productId, currency, fobId, priceType, opts, (error, data, response) => {
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
 **currency** | [**Object**](.md)|  | 
 **fobId** | [**Object**](.md)|  | 
 **priceType** | [**PriceType**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **configurationType** | [**Object**](.md)|  | [optional] [default to Decorated]
 **partId** | [**Object**](.md)|  | [optional] 
 **localizationCountry** | [**Object**](.md)|  | [optional] [default to US]
 **localizationLanguage** | [**Object**](.md)|  | [optional] [default to en]
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**ConfigurationAndPricingResponse**](ConfigurationAndPricingResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDecorationColors"></a>
# **getDecorationColors**
> DecorationColorResponse getDecorationColors(supplierCode, productId, locationId, opts)

Get Decoration Colors

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

let apiInstance = new PsResTfulServiceApi.ProductPriceAndConfigurationApi();
let supplierCode = null; // Object | 
let productId = null; // Object | 
let locationId = null; // Object | 
let opts = { 
  'body': null, // Object | 
  'decorationId': null, // Object | 
  'localizationCountry': US, // Object | 
  'localizationLanguage': en, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getDecorationColors(supplierCode, productId, locationId, opts, (error, data, response) => {
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
 **locationId** | [**Object**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **decorationId** | [**Object**](.md)|  | [optional] 
 **localizationCountry** | [**Object**](.md)|  | [optional] [default to US]
 **localizationLanguage** | [**Object**](.md)|  | [optional] [default to en]
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**DecorationColorResponse**](DecorationColorResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFobPoints"></a>
# **getFobPoints**
> FobPointsResponse getFobPoints(supplierCode, productId, opts)

Get Fob Points

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

let apiInstance = new PsResTfulServiceApi.ProductPriceAndConfigurationApi();
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
apiInstance.getFobPoints(supplierCode, productId, opts, (error, data, response) => {
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

[**FobPointsResponse**](FobPointsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


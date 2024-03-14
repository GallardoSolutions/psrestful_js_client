# psrestful.OrderShipmentNotificationApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderShipmentNotificationV100**](OrderShipmentNotificationApi.md#getOrderShipmentNotificationV100) | **GET** /v1.0.0/suppliers/{supplier_code}/order-shipment-notifications/ | Get Order Shipment Notification V100
[**getOrderShipmentNotificationV200**](OrderShipmentNotificationApi.md#getOrderShipmentNotificationV200) | **GET** /v2.0.0/suppliers/{supplier_code}/order-shipment-notifications/ | Get Order Shipment Notification V200

<a name="getOrderShipmentNotificationV100"></a>
# **getOrderShipmentNotificationV100**
> GetOrderShipmentNotificationResponse getOrderShipmentNotificationV100(supplierCode, queryType, opts)

Get Order Shipment Notification V100

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

let apiInstance = new psrestful.OrderShipmentNotificationApi();
let supplierCode = null; // Object | 
let queryType = new psrestful.PsDomainModelOsnCommonQueryType(); // PsDomainModelOsnCommonQueryType | 
let opts = { 
  'body': null, // Object | 
  'referenceNumber': null, // Object | 
  'statusTimestamp': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getOrderShipmentNotificationV100(supplierCode, queryType, opts, (error, data, response) => {
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
 **queryType** | [**PsDomainModelOsnCommonQueryType**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **referenceNumber** | [**Object**](.md)|  | [optional] 
 **statusTimestamp** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetOrderShipmentNotificationResponse**](GetOrderShipmentNotificationResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderShipmentNotificationV200"></a>
# **getOrderShipmentNotificationV200**
> GetOrderShipmentNotificationResponse getOrderShipmentNotificationV200(supplierCode, queryType, opts)

Get Order Shipment Notification V200

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

let apiInstance = new psrestful.OrderShipmentNotificationApi();
let supplierCode = null; // Object | 
let queryType = new psrestful.PsDomainModelOsnCommonQueryType(); // PsDomainModelOsnCommonQueryType | 
let opts = { 
  'body': null, // Object | 
  'referenceNumber': null, // Object | 
  'shipmentDateTimestamp': null, // Object | 
  'environment': PROD, // Object | 
  'xForwardedFor': null, // Object | 
  'xAccountId': null // Object | 
};
apiInstance.getOrderShipmentNotificationV200(supplierCode, queryType, opts, (error, data, response) => {
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
 **queryType** | [**PsDomainModelOsnCommonQueryType**](.md)|  | 
 **body** | [**Object**](Object.md)|  | [optional] 
 **referenceNumber** | [**Object**](.md)|  | [optional] 
 **shipmentDateTimestamp** | [**Object**](.md)|  | [optional] 
 **environment** | [**Object**](.md)|  | [optional] [default to PROD]
 **xForwardedFor** | [**Object**](.md)|  | [optional] 
 **xAccountId** | [**Object**](.md)|  | [optional] 

### Return type

[**GetOrderShipmentNotificationResponse**](GetOrderShipmentNotificationResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBasic](../README.md#HTTPBasic), [OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


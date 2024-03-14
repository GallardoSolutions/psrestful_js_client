# psrestful.DefaultApi

All URIs are relative to *https://api.psrestful.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServiceCodes**](DefaultApi.md#getServiceCodes) | **GET** /service-codes | Get Service Codes
[**getServices**](DefaultApi.md#getServices) | **GET** /services/{supplier_code} | Get Services

<a name="getServiceCodes"></a>
# **getServiceCodes**
> Object getServiceCodes()

Get Service Codes

### Example
```javascript
import {psrestful} from 'ps_res_tful_service_api';

let apiInstance = new psrestful.DefaultApi();
apiInstance.getServiceCodes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServices"></a>
# **getServices**
> Object getServices(supplierCode)

Get Services

### Example
```javascript
import {psrestful} from 'ps_res_tful_service_api';

let apiInstance = new psrestful.DefaultApi();
let supplierCode = null; // Object | 

apiInstance.getServices(supplierCode, (error, data, response) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


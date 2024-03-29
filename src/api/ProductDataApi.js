/*
 * PS RESTful Service API
 * A proxy service for PromoStandards SOAP to a REST API
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import GetProductSellableResponseV100 from '../model/GetProductSellableResponseV100';
import GetProductSellableResponseV200 from '../model/GetProductSellableResponseV200';
import HTTPValidationError from '../model/HTTPValidationError';
import ProductCloseOutResponseV100 from '../model/ProductCloseOutResponseV100';
import ProductCloseOutResponseV200 from '../model/ProductCloseOutResponseV200';
import ProductDateModifiedResponseV100 from '../model/ProductDateModifiedResponseV100';
import ProductDateModifiedResponseV200 from '../model/ProductDateModifiedResponseV200';
import ProductResponseV100 from '../model/ProductResponseV100';
import ProductResponseV200 from '../model/ProductResponseV200';

/**
* ProductData service.
* @module api/ProductDataApi
* @version 0.0.1
*/
export default class ProductDataApi {

    /**
    * Constructs a new ProductDataApi. 
    * @alias module:api/ProductDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAllSellableProductIds operation.
     * @callback moduleapi/ProductDataApi~getAllSellableProductIdsCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sellable Product Ids
     * @param {Object} supplierCode 
     * @param {Object} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getAllSellableProductIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllSellableProductIds(supplierCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getAllSellableProductIds");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getAllSellableProductIds");
      }

      let pathParams = {
        'supplier_code': supplierCode,'api_version': apiVersion
      };
      let queryParams = {
        'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/v{api_version}/suppliers/{supplier_code}/sellable-product-ids', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductCloseoutV100 operation.
     * @callback moduleapi/ProductDataApi~getProductCloseoutV100Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductCloseOutResponseV100{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Closeout V100
     * @param {Object} supplierCode 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductCloseoutV100Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductCloseoutV100(supplierCode, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductCloseoutV100");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductCloseOutResponseV100;

      return this.apiClient.callApi(
        '/v1.0.0/suppliers/{supplier_code}/products-closeout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductCloseoutV200 operation.
     * @callback moduleapi/ProductDataApi~getProductCloseoutV200Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductCloseOutResponseV200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Closeout V200
     * @param {Object} supplierCode 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductCloseoutV200Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductCloseoutV200(supplierCode, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductCloseoutV200");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductCloseOutResponseV200;

      return this.apiClient.callApi(
        '/v2.0.0/suppliers/{supplier_code}/products-closeout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductDateModifiedV100 operation.
     * @callback moduleapi/ProductDataApi~getProductDateModifiedV100Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductDateModifiedResponseV100{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Date Modified V100
     * @param {Object} supplierCode 
     * @param {Object} since 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductDateModifiedV100Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductDateModifiedV100(supplierCode, since, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductDateModifiedV100");
      }
      // verify the required parameter 'since' is set
      if (since === undefined || since === null) {
        throw new Error("Missing the required parameter 'since' when calling getProductDateModifiedV100");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'since': since,'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductDateModifiedResponseV100;

      return this.apiClient.callApi(
        '/v1.0.0/suppliers/{supplier_code}/products-modified-since', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductDateModifiedV200 operation.
     * @callback moduleapi/ProductDataApi~getProductDateModifiedV200Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductDateModifiedResponseV200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Date Modified V200
     * @param {Object} supplierCode 
     * @param {Object} since 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductDateModifiedV200Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductDateModifiedV200(supplierCode, since, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductDateModifiedV200");
      }
      // verify the required parameter 'since' is set
      if (since === undefined || since === null) {
        throw new Error("Missing the required parameter 'since' when calling getProductDateModifiedV200");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'since': since,'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductDateModifiedResponseV200;

      return this.apiClient.callApi(
        '/v2.0.0/suppliers/{supplier_code}/products-modified-since', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductSellableV100 operation.
     * @callback moduleapi/ProductDataApi~getProductSellableV100Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProductSellableResponseV100{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sellables V100
     * @param {Object} supplierCode 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductSellableV100Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductSellableV100(supplierCode, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductSellableV100");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetProductSellableResponseV100;

      return this.apiClient.callApi(
        '/v1.0.0/suppliers/{supplier_code}/sellable-products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductSellableV200 operation.
     * @callback moduleapi/ProductDataApi~getProductSellableV200Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProductSellableResponseV200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sellables V200
     * @param {Object} supplierCode 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductSellableV200Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductSellableV200(supplierCode, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductSellableV200");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetProductSellableResponseV200;

      return this.apiClient.callApi(
        '/v2.0.0/suppliers/{supplier_code}/sellable-products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductV100 operation.
     * @callback moduleapi/ProductDataApi~getProductV100Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponseV100{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product V100
     * @param {Object} supplierCode 
     * @param {Object} productId 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.localizationCountry  (default to <.>)
     * @param {Object} opts.localizationLanguage  (default to <.>)
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductV100Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductV100(supplierCode, productId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductV100");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductV100");
      }

      let pathParams = {
        'supplier_code': supplierCode,'product_id': productId
      };
      let queryParams = {
        'localization_country': opts['localizationCountry'],'localization_language': opts['localizationLanguage'],'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductResponseV100;

      return this.apiClient.callApi(
        '/v1.0.0/suppliers/{supplier_code}/products/{product_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProductV200 operation.
     * @callback moduleapi/ProductDataApi~getProductV200Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponseV200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product V200
     * @param {Object} supplierCode 
     * @param {Object} productId 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.localizationCountry  (default to <.>)
     * @param {Object} opts.localizationLanguage  (default to <.>)
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/ProductDataApi~getProductV200Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProductV200(supplierCode, productId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getProductV200");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductV200");
      }

      let pathParams = {
        'supplier_code': supplierCode,'product_id': productId
      };
      let queryParams = {
        'localization_country': opts['localizationCountry'],'localization_language': opts['localizationLanguage'],'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductResponseV200;

      return this.apiClient.callApi(
        '/v2.0.0/suppliers/{supplier_code}/products/{product_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
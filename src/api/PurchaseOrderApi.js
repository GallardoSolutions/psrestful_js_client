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
import BodySendPo from '../model/BodySendPo';
import GetSupportedOrderTypesResponse from '../model/GetSupportedOrderTypesResponse';
import HTTPValidationError from '../model/HTTPValidationError';
import SendPOResponse from '../model/SendPOResponse';

/**
* PurchaseOrder service.
* @module api/PurchaseOrderApi
* @version 0.0.1
*/
export default class PurchaseOrderApi {

    /**
    * Constructs a new PurchaseOrderApi. 
    * @alias module:api/PurchaseOrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getSupportedOrderTypes operation.
     * @callback moduleapi/PurchaseOrderApi~getSupportedOrderTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSupportedOrderTypesResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Supported Order Types
     * This function returns the supported Order Types the vendor accepts.
     * @param {Object} supplierCode 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/PurchaseOrderApi~getSupportedOrderTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSupportedOrderTypes(supplierCode, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getSupportedOrderTypes");
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
      let returnType = GetSupportedOrderTypesResponse;

      return this.apiClient.callApi(
        '/v1.0.0/suppliers/{supplier_code}/supported-order-types/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sendPo operation.
     * @callback moduleapi/PurchaseOrderApi~sendPoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendPOResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Po
     * This function will send blank, sample, simple or configured purchase order to a supplier. The purchase order service is designed to work in conjunction with data from PPC service
     * @param {module:model/BodySendPo} body 
     * @param {Object} supplierCode 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/PurchaseOrderApi~sendPoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sendPo(body, supplierCode, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendPo");
      }
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling sendPo");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SendPOResponse;

      return this.apiClient.callApi(
        '/v1.0.0/suppliers/{supplier_code}/purchase-orders/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
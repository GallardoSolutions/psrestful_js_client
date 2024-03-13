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
import GetOrderShipmentNotificationResponse from '../model/GetOrderShipmentNotificationResponse';
import HTTPValidationError from '../model/HTTPValidationError';
import PsDomainModelOsnCommonQueryType from '../model/PsDomainModelOsnCommonQueryType';

/**
* OrderShipmentNotification service.
* @module api/OrderShipmentNotificationApi
* @version 0.0.1
*/
export default class OrderShipmentNotificationApi {

    /**
    * Constructs a new OrderShipmentNotificationApi. 
    * @alias module:api/OrderShipmentNotificationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getOrderShipmentNotificationV100 operation.
     * @callback moduleapi/OrderShipmentNotificationApi~getOrderShipmentNotificationV100Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderShipmentNotificationResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Order Shipment Notification V100
     * @param {Object} supplierCode 
     * @param {module:model/PsDomainModelOsnCommonQueryType} queryType 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.referenceNumber 
     * @param {Object} opts.statusTimestamp 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/OrderShipmentNotificationApi~getOrderShipmentNotificationV100Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrderShipmentNotificationV100(supplierCode, queryType, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getOrderShipmentNotificationV100");
      }
      // verify the required parameter 'queryType' is set
      if (queryType === undefined || queryType === null) {
        throw new Error("Missing the required parameter 'queryType' when calling getOrderShipmentNotificationV100");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'query_type': queryType,'reference_number': opts['referenceNumber'],'status_timestamp': opts['statusTimestamp'],'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetOrderShipmentNotificationResponse;

      return this.apiClient.callApi(
        '/v1.0.0/suppliers/{supplier_code}/order-shipment-notifications/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrderShipmentNotificationV200 operation.
     * @callback moduleapi/OrderShipmentNotificationApi~getOrderShipmentNotificationV200Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderShipmentNotificationResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Order Shipment Notification V200
     * @param {Object} supplierCode 
     * @param {module:model/PsDomainModelOsnCommonQueryType} queryType 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Object} opts.referenceNumber 
     * @param {Object} opts.shipmentDateTimestamp 
     * @param {Object} opts.environment  (default to <.>)
     * @param {Object} opts.xForwardedFor 
     * @param {Object} opts.xAccountId 
     * @param {module:api/OrderShipmentNotificationApi~getOrderShipmentNotificationV200Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrderShipmentNotificationV200(supplierCode, queryType, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'supplierCode' is set
      if (supplierCode === undefined || supplierCode === null) {
        throw new Error("Missing the required parameter 'supplierCode' when calling getOrderShipmentNotificationV200");
      }
      // verify the required parameter 'queryType' is set
      if (queryType === undefined || queryType === null) {
        throw new Error("Missing the required parameter 'queryType' when calling getOrderShipmentNotificationV200");
      }

      let pathParams = {
        'supplier_code': supplierCode
      };
      let queryParams = {
        'query_type': queryType,'reference_number': opts['referenceNumber'],'shipment_date_timestamp': opts['shipmentDateTimestamp'],'environment': opts['environment']
      };
      let headerParams = {
        'X-Forwarded-For': opts['xForwardedFor'],'x-account-id': opts['xAccountId']
      };
      let formParams = {
        
      };

      let authNames = ['APIKeyHeader', 'HTTPBasic', 'OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetOrderShipmentNotificationResponse;

      return this.apiClient.callApi(
        '/v2.0.0/suppliers/{supplier_code}/order-shipment-notifications/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
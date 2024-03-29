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
import ApiClient from '../ApiClient';

/**
 * The GetSupportedOrderTypesResponse model module.
 * @module model/GetSupportedOrderTypesResponse
 * @version 0.0.1
 */
export default class GetSupportedOrderTypesResponse {
  /**
   * Constructs a new <code>GetSupportedOrderTypesResponse</code>.
   * Response to a getSupportedOrderTypes method.
   * @alias module:model/GetSupportedOrderTypesResponse
   * @class
   * @param supportedOrderTypes {Object} 
   * @param serviceMessageArray {Object} 
   */
  constructor(supportedOrderTypes, serviceMessageArray) {
    this.supportedOrderTypes = supportedOrderTypes;
    this.serviceMessageArray = serviceMessageArray;
  }

  /**
   * Constructs a <code>GetSupportedOrderTypesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSupportedOrderTypesResponse} obj Optional instance to populate.
   * @return {module:model/GetSupportedOrderTypesResponse} The populated <code>GetSupportedOrderTypesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSupportedOrderTypesResponse();
      if (data.hasOwnProperty('supportedOrderTypes'))
        obj.supportedOrderTypes = ApiClient.convertToType(data['supportedOrderTypes'], Object);
      if (data.hasOwnProperty('ServiceMessageArray'))
        obj.serviceMessageArray = ApiClient.convertToType(data['ServiceMessageArray'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} supportedOrderTypes
 */
GetSupportedOrderTypesResponse.prototype.supportedOrderTypes = undefined;

/**
 * @member {Object} serviceMessageArray
 */
GetSupportedOrderTypesResponse.prototype.serviceMessageArray = undefined;


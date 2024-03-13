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
 * The AvailableChargesResponse model module.
 * @module model/AvailableChargesResponse
 * @version 0.0.1
 */
export default class AvailableChargesResponse {
  /**
   * Constructs a new <code>AvailableChargesResponse</code>.
   * @alias module:model/AvailableChargesResponse
   * @class
   * @param availableChargeArray {Object} 
   */
  constructor(availableChargeArray) {
    this.availableChargeArray = availableChargeArray;
  }

  /**
   * Constructs a <code>AvailableChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableChargesResponse} obj Optional instance to populate.
   * @return {module:model/AvailableChargesResponse} The populated <code>AvailableChargesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AvailableChargesResponse();
      if (data.hasOwnProperty('AvailableChargeArray'))
        obj.availableChargeArray = ApiClient.convertToType(data['AvailableChargeArray'], Object);
      if (data.hasOwnProperty('ErrorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['ErrorMessage'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} availableChargeArray
 */
AvailableChargesResponse.prototype.availableChargeArray = undefined;

/**
 * @member {Object} errorMessage
 */
AvailableChargesResponse.prototype.errorMessage = undefined;


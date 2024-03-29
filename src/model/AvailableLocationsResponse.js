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
 * The AvailableLocationsResponse model module.
 * @module model/AvailableLocationsResponse
 * @version 0.0.1
 */
export default class AvailableLocationsResponse {
  /**
   * Constructs a new <code>AvailableLocationsResponse</code>.
   * @alias module:model/AvailableLocationsResponse
   * @class
   * @param availableLocationArray {Object} 
   * @param errorMessage {Object} 
   */
  constructor(availableLocationArray, errorMessage) {
    this.availableLocationArray = availableLocationArray;
    this.errorMessage = errorMessage;
  }

  /**
   * Constructs a <code>AvailableLocationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableLocationsResponse} obj Optional instance to populate.
   * @return {module:model/AvailableLocationsResponse} The populated <code>AvailableLocationsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AvailableLocationsResponse();
      if (data.hasOwnProperty('AvailableLocationArray'))
        obj.availableLocationArray = ApiClient.convertToType(data['AvailableLocationArray'], Object);
      if (data.hasOwnProperty('ErrorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['ErrorMessage'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} availableLocationArray
 */
AvailableLocationsResponse.prototype.availableLocationArray = undefined;

/**
 * @member {Object} errorMessage
 */
AvailableLocationsResponse.prototype.errorMessage = undefined;


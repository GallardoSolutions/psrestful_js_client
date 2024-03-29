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
 * The AvailableLocationArray model module.
 * @module model/AvailableLocationArray
 * @version 0.0.1
 */
export default class AvailableLocationArray {
  /**
   * Constructs a new <code>AvailableLocationArray</code>.
   * @alias module:model/AvailableLocationArray
   * @class
   * @param availableLocation {Object} 
   */
  constructor(availableLocation) {
    this.availableLocation = availableLocation;
  }

  /**
   * Constructs a <code>AvailableLocationArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableLocationArray} obj Optional instance to populate.
   * @return {module:model/AvailableLocationArray} The populated <code>AvailableLocationArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AvailableLocationArray();
      if (data.hasOwnProperty('AvailableLocation'))
        obj.availableLocation = ApiClient.convertToType(data['AvailableLocation'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} availableLocation
 */
AvailableLocationArray.prototype.availableLocation = undefined;


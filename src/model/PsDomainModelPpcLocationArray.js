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
 * The PsDomainModelPpcLocationArray model module.
 * @module model/PsDomainModelPpcLocationArray
 * @version 0.0.1
 */
export default class PsDomainModelPpcLocationArray {
  /**
   * Constructs a new <code>PsDomainModelPpcLocationArray</code>.
   * @alias module:model/PsDomainModelPpcLocationArray
   * @class
   * @param location {Object} 
   */
  constructor(location) {
    this.location = location;
  }

  /**
   * Constructs a <code>PsDomainModelPpcLocationArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PsDomainModelPpcLocationArray} obj Optional instance to populate.
   * @return {module:model/PsDomainModelPpcLocationArray} The populated <code>PsDomainModelPpcLocationArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PsDomainModelPpcLocationArray();
      if (data.hasOwnProperty('Location'))
        obj.location = ApiClient.convertToType(data['Location'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} location
 */
PsDomainModelPpcLocationArray.prototype.location = undefined;


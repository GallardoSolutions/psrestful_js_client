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
 * The PsDomainModelProductDataCommonLocation model module.
 * @module model/PsDomainModelProductDataCommonLocation
 * @version 0.0.1
 */
export default class PsDomainModelProductDataCommonLocation {
  /**
   * Constructs a new <code>PsDomainModelProductDataCommonLocation</code>.
   * @alias module:model/PsDomainModelProductDataCommonLocation
   * @class
   * @param locationId {Object} 
   * @param locationName {Object} 
   */
  constructor(locationId, locationName) {
    this.locationId = locationId;
    this.locationName = locationName;
  }

  /**
   * Constructs a <code>PsDomainModelProductDataCommonLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PsDomainModelProductDataCommonLocation} obj Optional instance to populate.
   * @return {module:model/PsDomainModelProductDataCommonLocation} The populated <code>PsDomainModelProductDataCommonLocation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PsDomainModelProductDataCommonLocation();
      if (data.hasOwnProperty('locationId'))
        obj.locationId = ApiClient.convertToType(data['locationId'], Object);
      if (data.hasOwnProperty('locationName'))
        obj.locationName = ApiClient.convertToType(data['locationName'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} locationId
 */
PsDomainModelProductDataCommonLocation.prototype.locationId = undefined;

/**
 * @member {Object} locationName
 */
PsDomainModelProductDataCommonLocation.prototype.locationName = undefined;


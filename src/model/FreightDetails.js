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
 * The FreightDetails model module.
 * @module model/FreightDetails
 * @version 0.0.1
 */
export default class FreightDetails {
  /**
   * Constructs a new <code>FreightDetails</code>.
   * @alias module:model/FreightDetails
   * @class
   * @param carrier {Object} The carrier name of the shipping vendor being requested. (i.e. “UPS”, “FEDEX”, etc.)
   * @param service {Object} The service code of the shipping vendor for the service being requested. i.e. GROUND, 2DAY, NEXTDAY, etc.
   */
  constructor(carrier, service) {
    this.carrier = carrier;
    this.service = service;
  }

  /**
   * Constructs a <code>FreightDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FreightDetails} obj Optional instance to populate.
   * @return {module:model/FreightDetails} The populated <code>FreightDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FreightDetails();
      if (data.hasOwnProperty('carrier'))
        obj.carrier = ApiClient.convertToType(data['carrier'], Object);
      if (data.hasOwnProperty('service'))
        obj.service = ApiClient.convertToType(data['service'], Object);
    }
    return obj;
  }
}

/**
 * The carrier name of the shipping vendor being requested. (i.e. “UPS”, “FEDEX”, etc.)
 * @member {Object} carrier
 */
FreightDetails.prototype.carrier = undefined;

/**
 * The service code of the shipping vendor for the service being requested. i.e. GROUND, 2DAY, NEXTDAY, etc.
 * @member {Object} service
 */
FreightDetails.prototype.service = undefined;

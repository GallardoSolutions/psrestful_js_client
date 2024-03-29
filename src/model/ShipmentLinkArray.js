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
 * The ShipmentLinkArray model module.
 * @module model/ShipmentLinkArray
 * @version 0.0.1
 */
export default class ShipmentLinkArray {
  /**
   * Constructs a new <code>ShipmentLinkArray</code>.
   * @alias module:model/ShipmentLinkArray
   * @class
   * @param shipmentLink {Object} 
   */
  constructor(shipmentLink) {
    this.shipmentLink = shipmentLink;
  }

  /**
   * Constructs a <code>ShipmentLinkArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentLinkArray} obj Optional instance to populate.
   * @return {module:model/ShipmentLinkArray} The populated <code>ShipmentLinkArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShipmentLinkArray();
      if (data.hasOwnProperty('ShipmentLink'))
        obj.shipmentLink = ApiClient.convertToType(data['ShipmentLink'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} shipmentLink
 */
ShipmentLinkArray.prototype.shipmentLink = undefined;


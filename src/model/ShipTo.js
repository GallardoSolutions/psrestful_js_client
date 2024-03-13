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
import ContactDetailsInput from './ContactDetailsInput';

/**
 * The ShipTo model module.
 * @module model/ShipTo
 * @version 0.0.1
 */
export default class ShipTo {
  /**
   * Constructs a new <code>ShipTo</code>.
   * @alias module:model/ShipTo
   * @class
   * @param customerPickup {Object} 
   * @param shipmentId {Object} 
   * @param contactDetails {module:model/ContactDetailsInput} 
   */
  constructor(customerPickup, shipmentId, contactDetails) {
    this.customerPickup = customerPickup;
    this.shipmentId = shipmentId;
    this.contactDetails = contactDetails;
  }

  /**
   * Constructs a <code>ShipTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipTo} obj Optional instance to populate.
   * @return {module:model/ShipTo} The populated <code>ShipTo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShipTo();
      if (data.hasOwnProperty('customerPickup'))
        obj.customerPickup = ApiClient.convertToType(data['customerPickup'], Object);
      if (data.hasOwnProperty('shipmentId'))
        obj.shipmentId = ApiClient.convertToType(data['shipmentId'], Object);
      if (data.hasOwnProperty('ContactDetails'))
        obj.contactDetails = ContactDetailsInput.constructFromObject(data['ContactDetails']);
    }
    return obj;
  }
}

/**
 * @member {Object} customerPickup
 */
ShipTo.prototype.customerPickup = undefined;

/**
 * @member {Object} shipmentId
 */
ShipTo.prototype.shipmentId = undefined;

/**
 * @member {module:model/ContactDetailsInput} contactDetails
 */
ShipTo.prototype.contactDetails = undefined;

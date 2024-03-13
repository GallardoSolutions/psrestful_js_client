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
import Address from './Address';

/**
 * The ShipmentLocation model module.
 * @module model/ShipmentLocation
 * @version 0.0.1
 */
export default class ShipmentLocation {
  /**
   * Constructs a new <code>ShipmentLocation</code>.
   * @alias module:model/ShipmentLocation
   * @class
   * @param id {Object} 
   * @param complete {Object} 
   * @param shipFromAddress {module:model/Address} 
   * @param shipToAddress {module:model/Address} 
   * @param shipmentDestinationType {Object} 
   * @param packageArray {Object} 
   */
  constructor(id, complete, shipFromAddress, shipToAddress, shipmentDestinationType, packageArray) {
    this.id = id;
    this.complete = complete;
    this.shipFromAddress = shipFromAddress;
    this.shipToAddress = shipToAddress;
    this.shipmentDestinationType = shipmentDestinationType;
    this.packageArray = packageArray;
  }

  /**
   * Constructs a <code>ShipmentLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentLocation} obj Optional instance to populate.
   * @return {module:model/ShipmentLocation} The populated <code>ShipmentLocation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShipmentLocation();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], Object);
      if (data.hasOwnProperty('complete'))
        obj.complete = ApiClient.convertToType(data['complete'], Object);
      if (data.hasOwnProperty('ShipFromAddress'))
        obj.shipFromAddress = Address.constructFromObject(data['ShipFromAddress']);
      if (data.hasOwnProperty('ShipToAddress'))
        obj.shipToAddress = Address.constructFromObject(data['ShipToAddress']);
      if (data.hasOwnProperty('shipmentDestinationType'))
        obj.shipmentDestinationType = ApiClient.convertToType(data['shipmentDestinationType'], Object);
      if (data.hasOwnProperty('PackageArray'))
        obj.packageArray = ApiClient.convertToType(data['PackageArray'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} id
 */
ShipmentLocation.prototype.id = undefined;

/**
 * @member {Object} complete
 */
ShipmentLocation.prototype.complete = undefined;

/**
 * @member {module:model/Address} shipFromAddress
 */
ShipmentLocation.prototype.shipFromAddress = undefined;

/**
 * @member {module:model/Address} shipToAddress
 */
ShipmentLocation.prototype.shipToAddress = undefined;

/**
 * @member {Object} shipmentDestinationType
 */
ShipmentLocation.prototype.shipmentDestinationType = undefined;

/**
 * @member {Object} packageArray
 */
ShipmentLocation.prototype.packageArray = undefined;

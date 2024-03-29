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
import QuantityInput from './QuantityInput';

/**
 * The PartInput model module.
 * @module model/PartInput
 * @version 0.0.1
 */
export default class PartInput {
  /**
   * Constructs a new <code>PartInput</code>.
   * @alias module:model/PartInput
   * @class
   * @param partGroup {Object} An identifier that links common line item parts together
   * @param partId {Object} The part Id from the supplier’s PromoStandards Product Pricing and Configuration service
   * @param quantity {module:model/QuantityInput} 
   * @param customerPartId {Object} How the part is being represented to the distributor’s customer
   * @param customerSupplied {Object} The part will be supplied by the customer or another entity other than the supplier
   * @param description {Object} The description from the supplier’s PromoStandards Product Pricing and Configuration service
   * @param locationLinkId {Object} An array of location link Ids.  This links the part to its configured locations
   * @param unitPrice {Object} 
   * @param extendedPrice {Object} 
   * @param shipmentLinkArray {Object} 
   */
  constructor(partGroup, partId, quantity, customerPartId, customerSupplied, description, locationLinkId, unitPrice, extendedPrice, shipmentLinkArray) {
    this.partGroup = partGroup;
    this.partId = partId;
    this.quantity = quantity;
    this.customerPartId = customerPartId;
    this.customerSupplied = customerSupplied;
    this.description = description;
    this.locationLinkId = locationLinkId;
    this.unitPrice = unitPrice;
    this.extendedPrice = extendedPrice;
    this.shipmentLinkArray = shipmentLinkArray;
  }

  /**
   * Constructs a <code>PartInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartInput} obj Optional instance to populate.
   * @return {module:model/PartInput} The populated <code>PartInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartInput();
      if (data.hasOwnProperty('partGroup'))
        obj.partGroup = ApiClient.convertToType(data['partGroup'], Object);
      if (data.hasOwnProperty('partId'))
        obj.partId = ApiClient.convertToType(data['partId'], Object);
      if (data.hasOwnProperty('Quantity'))
        obj.quantity = QuantityInput.constructFromObject(data['Quantity']);
      if (data.hasOwnProperty('customerPartId'))
        obj.customerPartId = ApiClient.convertToType(data['customerPartId'], Object);
      if (data.hasOwnProperty('customerSupplied'))
        obj.customerSupplied = ApiClient.convertToType(data['customerSupplied'], Object);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], Object);
      if (data.hasOwnProperty('locationLinkId'))
        obj.locationLinkId = ApiClient.convertToType(data['locationLinkId'], Object);
      if (data.hasOwnProperty('unitPrice'))
        obj.unitPrice = ApiClient.convertToType(data['unitPrice'], Object);
      if (data.hasOwnProperty('extendedPrice'))
        obj.extendedPrice = ApiClient.convertToType(data['extendedPrice'], Object);
      if (data.hasOwnProperty('ShipmentLinkArray'))
        obj.shipmentLinkArray = ApiClient.convertToType(data['ShipmentLinkArray'], Object);
    }
    return obj;
  }
}

/**
 * An identifier that links common line item parts together
 * @member {Object} partGroup
 */
PartInput.prototype.partGroup = undefined;

/**
 * The part Id from the supplier’s PromoStandards Product Pricing and Configuration service
 * @member {Object} partId
 */
PartInput.prototype.partId = undefined;

/**
 * @member {module:model/QuantityInput} quantity
 */
PartInput.prototype.quantity = undefined;

/**
 * How the part is being represented to the distributor’s customer
 * @member {Object} customerPartId
 */
PartInput.prototype.customerPartId = undefined;

/**
 * The part will be supplied by the customer or another entity other than the supplier
 * @member {Object} customerSupplied
 */
PartInput.prototype.customerSupplied = undefined;

/**
 * The description from the supplier’s PromoStandards Product Pricing and Configuration service
 * @member {Object} description
 */
PartInput.prototype.description = undefined;

/**
 * An array of location link Ids.  This links the part to its configured locations
 * @member {Object} locationLinkId
 */
PartInput.prototype.locationLinkId = undefined;

/**
 * @member {Object} unitPrice
 */
PartInput.prototype.unitPrice = undefined;

/**
 * @member {Object} extendedPrice
 */
PartInput.prototype.extendedPrice = undefined;

/**
 * @member {Object} shipmentLinkArray
 */
PartInput.prototype.shipmentLinkArray = undefined;


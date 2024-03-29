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
 * The ProductVariationInventory model module.
 * @module model/ProductVariationInventory
 * @version 0.0.1
 */
export default class ProductVariationInventory {
  /**
   * Constructs a new <code>ProductVariationInventory</code>.
   * @alias module:model/ProductVariationInventory
   * @class
   * @param partID {Object} 
   * @param quantityAvailable {Object} 
   */
  constructor(partID, quantityAvailable) {
    this.partID = partID;
    this.quantityAvailable = quantityAvailable;
  }

  /**
   * Constructs a <code>ProductVariationInventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductVariationInventory} obj Optional instance to populate.
   * @return {module:model/ProductVariationInventory} The populated <code>ProductVariationInventory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductVariationInventory();
      if (data.hasOwnProperty('partID'))
        obj.partID = ApiClient.convertToType(data['partID'], Object);
      if (data.hasOwnProperty('partDescription'))
        obj.partDescription = ApiClient.convertToType(data['partDescription'], Object);
      if (data.hasOwnProperty('partBrand'))
        obj.partBrand = ApiClient.convertToType(data['partBrand'], Object);
      if (data.hasOwnProperty('priceVariance'))
        obj.priceVariance = ApiClient.convertToType(data['priceVariance'], Object);
      if (data.hasOwnProperty('quantityAvailable'))
        obj.quantityAvailable = ApiClient.convertToType(data['quantityAvailable'], Object);
      if (data.hasOwnProperty('attributeColor'))
        obj.attributeColor = ApiClient.convertToType(data['attributeColor'], Object);
      if (data.hasOwnProperty('attributeSize'))
        obj.attributeSize = ApiClient.convertToType(data['attributeSize'], Object);
      if (data.hasOwnProperty('attributeSelection'))
        obj.attributeSelection = ApiClient.convertToType(data['attributeSelection'], Object);
      if (data.hasOwnProperty('AttributeFlexArray'))
        obj.attributeFlexArray = ApiClient.convertToType(data['AttributeFlexArray'], Object);
      if (data.hasOwnProperty('customProductMessage'))
        obj.customProductMessage = ApiClient.convertToType(data['customProductMessage'], Object);
      if (data.hasOwnProperty('entryType'))
        obj.entryType = ApiClient.convertToType(data['entryType'], Object);
      if (data.hasOwnProperty('validTimestamp'))
        obj.validTimestamp = ApiClient.convertToType(data['validTimestamp'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} partID
 */
ProductVariationInventory.prototype.partID = undefined;

/**
 * @member {Object} partDescription
 */
ProductVariationInventory.prototype.partDescription = undefined;

/**
 * @member {Object} partBrand
 */
ProductVariationInventory.prototype.partBrand = undefined;

/**
 * @member {Object} priceVariance
 */
ProductVariationInventory.prototype.priceVariance = undefined;

/**
 * @member {Object} quantityAvailable
 */
ProductVariationInventory.prototype.quantityAvailable = undefined;

/**
 * @member {Object} attributeColor
 */
ProductVariationInventory.prototype.attributeColor = undefined;

/**
 * @member {Object} attributeSize
 */
ProductVariationInventory.prototype.attributeSize = undefined;

/**
 * @member {Object} attributeSelection
 */
ProductVariationInventory.prototype.attributeSelection = undefined;

/**
 * @member {Object} attributeFlexArray
 */
ProductVariationInventory.prototype.attributeFlexArray = undefined;

/**
 * @member {Object} customProductMessage
 */
ProductVariationInventory.prototype.customProductMessage = undefined;

/**
 * @member {Object} entryType
 */
ProductVariationInventory.prototype.entryType = undefined;

/**
 * @member {Object} validTimestamp
 */
ProductVariationInventory.prototype.validTimestamp = undefined;


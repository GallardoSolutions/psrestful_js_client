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
 * The InventoryLevelsResponseV121 model module.
 * @module model/InventoryLevelsResponseV121
 * @version 0.0.1
 */
export default class InventoryLevelsResponseV121 {
  /**
   * Constructs a new <code>InventoryLevelsResponseV121</code>.
   * @alias module:model/InventoryLevelsResponseV121
   * @class
   * @param productID {Object} 
   * @param productVariationInventoryArray {Object} 
   */
  constructor(productID, productVariationInventoryArray) {
    this.productID = productID;
    this.productVariationInventoryArray = productVariationInventoryArray;
  }

  /**
   * Constructs a <code>InventoryLevelsResponseV121</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InventoryLevelsResponseV121} obj Optional instance to populate.
   * @return {module:model/InventoryLevelsResponseV121} The populated <code>InventoryLevelsResponseV121</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InventoryLevelsResponseV121();
      if (data.hasOwnProperty('productID'))
        obj.productID = ApiClient.convertToType(data['productID'], Object);
      if (data.hasOwnProperty('ProductVariationInventoryArray'))
        obj.productVariationInventoryArray = ApiClient.convertToType(data['ProductVariationInventoryArray'], Object);
      if (data.hasOwnProperty('ProductCompanionInventoryArray'))
        obj.productCompanionInventoryArray = ApiClient.convertToType(data['ProductCompanionInventoryArray'], Object);
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], Object);
      if (data.hasOwnProperty('CustomMessageArray'))
        obj.customMessageArray = ApiClient.convertToType(data['CustomMessageArray'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} productID
 */
InventoryLevelsResponseV121.prototype.productID = undefined;

/**
 * @member {Object} productVariationInventoryArray
 */
InventoryLevelsResponseV121.prototype.productVariationInventoryArray = undefined;

/**
 * @member {Object} productCompanionInventoryArray
 */
InventoryLevelsResponseV121.prototype.productCompanionInventoryArray = undefined;

/**
 * @member {Object} errorMessage
 */
InventoryLevelsResponseV121.prototype.errorMessage = undefined;

/**
 * @member {Object} customMessageArray
 */
InventoryLevelsResponseV121.prototype.customMessageArray = undefined;

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
 * The ProductVariationInventoryArray model module.
 * @module model/ProductVariationInventoryArray
 * @version 0.0.1
 */
export default class ProductVariationInventoryArray {
  /**
   * Constructs a new <code>ProductVariationInventoryArray</code>.
   * @alias module:model/ProductVariationInventoryArray
   * @class
   * @param productVariationInventory {Object} 
   */
  constructor(productVariationInventory) {
    this.productVariationInventory = productVariationInventory;
  }

  /**
   * Constructs a <code>ProductVariationInventoryArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductVariationInventoryArray} obj Optional instance to populate.
   * @return {module:model/ProductVariationInventoryArray} The populated <code>ProductVariationInventoryArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductVariationInventoryArray();
      if (data.hasOwnProperty('ProductVariationInventory'))
        obj.productVariationInventory = ApiClient.convertToType(data['ProductVariationInventory'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} productVariationInventory
 */
ProductVariationInventoryArray.prototype.productVariationInventory = undefined;

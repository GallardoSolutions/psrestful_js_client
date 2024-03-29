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
 * The ProductSellableArray model module.
 * @module model/ProductSellableArray
 * @version 0.0.1
 */
export default class ProductSellableArray {
  /**
   * Constructs a new <code>ProductSellableArray</code>.
   * @alias module:model/ProductSellableArray
   * @class
   * @param productSellable {Object} 
   */
  constructor(productSellable) {
    this.productSellable = productSellable;
  }

  /**
   * Constructs a <code>ProductSellableArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSellableArray} obj Optional instance to populate.
   * @return {module:model/ProductSellableArray} The populated <code>ProductSellableArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductSellableArray();
      if (data.hasOwnProperty('ProductSellable'))
        obj.productSellable = ApiClient.convertToType(data['ProductSellable'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} productSellable
 */
ProductSellableArray.prototype.productSellable = undefined;


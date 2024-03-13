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
 * The ProductArray model module.
 * @module model/ProductArray
 * @version 0.0.1
 */
export default class ProductArray {
  /**
   * Constructs a new <code>ProductArray</code>.
   * @alias module:model/ProductArray
   * @class
   * @param product {Object} 
   */
  constructor(product) {
    this.product = product;
  }

  /**
   * Constructs a <code>ProductArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductArray} obj Optional instance to populate.
   * @return {module:model/ProductArray} The populated <code>ProductArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductArray();
      if (data.hasOwnProperty('Product'))
        obj.product = ApiClient.convertToType(data['Product'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} product
 */
ProductArray.prototype.product = undefined;


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
 * The ProductPartArray model module.
 * @module model/ProductPartArray
 * @version 0.0.1
 */
export default class ProductPartArray {
  /**
   * Constructs a new <code>ProductPartArray</code>.
   * @alias module:model/ProductPartArray
   * @class
   * @param productPart {Object} 
   */
  constructor(productPart) {
    this.productPart = productPart;
  }

  /**
   * Constructs a <code>ProductPartArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPartArray} obj Optional instance to populate.
   * @return {module:model/ProductPartArray} The populated <code>ProductPartArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductPartArray();
      if (data.hasOwnProperty('ProductPart'))
        obj.productPart = ApiClient.convertToType(data['ProductPart'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} productPart
 */
ProductPartArray.prototype.productPart = undefined;


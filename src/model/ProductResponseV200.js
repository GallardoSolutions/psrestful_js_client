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
 * The ProductResponseV200 model module.
 * @module model/ProductResponseV200
 * @version 0.0.1
 */
export default class ProductResponseV200 {
  /**
   * Constructs a new <code>ProductResponseV200</code>.
   * @alias module:model/ProductResponseV200
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProductResponseV200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductResponseV200} obj Optional instance to populate.
   * @return {module:model/ProductResponseV200} The populated <code>ProductResponseV200</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductResponseV200();
      if (data.hasOwnProperty('Product'))
        obj.product = ApiClient.convertToType(data['Product'], Object);
      if (data.hasOwnProperty('ServiceMessageArray'))
        obj.serviceMessageArray = ApiClient.convertToType(data['ServiceMessageArray'], Object);
    }
    return obj;
  }
}

/**
 * Product Information
 * @member {Object} product
 */
ProductResponseV200.prototype.product = undefined;

/**
 * @member {Object} serviceMessageArray
 */
ProductResponseV200.prototype.serviceMessageArray = undefined;


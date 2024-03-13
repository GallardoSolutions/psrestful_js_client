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
 * The ProductDateModifiedResponseV100 model module.
 * @module model/ProductDateModifiedResponseV100
 * @version 0.0.1
 */
export default class ProductDateModifiedResponseV100 {
  /**
   * Constructs a new <code>ProductDateModifiedResponseV100</code>.
   * @alias module:model/ProductDateModifiedResponseV100
   * @class
   * @param productDateModifiedArray {Object} 
   */
  constructor(productDateModifiedArray) {
    this.productDateModifiedArray = productDateModifiedArray;
  }

  /**
   * Constructs a <code>ProductDateModifiedResponseV100</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductDateModifiedResponseV100} obj Optional instance to populate.
   * @return {module:model/ProductDateModifiedResponseV100} The populated <code>ProductDateModifiedResponseV100</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductDateModifiedResponseV100();
      if (data.hasOwnProperty('ProductDateModifiedArray'))
        obj.productDateModifiedArray = ApiClient.convertToType(data['ProductDateModifiedArray'], Object);
      if (data.hasOwnProperty('ErrorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['ErrorMessage'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} productDateModifiedArray
 */
ProductDateModifiedResponseV100.prototype.productDateModifiedArray = undefined;

/**
 * @member {Object} errorMessage
 */
ProductDateModifiedResponseV100.prototype.errorMessage = undefined;


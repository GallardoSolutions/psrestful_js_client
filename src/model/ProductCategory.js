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
 * The ProductCategory model module.
 * @module model/ProductCategory
 * @version 0.0.1
 */
export default class ProductCategory {
  /**
   * Constructs a new <code>ProductCategory</code>.
   * @alias module:model/ProductCategory
   * @class
   * @param category {Object} 
   * @param subCategory {Object} 
   */
  constructor(category, subCategory) {
    this.category = category;
    this.subCategory = subCategory;
  }

  /**
   * Constructs a <code>ProductCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductCategory} obj Optional instance to populate.
   * @return {module:model/ProductCategory} The populated <code>ProductCategory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductCategory();
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], Object);
      if (data.hasOwnProperty('subCategory'))
        obj.subCategory = ApiClient.convertToType(data['subCategory'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} category
 */
ProductCategory.prototype.category = undefined;

/**
 * @member {Object} subCategory
 */
ProductCategory.prototype.subCategory = undefined;


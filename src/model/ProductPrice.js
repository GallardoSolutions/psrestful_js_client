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
 * The ProductPrice model module.
 * @module model/ProductPrice
 * @version 0.0.1
 */
export default class ProductPrice {
  /**
   * Constructs a new <code>ProductPrice</code>.
   * @alias module:model/ProductPrice
   * @class
   * @param quantityMax {Object} 
   * @param quantityMin {Object} 
   * @param price {Object} 
   * @param discountCode {Object} 
   */
  constructor(quantityMax, quantityMin, price, discountCode) {
    this.quantityMax = quantityMax;
    this.quantityMin = quantityMin;
    this.price = price;
    this.discountCode = discountCode;
  }

  /**
   * Constructs a <code>ProductPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPrice} obj Optional instance to populate.
   * @return {module:model/ProductPrice} The populated <code>ProductPrice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductPrice();
      if (data.hasOwnProperty('quantityMax'))
        obj.quantityMax = ApiClient.convertToType(data['quantityMax'], Object);
      if (data.hasOwnProperty('quantityMin'))
        obj.quantityMin = ApiClient.convertToType(data['quantityMin'], Object);
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], Object);
      if (data.hasOwnProperty('discountCode'))
        obj.discountCode = ApiClient.convertToType(data['discountCode'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} quantityMax
 */
ProductPrice.prototype.quantityMax = undefined;

/**
 * @member {Object} quantityMin
 */
ProductPrice.prototype.quantityMin = undefined;

/**
 * @member {Object} price
 */
ProductPrice.prototype.price = undefined;

/**
 * @member {Object} discountCode
 */
ProductPrice.prototype.discountCode = undefined;

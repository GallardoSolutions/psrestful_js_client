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
 * The PartPrice model module.
 * @module model/PartPrice
 * @version 0.0.1
 */
export default class PartPrice {
  /**
   * Constructs a new <code>PartPrice</code>.
   * @alias module:model/PartPrice
   * @class
   * @param minQuantity {Object} The minimum quantity for the price
   * @param discountCode {Object} The industry discount code associated with the price.
   * @param price {Object} The base price of the good without decoration
   * @param priceUom {Object} The unit of measure for the price
   * @param priceEffectiveDate {Object} 
   * @param priceExpiryDate {Object} 
   */
  constructor(minQuantity, discountCode, price, priceUom, priceEffectiveDate, priceExpiryDate) {
    this.minQuantity = minQuantity;
    this.discountCode = discountCode;
    this.price = price;
    this.priceUom = priceUom;
    this.priceEffectiveDate = priceEffectiveDate;
    this.priceExpiryDate = priceExpiryDate;
  }

  /**
   * Constructs a <code>PartPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartPrice} obj Optional instance to populate.
   * @return {module:model/PartPrice} The populated <code>PartPrice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartPrice();
      if (data.hasOwnProperty('minQuantity'))
        obj.minQuantity = ApiClient.convertToType(data['minQuantity'], Object);
      if (data.hasOwnProperty('discountCode'))
        obj.discountCode = ApiClient.convertToType(data['discountCode'], Object);
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], Object);
      if (data.hasOwnProperty('priceUom'))
        obj.priceUom = ApiClient.convertToType(data['priceUom'], Object);
      if (data.hasOwnProperty('priceEffectiveDate'))
        obj.priceEffectiveDate = ApiClient.convertToType(data['priceEffectiveDate'], Object);
      if (data.hasOwnProperty('priceExpiryDate'))
        obj.priceExpiryDate = ApiClient.convertToType(data['priceExpiryDate'], Object);
    }
    return obj;
  }
}

/**
 * The minimum quantity for the price
 * @member {Object} minQuantity
 */
PartPrice.prototype.minQuantity = undefined;

/**
 * The industry discount code associated with the price.
 * @member {Object} discountCode
 */
PartPrice.prototype.discountCode = undefined;

/**
 * The base price of the good without decoration
 * @member {Object} price
 */
PartPrice.prototype.price = undefined;

/**
 * The unit of measure for the price
 * @member {Object} priceUom
 */
PartPrice.prototype.priceUom = undefined;

/**
 * @member {Object} priceEffectiveDate
 */
PartPrice.prototype.priceEffectiveDate = undefined;

/**
 * @member {Object} priceExpiryDate
 */
PartPrice.prototype.priceExpiryDate = undefined;

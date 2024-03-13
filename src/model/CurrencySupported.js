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
 * The CurrencySupported model module.
 * @module model/CurrencySupported
 * @version 0.0.1
 */
export default class CurrencySupported {
  /**
   * Constructs a new <code>CurrencySupported</code>.
   * @alias module:model/CurrencySupported
   * @class
   * @param currency {Object} 
   */
  constructor(currency) {
    this.currency = currency;
  }

  /**
   * Constructs a <code>CurrencySupported</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrencySupported} obj Optional instance to populate.
   * @return {module:model/CurrencySupported} The populated <code>CurrencySupported</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CurrencySupported();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} currency
 */
CurrencySupported.prototype.currency = undefined;


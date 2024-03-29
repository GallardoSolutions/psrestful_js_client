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
 * The VoidedInvoiceArray model module.
 * @module model/VoidedInvoiceArray
 * @version 0.0.1
 */
export default class VoidedInvoiceArray {
  /**
   * Constructs a new <code>VoidedInvoiceArray</code>.
   * @alias module:model/VoidedInvoiceArray
   * @class
   * @param voidedInvoice {Object} 
   */
  constructor(voidedInvoice) {
    this.voidedInvoice = voidedInvoice;
  }

  /**
   * Constructs a <code>VoidedInvoiceArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoidedInvoiceArray} obj Optional instance to populate.
   * @return {module:model/VoidedInvoiceArray} The populated <code>VoidedInvoiceArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VoidedInvoiceArray();
      if (data.hasOwnProperty('VoidedInvoice'))
        obj.voidedInvoice = ApiClient.convertToType(data['VoidedInvoice'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} voidedInvoice
 */
VoidedInvoiceArray.prototype.voidedInvoice = undefined;


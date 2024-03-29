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
 * The VoidedInvoice model module.
 * @module model/VoidedInvoice
 * @version 0.0.1
 */
export default class VoidedInvoice {
  /**
   * Constructs a new <code>VoidedInvoice</code>.
   * invoiceNumber       The invoice number      64 STRING       TRUE voidDate    The date the invoice was voided. This field does not include a time component and it is up to the             consuming party to determine if the data should be adjusted if the publishing party is on the other             side of the international date line.    DATE    TRUE
   * @alias module:model/VoidedInvoice
   * @class
   * @param invoiceNumber {Object} 
   * @param voidDate {Object} 
   */
  constructor(invoiceNumber, voidDate) {
    this.invoiceNumber = invoiceNumber;
    this.voidDate = voidDate;
  }

  /**
   * Constructs a <code>VoidedInvoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoidedInvoice} obj Optional instance to populate.
   * @return {module:model/VoidedInvoice} The populated <code>VoidedInvoice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VoidedInvoice();
      if (data.hasOwnProperty('invoiceNumber'))
        obj.invoiceNumber = ApiClient.convertToType(data['invoiceNumber'], Object);
      if (data.hasOwnProperty('voidDate'))
        obj.voidDate = ApiClient.convertToType(data['voidDate'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} invoiceNumber
 */
VoidedInvoice.prototype.invoiceNumber = undefined;

/**
 * @member {Object} voidDate
 */
VoidedInvoice.prototype.voidDate = undefined;


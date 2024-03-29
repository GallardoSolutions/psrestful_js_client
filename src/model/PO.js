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
import LineItemArray from './LineItemArray';
import OrderType from './OrderType';
import ShipmentArray from './ShipmentArray';

/**
 * The PO model module.
 * @module model/PO
 * @version 0.0.1
 */
export default class PO {
  /**
   * Constructs a new <code>PO</code>.
   * @alias module:model/PO
   * @class
   * @param orderType {module:model/OrderType} 
   * @param orderNumber {Object} 
   * @param orderDate {Object} 
   * @param lastModified {Object} 
   * @param totalAmount {Object} The total amount of the purchase order
   * @param paymentTerms {Object} ie. NET15, NET30, etc.
   * @param currency {Object} The currency the purchase order is transacted in ISO4217 format. ie. USD, CAD, EUR, JPY, GBP, etc.
   * @param digitalProof {Object} 
   * @param orderContactArray {Object} 
   * @param shipmentArray {module:model/ShipmentArray} 
   * @param lineItemArray {module:model/LineItemArray} 
   * @param termsAndConditions {Object} The terms and conditions of the purchase order
   * @param salesChannel {Object} The sales channel the purchase order
   * @param taxInformationArray {Object} 
   */
  constructor(orderType, orderNumber, orderDate, lastModified, totalAmount, paymentTerms, currency, digitalProof, orderContactArray, shipmentArray, lineItemArray, termsAndConditions, salesChannel, taxInformationArray) {
    this.orderType = orderType;
    this.orderNumber = orderNumber;
    this.orderDate = orderDate;
    this.lastModified = lastModified;
    this.totalAmount = totalAmount;
    this.paymentTerms = paymentTerms;
    this.currency = currency;
    this.digitalProof = digitalProof;
    this.orderContactArray = orderContactArray;
    this.shipmentArray = shipmentArray;
    this.lineItemArray = lineItemArray;
    this.termsAndConditions = termsAndConditions;
    this.salesChannel = salesChannel;
    this.taxInformationArray = taxInformationArray;
  }

  /**
   * Constructs a <code>PO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PO} obj Optional instance to populate.
   * @return {module:model/PO} The populated <code>PO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PO();
      if (data.hasOwnProperty('environment'))
        obj.environment = ApiClient.convertToType(data['environment'], Object);
      if (data.hasOwnProperty('orderType'))
        obj.orderType = OrderType.constructFromObject(data['orderType']);
      if (data.hasOwnProperty('orderNumber'))
        obj.orderNumber = ApiClient.convertToType(data['orderNumber'], Object);
      if (data.hasOwnProperty('orderDate'))
        obj.orderDate = ApiClient.convertToType(data['orderDate'], Object);
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], Object);
      if (data.hasOwnProperty('totalAmount'))
        obj.totalAmount = ApiClient.convertToType(data['totalAmount'], Object);
      if (data.hasOwnProperty('paymentTerms'))
        obj.paymentTerms = ApiClient.convertToType(data['paymentTerms'], Object);
      if (data.hasOwnProperty('rush'))
        obj.rush = ApiClient.convertToType(data['rush'], Object);
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], Object);
      if (data.hasOwnProperty('DigitalProof'))
        obj.digitalProof = ApiClient.convertToType(data['DigitalProof'], Object);
      if (data.hasOwnProperty('OrderContactArray'))
        obj.orderContactArray = ApiClient.convertToType(data['OrderContactArray'], Object);
      if (data.hasOwnProperty('ShipmentArray'))
        obj.shipmentArray = ShipmentArray.constructFromObject(data['ShipmentArray']);
      if (data.hasOwnProperty('LineItemArray'))
        obj.lineItemArray = LineItemArray.constructFromObject(data['LineItemArray']);
      if (data.hasOwnProperty('termsAndConditions'))
        obj.termsAndConditions = ApiClient.convertToType(data['termsAndConditions'], Object);
      if (data.hasOwnProperty('salesChannel'))
        obj.salesChannel = ApiClient.convertToType(data['salesChannel'], Object);
      if (data.hasOwnProperty('promoCode'))
        obj.promoCode = ApiClient.convertToType(data['promoCode'], Object);
      if (data.hasOwnProperty('TaxInformationArray'))
        obj.taxInformationArray = ApiClient.convertToType(data['TaxInformationArray'], Object);
    }
    return obj;
  }
}

/**
 * The environment the purchase order is being sent from. Should be STAGING or PROD
 * @member {Object} environment
 */
PO.prototype.environment = undefined;

/**
 * @member {module:model/OrderType} orderType
 */
PO.prototype.orderType = undefined;

/**
 * @member {Object} orderNumber
 */
PO.prototype.orderNumber = undefined;

/**
 * @member {Object} orderDate
 */
PO.prototype.orderDate = undefined;

/**
 * @member {Object} lastModified
 */
PO.prototype.lastModified = undefined;

/**
 * The total amount of the purchase order
 * @member {Object} totalAmount
 */
PO.prototype.totalAmount = undefined;

/**
 * ie. NET15, NET30, etc.
 * @member {Object} paymentTerms
 */
PO.prototype.paymentTerms = undefined;

/**
 * Used to indicate a rush on the purchase order
 * @member {Object} rush
 */
PO.prototype.rush = undefined;

/**
 * The currency the purchase order is transacted in ISO4217 format. ie. USD, CAD, EUR, JPY, GBP, etc.
 * @member {Object} currency
 */
PO.prototype.currency = undefined;

/**
 * @member {Object} digitalProof
 */
PO.prototype.digitalProof = undefined;

/**
 * @member {Object} orderContactArray
 */
PO.prototype.orderContactArray = undefined;

/**
 * @member {module:model/ShipmentArray} shipmentArray
 */
PO.prototype.shipmentArray = undefined;

/**
 * @member {module:model/LineItemArray} lineItemArray
 */
PO.prototype.lineItemArray = undefined;

/**
 * The terms and conditions of the purchase order
 * @member {Object} termsAndConditions
 */
PO.prototype.termsAndConditions = undefined;

/**
 * The sales channel the purchase order
 * @member {Object} salesChannel
 */
PO.prototype.salesChannel = undefined;

/**
 * @member {Object} promoCode
 */
PO.prototype.promoCode = undefined;

/**
 * @member {Object} taxInformationArray
 */
PO.prototype.taxInformationArray = undefined;


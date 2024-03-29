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
 * The Invoice model module.
 * @module model/Invoice
 * @version 0.0.1
 */
export default class Invoice {
  /**
   * Constructs a new <code>Invoice</code>.
   * invoiceNumber       The invoice number      64 STRING       TRUE invoiceType The type of invoice; values are enumerated: “INVOICE”, “CREDIT MEMO”. Currency amounts should be positive for type CREDIT MEMO. 64 STRING FACIT TRUE  # noqa invoiceDate The date the invoice was generated. This field does not include a time component and it is up to the consuming party to determine if the data should be adjusted if the publishing party is on the other side of the international date line.   OBJECT ARRAY    TRUE  # noqa purchaseOrderNumber The purchase order number. Consolidated Purchase Orders are not supported by this version.      64 STRING       FALSE  # noqa purchaseOrderVersion        The version of the purchase order number as submitted by the distributor.       64 STRING       FALSE  # noqa BillTo      The Bill To Address (AccountInfo Object)        OBJECT  FALSE SoldTo      The Sold To Address (AccountInfo Object)        OBJECT  FALSE invoiceComments     General comments for the invoice        STRING  FALSE paymentTerms        The terms of the invoice        64 STRING       FALSE paymentDueDate      The Date the invoice must be paid in full without incurring late charges.       DATE    TRUE currency    The currency of the invoice in ISO4217 format   Enumerated STRING       TRUE fobId       The fob point of the invoice    64 STRING       FALSE salesAmount The amount of the sale in the currency specified.       DOUBLE  TRUE shippingAmount      The amount of the shipping charges in the currency specified.   DOUBLE  TRUE handlingAmount      The amount of the handling charges in the currency specified.   DOUBLE  TRUE taxAmount   The total amount of taxes in the currency specified.    DOUBLE  TRUE invoiceAmount       \&quot;The total amount of the invoice in the currency specified.  Note: invoiceAmount &#x3D; salesAmount + shippingAmount + handlingAmount + taxAmount\&quot;    DOUBLE  TRUE advancePaymentAmount        The amount of any advanced payments in the currency specified. If the source system does not support including prepayments on an invoice this value should be set to zero.      DOUBLE  TRUE  # noqa invoiceAmountDue    \&quot;The total of the invoice amount due after applying any prepayments in the currency specified.  Note: invoiceAmountDue &#x3D; invoiceAmount - advancePaymentAmount\&quot;      DOUBLE  TRUE invoiceDocumentUrl  The url to be able to download the physical invoice document.   1024 STRING     FALSE InvoiceLineItemsArray       An array of invoice line item objects   OBJECT ARRAY    TRUE SalesOrderNumbersArray      An array of sales order numbers included in the invoice.        OBJECT ARRAY    FALSE TaxArray    An array of tax objects. The sum of the taxes within this array should equal the value in the taxAmount field.  OBJECT ARRAY    FALSE  # noqa invoicePaymentUrl   The url used to submit payment for the invoice  1024 STRING     FALSE
   * @alias module:model/Invoice
   * @class
   * @param invoiceNumber {Object} 
   * @param invoiceType {Object} 
   * @param invoiceDate {Object} 
   * @param purchaseOrderNumber {Object} 
   * @param purchaseOrderVersion {Object} 
   * @param billTo {Object} 
   * @param soldTo {Object} 
   * @param invoiceComments {Object} 
   * @param paymentTerms {Object} 
   * @param paymentDueDate {Object} 
   * @param currency {Object} 
   * @param fobId {Object} 
   * @param salesAmount {Object} 
   * @param shippingAmount {Object} 
   * @param handlingAmount {Object} 
   * @param taxAmount {Object} 
   * @param invoiceAmount {Object} 
   * @param advancePaymentAmount {Object} 
   * @param invoiceAmountDue {Object} 
   * @param invoiceDocumentUrl {Object} 
   * @param invoiceLineItemsArray {Object} 
   * @param salesOrderNumbersArray {Object} 
   * @param taxArray {Object} 
   * @param invoicePaymentUrl {Object} 
   */
  constructor(invoiceNumber, invoiceType, invoiceDate, purchaseOrderNumber, purchaseOrderVersion, billTo, soldTo, invoiceComments, paymentTerms, paymentDueDate, currency, fobId, salesAmount, shippingAmount, handlingAmount, taxAmount, invoiceAmount, advancePaymentAmount, invoiceAmountDue, invoiceDocumentUrl, invoiceLineItemsArray, salesOrderNumbersArray, taxArray, invoicePaymentUrl) {
    this.invoiceNumber = invoiceNumber;
    this.invoiceType = invoiceType;
    this.invoiceDate = invoiceDate;
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.purchaseOrderVersion = purchaseOrderVersion;
    this.billTo = billTo;
    this.soldTo = soldTo;
    this.invoiceComments = invoiceComments;
    this.paymentTerms = paymentTerms;
    this.paymentDueDate = paymentDueDate;
    this.currency = currency;
    this.fobId = fobId;
    this.salesAmount = salesAmount;
    this.shippingAmount = shippingAmount;
    this.handlingAmount = handlingAmount;
    this.taxAmount = taxAmount;
    this.invoiceAmount = invoiceAmount;
    this.advancePaymentAmount = advancePaymentAmount;
    this.invoiceAmountDue = invoiceAmountDue;
    this.invoiceDocumentUrl = invoiceDocumentUrl;
    this.invoiceLineItemsArray = invoiceLineItemsArray;
    this.salesOrderNumbersArray = salesOrderNumbersArray;
    this.taxArray = taxArray;
    this.invoicePaymentUrl = invoicePaymentUrl;
  }

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoice} obj Optional instance to populate.
   * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Invoice();
      if (data.hasOwnProperty('invoiceNumber'))
        obj.invoiceNumber = ApiClient.convertToType(data['invoiceNumber'], Object);
      if (data.hasOwnProperty('invoiceType'))
        obj.invoiceType = ApiClient.convertToType(data['invoiceType'], Object);
      if (data.hasOwnProperty('invoiceDate'))
        obj.invoiceDate = ApiClient.convertToType(data['invoiceDate'], Object);
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], Object);
      if (data.hasOwnProperty('purchaseOrderVersion'))
        obj.purchaseOrderVersion = ApiClient.convertToType(data['purchaseOrderVersion'], Object);
      if (data.hasOwnProperty('BillTo'))
        obj.billTo = ApiClient.convertToType(data['BillTo'], Object);
      if (data.hasOwnProperty('SoldTo'))
        obj.soldTo = ApiClient.convertToType(data['SoldTo'], Object);
      if (data.hasOwnProperty('invoiceComments'))
        obj.invoiceComments = ApiClient.convertToType(data['invoiceComments'], Object);
      if (data.hasOwnProperty('paymentTerms'))
        obj.paymentTerms = ApiClient.convertToType(data['paymentTerms'], Object);
      if (data.hasOwnProperty('paymentDueDate'))
        obj.paymentDueDate = ApiClient.convertToType(data['paymentDueDate'], Object);
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], Object);
      if (data.hasOwnProperty('fobId'))
        obj.fobId = ApiClient.convertToType(data['fobId'], Object);
      if (data.hasOwnProperty('salesAmount'))
        obj.salesAmount = ApiClient.convertToType(data['salesAmount'], Object);
      if (data.hasOwnProperty('shippingAmount'))
        obj.shippingAmount = ApiClient.convertToType(data['shippingAmount'], Object);
      if (data.hasOwnProperty('handlingAmount'))
        obj.handlingAmount = ApiClient.convertToType(data['handlingAmount'], Object);
      if (data.hasOwnProperty('taxAmount'))
        obj.taxAmount = ApiClient.convertToType(data['taxAmount'], Object);
      if (data.hasOwnProperty('invoiceAmount'))
        obj.invoiceAmount = ApiClient.convertToType(data['invoiceAmount'], Object);
      if (data.hasOwnProperty('advancePaymentAmount'))
        obj.advancePaymentAmount = ApiClient.convertToType(data['advancePaymentAmount'], Object);
      if (data.hasOwnProperty('invoiceAmountDue'))
        obj.invoiceAmountDue = ApiClient.convertToType(data['invoiceAmountDue'], Object);
      if (data.hasOwnProperty('invoiceDocumentUrl'))
        obj.invoiceDocumentUrl = ApiClient.convertToType(data['invoiceDocumentUrl'], Object);
      if (data.hasOwnProperty('InvoiceLineItemsArray'))
        obj.invoiceLineItemsArray = ApiClient.convertToType(data['InvoiceLineItemsArray'], Object);
      if (data.hasOwnProperty('SalesOrderNumbersArray'))
        obj.salesOrderNumbersArray = ApiClient.convertToType(data['SalesOrderNumbersArray'], Object);
      if (data.hasOwnProperty('TaxArray'))
        obj.taxArray = ApiClient.convertToType(data['TaxArray'], Object);
      if (data.hasOwnProperty('invoicePaymentUrl'))
        obj.invoicePaymentUrl = ApiClient.convertToType(data['invoicePaymentUrl'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} invoiceNumber
 */
Invoice.prototype.invoiceNumber = undefined;

/**
 * @member {Object} invoiceType
 */
Invoice.prototype.invoiceType = undefined;

/**
 * @member {Object} invoiceDate
 */
Invoice.prototype.invoiceDate = undefined;

/**
 * @member {Object} purchaseOrderNumber
 */
Invoice.prototype.purchaseOrderNumber = undefined;

/**
 * @member {Object} purchaseOrderVersion
 */
Invoice.prototype.purchaseOrderVersion = undefined;

/**
 * @member {Object} billTo
 */
Invoice.prototype.billTo = undefined;

/**
 * @member {Object} soldTo
 */
Invoice.prototype.soldTo = undefined;

/**
 * @member {Object} invoiceComments
 */
Invoice.prototype.invoiceComments = undefined;

/**
 * @member {Object} paymentTerms
 */
Invoice.prototype.paymentTerms = undefined;

/**
 * @member {Object} paymentDueDate
 */
Invoice.prototype.paymentDueDate = undefined;

/**
 * @member {Object} currency
 */
Invoice.prototype.currency = undefined;

/**
 * @member {Object} fobId
 */
Invoice.prototype.fobId = undefined;

/**
 * @member {Object} salesAmount
 */
Invoice.prototype.salesAmount = undefined;

/**
 * @member {Object} shippingAmount
 */
Invoice.prototype.shippingAmount = undefined;

/**
 * @member {Object} handlingAmount
 */
Invoice.prototype.handlingAmount = undefined;

/**
 * @member {Object} taxAmount
 */
Invoice.prototype.taxAmount = undefined;

/**
 * @member {Object} invoiceAmount
 */
Invoice.prototype.invoiceAmount = undefined;

/**
 * @member {Object} advancePaymentAmount
 */
Invoice.prototype.advancePaymentAmount = undefined;

/**
 * @member {Object} invoiceAmountDue
 */
Invoice.prototype.invoiceAmountDue = undefined;

/**
 * @member {Object} invoiceDocumentUrl
 */
Invoice.prototype.invoiceDocumentUrl = undefined;

/**
 * @member {Object} invoiceLineItemsArray
 */
Invoice.prototype.invoiceLineItemsArray = undefined;

/**
 * @member {Object} salesOrderNumbersArray
 */
Invoice.prototype.salesOrderNumbersArray = undefined;

/**
 * @member {Object} taxArray
 */
Invoice.prototype.taxArray = undefined;

/**
 * @member {Object} invoicePaymentUrl
 */
Invoice.prototype.invoicePaymentUrl = undefined;


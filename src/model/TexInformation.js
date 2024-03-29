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
import TaxTypeInput from './TaxTypeInput';

/**
 * The TexInformation model module.
 * @module model/TexInformation
 * @version 0.0.1
 */
export default class TexInformation {
  /**
   * Constructs a new <code>TexInformation</code>.
   * @alias module:model/TexInformation
   * @class
   * @param taxId {Object} The purchasers tax identifier
   * @param taxType {module:model/TaxTypeInput} 
   * @param taxExempt {Object} 
   * @param taxJurisdiction {Object} 
   * @param taxAmount {Object} The amount of tax for this purchase order
   */
  constructor(taxId, taxType, taxExempt, taxJurisdiction, taxAmount) {
    this.taxId = taxId;
    this.taxType = taxType;
    this.taxExempt = taxExempt;
    this.taxJurisdiction = taxJurisdiction;
    this.taxAmount = taxAmount;
  }

  /**
   * Constructs a <code>TexInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TexInformation} obj Optional instance to populate.
   * @return {module:model/TexInformation} The populated <code>TexInformation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TexInformation();
      if (data.hasOwnProperty('taxId'))
        obj.taxId = ApiClient.convertToType(data['taxId'], Object);
      if (data.hasOwnProperty('taxType'))
        obj.taxType = TaxTypeInput.constructFromObject(data['taxType']);
      if (data.hasOwnProperty('taxExempt'))
        obj.taxExempt = ApiClient.convertToType(data['taxExempt'], Object);
      if (data.hasOwnProperty('taxJurisdiction'))
        obj.taxJurisdiction = ApiClient.convertToType(data['taxJurisdiction'], Object);
      if (data.hasOwnProperty('taxAmount'))
        obj.taxAmount = ApiClient.convertToType(data['taxAmount'], Object);
    }
    return obj;
  }
}

/**
 * The purchasers tax identifier
 * @member {Object} taxId
 */
TexInformation.prototype.taxId = undefined;

/**
 * @member {module:model/TaxTypeInput} taxType
 */
TexInformation.prototype.taxType = undefined;

/**
 * @member {Object} taxExempt
 */
TexInformation.prototype.taxExempt = undefined;

/**
 * @member {Object} taxJurisdiction
 */
TexInformation.prototype.taxJurisdiction = undefined;

/**
 * The amount of tax for this purchase order
 * @member {Object} taxAmount
 */
TexInformation.prototype.taxAmount = undefined;


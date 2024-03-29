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
 * The ConfigurationInput model module.
 * @module model/ConfigurationInput
 * @version 0.0.1
 */
export default class ConfigurationInput {
  /**
   * Constructs a new <code>ConfigurationInput</code>.
   * An object containing line item configuration data
   * @alias module:model/ConfigurationInput
   * @class
   * @param referenceNumber {Object} The previous order number that this purchase order is referencing
   * @param referenceNumberType {Object} The type of the prior order reference
   * @param preProductionProof {Object} Indicates that this line item is for a pre-production proof
   * @param chargeArray {Object} 
   * @param locationArray {Object} 
   */
  constructor(referenceNumber, referenceNumberType, preProductionProof, chargeArray, locationArray) {
    this.referenceNumber = referenceNumber;
    this.referenceNumberType = referenceNumberType;
    this.preProductionProof = preProductionProof;
    this.chargeArray = chargeArray;
    this.locationArray = locationArray;
  }

  /**
   * Constructs a <code>ConfigurationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigurationInput} obj Optional instance to populate.
   * @return {module:model/ConfigurationInput} The populated <code>ConfigurationInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConfigurationInput();
      if (data.hasOwnProperty('referenceNumber'))
        obj.referenceNumber = ApiClient.convertToType(data['referenceNumber'], Object);
      if (data.hasOwnProperty('referenceNumberType'))
        obj.referenceNumberType = ApiClient.convertToType(data['referenceNumberType'], Object);
      if (data.hasOwnProperty('preProductionProof'))
        obj.preProductionProof = ApiClient.convertToType(data['preProductionProof'], Object);
      if (data.hasOwnProperty('ChargeArray'))
        obj.chargeArray = ApiClient.convertToType(data['ChargeArray'], Object);
      if (data.hasOwnProperty('LocationArray'))
        obj.locationArray = ApiClient.convertToType(data['LocationArray'], Object);
    }
    return obj;
  }
}

/**
 * The previous order number that this purchase order is referencing
 * @member {Object} referenceNumber
 */
ConfigurationInput.prototype.referenceNumber = undefined;

/**
 * The type of the prior order reference
 * @member {Object} referenceNumberType
 */
ConfigurationInput.prototype.referenceNumberType = undefined;

/**
 * Indicates that this line item is for a pre-production proof
 * @member {Object} preProductionProof
 */
ConfigurationInput.prototype.preProductionProof = undefined;

/**
 * @member {Object} chargeArray
 */
ConfigurationInput.prototype.chargeArray = undefined;

/**
 * @member {Object} locationArray
 */
ConfigurationInput.prototype.locationArray = undefined;


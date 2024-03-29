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
 * The ChargeArrayInput model module.
 * @module model/ChargeArrayInput
 * @version 0.0.1
 */
export default class ChargeArrayInput {
  /**
   * Constructs a new <code>ChargeArrayInput</code>.
   * An array of charge information.  This array should be populated with information from the supplier’s PromoStandards Product Pricing and Configuration service
   * @alias module:model/ChargeArrayInput
   * @class
   * @param charge {Object} 
   */
  constructor(charge) {
    this.charge = charge;
  }

  /**
   * Constructs a <code>ChargeArrayInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChargeArrayInput} obj Optional instance to populate.
   * @return {module:model/ChargeArrayInput} The populated <code>ChargeArrayInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChargeArrayInput();
      if (data.hasOwnProperty('Charge'))
        obj.charge = ApiClient.convertToType(data['Charge'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} charge
 */
ChargeArrayInput.prototype.charge = undefined;


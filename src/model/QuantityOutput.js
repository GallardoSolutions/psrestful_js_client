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
import UOM from './UOM';

/**
 * The QuantityOutput model module.
 * @module model/QuantityOutput
 * @version 0.0.1
 */
export default class QuantityOutput {
  /**
   * Constructs a new <code>QuantityOutput</code>.
   * @alias module:model/QuantityOutput
   * @class
   * @param value {Object} 
   * @param uom {module:model/UOM} 
   */
  constructor(value, uom) {
    this.value = value;
    this.uom = uom;
  }

  /**
   * Constructs a <code>QuantityOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuantityOutput} obj Optional instance to populate.
   * @return {module:model/QuantityOutput} The populated <code>QuantityOutput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QuantityOutput();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], Object);
      if (data.hasOwnProperty('uom'))
        obj.uom = UOM.constructFromObject(data['uom']);
    }
    return obj;
  }
}

/**
 * @member {Object} value
 */
QuantityOutput.prototype.value = undefined;

/**
 * @member {module:model/UOM} uom
 */
QuantityOutput.prototype.uom = undefined;

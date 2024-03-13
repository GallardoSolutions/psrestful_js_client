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
 * The DecorationArrayInput model module.
 * @module model/DecorationArrayInput
 * @version 0.0.1
 */
export default class DecorationArrayInput {
  /**
   * Constructs a new <code>DecorationArrayInput</code>.
   * @alias module:model/DecorationArrayInput
   * @class
   * @param decoration {Object} 
   */
  constructor(decoration) {
    this.decoration = decoration;
  }

  /**
   * Constructs a <code>DecorationArrayInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecorationArrayInput} obj Optional instance to populate.
   * @return {module:model/DecorationArrayInput} The populated <code>DecorationArrayInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecorationArrayInput();
      if (data.hasOwnProperty('Decoration'))
        obj.decoration = ApiClient.convertToType(data['Decoration'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} decoration
 */
DecorationArrayInput.prototype.decoration = undefined;


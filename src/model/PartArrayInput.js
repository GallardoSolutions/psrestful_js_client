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
 * The PartArrayInput model module.
 * @module model/PartArrayInput
 * @version 0.0.1
 */
export default class PartArrayInput {
  /**
   * Constructs a new <code>PartArrayInput</code>.
   * @alias module:model/PartArrayInput
   * @class
   * @param part {Object} 
   */
  constructor(part) {
    this.part = part;
  }

  /**
   * Constructs a <code>PartArrayInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartArrayInput} obj Optional instance to populate.
   * @return {module:model/PartArrayInput} The populated <code>PartArrayInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartArrayInput();
      if (data.hasOwnProperty('Part'))
        obj.part = ApiClient.convertToType(data['Part'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} part
 */
PartArrayInput.prototype.part = undefined;

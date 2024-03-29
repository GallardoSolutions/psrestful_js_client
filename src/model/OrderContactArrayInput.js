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
 * The OrderContactArrayInput model module.
 * @module model/OrderContactArrayInput
 * @version 0.0.1
 */
export default class OrderContactArrayInput {
  /**
   * Constructs a new <code>OrderContactArrayInput</code>.
   * @alias module:model/OrderContactArrayInput
   * @class
   * @param contact {Object} 
   */
  constructor(contact) {
    this.contact = contact;
  }

  /**
   * Constructs a <code>OrderContactArrayInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderContactArrayInput} obj Optional instance to populate.
   * @return {module:model/OrderContactArrayInput} The populated <code>OrderContactArrayInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderContactArrayInput();
      if (data.hasOwnProperty('Contact'))
        obj.contact = ApiClient.convertToType(data['Contact'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} contact
 */
OrderContactArrayInput.prototype.contact = undefined;


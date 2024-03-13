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
 * The SelectionArray model module.
 * @module model/SelectionArray
 * @version 0.0.1
 */
export default class SelectionArray {
  /**
   * Constructs a new <code>SelectionArray</code>.
   * This class was removed in 2.0.0
   * @alias module:model/SelectionArray
   * @class
   * @param selection {Object} 
   */
  constructor(selection) {
    this.selection = selection;
  }

  /**
   * Constructs a <code>SelectionArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SelectionArray} obj Optional instance to populate.
   * @return {module:model/SelectionArray} The populated <code>SelectionArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SelectionArray();
      if (data.hasOwnProperty('selection'))
        obj.selection = ApiClient.convertToType(data['selection'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} selection
 */
SelectionArray.prototype.selection = undefined;

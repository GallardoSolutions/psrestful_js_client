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
 * The Program model module.
 * @module model/Program
 * @version 0.0.1
 */
export default class Program {
  /**
   * Constructs a new <code>Program</code>.
   * Program pricing information.
   * @alias module:model/Program
   * @class
   * @param id {Object} 
   * @param name {Object} 
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>Program</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Program} obj Optional instance to populate.
   * @return {module:model/Program} The populated <code>Program</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Program();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], Object);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} id
 */
Program.prototype.id = undefined;

/**
 * @member {Object} name
 */
Program.prototype.name = undefined;


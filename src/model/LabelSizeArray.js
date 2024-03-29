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
 * The LabelSizeArray model module.
 * @module model/LabelSizeArray
 * @version 0.0.1
 */
export default class LabelSizeArray {
  /**
   * Constructs a new <code>LabelSizeArray</code>.
   * @alias module:model/LabelSizeArray
   * @class
   * @param labelSize {Object} 
   */
  constructor(labelSize) {
    this.labelSize = labelSize;
  }

  /**
   * Constructs a <code>LabelSizeArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LabelSizeArray} obj Optional instance to populate.
   * @return {module:model/LabelSizeArray} The populated <code>LabelSizeArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LabelSizeArray();
      if (data.hasOwnProperty('labelSize'))
        obj.labelSize = ApiClient.convertToType(data['labelSize'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} labelSize
 */
LabelSizeArray.prototype.labelSize = undefined;


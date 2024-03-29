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
 * The DecorationColorResponse model module.
 * @module model/DecorationColorResponse
 * @version 0.0.1
 */
export default class DecorationColorResponse {
  /**
   * Constructs a new <code>DecorationColorResponse</code>.
   * @alias module:model/DecorationColorResponse
   * @class
   * @param decorationColors {Object} 
   * @param errorMessage {Object} 
   */
  constructor(decorationColors, errorMessage) {
    this.decorationColors = decorationColors;
    this.errorMessage = errorMessage;
  }

  /**
   * Constructs a <code>DecorationColorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecorationColorResponse} obj Optional instance to populate.
   * @return {module:model/DecorationColorResponse} The populated <code>DecorationColorResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecorationColorResponse();
      if (data.hasOwnProperty('DecorationColors'))
        obj.decorationColors = ApiClient.convertToType(data['DecorationColors'], Object);
      if (data.hasOwnProperty('ErrorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['ErrorMessage'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} decorationColors
 */
DecorationColorResponse.prototype.decorationColors = undefined;

/**
 * @member {Object} errorMessage
 */
DecorationColorResponse.prototype.errorMessage = undefined;


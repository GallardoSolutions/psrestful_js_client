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
 * The PsDomainModelMediaContentDecoration model module.
 * @module model/PsDomainModelMediaContentDecoration
 * @version 0.0.1
 */
export default class PsDomainModelMediaContentDecoration {
  /**
   * Constructs a new <code>PsDomainModelMediaContentDecoration</code>.
   * @alias module:model/PsDomainModelMediaContentDecoration
   * @class
   * @param decorationId {Object} 
   * @param decorationName {Object} 
   */
  constructor(decorationId, decorationName) {
    this.decorationId = decorationId;
    this.decorationName = decorationName;
  }

  /**
   * Constructs a <code>PsDomainModelMediaContentDecoration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PsDomainModelMediaContentDecoration} obj Optional instance to populate.
   * @return {module:model/PsDomainModelMediaContentDecoration} The populated <code>PsDomainModelMediaContentDecoration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PsDomainModelMediaContentDecoration();
      if (data.hasOwnProperty('decorationId'))
        obj.decorationId = ApiClient.convertToType(data['decorationId'], Object);
      if (data.hasOwnProperty('decorationName'))
        obj.decorationName = ApiClient.convertToType(data['decorationName'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} decorationId
 */
PsDomainModelMediaContentDecoration.prototype.decorationId = undefined;

/**
 * @member {Object} decorationName
 */
PsDomainModelMediaContentDecoration.prototype.decorationName = undefined;

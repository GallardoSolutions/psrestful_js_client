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
 * Enum class Environment.
 * @enum {Object}
 * @readonly
 */
const Environment = {
  /**
   * value: "PROD"
   * @const
   */
  PROD: "PROD",

  /**
   * value: "STAGING"
   * @const
   */
  STAGING: "STAGING",

  /**
   * Returns a <code>Environment</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/Environment} The enum <code>Environment</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export default {Environment};
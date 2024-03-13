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
 * Enum class DimensionUoMInput.
 * @enum {Object}
 * @readonly
 */
const DimensionUoMInput = {
  /**
   * value: "ACRE"
   * @const
   */
  ACRE: "ACRE",

  /**
   * value: "ARES"
   * @const
   */
  ARES: "ARES",

  /**
   * value: "CELI"
   * @const
   */
  CELI: "CELI",

  /**
   * value: "CMET"
   * @const
   */
  CMET: "CMET",

  /**
   * value: "FOOT"
   * @const
   */
  FOOT: "FOOT",

  /**
   * value: "GBGA"
   * @const
   */
  GBGA: "GBGA",

  /**
   * value: "GBOU"
   * @const
   */
  GBOU: "GBOU",

  /**
   * value: "GBPI"
   * @const
   */
  GBPI: "GBPI",

  /**
   * value: "GBQA"
   * @const
   */
  GBQA: "GBQA",

  /**
   * value: "GRAM"
   * @const
   */
  GRAM: "GRAM",

  /**
   * value: "HECT"
   * @const
   */
  HECT: "HECT",

  /**
   * value: "INCH"
   * @const
   */
  INCH: "INCH",

  /**
   * value: "KILO"
   * @const
   */
  KILO: "KILO",

  /**
   * value: "KMET"
   * @const
   */
  KMET: "KMET",

  /**
   * value: "LITR"
   * @const
   */
  LITR: "LITR",

  /**
   * value: "METR"
   * @const
   */
  METR: "METR",

  /**
   * value: "MILE"
   * @const
   */
  MILE: "MILE",

  /**
   * value: "MILI"
   * @const
   */
  MILI: "MILI",

  /**
   * value: "MMET"
   * @const
   */
  MMET: "MMET",

  /**
   * value: "PIEC"
   * @const
   */
  PIEC: "PIEC",

  /**
   * value: "PUND"
   * @const
   */
  PUND: "PUND",

  /**
   * value: "SCMT"
   * @const
   */
  SCMT: "SCMT",

  /**
   * value: "SMET"
   * @const
   */
  SMET: "SMET",

  /**
   * value: "SMIL"
   * @const
   */
  SMIL: "SMIL",

  /**
   * value: "SQFO"
   * @const
   */
  SQFO: "SQFO",

  /**
   * value: "SQIN"
   * @const
   */
  SQIN: "SQIN",

  /**
   * value: "SQKI"
   * @const
   */
  SQKI: "SQKI",

  /**
   * value: "SQMI"
   * @const
   */
  SQMI: "SQMI",

  /**
   * value: "SQYA"
   * @const
   */
  SQYA: "SQYA",

  /**
   * value: "TONS"
   * @const
   */
  TONS: "TONS",

  /**
   * value: "USGA"
   * @const
   */
  USGA: "USGA",

  /**
   * value: "USOU"
   * @const
   */
  USOU: "USOU",

  /**
   * value: "USPI"
   * @const
   */
  USPI: "USPI",

  /**
   * value: "USGA"
   * @const
   */
  USGA: "USGA",

  /**
   * value: "YARD"
   * @const
   */
  YARD: "YARD",

  /**
   * Returns a <code>DimensionUoMInput</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/DimensionUoMInput} The enum <code>DimensionUoMInput</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export default {DimensionUoMInput};
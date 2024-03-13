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
import ChargeTypeInput from './ChargeTypeInput';
import QuantityInput from './QuantityInput';

/**
 * The ChargeInput model module.
 * @module model/ChargeInput
 * @version 0.0.1
 */
export default class ChargeInput {
  /**
   * Constructs a new <code>ChargeInput</code>.
   * @alias module:model/ChargeInput
   * @class
   * @param chargeId {Object} The chargeId from the supplier’s PromoStandards Product Pricing and Configuration service
   * @param chargeName {Object} 
   * @param description {Object} 
   * @param chargeType {module:model/ChargeTypeInput} 
   * @param quantity {module:model/QuantityInput} 
   * @param unitPrice {Object} 
   * @param extendedPrice {Object} 
   */
  constructor(chargeId, chargeName, description, chargeType, quantity, unitPrice, extendedPrice) {
    this.chargeId = chargeId;
    this.chargeName = chargeName;
    this.description = description;
    this.chargeType = chargeType;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.extendedPrice = extendedPrice;
  }

  /**
   * Constructs a <code>ChargeInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChargeInput} obj Optional instance to populate.
   * @return {module:model/ChargeInput} The populated <code>ChargeInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChargeInput();
      if (data.hasOwnProperty('chargeId'))
        obj.chargeId = ApiClient.convertToType(data['chargeId'], Object);
      if (data.hasOwnProperty('chargeName'))
        obj.chargeName = ApiClient.convertToType(data['chargeName'], Object);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], Object);
      if (data.hasOwnProperty('chargeType'))
        obj.chargeType = ChargeTypeInput.constructFromObject(data['chargeType']);
      if (data.hasOwnProperty('Quantity'))
        obj.quantity = QuantityInput.constructFromObject(data['Quantity']);
      if (data.hasOwnProperty('unitPrice'))
        obj.unitPrice = ApiClient.convertToType(data['unitPrice'], Object);
      if (data.hasOwnProperty('extendedPrice'))
        obj.extendedPrice = ApiClient.convertToType(data['extendedPrice'], Object);
    }
    return obj;
  }
}

/**
 * The chargeId from the supplier’s PromoStandards Product Pricing and Configuration service
 * @member {Object} chargeId
 */
ChargeInput.prototype.chargeId = undefined;

/**
 * @member {Object} chargeName
 */
ChargeInput.prototype.chargeName = undefined;

/**
 * @member {Object} description
 */
ChargeInput.prototype.description = undefined;

/**
 * @member {module:model/ChargeTypeInput} chargeType
 */
ChargeInput.prototype.chargeType = undefined;

/**
 * @member {module:model/QuantityInput} quantity
 */
ChargeInput.prototype.quantity = undefined;

/**
 * @member {Object} unitPrice
 */
ChargeInput.prototype.unitPrice = undefined;

/**
 * @member {Object} extendedPrice
 */
ChargeInput.prototype.extendedPrice = undefined;

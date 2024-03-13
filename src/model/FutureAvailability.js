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
import QuantityOutput from './QuantityOutput';

/**
 * The FutureAvailability model module.
 * @module model/FutureAvailability
 * @version 0.0.1
 */
export default class FutureAvailability {
  /**
   * Constructs a new <code>FutureAvailability</code>.
   * @alias module:model/FutureAvailability
   * @class
   * @param quantity {module:model/QuantityOutput} 
   * @param availableOn {Object} 
   */
  constructor(quantity, availableOn) {
    this.quantity = quantity;
    this.availableOn = availableOn;
  }

  /**
   * Constructs a <code>FutureAvailability</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FutureAvailability} obj Optional instance to populate.
   * @return {module:model/FutureAvailability} The populated <code>FutureAvailability</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FutureAvailability();
      if (data.hasOwnProperty('Quantity'))
        obj.quantity = QuantityOutput.constructFromObject(data['Quantity']);
      if (data.hasOwnProperty('availableOn'))
        obj.availableOn = ApiClient.convertToType(data['availableOn'], Object);
    }
    return obj;
  }
}

/**
 * @member {module:model/QuantityOutput} quantity
 */
FutureAvailability.prototype.quantity = undefined;

/**
 * @member {Object} availableOn
 */
FutureAvailability.prototype.availableOn = undefined;

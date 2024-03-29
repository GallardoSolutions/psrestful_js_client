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
 * The SalesOrderNumbersArray model module.
 * @module model/SalesOrderNumbersArray
 * @version 0.0.1
 */
export default class SalesOrderNumbersArray {
  /**
   * Constructs a new <code>SalesOrderNumbersArray</code>.
   * @alias module:model/SalesOrderNumbersArray
   * @class
   * @param salesOrderNumber {Object} 
   */
  constructor(salesOrderNumber) {
    this.salesOrderNumber = salesOrderNumber;
  }

  /**
   * Constructs a <code>SalesOrderNumbersArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesOrderNumbersArray} obj Optional instance to populate.
   * @return {module:model/SalesOrderNumbersArray} The populated <code>SalesOrderNumbersArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SalesOrderNumbersArray();
      if (data.hasOwnProperty('SalesOrderNumber'))
        obj.salesOrderNumber = ApiClient.convertToType(data['SalesOrderNumber'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} salesOrderNumber
 */
SalesOrderNumbersArray.prototype.salesOrderNumber = undefined;


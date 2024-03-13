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
import PsDomainModelOrderStatusV100OrderStatusDetailArray from './PsDomainModelOrderStatusV100OrderStatusDetailArray';

/**
 * The PsDomainModelOrderStatusV100OrderStatus model module.
 * @module model/PsDomainModelOrderStatusV100OrderStatus
 * @version 0.0.1
 */
export default class PsDomainModelOrderStatusV100OrderStatus {
  /**
   * Constructs a new <code>PsDomainModelOrderStatusV100OrderStatus</code>.
   * @alias module:model/PsDomainModelOrderStatusV100OrderStatus
   * @class
   * @param purchaseOrderNumber {Object} 
   * @param orderStatusDetailArray {module:model/PsDomainModelOrderStatusV100OrderStatusDetailArray} 
   */
  constructor(purchaseOrderNumber, orderStatusDetailArray) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.orderStatusDetailArray = orderStatusDetailArray;
  }

  /**
   * Constructs a <code>PsDomainModelOrderStatusV100OrderStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PsDomainModelOrderStatusV100OrderStatus} obj Optional instance to populate.
   * @return {module:model/PsDomainModelOrderStatusV100OrderStatus} The populated <code>PsDomainModelOrderStatusV100OrderStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PsDomainModelOrderStatusV100OrderStatus();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], Object);
      if (data.hasOwnProperty('OrderStatusDetailArray'))
        obj.orderStatusDetailArray = PsDomainModelOrderStatusV100OrderStatusDetailArray.constructFromObject(data['OrderStatusDetailArray']);
    }
    return obj;
  }
}

/**
 * @member {Object} purchaseOrderNumber
 */
PsDomainModelOrderStatusV100OrderStatus.prototype.purchaseOrderNumber = undefined;

/**
 * @member {module:model/PsDomainModelOrderStatusV100OrderStatusDetailArray} orderStatusDetailArray
 */
PsDomainModelOrderStatusV100OrderStatus.prototype.orderStatusDetailArray = undefined;


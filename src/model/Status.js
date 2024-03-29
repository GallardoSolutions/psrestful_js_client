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
 * The Status model module.
 * @module model/Status
 * @version 0.0.1
 */
export default class Status {
  /**
   * Constructs a new <code>Status</code>.
   * Possible Statuses according to the reference StatusID    Status Name     Description 10  Order Received  Order has been received. 11  Order Entry Hold    Vendor has a problem with the data in the purchase order, and it is preventing the order                         from being entered. 20  Order Confirmed Order has been received, entered, and accepted 30  Pre-Production  Vendor has begun to process the order, but it is not in production 40  General Hold    Something is preventing the order from being entered 41  Credit Hold     Vendor is awaiting payment from customer 42  Proof Hold      Vendor is awaiting response to proof 43  Art Hold        Vendor is awaiting suitable artwork from customer 44  Back Order Hold Order has been backordered; Nothing has shipped yet. 60  In Production   Production of the order has started 70  In Storage      Order is complete, but vendor is waiting to ship goods 75  Partial Shipment        Order has shipped in Part; remaining items in production 80  Complete        Order has shipped in full—No further updates will be given 99  Canceled        Order has been canceled—No further updates will be given
   * @alias module:model/Status
   * @class
   * @param id {Object} 
   * @param name {Object} 
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Status} obj Optional instance to populate.
   * @return {module:model/Status} The populated <code>Status</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Status();
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
Status.prototype.id = undefined;

/**
 * @member {Object} name
 */
Status.prototype.name = undefined;


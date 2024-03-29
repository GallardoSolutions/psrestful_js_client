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
 * The ContactDetailsOutput model module.
 * @module model/ContactDetailsOutput
 * @version 0.0.1
 */
export default class ContactDetailsOutput {
  /**
   * Constructs a new <code>ContactDetailsOutput</code>.
   * @alias module:model/ContactDetailsOutput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ContactDetailsOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactDetailsOutput} obj Optional instance to populate.
   * @return {module:model/ContactDetailsOutput} The populated <code>ContactDetailsOutput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ContactDetailsOutput();
      if (data.hasOwnProperty('attentionTo'))
        obj.attentionTo = ApiClient.convertToType(data['attentionTo'], Object);
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], Object);
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], Object);
      if (data.hasOwnProperty('address2'))
        obj.address2 = ApiClient.convertToType(data['address2'], Object);
      if (data.hasOwnProperty('address3'))
        obj.address3 = ApiClient.convertToType(data['address3'], Object);
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], Object);
      if (data.hasOwnProperty('region'))
        obj.region = ApiClient.convertToType(data['region'], Object);
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = ApiClient.convertToType(data['postalCode'], Object);
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], Object);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], Object);
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], Object);
      if (data.hasOwnProperty('comments'))
        obj.comments = ApiClient.convertToType(data['comments'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} attentionTo
 */
ContactDetailsOutput.prototype.attentionTo = undefined;

/**
 * @member {Object} companyName
 */
ContactDetailsOutput.prototype.companyName = undefined;

/**
 * @member {Object} address1
 */
ContactDetailsOutput.prototype.address1 = undefined;

/**
 * @member {Object} address2
 */
ContactDetailsOutput.prototype.address2 = undefined;

/**
 * @member {Object} address3
 */
ContactDetailsOutput.prototype.address3 = undefined;

/**
 * @member {Object} city
 */
ContactDetailsOutput.prototype.city = undefined;

/**
 * @member {Object} region
 */
ContactDetailsOutput.prototype.region = undefined;

/**
 * @member {Object} postalCode
 */
ContactDetailsOutput.prototype.postalCode = undefined;

/**
 * @member {Object} country
 */
ContactDetailsOutput.prototype.country = undefined;

/**
 * @member {Object} email
 */
ContactDetailsOutput.prototype.email = undefined;

/**
 * @member {Object} phone
 */
ContactDetailsOutput.prototype.phone = undefined;

/**
 * @member {Object} comments
 */
ContactDetailsOutput.prototype.comments = undefined;


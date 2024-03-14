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
import DimensionUoMOutput from './DimensionUoMOutput';
import WeightUOM from './WeightUOM';

/**
 * The ShippingPackage model module.
 * @module model/ShippingPackage
 * @version 0.0.1
 */
export default class ShippingPackage {
  /**
   * Constructs a new <code>ShippingPackage</code>.
   * @alias module:model/ShippingPackage
   * @class
   * @param packageType {Object} 
   * @param description {Object} 
   * @param quantity {Object} 
   * @param dimensionUom {module:model/DimensionUoMOutput} 
   * @param depth {Object} 
   * @param height {Object} 
   * @param width {Object} 
   * @param weightUom {module:model/WeightUOM} 
   * @param weight {Object} 
   */
  constructor(packageType, description, quantity, dimensionUom, depth, height, width, weightUom, weight) {
    this.packageType = packageType;
    this.description = description;
    this.quantity = quantity;
    this.dimensionUom = dimensionUom;
    this.depth = depth;
    this.height = height;
    this.width = width;
    this.weightUom = weightUom;
    this.weight = weight;
  }

  /**
   * Constructs a <code>ShippingPackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShippingPackage} obj Optional instance to populate.
   * @return {module:model/ShippingPackage} The populated <code>ShippingPackage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShippingPackage();
      if (data.hasOwnProperty('packageType'))
        obj.packageType = ApiClient.convertToType(data['packageType'], Object);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], Object);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], Object);
      if (data.hasOwnProperty('dimensionUom'))
        obj.dimensionUom = DimensionUoMOutput.constructFromObject(data['dimensionUom']);
      if (data.hasOwnProperty('depth'))
        obj.depth = ApiClient.convertToType(data['depth'], Object);
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], Object);
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], Object);
      if (data.hasOwnProperty('weightUom'))
        obj.weightUom = WeightUoM.constructFromObject(data['weightUom']);
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} packageType
 */
ShippingPackage.prototype.packageType = undefined;

/**
 * @member {Object} description
 */
ShippingPackage.prototype.description = undefined;

/**
 * @member {Object} quantity
 */
ShippingPackage.prototype.quantity = undefined;

/**
 * @member {module:model/DimensionUoMOutput} dimensionUom
 */
ShippingPackage.prototype.dimensionUom = undefined;

/**
 * @member {Object} depth
 */
ShippingPackage.prototype.depth = undefined;

/**
 * @member {Object} height
 */
ShippingPackage.prototype.height = undefined;

/**
 * @member {Object} width
 */
ShippingPackage.prototype.width = undefined;

/**
 * @member {module:model/WeightUoM} weightUom
 */
ShippingPackage.prototype.weightUom = undefined;

/**
 * @member {Object} weight
 */
ShippingPackage.prototype.weight = undefined;


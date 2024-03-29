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
 * The PsDomainModelPpcDecoration model module.
 * @module model/PsDomainModelPpcDecoration
 * @version 0.0.1
 */
export default class PsDomainModelPpcDecoration {
  /**
   * Constructs a new <code>PsDomainModelPpcDecoration</code>.
   * @alias module:model/PsDomainModelPpcDecoration
   * @class
   * @param decorationId {Object} 
   * @param decorationName {Object} 
   * @param decorationGeometry {Object} 
   * @param decorationHeight {Object} 
   * @param decorationWidth {Object} 
   * @param decorationDiameter {Object} 
   * @param decorationUom {Object} The unit of measure for the decoration area
   * @param allowSubForDefaultLocation {Object} Buyer is allowed to substitute a decoration location without changing the price
   * @param allowSubForDefaultMethod {Object} Buyer is allowed to substitute this decoration method without changing the price
   * @param chargeArray {Object} 
   * @param decorationUnitsIncluded {Object} The number of included decoration units. For example, if 1 color decoration is included set value to “1”. If 7,500 stitches are included set value to “7500”
   * @param decorationUnitsIncludedUom {Object} 
   * @param decorationUnitsMax {Object} This is the max number of decoration units for this decoration/location combination.
   * @param defaultDecoration {Object} Specifies whether this is the default decoration for this location
   * @param leadTime {Object} The lead time for the given decoration
   * @param rushLeadTime {Object} The lead time for rush service for a given decoration (rush charges may apply)
   */
  constructor(decorationId, decorationName, decorationGeometry, decorationHeight, decorationWidth, decorationDiameter, decorationUom, allowSubForDefaultLocation, allowSubForDefaultMethod, chargeArray, decorationUnitsIncluded, decorationUnitsIncludedUom, decorationUnitsMax, defaultDecoration, leadTime, rushLeadTime) {
    this.decorationId = decorationId;
    this.decorationName = decorationName;
    this.decorationGeometry = decorationGeometry;
    this.decorationHeight = decorationHeight;
    this.decorationWidth = decorationWidth;
    this.decorationDiameter = decorationDiameter;
    this.decorationUom = decorationUom;
    this.allowSubForDefaultLocation = allowSubForDefaultLocation;
    this.allowSubForDefaultMethod = allowSubForDefaultMethod;
    this.chargeArray = chargeArray;
    this.decorationUnitsIncluded = decorationUnitsIncluded;
    this.decorationUnitsIncludedUom = decorationUnitsIncludedUom;
    this.decorationUnitsMax = decorationUnitsMax;
    this.defaultDecoration = defaultDecoration;
    this.leadTime = leadTime;
    this.rushLeadTime = rushLeadTime;
  }

  /**
   * Constructs a <code>PsDomainModelPpcDecoration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PsDomainModelPpcDecoration} obj Optional instance to populate.
   * @return {module:model/PsDomainModelPpcDecoration} The populated <code>PsDomainModelPpcDecoration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PsDomainModelPpcDecoration();
      if (data.hasOwnProperty('decorationId'))
        obj.decorationId = ApiClient.convertToType(data['decorationId'], Object);
      if (data.hasOwnProperty('decorationName'))
        obj.decorationName = ApiClient.convertToType(data['decorationName'], Object);
      if (data.hasOwnProperty('decorationGeometry'))
        obj.decorationGeometry = ApiClient.convertToType(data['decorationGeometry'], Object);
      if (data.hasOwnProperty('decorationHeight'))
        obj.decorationHeight = ApiClient.convertToType(data['decorationHeight'], Object);
      if (data.hasOwnProperty('decorationWidth'))
        obj.decorationWidth = ApiClient.convertToType(data['decorationWidth'], Object);
      if (data.hasOwnProperty('decorationDiameter'))
        obj.decorationDiameter = ApiClient.convertToType(data['decorationDiameter'], Object);
      if (data.hasOwnProperty('decorationUom'))
        obj.decorationUom = ApiClient.convertToType(data['decorationUom'], Object);
      if (data.hasOwnProperty('allowSubForDefaultLocation'))
        obj.allowSubForDefaultLocation = ApiClient.convertToType(data['allowSubForDefaultLocation'], Object);
      if (data.hasOwnProperty('allowSubForDefaultMethod'))
        obj.allowSubForDefaultMethod = ApiClient.convertToType(data['allowSubForDefaultMethod'], Object);
      if (data.hasOwnProperty('itemPartQuantityLTM'))
        obj.itemPartQuantityLTM = ApiClient.convertToType(data['itemPartQuantityLTM'], Object);
      if (data.hasOwnProperty('ChargeArray'))
        obj.chargeArray = ApiClient.convertToType(data['ChargeArray'], Object);
      if (data.hasOwnProperty('decorationUnitsIncluded'))
        obj.decorationUnitsIncluded = ApiClient.convertToType(data['decorationUnitsIncluded'], Object);
      if (data.hasOwnProperty('decorationUnitsIncludedUom'))
        obj.decorationUnitsIncludedUom = ApiClient.convertToType(data['decorationUnitsIncludedUom'], Object);
      if (data.hasOwnProperty('decorationUnitsMax'))
        obj.decorationUnitsMax = ApiClient.convertToType(data['decorationUnitsMax'], Object);
      if (data.hasOwnProperty('defaultDecoration'))
        obj.defaultDecoration = ApiClient.convertToType(data['defaultDecoration'], Object);
      if (data.hasOwnProperty('leadTime'))
        obj.leadTime = ApiClient.convertToType(data['leadTime'], Object);
      if (data.hasOwnProperty('rushLeadTime'))
        obj.rushLeadTime = ApiClient.convertToType(data['rushLeadTime'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} decorationId
 */
PsDomainModelPpcDecoration.prototype.decorationId = undefined;

/**
 * @member {Object} decorationName
 */
PsDomainModelPpcDecoration.prototype.decorationName = undefined;

/**
 * @member {Object} decorationGeometry
 */
PsDomainModelPpcDecoration.prototype.decorationGeometry = undefined;

/**
 * @member {Object} decorationHeight
 */
PsDomainModelPpcDecoration.prototype.decorationHeight = undefined;

/**
 * @member {Object} decorationWidth
 */
PsDomainModelPpcDecoration.prototype.decorationWidth = undefined;

/**
 * @member {Object} decorationDiameter
 */
PsDomainModelPpcDecoration.prototype.decorationDiameter = undefined;

/**
 * The unit of measure for the decoration area
 * @member {Object} decorationUom
 */
PsDomainModelPpcDecoration.prototype.decorationUom = undefined;

/**
 * Buyer is allowed to substitute a decoration location without changing the price
 * @member {Object} allowSubForDefaultLocation
 */
PsDomainModelPpcDecoration.prototype.allowSubForDefaultLocation = undefined;

/**
 * Buyer is allowed to substitute this decoration method without changing the price
 * @member {Object} allowSubForDefaultMethod
 */
PsDomainModelPpcDecoration.prototype.allowSubForDefaultMethod = undefined;

/**
 * @member {Object} itemPartQuantityLTM
 */
PsDomainModelPpcDecoration.prototype.itemPartQuantityLTM = undefined;

/**
 * @member {Object} chargeArray
 */
PsDomainModelPpcDecoration.prototype.chargeArray = undefined;

/**
 * The number of included decoration units. For example, if 1 color decoration is included set value to “1”. If 7,500 stitches are included set value to “7500”
 * @member {Object} decorationUnitsIncluded
 */
PsDomainModelPpcDecoration.prototype.decorationUnitsIncluded = undefined;

/**
 * @member {Object} decorationUnitsIncludedUom
 */
PsDomainModelPpcDecoration.prototype.decorationUnitsIncludedUom = undefined;

/**
 * This is the max number of decoration units for this decoration/location combination.
 * @member {Object} decorationUnitsMax
 */
PsDomainModelPpcDecoration.prototype.decorationUnitsMax = undefined;

/**
 * Specifies whether this is the default decoration for this location
 * @member {Object} defaultDecoration
 */
PsDomainModelPpcDecoration.prototype.defaultDecoration = undefined;

/**
 * The lead time for the given decoration
 * @member {Object} leadTime
 */
PsDomainModelPpcDecoration.prototype.leadTime = undefined;

/**
 * The lead time for rush service for a given decoration (rush charges may apply)
 * @member {Object} rushLeadTime
 */
PsDomainModelPpcDecoration.prototype.rushLeadTime = undefined;


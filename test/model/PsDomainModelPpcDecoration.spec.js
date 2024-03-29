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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.psrestful);
  }
}(this, function(expect, psrestful) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PsDomainModelPpcDecoration', function() {
      beforeEach(function() {
        instance = new psrestful.PsDomainModelPpcDecoration();
      });

      it('should create an instance of PsDomainModelPpcDecoration', function() {
        // TODO: update the code to test PsDomainModelPpcDecoration
        expect(instance).to.be.a(psrestful.PsDomainModelPpcDecoration);
      });

      it('should have the property decorationId (base name: "decorationId")', function() {
        // TODO: update the code to test the property decorationId
        expect(instance).to.have.property('decorationId');
        // expect(instance.decorationId).to.be(expectedValueLiteral);
      });

      it('should have the property decorationName (base name: "decorationName")', function() {
        // TODO: update the code to test the property decorationName
        expect(instance).to.have.property('decorationName');
        // expect(instance.decorationName).to.be(expectedValueLiteral);
      });

      it('should have the property decorationGeometry (base name: "decorationGeometry")', function() {
        // TODO: update the code to test the property decorationGeometry
        expect(instance).to.have.property('decorationGeometry');
        // expect(instance.decorationGeometry).to.be(expectedValueLiteral);
      });

      it('should have the property decorationHeight (base name: "decorationHeight")', function() {
        // TODO: update the code to test the property decorationHeight
        expect(instance).to.have.property('decorationHeight');
        // expect(instance.decorationHeight).to.be(expectedValueLiteral);
      });

      it('should have the property decorationWidth (base name: "decorationWidth")', function() {
        // TODO: update the code to test the property decorationWidth
        expect(instance).to.have.property('decorationWidth');
        // expect(instance.decorationWidth).to.be(expectedValueLiteral);
      });

      it('should have the property decorationDiameter (base name: "decorationDiameter")', function() {
        // TODO: update the code to test the property decorationDiameter
        expect(instance).to.have.property('decorationDiameter');
        // expect(instance.decorationDiameter).to.be(expectedValueLiteral);
      });

      it('should have the property decorationUom (base name: "decorationUom")', function() {
        // TODO: update the code to test the property decorationUom
        expect(instance).to.have.property('decorationUom');
        // expect(instance.decorationUom).to.be(expectedValueLiteral);
      });

      it('should have the property allowSubForDefaultLocation (base name: "allowSubForDefaultLocation")', function() {
        // TODO: update the code to test the property allowSubForDefaultLocation
        expect(instance).to.have.property('allowSubForDefaultLocation');
        // expect(instance.allowSubForDefaultLocation).to.be(expectedValueLiteral);
      });

      it('should have the property allowSubForDefaultMethod (base name: "allowSubForDefaultMethod")', function() {
        // TODO: update the code to test the property allowSubForDefaultMethod
        expect(instance).to.have.property('allowSubForDefaultMethod');
        // expect(instance.allowSubForDefaultMethod).to.be(expectedValueLiteral);
      });

      it('should have the property itemPartQuantityLTM (base name: "itemPartQuantityLTM")', function() {
        // TODO: update the code to test the property itemPartQuantityLTM
        expect(instance).to.have.property('itemPartQuantityLTM');
        // expect(instance.itemPartQuantityLTM).to.be(expectedValueLiteral);
      });

      it('should have the property chargeArray (base name: "ChargeArray")', function() {
        // TODO: update the code to test the property chargeArray
        expect(instance).to.have.property('chargeArray');
        // expect(instance.chargeArray).to.be(expectedValueLiteral);
      });

      it('should have the property decorationUnitsIncluded (base name: "decorationUnitsIncluded")', function() {
        // TODO: update the code to test the property decorationUnitsIncluded
        expect(instance).to.have.property('decorationUnitsIncluded');
        // expect(instance.decorationUnitsIncluded).to.be(expectedValueLiteral);
      });

      it('should have the property decorationUnitsIncludedUom (base name: "decorationUnitsIncludedUom")', function() {
        // TODO: update the code to test the property decorationUnitsIncludedUom
        expect(instance).to.have.property('decorationUnitsIncludedUom');
        // expect(instance.decorationUnitsIncludedUom).to.be(expectedValueLiteral);
      });

      it('should have the property decorationUnitsMax (base name: "decorationUnitsMax")', function() {
        // TODO: update the code to test the property decorationUnitsMax
        expect(instance).to.have.property('decorationUnitsMax');
        // expect(instance.decorationUnitsMax).to.be(expectedValueLiteral);
      });

      it('should have the property defaultDecoration (base name: "defaultDecoration")', function() {
        // TODO: update the code to test the property defaultDecoration
        expect(instance).to.have.property('defaultDecoration');
        // expect(instance.defaultDecoration).to.be(expectedValueLiteral);
      });

      it('should have the property leadTime (base name: "leadTime")', function() {
        // TODO: update the code to test the property leadTime
        expect(instance).to.have.property('leadTime');
        // expect(instance.leadTime).to.be(expectedValueLiteral);
      });

      it('should have the property rushLeadTime (base name: "rushLeadTime")', function() {
        // TODO: update the code to test the property rushLeadTime
        expect(instance).to.have.property('rushLeadTime');
        // expect(instance.rushLeadTime).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    factory(root.expect, root.PsResTfulServiceApi);
  }
}(this, function(expect, PsResTfulServiceApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ChargeOutput', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.ChargeOutput();
      });

      it('should create an instance of ChargeOutput', function() {
        // TODO: update the code to test ChargeOutput
        expect(instance).to.be.a(PsResTfulServiceApi.ChargeOutput);
      });

      it('should have the property chargeId (base name: "chargeId")', function() {
        // TODO: update the code to test the property chargeId
        expect(instance).to.have.property('chargeId');
        // expect(instance.chargeId).to.be(expectedValueLiteral);
      });

      it('should have the property chargeName (base name: "chargeName")', function() {
        // TODO: update the code to test the property chargeName
        expect(instance).to.have.property('chargeName');
        // expect(instance.chargeName).to.be(expectedValueLiteral);
      });

      it('should have the property chargeType (base name: "chargeType")', function() {
        // TODO: update the code to test the property chargeType
        expect(instance).to.have.property('chargeType');
        // expect(instance.chargeType).to.be(expectedValueLiteral);
      });

      it('should have the property chargeDescription (base name: "chargeDescription")', function() {
        // TODO: update the code to test the property chargeDescription
        expect(instance).to.have.property('chargeDescription');
        // expect(instance.chargeDescription).to.be(expectedValueLiteral);
      });

      it('should have the property chargePriceArray (base name: "ChargePriceArray")', function() {
        // TODO: update the code to test the property chargePriceArray
        expect(instance).to.have.property('chargePriceArray');
        // expect(instance.chargePriceArray).to.be(expectedValueLiteral);
      });

      it('should have the property chargesAppliesLTM (base name: "chargesAppliesLTM")', function() {
        // TODO: update the code to test the property chargesAppliesLTM
        expect(instance).to.have.property('chargesAppliesLTM');
        // expect(instance.chargesAppliesLTM).to.be(expectedValueLiteral);
      });

      it('should have the property chargesPerLocation (base name: "chargesPerLocation")', function() {
        // TODO: update the code to test the property chargesPerLocation
        expect(instance).to.have.property('chargesPerLocation');
        // expect(instance.chargesPerLocation).to.be(expectedValueLiteral);
      });

      it('should have the property chargesPerColor (base name: "chargesPerColor")', function() {
        // TODO: update the code to test the property chargesPerColor
        expect(instance).to.have.property('chargesPerColor');
        // expect(instance.chargesPerColor).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('ConfigurationInput', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.ConfigurationInput();
      });

      it('should create an instance of ConfigurationInput', function() {
        // TODO: update the code to test ConfigurationInput
        expect(instance).to.be.a(PsResTfulServiceApi.ConfigurationInput);
      });

      it('should have the property referenceNumber (base name: "referenceNumber")', function() {
        // TODO: update the code to test the property referenceNumber
        expect(instance).to.have.property('referenceNumber');
        // expect(instance.referenceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property referenceNumberType (base name: "referenceNumberType")', function() {
        // TODO: update the code to test the property referenceNumberType
        expect(instance).to.have.property('referenceNumberType');
        // expect(instance.referenceNumberType).to.be(expectedValueLiteral);
      });

      it('should have the property preProductionProof (base name: "preProductionProof")', function() {
        // TODO: update the code to test the property preProductionProof
        expect(instance).to.have.property('preProductionProof');
        // expect(instance.preProductionProof).to.be(expectedValueLiteral);
      });

      it('should have the property chargeArray (base name: "ChargeArray")', function() {
        // TODO: update the code to test the property chargeArray
        expect(instance).to.have.property('chargeArray');
        // expect(instance.chargeArray).to.be(expectedValueLiteral);
      });

      it('should have the property locationArray (base name: "LocationArray")', function() {
        // TODO: update the code to test the property locationArray
        expect(instance).to.have.property('locationArray');
        // expect(instance.locationArray).to.be(expectedValueLiteral);
      });

    });
  });

}));
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
    describe('Tax', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.Tax();
      });

      it('should create an instance of Tax', function() {
        // TODO: update the code to test Tax
        expect(instance).to.be.a(PsResTfulServiceApi.Tax);
      });

      it('should have the property taxType (base name: "taxType")', function() {
        // TODO: update the code to test the property taxType
        expect(instance).to.have.property('taxType');
        // expect(instance.taxType).to.be(expectedValueLiteral);
      });

      it('should have the property taxJurisdiction (base name: "taxJurisdiction")', function() {
        // TODO: update the code to test the property taxJurisdiction
        expect(instance).to.have.property('taxJurisdiction');
        // expect(instance.taxJurisdiction).to.be(expectedValueLiteral);
      });

      it('should have the property taxAmount (base name: "taxAmount")', function() {
        // TODO: update the code to test the property taxAmount
        expect(instance).to.have.property('taxAmount');
        // expect(instance.taxAmount).to.be(expectedValueLiteral);
      });

    });
  });

}));

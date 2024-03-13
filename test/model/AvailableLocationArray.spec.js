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
    describe('AvailableLocationArray', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.AvailableLocationArray();
      });

      it('should create an instance of AvailableLocationArray', function() {
        // TODO: update the code to test AvailableLocationArray
        expect(instance).to.be.a(PsResTfulServiceApi.AvailableLocationArray);
      });

      it('should have the property availableLocation (base name: "AvailableLocation")', function() {
        // TODO: update the code to test the property availableLocation
        expect(instance).to.have.property('availableLocation');
        // expect(instance.availableLocation).to.be(expectedValueLiteral);
      });

    });
  });

}));

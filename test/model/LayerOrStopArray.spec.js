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
    describe('LayerOrStopArray', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.LayerOrStopArray();
      });

      it('should create an instance of LayerOrStopArray', function() {
        // TODO: update the code to test LayerOrStopArray
        expect(instance).to.be.a(PsResTfulServiceApi.LayerOrStopArray);
      });

      it('should have the property layerOrStop (base name: "LayerOrStop")', function() {
        // TODO: update the code to test the property layerOrStop
        expect(instance).to.have.property('layerOrStop');
        // expect(instance.layerOrStop).to.be(expectedValueLiteral);
      });

    });
  });

}));

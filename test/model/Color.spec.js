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
    describe('Color', function() {
      beforeEach(function() {
        instance = new psrestful.Color();
      });

      it('should create an instance of Color', function() {
        // TODO: update the code to test Color
        expect(instance).to.be.a(psrestful.Color);
      });

      it('should have the property colorName (base name: "colorName")', function() {
        // TODO: update the code to test the property colorName
        expect(instance).to.have.property('colorName');
        // expect(instance.colorName).to.be(expectedValueLiteral);
      });

      it('should have the property hex (base name: "hex")', function() {
        // TODO: update the code to test the property hex
        expect(instance).to.have.property('hex');
        // expect(instance.hex).to.be(expectedValueLiteral);
      });

      it('should have the property approximatePms (base name: "approximatePms")', function() {
        // TODO: update the code to test the property approximatePms
        expect(instance).to.have.property('approximatePms');
        // expect(instance.approximatePms).to.be(expectedValueLiteral);
      });

      it('should have the property standardColorName (base name: "standardColorName")', function() {
        // TODO: update the code to test the property standardColorName
        expect(instance).to.have.property('standardColorName');
        // expect(instance.standardColorName).to.be(expectedValueLiteral);
      });

    });
  });

}));

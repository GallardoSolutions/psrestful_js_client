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
    describe('DecorationColorResponse', function() {
      beforeEach(function() {
        instance = new psrestful.DecorationColorResponse();
      });

      it('should create an instance of DecorationColorResponse', function() {
        // TODO: update the code to test DecorationColorResponse
        expect(instance).to.be.a(psrestful.DecorationColorResponse);
      });

      it('should have the property decorationColors (base name: "DecorationColors")', function() {
        // TODO: update the code to test the property decorationColors
        expect(instance).to.have.property('decorationColors');
        // expect(instance.decorationColors).to.be(expectedValueLiteral);
      });

      it('should have the property errorMessage (base name: "ErrorMessage")', function() {
        // TODO: update the code to test the property errorMessage
        expect(instance).to.have.property('errorMessage');
        // expect(instance.errorMessage).to.be(expectedValueLiteral);
      });

    });
  });

}));

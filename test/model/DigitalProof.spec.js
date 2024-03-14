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
    describe('DigitalProof', function() {
      beforeEach(function() {
        instance = new psrestful.DigitalProof();
      });

      it('should create an instance of DigitalProof', function() {
        // TODO: update the code to test DigitalProof
        expect(instance).to.be.a(psrestful.DigitalProof);
      });

      it('should have the property required (base name: "required")', function() {
        // TODO: update the code to test the property required
        expect(instance).to.have.property('required');
        // expect(instance.required).to.be(expectedValueLiteral);
      });

      it('should have the property digitalProofAddressArray (base name: "DigitalProofAddressArray")', function() {
        // TODO: update the code to test the property digitalProofAddressArray
        expect(instance).to.have.property('digitalProofAddressArray');
        // expect(instance.digitalProofAddressArray).to.be(expectedValueLiteral);
      });

    });
  });

}));

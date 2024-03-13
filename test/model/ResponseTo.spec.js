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
    describe('ResponseTo', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.ResponseTo();
      });

      it('should create an instance of ResponseTo', function() {
        // TODO: update the code to test ResponseTo
        expect(instance).to.be.a(PsResTfulServiceApi.ResponseTo);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property emailAddress (base name: "email_address")', function() {
        // TODO: update the code to test the property emailAddress
        expect(instance).to.have.property('emailAddress');
        // expect(instance.emailAddress).to.be(expectedValueLiteral);
      });

      it('should have the property phoneNumber (base name: "phone_number")', function() {
        // TODO: update the code to test the property phoneNumber
        expect(instance).to.have.property('phoneNumber');
        // expect(instance.phoneNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));

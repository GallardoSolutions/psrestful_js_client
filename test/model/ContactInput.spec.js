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
    describe('ContactInput', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.ContactInput();
      });

      it('should create an instance of ContactInput', function() {
        // TODO: update the code to test ContactInput
        expect(instance).to.be.a(PsResTfulServiceApi.ContactInput);
      });

      it('should have the property contactType (base name: "contactType")', function() {
        // TODO: update the code to test the property contactType
        expect(instance).to.have.property('contactType');
        // expect(instance.contactType).to.be(expectedValueLiteral);
      });

      it('should have the property contactDetails (base name: "ContactDetails")', function() {
        // TODO: update the code to test the property contactDetails
        expect(instance).to.have.property('contactDetails');
        // expect(instance.contactDetails).to.be(expectedValueLiteral);
      });

      it('should have the property accountName (base name: "accountName")', function() {
        // TODO: update the code to test the property accountName
        expect(instance).to.have.property('accountName');
        // expect(instance.accountName).to.be(expectedValueLiteral);
      });

      it('should have the property accountNumber (base name: "accountNumber")', function() {
        // TODO: update the code to test the property accountNumber
        expect(instance).to.have.property('accountNumber');
        // expect(instance.accountNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));

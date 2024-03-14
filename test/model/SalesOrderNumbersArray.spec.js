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
    describe('SalesOrderNumbersArray', function() {
      beforeEach(function() {
        instance = new psrestful.SalesOrderNumbersArray();
      });

      it('should create an instance of SalesOrderNumbersArray', function() {
        // TODO: update the code to test SalesOrderNumbersArray
        expect(instance).to.be.a(psrestful.SalesOrderNumbersArray);
      });

      it('should have the property salesOrderNumber (base name: "SalesOrderNumber")', function() {
        // TODO: update the code to test the property salesOrderNumber
        expect(instance).to.have.property('salesOrderNumber');
        // expect(instance.salesOrderNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));

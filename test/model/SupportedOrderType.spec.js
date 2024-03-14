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
    describe('SupportedOrderType', function() {
      beforeEach(function() {
        instance = psrestful.SupportedOrderType;
      });

      it('should create an instance of SupportedOrderType', function() {
        // TODO: update the code to test SupportedOrderType
        expect(instance).to.be.a('object');
      });

      it('should have the property blank', function() {
        expect(instance).to.have.property('blank');
        expect(instance.blank).to.be("Blank");
      });

      it('should have the property sample', function() {
        expect(instance).to.have.property('sample');
        expect(instance.sample).to.be("Sample");
      });

      it('should have the property simple', function() {
        expect(instance).to.have.property('simple');
        expect(instance.simple).to.be("Simple");
      });

      it('should have the property configured', function() {
        expect(instance).to.have.property('configured');
        expect(instance.configured).to.be("Configured");
      });

    });
  });

}));

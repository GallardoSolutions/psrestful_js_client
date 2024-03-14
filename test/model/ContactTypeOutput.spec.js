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
    describe('ContactTypeOutput', function() {
      beforeEach(function() {
        instance = psrestful.ContactTypeOutput;
      });

      it('should create an instance of ContactTypeOutput', function() {
        // TODO: update the code to test ContactTypeOutput
        expect(instance).to.be.a('object');
      });

      it('should have the property art', function() {
        expect(instance).to.have.property('art');
        expect(instance.art).to.be("Art");
      });

      it('should have the property bill', function() {
        expect(instance).to.have.property('bill');
        expect(instance.bill).to.be("Bill");
      });

      it('should have the property expeditor', function() {
        expect(instance).to.have.property('expeditor');
        expect(instance.expeditor).to.be("Expeditor");
      });

      it('should have the property order', function() {
        expect(instance).to.have.property('order');
        expect(instance.order).to.be("Order");
      });

      it('should have the property sales', function() {
        expect(instance).to.have.property('sales');
        expect(instance.sales).to.be("Sales");
      });

      it('should have the property sold', function() {
        expect(instance).to.have.property('sold');
        expect(instance.sold).to.be("Sold");
      });

    });
  });

}));

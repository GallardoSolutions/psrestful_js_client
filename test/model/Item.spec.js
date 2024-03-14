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
    describe('Item', function() {
      beforeEach(function() {
        instance = new psrestful.Item();
      });

      it('should create an instance of Item', function() {
        // TODO: update the code to test Item
        expect(instance).to.be.a(psrestful.Item);
      });

      it('should have the property supplierProductId (base name: "supplierProductId")', function() {
        // TODO: update the code to test the property supplierProductId
        expect(instance).to.have.property('supplierProductId');
        // expect(instance.supplierProductId).to.be(expectedValueLiteral);
      });

      it('should have the property supplierPartId (base name: "supplierPartId")', function() {
        // TODO: update the code to test the property supplierPartId
        expect(instance).to.have.property('supplierPartId');
        // expect(instance.supplierPartId).to.be(expectedValueLiteral);
      });

      it('should have the property distributorProductId (base name: "distributorProductId")', function() {
        // TODO: update the code to test the property distributorProductId
        expect(instance).to.have.property('distributorProductId');
        // expect(instance.distributorProductId).to.be(expectedValueLiteral);
      });

      it('should have the property distributorPartId (base name: "distributorPartId")', function() {
        // TODO: update the code to test the property distributorPartId
        expect(instance).to.have.property('distributorPartId');
        // expect(instance.distributorPartId).to.be(expectedValueLiteral);
      });

      it('should have the property purchaseOrderLineNumber (base name: "purchaseOrderLineNumber")', function() {
        // TODO: update the code to test the property purchaseOrderLineNumber
        expect(instance).to.have.property('purchaseOrderLineNumber');
        // expect(instance.purchaseOrderLineNumber).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

    });
  });

}));

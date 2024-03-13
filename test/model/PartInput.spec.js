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
    describe('PartInput', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.PartInput();
      });

      it('should create an instance of PartInput', function() {
        // TODO: update the code to test PartInput
        expect(instance).to.be.a(PsResTfulServiceApi.PartInput);
      });

      it('should have the property partGroup (base name: "partGroup")', function() {
        // TODO: update the code to test the property partGroup
        expect(instance).to.have.property('partGroup');
        // expect(instance.partGroup).to.be(expectedValueLiteral);
      });

      it('should have the property partId (base name: "partId")', function() {
        // TODO: update the code to test the property partId
        expect(instance).to.have.property('partId');
        // expect(instance.partId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "Quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property customerPartId (base name: "customerPartId")', function() {
        // TODO: update the code to test the property customerPartId
        expect(instance).to.have.property('customerPartId');
        // expect(instance.customerPartId).to.be(expectedValueLiteral);
      });

      it('should have the property customerSupplied (base name: "customerSupplied")', function() {
        // TODO: update the code to test the property customerSupplied
        expect(instance).to.have.property('customerSupplied');
        // expect(instance.customerSupplied).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property locationLinkId (base name: "locationLinkId")', function() {
        // TODO: update the code to test the property locationLinkId
        expect(instance).to.have.property('locationLinkId');
        // expect(instance.locationLinkId).to.be(expectedValueLiteral);
      });

      it('should have the property unitPrice (base name: "unitPrice")', function() {
        // TODO: update the code to test the property unitPrice
        expect(instance).to.have.property('unitPrice');
        // expect(instance.unitPrice).to.be(expectedValueLiteral);
      });

      it('should have the property extendedPrice (base name: "extendedPrice")', function() {
        // TODO: update the code to test the property extendedPrice
        expect(instance).to.have.property('extendedPrice');
        // expect(instance.extendedPrice).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentLinkArray (base name: "ShipmentLinkArray")', function() {
        // TODO: update the code to test the property shipmentLinkArray
        expect(instance).to.have.property('shipmentLinkArray');
        // expect(instance.shipmentLinkArray).to.be(expectedValueLiteral);
      });

    });
  });

}));
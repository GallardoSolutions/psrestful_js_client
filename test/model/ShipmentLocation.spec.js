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
    describe('ShipmentLocation', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.ShipmentLocation();
      });

      it('should create an instance of ShipmentLocation', function() {
        // TODO: update the code to test ShipmentLocation
        expect(instance).to.be.a(PsResTfulServiceApi.ShipmentLocation);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property complete (base name: "complete")', function() {
        // TODO: update the code to test the property complete
        expect(instance).to.have.property('complete');
        // expect(instance.complete).to.be(expectedValueLiteral);
      });

      it('should have the property shipFromAddress (base name: "ShipFromAddress")', function() {
        // TODO: update the code to test the property shipFromAddress
        expect(instance).to.have.property('shipFromAddress');
        // expect(instance.shipFromAddress).to.be(expectedValueLiteral);
      });

      it('should have the property shipToAddress (base name: "ShipToAddress")', function() {
        // TODO: update the code to test the property shipToAddress
        expect(instance).to.have.property('shipToAddress');
        // expect(instance.shipToAddress).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentDestinationType (base name: "shipmentDestinationType")', function() {
        // TODO: update the code to test the property shipmentDestinationType
        expect(instance).to.have.property('shipmentDestinationType');
        // expect(instance.shipmentDestinationType).to.be(expectedValueLiteral);
      });

      it('should have the property packageArray (base name: "PackageArray")', function() {
        // TODO: update the code to test the property packageArray
        expect(instance).to.have.property('packageArray');
        // expect(instance.packageArray).to.be(expectedValueLiteral);
      });

    });
  });

}));
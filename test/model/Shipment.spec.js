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
    describe('Shipment', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.Shipment();
      });

      it('should create an instance of Shipment', function() {
        // TODO: update the code to test Shipment
        expect(instance).to.be.a(PsResTfulServiceApi.Shipment);
      });

      it('should have the property shipTo (base name: "ShipTo")', function() {
        // TODO: update the code to test the property shipTo
        expect(instance).to.have.property('shipTo');
        // expect(instance.shipTo).to.be(expectedValueLiteral);
      });

      it('should have the property packingListRequired (base name: "packingListRequired")', function() {
        // TODO: update the code to test the property packingListRequired
        expect(instance).to.have.property('packingListRequired');
        // expect(instance.packingListRequired).to.be(expectedValueLiteral);
      });

      it('should have the property blindShip (base name: "blindShip")', function() {
        // TODO: update the code to test the property blindShip
        expect(instance).to.have.property('blindShip');
        // expect(instance.blindShip).to.be(expectedValueLiteral);
      });

      it('should have the property allowConsolidation (base name: "allowConsolidation")', function() {
        // TODO: update the code to test the property allowConsolidation
        expect(instance).to.have.property('allowConsolidation');
        // expect(instance.allowConsolidation).to.be(expectedValueLiteral);
      });

      it('should have the property freightDetails (base name: "FreightDetails")', function() {
        // TODO: update the code to test the property freightDetails
        expect(instance).to.have.property('freightDetails');
        // expect(instance.freightDetails).to.be(expectedValueLiteral);
      });

      it('should have the property thirdPartyAccount (base name: "ThirdPartyAccount")', function() {
        // TODO: update the code to test the property thirdPartyAccount
        expect(instance).to.have.property('thirdPartyAccount');
        // expect(instance.thirdPartyAccount).to.be(expectedValueLiteral);
      });

      it('should have the property shipReferences (base name: "shipReferences")', function() {
        // TODO: update the code to test the property shipReferences
        expect(instance).to.have.property('shipReferences');
        // expect(instance.shipReferences).to.be(expectedValueLiteral);
      });

      it('should have the property comments (base name: "comments")', function() {
        // TODO: update the code to test the property comments
        expect(instance).to.have.property('comments');
        // expect(instance.comments).to.be(expectedValueLiteral);
      });

    });
  });

}));
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
    describe('InventoryLevelsResponseV121', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.InventoryLevelsResponseV121();
      });

      it('should create an instance of InventoryLevelsResponseV121', function() {
        // TODO: update the code to test InventoryLevelsResponseV121
        expect(instance).to.be.a(PsResTfulServiceApi.InventoryLevelsResponseV121);
      });

      it('should have the property productID (base name: "productID")', function() {
        // TODO: update the code to test the property productID
        expect(instance).to.have.property('productID');
        // expect(instance.productID).to.be(expectedValueLiteral);
      });

      it('should have the property productVariationInventoryArray (base name: "ProductVariationInventoryArray")', function() {
        // TODO: update the code to test the property productVariationInventoryArray
        expect(instance).to.have.property('productVariationInventoryArray');
        // expect(instance.productVariationInventoryArray).to.be(expectedValueLiteral);
      });

      it('should have the property productCompanionInventoryArray (base name: "ProductCompanionInventoryArray")', function() {
        // TODO: update the code to test the property productCompanionInventoryArray
        expect(instance).to.have.property('productCompanionInventoryArray');
        // expect(instance.productCompanionInventoryArray).to.be(expectedValueLiteral);
      });

      it('should have the property errorMessage (base name: "errorMessage")', function() {
        // TODO: update the code to test the property errorMessage
        expect(instance).to.have.property('errorMessage');
        // expect(instance.errorMessage).to.be(expectedValueLiteral);
      });

      it('should have the property customMessageArray (base name: "CustomMessageArray")', function() {
        // TODO: update the code to test the property customMessageArray
        expect(instance).to.have.property('customMessageArray');
        // expect(instance.customMessageArray).to.be(expectedValueLiteral);
      });

    });
  });

}));
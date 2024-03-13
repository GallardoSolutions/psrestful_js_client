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
    describe('PartPrice', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.PartPrice();
      });

      it('should create an instance of PartPrice', function() {
        // TODO: update the code to test PartPrice
        expect(instance).to.be.a(PsResTfulServiceApi.PartPrice);
      });

      it('should have the property minQuantity (base name: "minQuantity")', function() {
        // TODO: update the code to test the property minQuantity
        expect(instance).to.have.property('minQuantity');
        // expect(instance.minQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property discountCode (base name: "discountCode")', function() {
        // TODO: update the code to test the property discountCode
        expect(instance).to.have.property('discountCode');
        // expect(instance.discountCode).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property priceUom (base name: "priceUom")', function() {
        // TODO: update the code to test the property priceUom
        expect(instance).to.have.property('priceUom');
        // expect(instance.priceUom).to.be(expectedValueLiteral);
      });

      it('should have the property priceEffectiveDate (base name: "priceEffectiveDate")', function() {
        // TODO: update the code to test the property priceEffectiveDate
        expect(instance).to.have.property('priceEffectiveDate');
        // expect(instance.priceEffectiveDate).to.be(expectedValueLiteral);
      });

      it('should have the property priceExpiryDate (base name: "priceExpiryDate")', function() {
        // TODO: update the code to test the property priceExpiryDate
        expect(instance).to.have.property('priceExpiryDate');
        // expect(instance.priceExpiryDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
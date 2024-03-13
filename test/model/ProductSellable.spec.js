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
    describe('ProductSellable', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.ProductSellable();
      });

      it('should create an instance of ProductSellable', function() {
        // TODO: update the code to test ProductSellable
        expect(instance).to.be.a(PsResTfulServiceApi.ProductSellable);
      });

      it('should have the property productId (base name: "productId")', function() {
        // TODO: update the code to test the property productId
        expect(instance).to.have.property('productId');
        // expect(instance.productId).to.be(expectedValueLiteral);
      });

      it('should have the property partId (base name: "partId")', function() {
        // TODO: update the code to test the property partId
        expect(instance).to.have.property('partId');
        // expect(instance.partId).to.be(expectedValueLiteral);
      });

      it('should have the property culturePoint (base name: "culturePoint")', function() {
        // TODO: update the code to test the property culturePoint
        expect(instance).to.have.property('culturePoint');
        // expect(instance.culturePoint).to.be(expectedValueLiteral);
      });

    });
  });

}));

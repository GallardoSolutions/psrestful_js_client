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
    describe('ClassTypeArray', function() {
      beforeEach(function() {
        instance = new PsResTfulServiceApi.ClassTypeArray();
      });

      it('should create an instance of ClassTypeArray', function() {
        // TODO: update the code to test ClassTypeArray
        expect(instance).to.be.a(PsResTfulServiceApi.ClassTypeArray);
      });

      it('should have the property classType (base name: "ClassType")', function() {
        // TODO: update the code to test the property classType
        expect(instance).to.have.property('classType');
        // expect(instance.classType).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('DimUOM', function() {
      beforeEach(function() {
        instance = PsResTfulServiceApi.DimUOM;
      });

      it('should create an instance of DimUOM', function() {
        // TODO: update the code to test DimUOM
        expect(instance).to.be.a('object');
      });

      it('should have the property inches', function() {
        expect(instance).to.have.property('inches');
        expect(instance.inches).to.be("Inches");
      });

      it('should have the property feet', function() {
        expect(instance).to.have.property('feet');
        expect(instance.feet).to.be("Feet");
      });

      it('should have the property mm', function() {
        expect(instance).to.have.property('mm');
        expect(instance.mm).to.be("mm");
      });

      it('should have the property cm', function() {
        expect(instance).to.have.property('cm');
        expect(instance.cm).to.be("cm");
      });

      it('should have the property meters', function() {
        expect(instance).to.have.property('meters');
        expect(instance.meters).to.be("Meters");
      });

    });
  });

}));

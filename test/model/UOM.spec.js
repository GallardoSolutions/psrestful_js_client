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
    describe('UOM', function() {
      beforeEach(function() {
        instance = psrestful.UOM;
      });

      it('should create an instance of UOM', function() {
        // TODO: update the code to test UOM
        expect(instance).to.be.a('object');
      });

      it('should have the property BX', function() {
        expect(instance).to.have.property('BX');
        expect(instance.BX).to.be("BX");
      });

      it('should have the property CA', function() {
        expect(instance).to.have.property('CA');
        expect(instance.CA).to.be("CA");
      });

      it('should have the property DZ', function() {
        expect(instance).to.have.property('DZ');
        expect(instance.DZ).to.be("DZ");
      });

      it('should have the property EA', function() {
        expect(instance).to.have.property('EA');
        expect(instance.EA).to.be("EA");
      });

      it('should have the property KT', function() {
        expect(instance).to.have.property('KT');
        expect(instance.KT).to.be("KT");
      });

      it('should have the property PR', function() {
        expect(instance).to.have.property('PR');
        expect(instance.PR).to.be("PR");
      });

      it('should have the property PK', function() {
        expect(instance).to.have.property('PK');
        expect(instance.PK).to.be("PK");
      });

      it('should have the property RL', function() {
        expect(instance).to.have.property('RL');
        expect(instance.RL).to.be("RL");
      });

      it('should have the property ST', function() {
        expect(instance).to.have.property('ST');
        expect(instance.ST).to.be("ST");
      });

      it('should have the property SL', function() {
        expect(instance).to.have.property('SL');
        expect(instance.SL).to.be("SL");
      });

      it('should have the property TH', function() {
        expect(instance).to.have.property('TH');
        expect(instance.TH).to.be("TH");
      });

    });
  });

}));

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
    describe('Artwork', function() {
      beforeEach(function() {
        instance = new psrestful.Artwork();
      });

      it('should create an instance of Artwork', function() {
        // TODO: update the code to test Artwork
        expect(instance).to.be.a(psrestful.Artwork);
      });

      it('should have the property refArtworkId (base name: "refArtworkId")', function() {
        // TODO: update the code to test the property refArtworkId
        expect(instance).to.have.property('refArtworkId');
        // expect(instance.refArtworkId).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property dimensions (base name: "Dimensions")', function() {
        // TODO: update the code to test the property dimensions
        expect(instance).to.have.property('dimensions');
        // expect(instance.dimensions).to.be(expectedValueLiteral);
      });

      it('should have the property artworkFileArray (base name: "ArtworkFileArray")', function() {
        // TODO: update the code to test the property artworkFileArray
        expect(instance).to.have.property('artworkFileArray');
        // expect(instance.artworkFileArray).to.be(expectedValueLiteral);
      });

      it('should have the property instructions (base name: "instructions")', function() {
        // TODO: update the code to test the property instructions
        expect(instance).to.have.property('instructions');
        // expect(instance.instructions).to.be(expectedValueLiteral);
      });

      it('should have the property layers (base name: "Layers")', function() {
        // TODO: update the code to test the property layers
        expect(instance).to.have.property('layers');
        // expect(instance.layers).to.be(expectedValueLiteral);
      });

      it('should have the property typesetArray (base name: "TypesetArray")', function() {
        // TODO: update the code to test the property typesetArray
        expect(instance).to.have.property('typesetArray');
        // expect(instance.typesetArray).to.be(expectedValueLiteral);
      });

      it('should have the property totalStitchCount (base name: "totalStitchCount")', function() {
        // TODO: update the code to test the property totalStitchCount
        expect(instance).to.have.property('totalStitchCount');
        // expect(instance.totalStitchCount).to.be(expectedValueLiteral);
      });

    });
  });

}));

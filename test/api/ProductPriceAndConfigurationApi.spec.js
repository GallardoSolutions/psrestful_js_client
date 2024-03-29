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

  beforeEach(function() {
    instance = new psrestful.ProductPriceAndConfigurationApi();
  });

  describe('(package)', function() {
    describe('ProductPriceAndConfigurationApi', function() {
      describe('getAvailableCharges', function() {
        it('should call getAvailableCharges successfully', function(done) {
          // TODO: uncomment, update parameter values for getAvailableCharges call and complete the assertions
          /*
          var opts = {};

          instance.getAvailableCharges(supplierCode, productId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.AvailableChargesResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAvailableLocations', function() {
        it('should call getAvailableLocations successfully', function(done) {
          // TODO: uncomment, update parameter values for getAvailableLocations call and complete the assertions
          /*
          var opts = {};

          instance.getAvailableLocations(supplierCode, productId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.AvailableLocationsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getConfigurationAndPricing', function() {
        it('should call getConfigurationAndPricing successfully', function(done) {
          // TODO: uncomment, update parameter values for getConfigurationAndPricing call and complete the assertions
          /*
          var opts = {};

          instance.getConfigurationAndPricing(supplierCode, productId, currency, fobId, priceType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.ConfigurationAndPricingResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDecorationColors', function() {
        it('should call getDecorationColors successfully', function(done) {
          // TODO: uncomment, update parameter values for getDecorationColors call and complete the assertions
          /*
          var opts = {};

          instance.getDecorationColors(supplierCode, productId, locationId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.DecorationColorResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFobPoints', function() {
        it('should call getFobPoints successfully', function(done) {
          // TODO: uncomment, update parameter values for getFobPoints call and complete the assertions
          /*
          var opts = {};

          instance.getFobPoints(supplierCode, productId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.FobPointsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));

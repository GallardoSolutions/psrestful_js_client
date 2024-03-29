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
    instance = new psrestful.ProductDataApi();
  });

  describe('(package)', function() {
    describe('ProductDataApi', function() {
      describe('getAllSellableProductIds', function() {
        it('should call getAllSellableProductIds successfully', function(done) {
          // TODO: uncomment, update parameter values for getAllSellableProductIds call and complete the assertions
          /*
          var opts = {};

          instance.getAllSellableProductIds(supplierCode, apiVersion, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductCloseoutV100', function() {
        it('should call getProductCloseoutV100 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductCloseoutV100 call and complete the assertions
          /*
          var opts = {};

          instance.getProductCloseoutV100(supplierCode, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.ProductCloseOutResponseV100);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductCloseoutV200', function() {
        it('should call getProductCloseoutV200 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductCloseoutV200 call and complete the assertions
          /*
          var opts = {};

          instance.getProductCloseoutV200(supplierCode, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.ProductCloseOutResponseV200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductDateModifiedV100', function() {
        it('should call getProductDateModifiedV100 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductDateModifiedV100 call and complete the assertions
          /*
          var opts = {};

          instance.getProductDateModifiedV100(supplierCode, since, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.ProductDateModifiedResponseV100);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductDateModifiedV200', function() {
        it('should call getProductDateModifiedV200 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductDateModifiedV200 call and complete the assertions
          /*
          var opts = {};

          instance.getProductDateModifiedV200(supplierCode, since, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.ProductDateModifiedResponseV200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductSellableV100', function() {
        it('should call getProductSellableV100 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductSellableV100 call and complete the assertions
          /*
          var opts = {};

          instance.getProductSellableV100(supplierCode, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.GetProductSellableResponseV100);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductSellableV200', function() {
        it('should call getProductSellableV200 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductSellableV200 call and complete the assertions
          /*
          var opts = {};

          instance.getProductSellableV200(supplierCode, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.GetProductSellableResponseV200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductV100', function() {
        it('should call getProductV100 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductV100 call and complete the assertions
          /*
          var opts = {};

          instance.getProductV100(supplierCode, productId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.ProductResponseV100);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductV200', function() {
        it('should call getProductV200 successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductV200 call and complete the assertions
          /*
          var opts = {};

          instance.getProductV200(supplierCode, productId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.ProductResponseV200);

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

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

  beforeEach(function() {
    instance = new PsResTfulServiceApi.OrderStatusApi();
  });

  describe('(package)', function() {
    describe('OrderStatusApi', function() {
      describe('getIssueV200', function() {
        it('should call getIssueV200 successfully', function(done) {
          // TODO: uncomment, update parameter values for getIssueV200 call and complete the assertions
          /*
          var opts = {};

          instance.getIssueV200(supplierCode, issueId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PsResTfulServiceApi.GetIssueResponseV200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOrderStatusDetailsV100', function() {
        it('should call getOrderStatusDetailsV100 successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrderStatusDetailsV100 call and complete the assertions
          /*
          var opts = {};

          instance.getOrderStatusDetailsV100(supplierCode, queryType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PsResTfulServiceApi.OrderStatusDetailsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOrderStatusTypesV100', function() {
        it('should call getOrderStatusTypesV100 successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrderStatusTypesV100 call and complete the assertions
          /*
          var opts = {};

          instance.getOrderStatusTypesV100(supplierCode, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PsResTfulServiceApi.OrderStatusTypesResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOrderStatusV200', function() {
        it('should call getOrderStatusV200 successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrderStatusV200 call and complete the assertions
          /*
          var opts = {};

          instance.getOrderStatusV200(supplierCode, queryType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PsResTfulServiceApi.GetOrderStatusResponseV200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getServiceMethodsV200', function() {
        it('should call getServiceMethodsV200 successfully', function(done) {
          // TODO: uncomment, update parameter values for getServiceMethodsV200 call and complete the assertions
          /*
          var opts = {};

          instance.getServiceMethodsV200(supplierCode, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PsResTfulServiceApi.GetServiceMethodsResponseV200);

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

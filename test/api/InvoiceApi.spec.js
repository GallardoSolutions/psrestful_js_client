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
    instance = new psrestful.InvoiceApi();
  });

  describe('(package)', function() {
    describe('InvoiceApi', function() {
      describe('getInvoices', function() {
        it('should call getInvoices successfully', function(done) {
          // TODO: uncomment, update parameter values for getInvoices call and complete the assertions
          /*
          var opts = {};

          instance.getInvoices(supplierCode, queryType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.GetInvoiceResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getVoidedInvoices', function() {
        it('should call getVoidedInvoices successfully', function(done) {
          // TODO: uncomment, update parameter values for getVoidedInvoices call and complete the assertions
          /*
          var opts = {};

          instance.getVoidedInvoices(supplierCode, queryType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(psrestful.GetVoidedResponse);

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

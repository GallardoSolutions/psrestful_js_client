# PsResTfulServiceApi.LineItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lineNumber** | **Object** |  | 
**description** | **Object** |  | 
**lineType** | [**LineType**](LineType.md) |  | 
**quantity** | **Object** |  | 
**fobId** | **Object** | Used to indicate the FOB point.  Use fobId from the supplier’s Product Pricing and Configuration Service to populate this information | 
**toleranceDetails** | [**ToleranceDetails**](ToleranceDetails.md) |  | 
**allowPartialShipments** | **Object** |  | 
**unitPrice** | **Object** |  | 
**lineItemTotal** | **Object** |  | 
**requestedShipDate** | **Object** | The date the line item is requested to ship from the FOB point | 
**requestedInHandsDate** | **Object** | The date the line item is requested to arrive at the shipping destination | 
**referenceSalesQuote** | **Object** | The sales quote number associated with this purchase order line (if applicable) | 
**program** | **Object** |  | 
**endCustomerSalesOrder** | **Object** | The distributor’s order number provided to the end customer | 
**productId** | **Object** | The manufacturer’s product id associated with the configuration data | 
**customerProductId** | **Object** | The distributor’s product id | 
**lineItemGroupingId** | **Object** | An identifier that allows configuration data to be spread out among multiple purchase order lines. Keep &#x60;lineItemGroupingID&#x60; unique when referencing the same product on the purchase order.  Any change to the product, location, decoration, or artwork should produce a unique &#x60;lineItemGroupingID&#x60; to the purchase order | 
**partArray** | **Object** |  | 
**configuration** | **Object** |  | 

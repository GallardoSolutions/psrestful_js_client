# PsResTfulServiceApi.PO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **Object** | The environment the purchase order is being sent from. Should be STAGING or PROD | [optional] 
**orderType** | [**OrderType**](OrderType.md) |  | 
**orderNumber** | **Object** |  | 
**orderDate** | **Object** |  | 
**lastModified** | **Object** |  | 
**totalAmount** | **Object** | The total amount of the purchase order | 
**paymentTerms** | **Object** | ie. NET15, NET30, etc. | 
**rush** | **Object** | Used to indicate a rush on the purchase order | [optional] 
**currency** | **Object** | The currency the purchase order is transacted in ISO4217 format. ie. USD, CAD, EUR, JPY, GBP, etc. | 
**digitalProof** | **Object** |  | 
**orderContactArray** | **Object** |  | 
**shipmentArray** | [**ShipmentArray**](ShipmentArray.md) |  | 
**lineItemArray** | [**LineItemArray**](LineItemArray.md) |  | 
**termsAndConditions** | **Object** | The terms and conditions of the purchase order | 
**salesChannel** | **Object** | The sales channel the purchase order | 
**promoCode** | **Object** |  | [optional] 
**taxInformationArray** | **Object** |  | 

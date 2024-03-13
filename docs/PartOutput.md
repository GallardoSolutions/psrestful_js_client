# PsResTfulServiceApi.PartOutput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partId** | **Object** |  | 
**partDescription** | **Object** |  | 
**partPriceArray** | **Object** |  | 
**partGroup** | **Object** | A numeric identifier grouping mutually exclusive parts together. When configuring data, always start with part group “1” | 
**nextPartGroup** | **Object** | The next mutually exclusive partGroup to complete configuration ofthe product | [optional] 
**partGroupRequired** | **Object** | A boolean value specifying if this partGroup is required for the product configuration. If set to TRUE, a selection in the partGroup is required for ordering | 
**partGroupDescription** | **Object** | A description of the partGroup: Optional Lid&#x60;, &#x60;Straw | 
**ratio** | **Object** | Describes how the amount of partIds that need to be added to the order based on the number of products ordered | 
**defaultPart** | **Object** | This part is included in the “Basic Pricing Configuration” service price. This field is optional, but highly encouraged | 
**locationIdArray** | **Object** |  | 

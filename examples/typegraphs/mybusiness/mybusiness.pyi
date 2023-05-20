from typegraph import t

class TypeList:
    ErrorResponse: t.typedef = ...
    SearchGoogleLocationsRequestIn: t.typedef = ...
    SearchGoogleLocationsRequestOut: t.typedef = ...
    LatLngIn: t.typedef = ...
    LatLngOut: t.typedef = ...
    RelationshipDataIn: t.typedef = ...
    RelationshipDataOut: t.typedef = ...
    GoogleUpdatedLocationIn: t.typedef = ...
    GoogleUpdatedLocationOut: t.typedef = ...
    LabelIn: t.typedef = ...
    LabelOut: t.typedef = ...
    UriAttributeValueIn: t.typedef = ...
    UriAttributeValueOut: t.typedef = ...
    PhoneNumbersIn: t.typedef = ...
    PhoneNumbersOut: t.typedef = ...
    AttributesIn: t.typedef = ...
    AttributesOut: t.typedef = ...
    FreeFormServiceItemIn: t.typedef = ...
    FreeFormServiceItemOut: t.typedef = ...
    EmptyIn: t.typedef = ...
    EmptyOut: t.typedef = ...
    StructuredServiceItemIn: t.typedef = ...
    StructuredServiceItemOut: t.typedef = ...
    AttributeMetadataIn: t.typedef = ...
    AttributeMetadataOut: t.typedef = ...
    SearchChainsResponseIn: t.typedef = ...
    SearchChainsResponseOut: t.typedef = ...
    LocationIn: t.typedef = ...
    LocationOut: t.typedef = ...
    ProfileIn: t.typedef = ...
    ProfileOut: t.typedef = ...
    RelevantLocationIn: t.typedef = ...
    RelevantLocationOut: t.typedef = ...
    ListAttributeMetadataResponseIn: t.typedef = ...
    ListAttributeMetadataResponseOut: t.typedef = ...
    ListCategoriesResponseIn: t.typedef = ...
    ListCategoriesResponseOut: t.typedef = ...
    PlaceInfoIn: t.typedef = ...
    PlaceInfoOut: t.typedef = ...
    GoogleLocationIn: t.typedef = ...
    GoogleLocationOut: t.typedef = ...
    MoneyIn: t.typedef = ...
    MoneyOut: t.typedef = ...
    AttributeValueMetadataIn: t.typedef = ...
    AttributeValueMetadataOut: t.typedef = ...
    AssociateLocationRequestIn: t.typedef = ...
    AssociateLocationRequestOut: t.typedef = ...
    ServiceTypeIn: t.typedef = ...
    ServiceTypeOut: t.typedef = ...
    PlacesIn: t.typedef = ...
    PlacesOut: t.typedef = ...
    MoreHoursIn: t.typedef = ...
    MoreHoursOut: t.typedef = ...
    PostalAddressIn: t.typedef = ...
    PostalAddressOut: t.typedef = ...
    CategoriesIn: t.typedef = ...
    CategoriesOut: t.typedef = ...
    ServiceItemIn: t.typedef = ...
    ServiceItemOut: t.typedef = ...
    AttributeIn: t.typedef = ...
    AttributeOut: t.typedef = ...
    AdWordsLocationExtensionsIn: t.typedef = ...
    AdWordsLocationExtensionsOut: t.typedef = ...
    OpenInfoIn: t.typedef = ...
    OpenInfoOut: t.typedef = ...
    ChainUriIn: t.typedef = ...
    ChainUriOut: t.typedef = ...
    ServiceAreaBusinessIn: t.typedef = ...
    ServiceAreaBusinessOut: t.typedef = ...
    BusinessHoursIn: t.typedef = ...
    BusinessHoursOut: t.typedef = ...
    TimeOfDayIn: t.typedef = ...
    TimeOfDayOut: t.typedef = ...
    DateIn: t.typedef = ...
    DateOut: t.typedef = ...
    SearchGoogleLocationsResponseIn: t.typedef = ...
    SearchGoogleLocationsResponseOut: t.typedef = ...
    SpecialHoursIn: t.typedef = ...
    SpecialHoursOut: t.typedef = ...
    SpecialHourPeriodIn: t.typedef = ...
    SpecialHourPeriodOut: t.typedef = ...
    TimePeriodIn: t.typedef = ...
    TimePeriodOut: t.typedef = ...
    CategoryIn: t.typedef = ...
    CategoryOut: t.typedef = ...
    MoreHoursTypeIn: t.typedef = ...
    MoreHoursTypeOut: t.typedef = ...
    ChainIn: t.typedef = ...
    ChainOut: t.typedef = ...
    MetadataIn: t.typedef = ...
    MetadataOut: t.typedef = ...
    ChainNameIn: t.typedef = ...
    ChainNameOut: t.typedef = ...
    BatchGetCategoriesResponseIn: t.typedef = ...
    BatchGetCategoriesResponseOut: t.typedef = ...
    RepeatedEnumAttributeValueIn: t.typedef = ...
    RepeatedEnumAttributeValueOut: t.typedef = ...
    ClearLocationAssociationRequestIn: t.typedef = ...
    ClearLocationAssociationRequestOut: t.typedef = ...
    ListLocationsResponseIn: t.typedef = ...
    ListLocationsResponseOut: t.typedef = ...

class FuncList:
    locationsGetGoogleUpdated: t.func = ...
    locationsDelete: t.func = ...
    locationsUpdateAttributes: t.func = ...
    locationsAssociate: t.func = ...
    locationsGetAttributes: t.func = ...
    locationsClearLocationAssociation: t.func = ...
    locationsPatch: t.func = ...
    locationsGet: t.func = ...
    locationsAttributesGetGoogleUpdated: t.func = ...
    chainsSearch: t.func = ...
    chainsGet: t.func = ...
    accountsLocationsList: t.func = ...
    accountsLocationsCreate: t.func = ...
    categoriesList: t.func = ...
    categoriesBatchGet: t.func = ...
    attributesList: t.func = ...
    googleLocationsSearch: t.func = ...

class Import:
    types: TypeList = ...
    functions: FuncList = ...

def import_mybusiness() -> Import: ...

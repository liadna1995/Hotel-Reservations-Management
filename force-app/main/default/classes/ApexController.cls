public with sharing class ApexController {

  @AuraEnabled(cacheable=true)
  public static List<Account> searchHotel(String hotelNameArg) {
    String keyNameString = '%' + hotelNameArg + '%';
    List<Account> hotels_list = new List<Account>();
    if (String.isNotBlank(hotelNameArg)) {
      hotels_list = [
        SELECT Id, Name, Picture__c, Description
        FROM Account
        WHERE Name LIKE :keyNameString
      ];
    }
    return hotels_list;
  }
  @AuraEnabled(cacheable=true)
  public static List<Account> getHotelAddresses() {
    return [
      SELECT
        Id,
        Name,
        Description,
        BillingStreet,
        BillingCity,
        BillingState,
        BillingPostalCode,
        BillingCountry
      FROM Account
    ];
  }
}
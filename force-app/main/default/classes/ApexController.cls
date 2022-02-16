public with sharing class ApexController {
    @AuraEnabled(cacheable=true)
    public static List<Account> searchHotel (String hotelNameArg){
        String keyNameString = '%' +  hotelNameArg + '%';
        return [SELECT Id, Name, Picture__c
                FROM Account 
                WHERE Name LIKE :keyNameString
        ];       
    }
    @AuraEnabled (cacheable=true)
    public static List<Account> getHotelAddresses (){
        return [SELECT Id, Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry 
                FROM Account 
        ];       
    }
}
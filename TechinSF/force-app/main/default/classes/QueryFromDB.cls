public with sharing class QueryFromDB {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getListContacts() {
        return [
            SELECT FirstName, LastName, Email, MobilePhone,AccountId, Account.Name, CreatedDate 
            FROM Contact
            WHERE Account.Name != null
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findeContacts(String key) {
        String searchKey= '%' + key + '%';
        return [
            SELECT FirstName, LastName, Email, MobilePhone,AccountId, Account.Name, CreatedDate 
            FROM Contact
            WHERE FirstName LIKE : searchKey
        ];
    }
}

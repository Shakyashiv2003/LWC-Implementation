public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContacts(Id accountId){
        return [Select Name, Phone, Email from Contact where AccountId = : accountId];

    }
} 
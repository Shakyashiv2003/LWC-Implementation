public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(){
        return [Select Id, Name, Industry from Account limit 10];
    }
}
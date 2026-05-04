import { LightningElement, wire, api } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactViewer extends LightningElement {

    @api accountId;
    contacts;
    error;

    @wire(getContacts, {accountId:'$accountId'}) 
    conRecords({data, error}){
        if(data){
            this.contacts = data;
            this.error = undefined;
        }
        if(error){
            this.error = error;
            this.data = undefined;
        }
    }
}
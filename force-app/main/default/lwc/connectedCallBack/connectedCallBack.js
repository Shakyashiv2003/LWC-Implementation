import { LightningElement, track } from 'lwc';

export default class ConnectedCallBack extends LightningElement {

    @track students = [];
    

    ConnectedCallBack(){
        console.log('Component Loaded');
        this.students = ['Aman', 'Rohit', 'Raman'];
    }
}
import { LightningElement } from 'lwc';

export default class GreetMessage extends LightningElement {
    name = '';

    handleName(event){
        this.name = event.target.value;
    }
    
    
}

import { LightningElement } from 'lwc';

export default class SmartGreeting extends LightningElement {
name='';
isDisabled=true;
message='';


handleChange(event){
    this.name = event.target.value.trim();
    this.isDisabled = this.name==='';
    
}

clickme(){
    this.message = `Hello ${this.name}...kya haal hain!`;
}
}
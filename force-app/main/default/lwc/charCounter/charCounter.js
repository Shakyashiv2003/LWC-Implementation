import { LightningElement } from 'lwc';

export default class CharCounter extends LightningElement {
    count = 0;
    isDisabled = true;
    

    handleChange(event) {
        this.count = event.target.value.length;
        
        this.isDisabled = this.count === 0 || this.count > 50;
    }

    
}

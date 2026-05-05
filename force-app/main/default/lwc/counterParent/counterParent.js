import { LightningElement } from 'lwc';

export default class CounterParent extends LightningElement {
    count=0;

    handleIncreament(event){
        if(this.count<30){
            this.count = this.count + event.detail;
        }
        
    }
    
    handleDecreament(event){
        if(this.count>0){
            this.count = this.count - event.detail;
        }
        
    }
}
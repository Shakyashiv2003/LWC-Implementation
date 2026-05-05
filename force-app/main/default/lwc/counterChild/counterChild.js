import { LightningElement } from 'lwc';

export default class CounterChild extends LightningElement {

    stepValue=1; // defalut value

    handleInput(event){
        this.stepValue = Number(event.target.value);
    }

    handleIncrease(){
        const step = this.stepValue;
        this.dispatchEvent(new CustomEvent('increament', {detail: step} ));
    }

    handleDecrease(){
        const step = this.stepValue;
        this.dispatchEvent(new CustomEvent('decreament', {detail: step}));
    }

}
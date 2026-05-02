import { LightningElement } from 'lwc';

export default class CalculatorLWC extends LightningElement {
    num1=0;
    num2=0;
    result=0;
    
        handleChange = (event)=> {
        const fields = event.target.dataset.id;
        this[fields] = parseFloat(event.target.value) || 0 
    }

    calculate = (event)=> {

        const operations = event.target.dataset.action;

        const ops = {
            add: (n1, n2) => n1 + n2,
            sub: (n1, n2) => n1 -n2,
            mul: (n1, n2) => n1 * n2,
            div: (n1, n2) => (n2 !== 0 ? n1 / n2 : 'Divide not possible')
                    };

            this.result = ops[operations] ? ops[operations](this.num1, this.num2) : 'Invalid Operation';

                }
                


}
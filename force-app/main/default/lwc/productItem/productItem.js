import { LightningElement, api } from 'lwc';

export default class ProductItem extends LightningElement {
    @api product;

    handleClick(){
        this.dispatchEvent(new CustomEvent('addtocart', {detail: this.product}));
    }
}
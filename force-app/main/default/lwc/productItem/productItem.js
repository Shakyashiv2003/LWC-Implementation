import { LightningElement, api } from 'lwc';

export default class ProductItem extends LightningElement {

        @api product;

    handleAdd() {
        const event = new CustomEvent('addtocart', {
            detail: this.product
        });
        this.dispatchEvent(event);
    }
}
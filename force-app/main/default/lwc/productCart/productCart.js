import { LightningElement } from 'lwc';

export default class ProductCart extends LightningElement {
    
    products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 200 },
        { id: 3, name: 'Product C', price: 300 }
    ];

    cart = [];

    handleAddToCart(event) {
        const product = event.detail;
        this.cart = [...this.cart, product];
    }

    get totalPrice() {
        return this.cart.reduce((sum, item) => sum + item.price, 0);
    }

}
import { LightningElement } from 'lwc';

export default class ProductCart extends LightningElement {

    products = [
        {id:1, name:'Product A', price: 100},
        {id:2, name:'Product B', price:200},
        {id:3, name: 'Product C', price:300}
        ];

        cart =[];

        // handle event fired from the child
        handleAddToCart(event){
            const product = event.detail;       // detail of event fired from child comes with the data i.e. Product
            this.cart = [...this.cart, product]; // adding data in the cart which is created above
        }

        // Auto Calculation using get method()
        get totalPrice(){
            return this.cart.reduce((sum, item) => sum + item.price, 0); // sum = sum+item.price it's working like this
        } 



}
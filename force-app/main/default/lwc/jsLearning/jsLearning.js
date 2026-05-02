import { LightningElement } from 'lwc';

export default class JsLearning extends LightningElement {
    message='Hello';

    messageChange(){
        this.message = 'Message Change by LWC';
    }

}
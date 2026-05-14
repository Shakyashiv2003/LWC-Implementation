import { LightningElement, track } from 'lwc';

export default class CheckIfLoggedIn extends LightningElement {
    isLoggedIn=false;
    message='';
    name='';
    //isDisabled=true;

   handleChange(event){
    this.name = event.target.value;
    //this.isDisabled= !this.name || this.name==='';
   }
   
    // clickmeToLogin(){
    //     this.isLoggedIn = !this.isLoggedIn; // toggle
        
    //     this.message = this.isLoggedIn ? 'Welcome the the Salesforce ' + this.name : 'Please Login! ' + this.name;
    // }

    handleLogin(){
        if(!this.name){
            this.message = 'You need to enter your name first';
        return;
        }

        if(this.isLoggedIn){
            this.message = 'You are already Login!';
        return;
        }

        this.isLoggedIn = true;
        this.message = 'Welcome ' + this.name;
    }


    handleLogout(){
        if(!this.isLoggedIn){
            this.message = 'You are not Logged In!';
        return;
        }

        this.isLoggedIn = false;
        this.message = 'You have been logged out ' + this.name;
    }

    get isDisabled(){
        return !this.name || this.name==='';
    }

}
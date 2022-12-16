import { LightningElement,track,wire} from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class MyFirstOwnLWC extends LightningElement {
    message = 'Hello world';
    isValid = true;
 contacts = [];
    @track arrayIterate = [[1,2],[1,4]];
    runOnce = true;

   
   /*@wire(getContactList) contacts;*/
    /*wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }*/


  /* renderedCallback()    {  
    if(this.runOnce){
       this.arrayIterate = [1,2];
       this.runOnce = false;
    

     }
}*/
     onchange(){
       
        this.arrayIterate.push([1,2]);

        getContactList().then((response) => {
            this.contacts = JSON.parse(JSON.stringify(response));
    console.log(response);
    this.contacts.push({'Id':'12344',Name:'2222222'});
    console.log(JSON.stringify(this.contacts));

        }).catch((error) =>{
            
        });


       
     }
}
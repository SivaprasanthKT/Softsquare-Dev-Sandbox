import { LightningElement, api } from 'lwc';

export default class LightningWebCmpDemo extends LightningElement {
    @api recordId;
    handleSubmit(event) {
        console.log('onsubmit: '+ event.detail.fields);
 
    }
    handleSuccess(event) {
        const updatedRecord = event.detail.id;
        console.log('onsuccess: ', updatedRecord);
    }
}
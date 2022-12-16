import {
    LightningElement
} from 'lwc';

export default class TrackDecorator extends LightningElement {
     message = 'World';

    handleChange(event) {
        console.log('event.target.value' + event.target.value);
        this.message = event.target.value;
    }
}
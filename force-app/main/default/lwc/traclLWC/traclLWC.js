import {
    LightningElement
} from 'lwc';

export default class TrackDecoccccccccccrator extends LightningElement {
    message = 'Worldxs';
    x

    handleChange(event) {
        console.log('event.target.value' + event.target.value);
        this.message = event.target.value;
    }
}
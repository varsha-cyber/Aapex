import { LightningElement ,track} from 'lwc';

export default class ParentComponant extends LightningElement {
    @track msg;
    
    handleCustomEvent(event)
    {
        this.msg=event.detail;
    }

}
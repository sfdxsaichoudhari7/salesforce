import { LightningElement, api} from 'lwc';

export default class ApiChildComponentvd extends LightningElement {

    @api functionvalue='salesforce';


    @api handlefunction(){


        this.functionvalue='salesforce developer';
    }






}
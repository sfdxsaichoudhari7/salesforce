import { LightningElement } from 'lwc';

export default class ApiParentComponentvd extends LightningElement {



    handlerfunction(){

  this.template.querySelector("c-api-child-componentvd").handlefunction()

    }
}
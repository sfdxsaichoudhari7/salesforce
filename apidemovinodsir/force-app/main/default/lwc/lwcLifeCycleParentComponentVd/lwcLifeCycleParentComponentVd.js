import { LightningElement } from 'lwc';

export default class LwcLifeCycleParentComponentVd extends LightningElement {


    
    constructor(){

        super();

        console.log('I am parent constructor');
    }
    
    connectedCallback(){



        console.log('I am parent connectedCallback');
    }
    renderedCallback(){


        console.log('I am parent renderedCallback');
    }
    errorCallback(){

   

        console.log('I am parent errorCallback');
    }

    disconnectedCallback(){
        console.log('I am parent disconnectedCallbackor');   
    }
}
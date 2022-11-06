import { LightningElement } from 'lwc';

export default class LwcLifeCycleChildComponentVd extends LightningElement {


    constructor(){

        super();

        console.log('I am child constructor');
    }
    
    connectedCallback(){



        console.log('I am child connectedCallback');
    }
    renderedCallback(){


        console.log('I am child renderedCallback');
    }
    errorCallback(){

   

        console.log('I am child Callbacktructor');
    }

    disconnectedCallback(){
        
        console.log('I am child disconnectedCallbackor');   
    }
}
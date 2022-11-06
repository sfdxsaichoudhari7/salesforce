import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
export default class LwcComponentCreateRecord extends LightningElement {

    accname;
    accphone;

    namechangehandler(event){  
        this.accname=event.target.value;

    }

    Phonechangehandler(event){
        this.accphone=event.target.value;

    }
    createaccounthandler(){
     var fields={Name:this.accname,Phone:this.accphone};
     var objectRecordInput={apiName:'Account',fields};

     createRecord(objectRecordInput).then(Response=>{
        console.log("Sucessfully Created");
     }).catch(error=>{
        console.log('Unsuccesfully Create record');
     })

     } 

     }



    

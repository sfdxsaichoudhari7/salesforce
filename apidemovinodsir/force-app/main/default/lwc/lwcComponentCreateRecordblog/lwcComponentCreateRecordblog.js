import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import{ShowToastEvent}  from 'lightning/platformShowToastEvent'
export default class LwcComponentCreateRecordblog extends LightningElement {
    strName;
    strAccountNumber;
    strPhone;
 
    // These Change handlers to handle the input values on UI
    nameChangedHandler(event){
        this.strName = event.target.value;
    }
    numberChangedHandler(event){
        this.strAccountNumber = event.target.value;
    }
    phoneChangedHandler(event){
        this.strPhone = event.target.value;
    }
 
    // Insert Account record.
    createAccountRecord(){
 
        // Creating mapping of fields of Account with values
        var fields = {'Name' : this.strName, 'AccountNumber' : this.strAccountNumber, 'Phone' : this.strPhone};
 
        // Record details to pass to create method with api name of Object.
        var createrecord = {apiName : 'Account', fields};
 
        // LDS method to create record.
        createRecord(createrecord).then(response => {
            this.ShowToast1()
        }).catch(error => {
            this.ShowToast2()
        });
    }



    ShowToast1(){
        const event= new ShowToastEvent({
            title:'success message ',
           message: 'Account Created Successfully  ',
            variant:'Success',
            
        })
        this.dispatchEvent(event)
    }
    ShowToast2(){
        const event1= new ShowToastEvent({
            title:'Unsuccess message ',
           message: 'Sorry account creation failed',
            variant:'error'
        })
        this.dispatchEvent(event1)
    }
}
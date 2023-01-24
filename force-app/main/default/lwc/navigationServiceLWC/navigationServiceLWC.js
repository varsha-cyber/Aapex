import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigationServiceLWC extends NavigationMixin(LightningElement) {
    @api recordId;

    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                "recordId":this.recordId,
                "objectApiName": "Account",
                "actionName":"new"
            }
        });
    }

        navigateToEditRecordPage(){
            this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attributes:{
                    "recordId":this.recordId,
                    "objectApiName":"Account",
                    "actionName":"edit"
                }
            });
        }
          
            navigateToViewRecordPage(){
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        "recordId":this.recordId,
                        "objectApiName": "Account",
                        "actionName":"view"
                    }
                });
              
            }
            navigateAccRecentView(){
                this[NavigationMixin.Navigate]({
                    "type": "standard__objectPage",
                    "attributes":{
                        "objectApiName":"Account",
                        "actionName":"list"
                    },
                    "state":{
                        "filterName":"Recent"
                    }
                });
            }


            navigateRelatedListView(){
                this[NavigationMixin.Navigate]({
                    "type":"standard__recordRelationshipPage",
                    "attributes":{
                       recordId:this.recordId,
                       objectApiName:'Account',
                       relationshipApiName:'Contacts',
                       actionName:'view'
                    }

                });
            }

            navigateAccObject(){
                this[NavigationMixin.Navigate]({  
                    "type":"standard__objectPage",
                    "attributes":{
                        "objectApiName":"Account",
                        "actionName":"home"
                    }
    
                });
            }
            navigateConObject(){
                this[NavigationMixin.Navigate]({
                    "type":"standard__objectPage",
                    "attributes":{
                        "objectApiName":"Contact",
                        "actionName":"home"
                    }
                });
            }
            navigateWebPage(){
                this[NavigationMixin.Navigate] ({
                    "type":"standard__webPage",
                    "attributes":{
                        "url": "https://www.google.com"
                    }
                });
            }
       
            navigateHomePage(){
                this[NavigationMixin.Navigate]({
                    "type":"standard__namedPage",
                    "attributes":{
                        pageName:'home'

                    }
                });

                }
                navigateChatterHome(){
                    this[NavigationMixin.Navigate]({
                        "type":"standard__namedPage",
                        "attributes":{
                            pageName:"chatter"
                        }
                    });
                }
            
}

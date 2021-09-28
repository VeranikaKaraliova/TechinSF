import { LightningElement, wire } from 'lwc';
import getListContacts from '@salesforce/apex/QueryFromDB.getListContacts';
import findeContacts from '@salesforce/apex/QueryFromDB.findeContacts';

export default class TableContacts extends LightningElement {

    contacts;
    findValue;
    searchKey;

    @wire(getListContacts)
    listContacts(result) {
        if (result.data) {
            console.log('ggg')
            this.contacts = result.data;
            this.error = undefined;
        } else if (result.error) {
            console.log(result.error)
            this.error = result.error;
            this.contacts = undefined;
        };
    }

    @wire(findeContacts, { key: '$searchKey' })
    listContactsNew(result) {
        if (result.data) {
            console.log('ggg')
            this.contacts = result.data;
            this.error = undefined;
        } else if (result.error) {
            console.log(result.error)
            this.error = result.error;
            this.contacts = undefined;
        };
    }

    safeValue(event) {
        this.findValue = event.target.value;
    }

    FilterByValue(event) {
        this.searchKey = this.findValue;
    }

    goToDetailAccount(event) {
        let urlId = event.target.dataset.idurl;
        console.log(event.target.href);
        event.target.href = `https://homework-c-dev-ed.lightning.force.com/lightning/r/Account/${urlId}/view`
    }

}
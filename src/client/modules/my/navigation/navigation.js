import { LightningElement, api } from 'lwc';

export default class Navigation extends LightningElement {
    @api isLoggedUser;
    @api isDreamforce;

    get loggedUser() {
        return this.isLoggedUser;
    }

    get dreamforce() {
        return this.isDreamforce;
    }
}

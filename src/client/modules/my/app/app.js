import { LightningElement, api, track } from 'lwc';
import { getLoggedInUser } from 'data/authService';

export default class App extends LightningElement {
    @api loggedUser = undefined;
    @track state;
    @api dreamforce = undefined;

    connectedCallback() {
        getLoggedInUser().then((response) => {
            if (response.user_id === undefined) {
                this.loggedUser = undefined;
                this.state = 'login';
            } else {
                this.loggedUser = response;
                this.state = 'loggedIn';
            }
        });
    }

    hanldeJoinEvent() {
        this.state = 'sessionList';
        this.dreamforce = true;
    }

    get isLoginView() {
        return this.state === 'login';
    }

    get isLoggedInView() {
        return this.state === 'loggedIn';
    }

    get isSessionListView() {
        return this.state === 'sessionList';
    }
}

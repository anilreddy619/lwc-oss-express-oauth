import { LightningElement, api, track } from 'lwc';

export default class Events extends LightningElement {
    @api joinEvent;

    handleJoin(event) {
        this.joinEvent = 'dreamforce';
        // Creates the event with the data.
        const selectedEvent = new CustomEvent("joinevent", {
        detail: this.joinEvent
        });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }

    salesforceEvents = [
        {
            id: '003171931112854375',
            name: 'Dreamforce To You 2020',
            date: 'Tuesday Nov 10th, 2020',
            shortDate: 'Nov 10th'
        },
        {
            id: '003171931112854376',
            name: 'Trailheadx 2020',
            date: 'Tuesday Dec 15th, 2020',
            shortDate: 'Dec 15th'
        }
    ];

    hasEvents = this.salesforceEvents.length > 0;
}

export class OwnerOverviewModel {
    id: number;
    name: string;
    phoneNumber: string;
    address: string;

    constructor() {
        this.name = "";
        this.address = "";
        this.phoneNumber = "";
    }
}
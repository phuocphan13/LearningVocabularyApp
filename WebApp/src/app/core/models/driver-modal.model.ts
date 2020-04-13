export class DriverModalModel {
    id: number;
    name: string;
    phoneNumber: string;
    licenseOfDriving: string;
    licenseExpiredDate: Date;
    typeOfLicense: string;
    trainingExpiredDate: Date;
    companyId: string;

    constructor() {
        this.name = "";
        this.licenseOfDriving = "";
    }
}
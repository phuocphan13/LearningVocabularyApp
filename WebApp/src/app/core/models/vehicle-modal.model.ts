export class VehicleModalModel {
    id: number;
    identifyCode: string;
    numberOfPlates: string;
    manufactureYear: number;
    typeOfBusiness: string;
    typeOfBankRegistration: string;
    bankRegistrationExpiredDate: Date;
    typeOfRegistration: string;
    registrationExpiredDate: Date;
    tonnage: string;
    supervisingJourneyModel: string;
    supervisingJourneyExpiredDate: Date;
    supervisingJourneyWebsite: string;
    account: string;
    password: string;
    insuranceExpiredDate: Date;
    numberOfBadges: string;
    placeOfBadges: string;
    badgesExpiredDate: Date;
    companyId: string;

    constructor() {
        this.numberOfPlates = "";
        this.placeOfBadges = "";
        this.numberOfBadges = "";
    }
}
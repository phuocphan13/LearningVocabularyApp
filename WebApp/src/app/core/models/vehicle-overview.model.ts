import { NotificationWarningEnum } from "../common/enum";

export class VehicleOverviewModel {
    id: number;
    identifyCode: string;
    numberOfPlates: string;
    manufactureYear: number;
    typeOfBusiness: string;
    typeOfBankRegistration: string;
    bankRegistrationExpiredDate: string;
    typeOfRegistration: string;
    registrationExpiredDate: string;
    tonnage: string;
    supervisingJourneyModel: string;
    supervisingJourneyExpiredDate: string;
    supervisingJourneyWebsite: string;
    insuranceExpiredDate: string;
    numberOfBadges: string;
    placeOfBadges: string;
    badgesExpiredDate: string;
    bankRegistrationExpiredDateStatus: NotificationWarningEnum;
    registrationExpiredDateStatus: NotificationWarningEnum;
    supervisingJourneyExpiredDateStatus: NotificationWarningEnum;
    insuranceExpiredDateStatus: NotificationWarningEnum;
    badgesExpiredDateStatus: NotificationWarningEnum;


    constructor() {
        this.placeOfBadges = "";
        this.numberOfBadges = "";
    }
}
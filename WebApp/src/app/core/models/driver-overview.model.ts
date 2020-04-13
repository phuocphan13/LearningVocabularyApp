import { NotificationWarningEnum } from "../common/enum";

export class DriverOverviewModel {
    id: number;
    name: string;
    phoneNumber: string;
    licenseOfDriving: string;
    licenseExpiredDate: string;
    typeOfLicense: string;
    trainingExpiredDate: string;
    licenseExpiredDateStatus: NotificationWarningEnum;
    TrainingExpiredDateStatus: NotificationWarningEnum;
}
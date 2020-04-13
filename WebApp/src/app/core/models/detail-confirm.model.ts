import { OwnerKeyValueModel } from "./owner-key-value.model";
import { DriverKeyValueModel } from "./driver-key-value.model";
import { VehicleKeyValueModel } from "./vehicle-key-value.model";
export class DetailConfirmModel {

    oldOwner: OwnerKeyValueModel;
    oldDriver: DriverKeyValueModel;
    newOwner: OwnerKeyValueModel;
    newDriver: DriverKeyValueModel;
    vehicle: VehicleKeyValueModel;

    constructor() {
        this.oldOwner = new OwnerKeyValueModel();
        this.oldDriver = new DriverKeyValueModel();
        this.newOwner = new OwnerKeyValueModel();
        this.newDriver = new DriverKeyValueModel();
        this.vehicle = new VehicleKeyValueModel();
    }
}
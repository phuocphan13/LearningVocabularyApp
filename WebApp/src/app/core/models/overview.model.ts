import { OwnerOverviewModel } from "./owner-overview.model"
import { VehicleOverviewModel } from "./vehicle-overview.model"
import { DriverOverviewModel } from "./driver-overview.model";

export class OverviewModel {
    id: number;
    companyId: number;
    overviewOwner: OwnerOverviewModel;
    overviewVehicle: VehicleOverviewModel;
    overviewDriver: DriverOverviewModel;

    constructor() {
        this.overviewOwner = new OwnerOverviewModel();
        this.overviewVehicle = new VehicleOverviewModel();
        this.overviewDriver = new DriverOverviewModel();
    }
}
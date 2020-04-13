import { KeyValueSeachingModel } from "./keyvalue-searching.model"
export class DetailModel {
    listOwnersKeyValue: KeyValueSeachingModel[];
    listDriversKeyValue: KeyValueSeachingModel[];
    listVehiclesKeyValue: KeyValueSeachingModel[];

    constructor() {
        this.listDriversKeyValue = new Array(0);
        this.listOwnersKeyValue = new Array(0);
        this.listVehiclesKeyValue = new Array(0);
    }
}
import { DetailDataModel } from "./detail-data.model"
export class KeyValueSeachingModel {
    key: number;
    value: DetailDataModel[];
    constructor() {
        this.value = new Array(0);
    }
}
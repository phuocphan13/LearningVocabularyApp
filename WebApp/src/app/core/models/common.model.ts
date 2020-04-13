export class FilterTypeModel {
    type: FilterTypeEnum;
    value: string;
}

export enum FilterTypeEnum {
    OwnerName = 1,
    NumberOfPlates = 2,
    DriverName = 3,
}
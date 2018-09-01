export enum Environment {
    DEV,
    PROD,
    TEST
}

export interface PTableColumns {
    field: String;
    header?: String;
}
export interface Car {
    vin;
    year;
    brand;
    color;
}

export interface PCard {
    title: String;
    body: String;
}
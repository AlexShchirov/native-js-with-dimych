export type StreetType = {
    title: string;
};

export type AddressType = {
    number?: number;
    street: StreetType;
};
export type HouseType = {
    buildedAt: number;
    repared: false;
    address: AddressType;
};
export type GovermentBuildingType = {
    type: 'HOSPITAL' | 'FIRESTATION',
    budget: number,
    staffCount: number,
    address: AddressType,
};

export type CityType = {
    title: string;
    houses: Array<HouseType>;
    govermentBuildings: Array<GovermentBuildingType>;
    citizensNumber: number;
};

import { title } from "process";
import { CityType } from "./02_02";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York City",
        houses: [
            {
                buildedAt: 2012,
                repared: false,
                address: {
                    number: 100,
                    street: {
                        title: "WhiteStreet",
                    },
                },
            },
            {
                buildedAt: 2008,
                repared: false,
                address: {
                    number: 100,
                    street: {
                        title: "HappyStreet",
                    },
                },
            },
            {
                buildedAt: 2020,
                repared: false,
                address: {
                    number: 101,
                    street: {
                        title: "WhiteStreet",
                    },
                },
            },
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Street",
                    },
                },
            },
            {
                type: "FIRESTATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Street",
                    },
                },
            },
        ],
        citizensNumber: 100000,
    };
});

test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);
});

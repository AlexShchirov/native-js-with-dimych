type localCityType = {
    title: string,
    countryTitle: string,}
type AddressType = {
    streetTitle: string,
    city: localCityType,}
type Techtype = {
    id: number,
    title: string,}
export type StudentsType ={
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<Techtype>,}

export const student: StudentsType = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address:{
        streetTitle: 'Surganova 5',
        city:{
            title: 'Minsk',
            countryTitle: 'Belarus',
        }
    },
    technologies: [
        {
            id: 1,
            title: 'html',
        },
        {
            id: 2,
            title: 'css',
        },
        {
            id: 3,
            title: 'js',
        },
    ]


}

console.log(student.age)
console.log(student.name)
console.log(student.isActive)
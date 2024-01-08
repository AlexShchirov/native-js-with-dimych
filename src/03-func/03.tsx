import { StudentsType } from "../02-objects/02";
import { GovermentBuildingType } from '../02-objects/02_02';


export const sum = (a: number, b: number) =>{
    return a + b;
}

export const addSkill = (student: StudentsType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentsType){
    s.isActive = true
}

export const changeStudentLive = (s: StudentsType, cityName: string) => {
    return s.address.city.title === cityName;
}
export const changeBudget = (building: GovermentBuildingType, budget: number) =>{ 
    building.budget += budget;
}
export const repairHouse = () => {
    
}
import {student, StudentType} from '../Lesson02/02'
import {CityType, governmentBuildingsType, HousesType} from '../Lesson02/02.test';

export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(2, 3)

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill

    })
}

export function makeStudentActiv(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (st: StudentType, title: string) => {
    st.address.city.title = title
}


export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget
}
export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true
}

export const toFireStaff = (building: governmentBuildingsType, number: number) => {
    building.staffCount -= number
}
export const toHireStaff = (building: governmentBuildingsType, number: number) => {
    building.staffCount += number
}
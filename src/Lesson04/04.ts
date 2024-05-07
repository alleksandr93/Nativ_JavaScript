import {CityType, governmentBuildingsType} from '../Lesson02/02.test';

export const ages = [18, 20, 22, 1, 100, 98, 14]

export const predicate = (ages: number) => {
    return ages > 90
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]
export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(el => el.street.title !== street)

}
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildingsType>, number: number) => {
    return buildings.filter(el => el.staffCount > 500)
}

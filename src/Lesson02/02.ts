export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies:TechnologiesType[]
}
type AddressType = {
    streedTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type TechnologiesType={
    id:number
    title:string
}
export const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 12,
    isActive: false,
    address: {
        streedTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'REACT'},
    ]
}
console.log(student.technologies[2].title)



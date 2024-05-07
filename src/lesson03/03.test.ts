
import { StudentType } from '../Lesson02/02';
import {addSkill, doesStudentLiveIn, makeStudentActiv} from './03';

let student: StudentType;

beforeEach(() => {
    student = {
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
            { id: 1, title: 'HTML' },
            { id: 2, title: 'CSS' },
            { id: 3, title: 'REACT' },
        ]
    }
})


test('new tech skill should be added to student', () => {

    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()

})
test('student is active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActiv(student)
    expect(student.isActive).toBe(true)
})

test(' does student liv in city?', () => {

    doesStudentLiveIn(student,'Moscow')
    expect(student.address.city.title).toBe('Moscow')
})
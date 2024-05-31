export type MenType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}


let props: MenType;


beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'},{title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosty street'
            }
        }
    }
})
test('', () => {

    const {age, lessons} = props
    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    const {title} = props.lessons[0]
    expect(title).toBe('1')

    const a = props.age
    const l = props.lessons
    expect(a).toBe(32)
    expect(l.length).toBe(3)
})
test('', () => {
    const [,,l3] = props.lessons
    // expect(l1.title).toBe("1")
    expect(l3.title).toBe('3')
})
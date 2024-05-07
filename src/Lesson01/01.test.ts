import {mult, splitIntoWorlds, sum} from './01'

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})
test('sum should be correct', () => {
    //data

//action
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test('multiply should be correct', () => {
    //data

//action
    const result1 = mult(a, b)
    const result2 = mult(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})
test('split shout be correct', () => {
    const sent1 = 'Hello my friend'
    const sent2 = 'JS - programming language'

    const result1 = splitIntoWorlds(sent1)
    const result2 = splitIntoWorlds(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')


    expect(result2.length).toBe(4)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('-')
    expect(result2[2]).toBe('programming')
    expect(result2[3]).toBe('language')

})
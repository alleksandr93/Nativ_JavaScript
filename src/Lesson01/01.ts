
const sentens = 'Hello my friends'

export function sum(a: number, b: number) {
    return a + b
}
export function mult(a: number, b: number) {
    return a * b
}
export function splitIntoWorlds(sentens: string) {
    return sentens.toLowerCase().split(' ')
}
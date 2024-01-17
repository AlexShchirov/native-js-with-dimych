export type manType = {
    name: string,
    age: number
}

const people: Array<manType> = [
    {name: 'Anrew Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Dmitry sidorov', age: 18},
]

const dimychTransformator = (man:manType) => ({
    
        stack:['css', 'html', 'js', 'tdd', 'react',],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    
})

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react',],
        firstName: 'Andrew',
        lastName: 'Ivanov',
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react',],
        firstName: 'Alex',
        lastName: 'Petrov',
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react',],
        firstName: 'Dmitry',
        lastName: 'sidorov',
    },
]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const dev2= [
    d1,d1,d3
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map(man => ({
    
    stack:['css', 'html', 'js', 'tdd', 'react',],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],

}))

const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to IT` )
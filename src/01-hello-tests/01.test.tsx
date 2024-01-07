import { mulp, splitIntoWords, sum } from "./01";

let a : number;
let b : number;
let c : number;

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
})


test("sum should be correct", () => {

    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expected result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
});


test("multiply should be correct", () => {

    //action
    const result1 = mulp(a, b);
    const result2 = mulp(b, c);

    //expected result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
});

test('splitting into words should be correct', () => {
    const sent1 = 'hello my friend'
    const sent2 = 'JS - the best  programming language.'

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expected result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');
    expect(result2.length).toBe(5);
})
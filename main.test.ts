import {FizzBuzz} from "./fizzBuzz";
import { Bowling } from "./bowling";

describe('test', function () {
    it('X X X X X X X X X X X X should return 300', () => {
        const bowling = new Bowling()
        expect(bowling.generate_bowling_score_for_complete_strikes_game("X X X X X X X X X X X X")).toBe(300)
    });
})


describe('test', function () {

    it('2 should return 12', () => {
        const fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.calculate(2)).toBe('12')
    });

    it('3 should return 12Fizz', () => {
        const fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.calculate(3)).toBe('12Fizz')
    });


    it('4 should return 12Fizz4', () => {
        const fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.calculate(4)).toBe('12Fizz4')
    });

    it('5 should return 12Fizz4Buzz', () => {
        const fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.calculate(5)).toBe('12Fizz4Buzz')
    })

    it('6 should return 12Fizz4BuzzFizz', () => {
        const fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.calculate(6)).toBe('12Fizz4BuzzFizz')
    })

    it('16 should return 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16', () => {
        const fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.calculate(16)).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16');
    })
});
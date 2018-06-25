const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calculator', () => {
    
    it('adds two numbers', () => {
        assert.equal(add(3, 4), 7);
    });

    it('subtracts two numbers', () => {
        assert.equal(subtract(7, 2), 5);
    });

    it('multiplies two numbers', () => {
        assert.equal(multiply(3, 5), 15);
    });

    it('divides two numbers', () => {
        assert.equal(divide(10, 2), 5);
    });

    it('throws error when dividing by 0', () => {
        assert.equal(divide(10, 0), 'Attempt to divide by zero (0)');
    });
});
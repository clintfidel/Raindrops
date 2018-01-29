import chai from 'chai';
import rainDrops from '../lib/rainDrops';

const assert = chai.assert;
const errorMessage = "Invalid! pls pass a valid Number";
const myFunction = rainDrops;

describe('rainDrops', (() => {
    it('should check that raindrops is a function', (() => {
        assert.equal( myFunction instanceof Function, true)
    }))
}))

describe('Invalid value in function call', (() => {
   it('should return (errorMessage)' ,(() => {
    assert.equal(rainDrops(), errorMessage)
   }));

   it('should return (errorMessage)' ,(() => {
    assert.equal(rainDrops(''), errorMessage)
   }));

   it('should return (errorMessage)' ,(() => {
    assert.equal(rainDrops([]), errorMessage)
   }));

   it('should return (errorMessage)' ,(() => {
    assert.equal(rainDrops({}), errorMessage)
   }));
}))

describe('return input Number for Unmet conditions', (() => {
    it('should check that returned Number is a string', (()=> {
        assert.equal(typeof rainDrops() === 'string', true)
    }))
    it('should return "22" ', (() => {
        assert.equal(rainDrops(22), '22')
    }))

    it('should return "1" ', (() => {
        assert.equal(rainDrops(1), '1')
    }))

    it('should return "4" ', (() => {
        assert.equal(rainDrops(4), '4')
    }))

    it('should return "13" ', (() => {
        assert.equal(rainDrops(13), '13')
    }))

    it('should return "41" ', (() => {
        assert.equal(rainDrops(41), '41')
    }))
}))

describe('proper output for conditions met', (() => {
    it('should return pling for 3', (() => {
        assert.equal(rainDrops(3), 'pling')
    }));

    it('should return plang for 5', (() => {
        assert.equal(rainDrops(5), 'plang')
    }))

    it('should return plong for 7', (() => {
        assert.equal(rainDrops(7), 'plong')
    }))

    it('should return plingplang for 3 and 5', (() => {
        assert.equal(rainDrops(15), 'plingplang')
    }))

    it('should return plingplong for 3 and 7', (() => {
        assert.equal(rainDrops(21), 'plingplong')
    }))

    it('should return plangplong for 5 and 7', (() => {
        assert.equal(rainDrops(35), 'plangplong')
    }))

    it('should return plingplangplong for 3,5 and 7', (() => {
        assert.equal(rainDrops(105), 'plingplangplong')
    }))

    it('should return pling for 12', (() => {
        assert.equal(rainDrops(12), 'pling')
    }))

    it('should return plang for 20', (() => {
        assert.equal(rainDrops(20), 'plang')
    }))
}))


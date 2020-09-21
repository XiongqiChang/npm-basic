import {
    transByromanizer
} from "../src/romanizer";

describe('transform', () => {
    it('should return "X" when input 10', () => {
       
        const result = transByromanizer(10);
        expect(result).toEqual("X")
    });


});
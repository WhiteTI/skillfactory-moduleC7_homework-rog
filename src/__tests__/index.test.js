import reverseStr from '../index';

describe('test reverseStr', () => {
    it('calling the function for the string Hello World', () => {
        expect(reverseStr("Hello World")).toBe('dlroW olleH');
    }),
    it('calling the function for the string Test', () => {
        expect(reverseStr('Test')).toBe('tseT');
    });
});
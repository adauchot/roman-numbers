import {RomanNumberConverter} from "./roman-converter";

describe('RomanConverter', () => {
    it('should convert 1 to I', () => {
        expect(RomanNumberConverter.convert(1)).toBe('I');
    });

    it('should convert 2 to II', () => {
        expect(RomanNumberConverter.convert(2)).toBe('II');
    });

    it('should convert 3 to III', () => {
        expect(RomanNumberConverter.convert(3)).toBe('III');
    });

    it ('should convert 4 to IV', () => {
       expect(RomanNumberConverter.convert(4)).toBe('IV');
    });

    it ('should convert 5 to V', () => {
        expect(RomanNumberConverter.convert(5)).toBe('V');
    });

    it ('should convert 6 to VI', () => {
        expect(RomanNumberConverter.convert(6)).toBe('VI');
    });

    it ('should convert 7 to VII', () => {
        expect(RomanNumberConverter.convert(7)).toBe('VII');
    });

    it ('should convert 8 to VIII', () => {
        expect(RomanNumberConverter.convert(8)).toBe('VIII');
    });

    it ('should convert 9 to IX', () => {
        expect(RomanNumberConverter.convert(9)).toBe('IX');
    });

    it ('should convert 10 to X', () => {
        expect(RomanNumberConverter.convert(10)).toBe('X');
    });

    it ('should convert 40 to XL', () => {
        expect(RomanNumberConverter.convert(40)).toBe('XL');
    });

    it ('should convert 50 to L', () => {
        expect(RomanNumberConverter.convert(50)).toBe('L');
    });

    it ('should convert 49 to XLIX', () => {
        expect(RomanNumberConverter.convert(49)).toBe('XLIX');
    });

    it ('should convert 34 to XXXIV', () => {
        expect(RomanNumberConverter.convert(34)).toBe('XXXIV');
    });

    it ('should convert 33 to XXXIII', () => {
        expect(RomanNumberConverter.convert(33)).toBe('XXXIII');
    });

    it ('should convert 99 to XCIX', () => {
        expect(RomanNumberConverter.convert(99)).toBe('XCIX');
    });

    it ('should convert 100 to C', () => {
        expect(RomanNumberConverter.convert(100)).toBe('C');
    });

    it ('should convert 142 to CXLII', () => {
        expect(RomanNumberConverter.convert(142)).toBe('CXLII');
    });

    it ('should convert 354 to CXLII', () => {
        expect(RomanNumberConverter.convert(142)).toBe('CXLII');
    });

    it ('should convert 453 to CDLIII', () => {
        expect(RomanNumberConverter.convert(453)).toBe('CDLIII');
    });

    it ('should convert 745 to DCCXLV', () => {
        expect(RomanNumberConverter.convert(745)).toBe('DCCXLV');
    });

    it ('should convert 999 to CMXCIX', () => {
        expect(RomanNumberConverter.convert(999)).toBe('CMXCIX');
    });

    it ('should convert 1598 to MD', () => {
        expect(RomanNumberConverter.convert(1598)).toBe('MDXCVIII');
    });

    it ('should convert 3332 to MMMCCCXXXII', () => {
        expect(RomanNumberConverter.convert(3332)).toBe('MMMCCCXXXII');
    });

    it('should breakdown 43 and return output 40', () => {
        const numberToTest = 43;
        const listOfArabicNumbers = [1, 4, 5, 9, 10, 40, 50];

        const output = RomanNumberConverter.breakdownMaxSymbolValue(numberToTest, listOfArabicNumbers)
        expect(output).toBe(40);
    });
});

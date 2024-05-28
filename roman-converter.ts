export abstract class RomanNumberConverter {
    private static arabicToRomanSymbolMap: Map<number, string> = new Map([
        [1, 'I'],
        [4, 'IV'],
        [5, 'V'],
        [9, 'IX'],
        [10, 'X'],
        [40, 'XL'],
        [50, 'L'],
        [90, 'XC'],
        [100, 'C'],
        [400, 'CD']
    ]);

    static convert(number: number) {
        let leftover = number;
        let result = '';
        while (leftover > 0) {
            const maxSymbolValue = RomanNumberConverter.breakdownMaxSymbolValue(leftover, Array.from(RomanNumberConverter.arabicToRomanSymbolMap.keys()));
            result += RomanNumberConverter.arabicToRomanSymbolMap.get(maxSymbolValue);
            leftover -= maxSymbolValue;
        }

        return result;
    }

    static breakdownMaxSymbolValue(numberToTest: number, listOfArabicNumbers: number[]) {
        const validCandidates = listOfArabicNumbers.filter(n => n <= numberToTest);
        return Math.max(...validCandidates);
    }
}

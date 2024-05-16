export abstract class RomanNumberConverter {
    private static arabicToRomanSymbolMap: Map<number, string> = new Map([
        [1, 'I'],
        [4, 'IV'],
        [5, 'V']
    ]);

    static convert(number: number) {
        return this.arabicToRomanSymbolMap.get(number);
    }
}

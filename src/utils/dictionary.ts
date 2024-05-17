export function generateDictionary(num: number): string[] {
    console.log('Generating dictionary...');
    const dictionary: string[] = [];
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < num; i++) {
        const wordLength: number = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
        let word: string = '';

        for (let j = 0; j < wordLength; j++) {
            word += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        dictionary.push(word);
    }

    return dictionary;
}

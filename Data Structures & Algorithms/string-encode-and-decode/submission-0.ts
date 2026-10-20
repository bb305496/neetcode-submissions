class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let finalString = "";
        for(const word of strs) {
            finalString += word.length + '#' + word
        }

        return finalString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;
        while(i < str.length) {
            let hashIndex = str.indexOf('#', i);

            let lengthStr = str.slice(i, hashIndex);
            let wordLength = parseInt(lengthStr);

            let wordStart = hashIndex + 1;
            let wordEnd = wordStart + wordLength;

            let word = str.slice(wordStart, wordEnd);
            result.push(word);

            i = wordEnd;
        }
        return result;
    }
}

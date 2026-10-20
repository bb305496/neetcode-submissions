class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";
        for(let word of strs) {
            result += word.length + '#' + word;
        }

        return result;
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

            let wordLength = parseInt(str.slice(i, hashIndex));

            let wordStart = hashIndex + 1;
            let wordEnd = wordStart + wordLength;

            let word = str.slice(wordStart, wordEnd);
            result.push(word);

            i = wordEnd;
        }

        return result;

    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false;
        }

        const asciCount = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            asciCount[s.charCodeAt(i) - 97]++;
            asciCount[t.charCodeAt(i) - 97]--;
        }

        for(let i = 0; i < 26; i++) {
            if(asciCount[i] !== 0) {
                return false;
            }
        }

        return true;

    }
}

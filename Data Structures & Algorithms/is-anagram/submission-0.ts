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

        const asciCount = new Array(256).fill(0);

        for(let i = 0; i < s.length; i++) {
            asciCount[s.charCodeAt(i)]++;
            asciCount[t.charCodeAt(i)]--;
        }

        for(let i = 0; i < 256; i++) {
            if(asciCount[i] !== 0) {
                return false;
            }
        }

        return true;

    }
}

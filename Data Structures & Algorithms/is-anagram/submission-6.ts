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

        const arr = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        for(const val of arr) {
            if(val !== 0) {
                return false;
            }
        }

        return true;
    }
}

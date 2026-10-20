class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let anagrams_map = new Map<string, string[]>();

        for(let word of strs) {
            const arr = new Array(26).fill(0);

            for(let i = 0; i < word.length; i++) {
                arr[word.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            }
            
            const key = arr.toString();

            if(!anagrams_map.has(key)) {
                anagrams_map.set(key, [])
            }

            anagrams_map.get(key).push(word)
        }

        return Array.from(anagrams_map.values())
    }
}

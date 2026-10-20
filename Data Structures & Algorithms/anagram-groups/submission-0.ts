class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let anagram_map = new Map<string, string[]>();

        for(let word of strs) {
            let count = new Array(26).fill(0);

            for(let i = 0; i < word.length; i++) {
                count[word.charCodeAt(i) - 97] += 1;
            }

            const key = count.toString();

            if(!anagram_map.has(key)) {
                anagram_map.set(key, []);
            }

            anagram_map.get(key).push(word);
        }

        return Array.from(anagram_map.values());
    }
}

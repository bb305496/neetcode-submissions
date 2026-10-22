class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        
        let seqLength = 1;
        let maxLength = 1;

        let newArra = nums.sort((a,b) => a - b);

        for(let i = 0; i < newArra.length - 1; i++) {
            if(newArra[i] === newArra[i+1]) {
                continue;
            } else if (newArra[i] + 1 === newArra[i+1]) {
                seqLength += 1;
            } else {
                if(maxLength < seqLength) {
                    maxLength = seqLength;
                }
                seqLength = 1;
            }
        }

        if (maxLength < seqLength) {
            maxLength = seqLength;
        }

        return maxLength;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let maxSeq = 0;

        for(const num of set) {
            if(!set.has(num - 1)) {
                let j = num;
                let currentSeq = 0;
                while(set.has(j)) {
                    j++;
                    currentSeq++;
                }

                if(currentSeq > maxSeq) {
                    maxSeq = currentSeq;
                }
            }
        }

        return maxSeq;
    }
}

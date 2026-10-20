class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq_map = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            if(!freq_map.has(nums[i])) {
                freq_map.set(nums[i], 1)
            } else {
                freq_map.set(nums[i], freq_map.get(nums[i]) + 1)
            }
        }

        const buckets = new Array<number[]>(nums.length + 1).fill(null).map(() => [])

        for(const [num, freq] of freq_map.entries()) {
            buckets[freq].push(num);
        }

        const result = [];

        for(let i = buckets.length - 1; i >=0; i--) {
            for(const num of buckets[i]) {
                result.push(num);
                if(result.length === k) {
                    return result;
                }
            }
        }
        

        return result;
    }
}

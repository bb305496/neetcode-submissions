class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set = new Set();
        for(let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }

        if(set.size === nums.length) {
            return false
        } else {
            return true;
        }

    }
}

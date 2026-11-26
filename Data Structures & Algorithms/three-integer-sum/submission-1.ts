class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a - b);
        const answers: number[][] = [];

        for(let i = 0; i < nums.length; i++) {
            let current = nums[i];
            if(nums[i] === nums[i-1]) {
                continue;
            }
            let p1 = i + 1;
            let p2 = nums.length - 1;
            while(p1 < p2) {
                if(current + nums[p1] + nums[p2] < 0) {
                    p1++;
                } else if (current + nums[p1] + nums[p2] > 0) {
                    p2--;
                } else {
                    answers.push([current, nums[p1], nums[p2]]);
                    p1++;
                    while(nums[p1] === nums[p1 - 1] && p1 < p2) {
                        p1++;
                    }
                }
            }
        }

        return answers;
    }
}

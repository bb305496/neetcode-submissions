class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a,b) => a - b);
        const answers: number[][] = [];

        for(let i = 0; i < sortedNums.length; i++) {
            let current = sortedNums[i];
            if(sortedNums[i] === sortedNums[i - 1]) {
                continue;
            }
            let p1 = i + 1;
            let p2 = sortedNums.length - 1;
            while(p1 < p2) {
                if(current + sortedNums[p1] + sortedNums[p2] < 0) {
                    p1++
                } else if (current + sortedNums[p1] + sortedNums[p2] > 0) {
                    p2--;
                } else {
                    answers.push([current, sortedNums[p1], sortedNums[p2]]);
                    p1++;
                    p2--;
                    while(sortedNums[p1] === sortedNums[p1 - 1]) {
                        p1++
                    }
                }
            }
        }

        return answers;
    }
}

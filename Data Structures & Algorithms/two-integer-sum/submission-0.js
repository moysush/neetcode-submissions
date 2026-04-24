class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for(let i = 0; i < nums.length; i++){
            const currNum = nums[i]
            const complement = target - currNum // exact complement to check in the seen object
            if(complement in seen){ //checks if the key exists already to save time
                return [seen[complement], i]
            }
            seen[currNum] = i // store new key-value pair
        }
    }
}

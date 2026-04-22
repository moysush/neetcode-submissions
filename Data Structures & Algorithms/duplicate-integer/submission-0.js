class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dupRemoved = new Set(nums)
        return dupRemoved.size !== nums.length
    }
}

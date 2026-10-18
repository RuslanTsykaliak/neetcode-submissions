class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        // #Hash Table #Array
        let seen = new Set<number>();
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true;
            }
            seen.add(nums[i]);
        }
        return false;


        // Sorting with checking every elemet: #Sorting #Array
        // nums.sort();
        // for (let i = 0; i < nums.length; i++) {
        //     if (nums[i] === nums[i + 1]) {
        //         return true
        //     }
        // }
        // return false;
    }
}

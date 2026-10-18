class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Input: Integer array
        // Output: New array with indexes of
        // every values, that sum up to target

        int n = nums.length;
        // int[] res = new int[n];

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                    // res[i] = i;
                    // res[j] = j;
                }
            }
        }
        return new int[0];
    }
}

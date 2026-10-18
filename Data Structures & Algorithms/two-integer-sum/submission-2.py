class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Brute Force. Nested loop
        n = len(nums)
        res = []
        for i in range(n - 1):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    res.extend([i, j])
                    return res

        # We can look for difference i and target using hash
        
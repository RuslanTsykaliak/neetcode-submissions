class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dublicate = False;
        unique = set(nums);

        if (len(nums) > len(unique)):
            dublicate = True;

        return dublicate;
        
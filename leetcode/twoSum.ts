let twoSum = (nums: number[], target: number) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))


/* hongmei's failed solution
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        first_addend_index = 0
        second_addend_index = 1
        match = False
        
        while True:
            if first_addend_index == second_addend_index:
                second_addend_index += 1
                continue
            
            if nums[first_addend_index] + nums[second_addend_index] == target:
                match = True
                break
            else:
                if second_addend_index == len(nums) - 1:
                    first_addend_index += 1
                    second_addend_index = 0
                else:
                    second_addend_index += 1

        return [first_addend_index, second_addend_index] if match else []
*/
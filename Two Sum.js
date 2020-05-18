/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        for (var i=0;i<nums.length;i++){
            for(var x=i+1;x<nums.length;x++){
                if(target-nums[i] === nums[x]){
                    return [i, x];
                }
            }
        }
};

//O(n) & O(1) --Neetcode
function findDuplicate(nums) {
    let slow=0,fast=0;
    while(true){
        slow=nums[slow];
        fast=nums[nums[fast]];
        if(slow===fast)break;
        
    }
    let slow2=0;
    while(true){
        slow2=nums[slow2];
        slow=nums[slow];
        if(slow===slow2)break;
    }
    return slow;
    }

  console.log(findDuplicate([2,6,4,1,3,1,5]));  
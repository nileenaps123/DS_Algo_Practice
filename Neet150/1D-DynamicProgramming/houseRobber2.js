function rob(nums){  // O(n)  & O(n)

    if(nums.length<1)return 0;
    else if(nums.length<2)return nums[0];

    let skipFirstHouse= new Array(nums.length-1);
    let skipLastHouse= new Array(nums.length-1);
    for (let i=0;i<nums.length-1;i++){
        skipLastHouse[i]=nums[i];
        skipFirstHouse[i]=nums[i+1];
    }

    let lootSkippingLast=robHelper(skipLastHouse);
    let lootSkippingFirst=robHelper(skipFirstHouse);
    return Math.max(lootSkippingLast,lootSkippingFirst);
    function robHelper(nums){

      if(nums.length<1)return 0;
      else if(nums.length<2)return nums[0];

      let prev2=nums[0];
      let prev1=Math.max(prev2,nums[1]);
      let curr=prev1;

      for (let i=2;i<nums.length;i++){
        curr=Math.max(prev2+nums[i],prev1);
        prev2=prev1;
        prev1=curr;
      }
      return curr;

    }
}

function rob_optimized(nums){  // O(n)  & O(1)

    const n=nums.length ;   
    if(n<1)return 0;
    else if(n<2)return nums[0];

    return Math.max(robHelper(0,n-1),robHelper(1,n))
    function robHelper(start,end){
        let prev2=0,prev1=0;
        let temp;
        for(let i=start;i<end;i++){
            let temp=prev1;
            prev1=Math.max(prev2+nums[i],prev1);
            prev2=temp;
        }
        return prev1;
    }

}
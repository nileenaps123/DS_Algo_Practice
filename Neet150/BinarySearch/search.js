function search(nums,target){ //O(logn) ,O(1)

    let l=0,r=nums.length-1,m;

    while(l<=r){

        m=Math.floor((l+r)/2); //can overflow when l and r are large
        //m=l+Math.floor((r-l)/2); // Better approach than prev 
                                  // to compute safe midpoint

        if(target<nums[m]) r=m-1;
        else if (target>nums[m]) l=m+1;
        else return m;
    }
    return -1;
}

console.log(search([-1,0,2,4,6,8], target = 4));
function searchRotatedSortedArr(nums, target){

    let l=0,r=nums.length-1,m;

    while(l<=r){

        m=Math.floor(l+ (r-l)/2);
        if(target===nums[m]) return m;

        if(nums[l]<=nums[m]){//left array is sorted 
            if(target>nums[m] || target  < nums[l]){ //eg- 3 4 5 6 7 1 2 -- targ-7 or 1 
                l=m+1;

            }
            else{
                r=m-1
            }
        }
        else{
            if(target < nums[m] || target > nums[r]){ //eg - 7 8 9 1 2 3 4 5 6 --right sorted -targ 1,
                r=m-1;
            } 
            else{
                l=m+1;
            }
        }

    }
    return -1;

}


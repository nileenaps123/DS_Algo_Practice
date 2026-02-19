function findMin(nums){

let l=0,r=nums.length-1;
let res=nums[l],m;

while(l<=r){

    if(nums[l]<=nums[r]){
        //array is sorted in order
        res=Math.min(res,nums[l]);
        break;
    }

    m=l+Math.floor((r-l)/2);
    res=Math.min(res,nums[m]);

    if(nums[l]<=nums[m]){//left is sorted and min doesnt exist in left
        l=m+1;//shift to right side
    }else{
        r=m-1;//shift to left side
    }

}
return res;

}

console.log(findMin([3,1,2]));


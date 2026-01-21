function threeSum(nums){
    nums.sort((a,b)=>a-b);
    let sum,l,r,res=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0) break;
        if(nums[i]===nums[i-1]) continue;
        l=i+1;
        r=nums.length-1;
        while(l<r){
            sum=nums[i]+nums[l]+nums[r];
            if(sum<0){
                l++;
                if((l<r) && (nums[l]===nums[l-1])){
                    l++;
                }
            }else if(sum>0){
                r--;
                if((l<r) && (nums[r]===nums[r+1])){
                    r--;
                }
            }else{
                res.push([nums[i],nums[l],nums[r]]);
                l++;
                r--;
                if((l<r) && (nums[l]===nums[l-1])){
                    l++;
                }
                if((l<r) && (nums[r]===nums[r+1])){
                    r--;
                }
            }
        }
    }
    return res; 
    }



console.log(threeSum([-1,0,1,2,-1,-4]));  //-4,-1,0, 1,1,2,3

console.log(threeSum( [0,1,1]));


console.log(threeSum( [0,0,0]));

console.log(threeSum( [-4,-1,0, 1,1,2,3]));
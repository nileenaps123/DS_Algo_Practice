//O(N)-TC & SC
function rob(nums){

    if(nums.length===0)return 0;
    if(nums.length===1)return nums[0];

    const money=new Array(nums.length);

    money[0]=nums[0];
    money[1]=Math.max(nums[0],nums[1]);

    for (let i=2;i<nums.length;i++){

        money[i]=Math.max(nums[i]+money[i-2],money[i-1]);
    }
    return money[nums.length-1];

}
//Optimized,TC -O(n),SC -O(1)
function rob(nums){

    if(nums.length===0)return 0;
    if(nums.length===1)return nums[0];

    let prev2=nums[0];
    let prev1=Math.max(nums[0],nums[1]);
    let curr=prev1;//Initialize with prev1 in case nums.length === 2

    for (let i=2;i<nums.length;i++){

        curr=Math.max(nums[i]+prev2,prev1);
        prev2=prev1;
        prev1=curr;
    }
    return curr;

}
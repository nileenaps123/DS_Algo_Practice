function maxProduct(nums) {

    const n=nums.length;
    let leftPdt=1;
    let rightPdt=1;

    let maxPdt=nums[0];

    for(let i=0;i<n;i++){

        leftPdt=leftPdt===0?1:leftPdt;
        rightPdt=rightPdt===0?1:rightPdt;

        leftPdt*=nums[i];
        rightPdt*=nums[n-1-i];

        maxPdt=Math.max(maxPdt,Math.max(leftPdt,rightPdt));
    }
    return maxPdt;
}



function canPartition(nums){//Neetcode

    const sum=nums.reduce((a,b)=>a+b,0);

    if(sum%2 !== 0) return false;
    const target=sum/2;
    let dp=new Set();
    dp.add(0);

    for(let i=nums.length-1;i>=0;i--){

        const newdp=new Set();
        for(const t of dp){
            if(t+nums[i]===target)return true;
            newdp.add(t+nums[i]);
            newdp.add(t);
        }
        dp=newdp
    }
    return false;

}

//TC -O(n*target)
//SC -O(target)

//To divide array into equal partitions -total sum/2 should be an integer
//if target(half of sum) is obtained by adding some elems of nums ,
//remaining half will be obtained from rest of elems,so check only half of sum
//coz sum is s=s/2 + s/2 , if s/2 is met ,remaining elems will give s/2
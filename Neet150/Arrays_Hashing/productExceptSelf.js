 function productExceptSelf(nums) {

    let res=new Array(nums.length).fill(1);

    //prefix product

    for(let i=1;i<nums.length;i++){
        res[i]=res[i-1]*nums[i-1];

    }
    let pos=1;
    for(let i=nums.length-1;i>=0;i--){
        res[i]=res[i]*pos;
        pos=pos*nums[i]

    }

    return res;


 }


 console.log(productExceptSelf([1,2,3,4]));
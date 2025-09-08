/* function maxSubarraySum(arr,n){
    let maxSum=-Infinity;
    for (let i=0;((i+n) <=arr.length) ;i++){
        let sum=arr[i],limit=i+n;
       
        for (let j=i+1;j<limit;j++){
            console.log("inside j loop");
            sum=sum+arr[j];
            //console.log(i is ${i}\nj is ${j}\narr[i] is ${arr[i]}\narr[j] is ${arr[j]}\nsum is ${sum})

        }
        if(sum>maxSum){
            maxSum=sum;
            console.log("maxSum",maxSum)
        } 
    }
    return maxSum;
}

//console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
//console.log(maxSubarraySum([4,2,1,6,2],4));
console.log(maxSubarraySum([-1,-2,-5,-2],2));
//-3,-7,-7 */  



 function maxSubarraySum(arr,n){
    let maxSum=-Infinity;
    for (let i=0;i<arr.length-n +1 ;i++){
        let sum=0;
       
        for (let j=0;j<n;j++){
            console.log("inside j loop");
            sum=sum+arr[i+j];
            //console.log(i is ${i}\nj is ${j}\narr[i] is ${arr[i]}\narr[j] is ${arr[j]}\nsum is ${sum})

        }
        if(sum>maxSum){
            maxSum=sum;
            console.log("maxSum",maxSum)
        } 
    }
    return maxSum;
}

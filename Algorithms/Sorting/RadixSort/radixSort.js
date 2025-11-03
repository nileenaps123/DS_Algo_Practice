function getDigit(num,i){
    let digit=Math.floor(Math.abs(num)/Math.pow(10,i))%10;
    return digit;

}

function digitCount(num){

    if (num===0) return 1;
    let count=Math.floor(Math.log10(Math.abs(num))) +1;
    return count;


}

function mostDigits(nums){

    let maxCount=0;
    for(let i=0;i<nums.length;i++){
        maxCount=Math.max(maxCount,digitCount(nums[i]))

    }
    return maxCount;
}

function radixSort(nums){

    let maxDigitCount=mostDigits(nums);
    
    for (let k=0;k<maxDigitCount;k++){

        let digitBuckets=Array.from({length:10},()=>[]);
        for(let i=0;i<nums.length;i++){
            let digit=getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
           // console.log(digitBuckets)

        }
        nums=[].concat(...digitBuckets);
        //console.log(nums)
    }
    return nums;
}

console.log(radixSort([23,345,5467,12,2345,9852]))
function averagePair(arr, avg){
    let start=0,newAvg;
    let end=arr.length-1;
    while(start<end){
        newAvg=(arr[start]+arr[end])/2;
        if(newAvg===avg) return true;
        if(newAvg>avg) end--;
        else start++;
    }
    return false;   
  }


 console.log(averagePair([1,2,3],2.5) );// true





 console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
 console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
 console.log(averagePair([],4) )// false
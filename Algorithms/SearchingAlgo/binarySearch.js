function binarySearch(sortedArr,val){

    let left=0,right=sortedArr.length-1;
    let middle=Math.round((left+right)/2);
   // console.log('middle',middle);
    while(sortedArr[middle]!==val &&  left<right){
        
        //console.log("middle",middle,"left",left,"right",right);
        //console.log(sortedArr[middle])
        if (val>sortedArr[middle]) left=middle+1;
        else   right=middle-1;
         middle=Math.round((left+right)/2);
    }
    return sortedArr[middle]==val? middle : -1;


}

console.log(binarySearch([2 ,5, 6, 9, 13, 15, 28, 30],15)) // 1
/*console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log( binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) )// 2
console.log( binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) )// 16
console.log( binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1 */
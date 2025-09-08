function binarySearch(sortedArr,val){

    let left=0,right=sortedArr.length-1;
    let middle=Math.round((left+right)/2);

    while(left<right){
        if (val>middle) left=middle;
        else if (val<middle)  right=middle;
        else return sortedArr.indexOf(middle)
    }
    return -1;


}
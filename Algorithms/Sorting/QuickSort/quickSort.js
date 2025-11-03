function pivot(arr,start=0,end=arr.length-1){
    
    const swap=(arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]];
    }
    let pivot=arr[start];
    let swapIdx=start;
    
    for(let i=start+1;i<=end;i++){
       if(pivot >arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i) 

        }
        //console.log(arr)
    }
    swap(arr,start,swapIdx);
   // console.log("---end----",arr)
    return swapIdx;

}

function quickSort(arr,left=0,right=arr.length-1){
    if (left<right){
        let pivotIdx=pivot(arr,left,right);
        //left
        quickSort(arr,left,pivotIdx-1);
        //right
        quickSort(arr,pivotIdx+1,right);
    }
    return arr



}


//console.log(pivot([30,50,57,26,27,47,39,42,43,44]) )    //i=0,j=9  p=4

console.log(quickSort([9,1,11,3,12,5,6]) ) 
console.log(quickSort([9,1,11,-3,12,5,6]) ) 
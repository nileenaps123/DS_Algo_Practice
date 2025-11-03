//optimized with noSwaps
function bubbleSort(arr){
   
    let noSwaps;
    for (let i=arr.length-1;i>=0;i--){
            noSwaps=true;
            for (let j=0;j<=i-1;j++){
                console.log('i',i)
                if (arr[j]>arr[j+1]) {
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                    noSwaps=false;
                }
            
            }
            if(noSwaps) break

        
        
    }

    return arr

}

console.log(bubbleSort([5,8,2,3]));





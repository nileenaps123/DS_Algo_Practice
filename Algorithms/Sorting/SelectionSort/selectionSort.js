/* function selectionSort(arr){

    let minValIdx,temp;

    for (let i=0;i<arr.length;i++){

        minValIdx=i;

        for (let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minValIdx]){
                minValIdx=j;
            }

        } 
        if (i!==minValIdx){
          temp=arr[i] ;
            arr[i]=arr[minValIdx]  ;
            arr[minValIdx] =temp;  

           [arr[i],arr[minValIdx]]=[arr[minValIdx],arr[i]]; 


        }

    }

    return arr;



}  */

function selectionSort(arr,compFn){
    
    
    for (let i=0;i<arr.length;i++){

        minValIdx=i;

        for (let j=i+1;j<arr.length;j++){
            //console.log("minValIdx,j]",i,j)
            if(arr[j]<arr[minValIdx]){
                minValIdx=j;
            }

        } 
        if (i!==minValIdx){
/*          temp=arr[i] ;
            arr[i]=arr[minValIdx]  ;
            arr[minValIdx] =temp;  */

           [arr[i],arr[minValIdx]]=[arr[minValIdx],arr[i]]; 


        }

    }

    return arr;



}    

console.log(selectionSort([3,6,1,2,9]));
//[3,6,1,2,9]
//1,6,3,2,9
//1,


function productOfArray(arr){
    let result=1;
    
    function helperfunc(arr){
       // console.log(arr,result)
        if(arr.length!==0){
            result*=arr[0];
           // console.log(result);
           helperfunc(arr.slice(1));
        }
        
        else {
            //console.log(result);
            return ;

        }
            
    }
    //return 
    helperfunc(arr);
   // console.log(helperfunc([1,2,3]),'a')
    return result;
     
}




console.log( productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
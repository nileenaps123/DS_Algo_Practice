

 function capitalizeWords (arr) {

    if (arr.length===1) return [arr[0].toUpperCase()] ;

 
        let res=capitalizeWords(arr.slice(0,-1));//using recursion instead of straightforward approach
       
       res.push(arr[arr.length-1].toUpperCase());
         
          return res;


    
    
 }   



let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
 function capitalizeFirst (arr) {
//this function first takes the first elem,capitalizes it and concat the capitalized 2nd elem
    if(arr.length===1){
        return [arr[0][0].toUpperCase()+ arr[0].substr(1)]; //gets the caps for first elem
    }

    let res=capitalizeFirst(arr.slice(0,-1));

    let nxt=arr.slice(arr.length-1)[0][0].toUpperCase()+arr.slice(arr.length-1)[0].substr(1)//get caps for 2nd elem

    res.push(nxt); //first + second

    return res;


  } 
  
 console.log( capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana'] 


/*  function capitalizeFirst (arr) {
//this capitalizes the last elem first
   // console.log('arr1',arr)
    if(arr.length===1){
       // console.log('arr2',arr)
        return [arr[0][0].toUpperCase()+ arr[0].substr(1)]; //gets the caps for first elem
    }
    
    let res=capitalizeFirst(arr.slice(1));
 
   let  nxt=arr.slice(0)[0][0].toUpperCase()+arr[0].substr(1);
     
    //nxt.push(res); //first + second

    res=[nxt,...res]
console.log(nxt)
    return res;


  }
  console.log( capitalizeFirst(['sum','Yen','car','taco','banana','pen'])); // ['Car','Taco','Banana'] */
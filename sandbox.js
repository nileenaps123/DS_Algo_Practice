/* function freqCounter(arr1,arr2){
 
    if (arr1.length!==arr2.length)
        return false

    for (i in arr1){

        arr2Index=arr2.indexOf(i**2);
        if (arr2Index)
            arr2.splice(arr2Index,1);
        else
            return false;
    }
    return true;
} */



 function frequencyCounter(arr1,arr2){

    if (arr1.length!==arr2.length){
        return false
    }

    let obj1={},obj2={};

    for (let i of arr1){
        obj1[i]=(obj1[i]||0)+1;
    }

    for (let j of arr2){
        obj2[j]=(obj2[j]||0)+1;
    }

    for (let key in obj1){
        if( !(key**2 in obj2) )return false;

        if (obj1[key]!==obj2[key**2]) return false;
    }
    return true;

 }   

 console.log(frequencyCounter([1,2,3],[4,9,1]));
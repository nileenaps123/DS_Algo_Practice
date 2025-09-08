function validAnagram(str1,str2){

    let obj1={},obj2={};

    if(str1.length!==str2.length){
        return false
    }

    for(let i of str1){
       obj1[i]=obj1[i]||0+1;
    }
    for(let i of str2){
        obj2[i]=obj2[i]||0+1;
     }

    for (let key in obj1){

        if(!(key in obj2)){
            return false;
        }
       if (obj1[key]!==obj2[key]) {
            return false;
       }

    } 
    return true;
}

console.log(validAnagram('texttwisttime', 'timetwisttext'))
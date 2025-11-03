function stringifyNumbers(obj){

    let newObj={};
    for(let key in obj){
        if (typeof obj[key]==="object" && !Array.isArray(obj[key])){ //object and not an array
            newObj[key]=stringifyNumbers(obj[key]);
        }
        else if (typeof obj[key]==="number"){
            newObj[key]=obj[key].toString();

        }
        else if (typeof obj[key]==="object" && Array.isArray(obj[key])){ //object which is an array
            newObj[key]=stringifyNumbersInArr(obj[key]);
        }

        else
          newObj[key]=obj[key];
    }
    return newObj;
}

function stringifyNumbersInArr(arr){ //to stringify numbers in an array ,not Colt's solution

    let newArr=[];
    for(let elem of arr){
        if (typeof elem==="object" && !Array.isArray(elem)){
           newArr.push(stringifyNumbers(elem));
        }
        else if (typeof elem==="number"){
            newArr.push(elem.toString());

        }
        else if (typeof elem==="object" && Array.isArray(elem)){
            newArr.push(stringifyNumbersInArr(elem));
        }

        else
          newArr.push(elem);
    }
    return newArr;
}




let obj = {
    num: 1,
    test: ['a',1,2,{2:50}],
    price:{1:20},
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}




console.log(stringifyNumbers(obj));





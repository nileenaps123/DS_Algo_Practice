 function collectStrings(obj){
    let resArr=[];
    for (let key in obj){
        if(typeof obj[key] ==='object' ) {
           resArr=resArr.concat(collectStrings(obj[key])) ;
        }
        else if (typeof key==='string'){
            resArr.push(obj[key]);

        }
    }

    return resArr;

}
 

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
function naiveStringSearch(long,short){

    let counter=0;
    for (let i =0;i<long.length;i++){
        for (let j=0;j<short.length;j++){
            if (long[i+j]!==short[j]) break;
            if(j===short.length-1) counter++;

        }
        //counter++;
    }

    return counter;
}


console.log(naiveStringSearch("wowomgzomg","omg"))

console.log(naiveStringSearch("lorie llllll", "lll"))


//sorting

/* function isAnagram(s,t){
    if(s.length!==t.length) return false;

    let sSort=s.split("").sort().join();
    let tSort=t.split("").sort().join();

    return sSort===tSort;

} */

//Hash Map 

/*  function isAnagram(s,t){
    if(s.length!==t.length) return false;

    let sCount={};
    let tCount={};

    for (let i=0;i<s.length;i++){
        sCount[s[i]]=(sCount[s[i]]||0) +1;
        tCount[t[i]]=(tCount[t[i]]||0) +1;

    }

    for(const key in sCount){
        if(sCount[key]!== tCount[key]) return false;
    }

    return true;

}  */


//Hash Table    


 function isAnagram(s,t){
    if(s.length!==t.length) return false;

    let countArr=new Array(26).fill(0);

    for(let i=0;i<s.length;i++){
        countArr[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        countArr[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
    }

    return countArr.every(val=>val===0);

} 







console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("car", "rat"));
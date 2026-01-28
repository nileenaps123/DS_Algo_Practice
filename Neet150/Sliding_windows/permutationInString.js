function checkInclusion(s1, s2) {

    if(s1.length>s2.length) return false;

    let s1Count=new Array(26).fill(0);
    let s2Count=new Array(26).fill(0);
//fill array with 1s upto the length of s1
    for(let i=0;i<s1.length;i++){ 
        s1Count[s1.charCodeAt(i)-97]++;
        s2Count[s2.charCodeAt(i)-97]++;

    }
    let matches=0;//check if two strings are equal after filling up array of 26 with
    //the count of s1
    for(let i=0;i<26;i++){
        if(s1Count[i]===s2Count[i]) matches++;
    }
    let l=0,index;
    for(let r=s1.length;r<s2.length;r++ ){

        if(matches===26) return true;

        index=s2.charCodeAt(r)-97;//add new char in s2
        s2Count[index]++;
        if(s1Count[index] === s2Count[index]) matches++;
        else if(s1Count[index]+1 === s2Count[index])  matches--;

        index=s2.charCodeAt(l)-97;//remove left char in s1
        s2Count[index]--;
        if(s1Count[index] === s2Count[index]) matches++;
        else if(s1Count[index]-1 === s2Count[index])  matches--;

        l++;

    }

    return matches===26;

}

console.log(checkInclusion("abc","lecabee"));
console.log(checkInclusion("abc","lecaabee"));
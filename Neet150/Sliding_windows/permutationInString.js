/*  function checkInclusion(s1, s2) {

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
    console.log(matches)
    return matches===26;

}  */

    //Brute force approach
 function checkInclusion(s1, s2) {

    s1=s1.split('').sort().join('');
    //s2=s2.split('').sort().join('');

         let substr;
         for(let i=0;i<s2.length;i++){
            for(let j=i;j<(i+s1.length);j++){
                substr=s2.slice(i,j+1).split('').sort().join('');
                //console.log(substr)
                if(substr===s1) return true;
                
            }
         }
        return false;

    }
 


console.log(checkInclusion("abc","leclaabee"));
console.log(checkInclusion("abc","lecabee"));
console.log(checkInclusion("abc","lecaabee"));  //0-1,2
//0,1     0,2 0,3


 
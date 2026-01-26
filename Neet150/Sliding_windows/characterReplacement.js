/* function characterReplacement(s, k) {
    let l=0;
    let mp=new Map();
    let maxFreq=0;
    let res=0;

    for (let r=0;r<s.length;r++){
        mp.set(s[r],(mp.get(s[r])||0) +1);
        maxFreq=Math.max(maxFreq,mp.get(s[r]));

        while((r-l+1)-maxFreq >k){
            mp.set(s[l],mp.get(s[l])-1);
            l++;
        }
        res=Math.max(res,r-l+1);
    }
    return res;
} */


//O(n) & o(m)--m -no of unique characters in string
 function characterReplacement(s, k) {
    let l=0;
    let mp={};
    let maxFreq=0;
    let res=0;

    for (let r=0;r<s.length;r++){
        mp[s[r]]=(mp[s[r]]||0) +1;
        maxFreq=Math.max(maxFreq,mp[s[r]]);

        while((r-l+1)-maxFreq >k){
            mp[s[l]]=mp[s[l]]-1;
            l++;
        }
        res=Math.max(res,r-l+1);
    }
    return res;
}   

console.log(characterReplacement("AABABCCBCCB",2));
console.log(characterReplacement("XYYX",2));
console.log(characterReplacement("AAABABB",1));
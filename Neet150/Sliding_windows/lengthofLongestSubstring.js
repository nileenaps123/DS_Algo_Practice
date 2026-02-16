function lengthofLongestSubstring(s){

    let mp={};
    let l=0,res=0;

    for(let r=0;r<s.length;r++){
        if(mp[s[r]]!==undefined){
            l=Math.max(l,mp[s[r]] +1);
        }

        mp[s[r]]=r;
        res=Math.max(res,r-l+1);
    }
    return res;
}

//console.log(lengthofLongestSubstring("zxyzxyz"));
//console.log(lengthofLongestSubstring("abba"))
console.log(lengthofLongestSubstring("abcabcbb"))
//abcabcbb
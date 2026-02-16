/*
This is the most optimal soln ,it can be done with map or object.
Main optimzn is taking same maxFreq always ,instead of checking 
for maxFreq in lookup
*/

function characterReplacement(s, k) {
    let l=0;
    let mp=new Map();
    let maxFreq=0;
    let res=0;

    for (let r=0;r<s.length;r++){
        mp.set(s[r],(mp.get(s[r])||0) +1);
        maxFreq=Math.max(maxFreq,mp.get(s[r]));

        if((r-l+1)-maxFreq >k){
            mp.set(s[l],mp.get(s[l])-1);
            l++;
        }
        res=Math.max(res,r-l+1);
    }
    return res;
} 

//This is a sub-otimal soln as it keeps updating max freq during each iteration
//O(n*m) & o(m)--m -no of unique characters in string  /Striver,/Nikhil Lohia & Neetcode for code
 /*function characterReplacement(s, k) {
    let l=0;
    let mp={};
    let maxFreq=0;
    let res=0;

    for (let r=0;r<s.length;r++){//O(n)
        mp[s[r]]=(mp[s[r]]||0) +1;
        //console.log(mp);
        //maxFreq=Math.max(maxFreq,mp[s[r]]);
        let val=Object.values(mp);//O(m) //m-no of unique characters
        maxFreq=Math.max(...val);

        //console.log(`maxFreq is ${maxFreq}`)

        if((r-l+1)-maxFreq >k){
            mp[s[l]]=mp[s[l]]-1;
            //console.log('inside if',mp);
            
            l++;
        }
        res=Math.max(res,r-l+1);
    }
    return res;
}   */

  //Brute Force  -TC -O(n2),SC-O(m) m-distinct chars in string
/*   function characterReplacement(s, k) {
        let res=0;
        for(let i=0;i<s.length;i++){
            let count={};
            let maxFreq=0;
            for(let j=i;j<s.length;j++){
               count[s[j]]=(count[s[j]]||0)+1;
               maxFreq=Math.max(maxFreq, count[s[j]]);
                
               if((j-i+1)-maxFreq<=k){
                    res=Math.max(res,j-i+1);
                   
               }else{
                break;
               }
            

            }
        }
        return res;
    
}   */   

console.log(characterReplacement("AABABCCBCCB",2));
console.log(characterReplacement("XYYX",2));

console.log(characterReplacement("AAABBCX",2));
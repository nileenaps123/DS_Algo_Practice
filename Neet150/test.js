/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlphaNum(c){
        return ((c>='a'&& c<='z')||
               (c>='A'&& c<='Z') ||
               (c>='0' && c<='9'))
    }
  
    let l=0,r=s.length-1;

    while(l<r){
        if(!(isAlphaNum(s[l]))) {
            l++;
            continue;
        }    

        if(!(isAlphaNum(s[r]))) {
            r--;
            continue;
        }   
        if(s[l].toLowerCase()!==s[r].toLowerCase()) return false
        l++;
        r--;
    };
    return true;
}  

console.log(isPalindrome("A man, a plan, a canal: Panama"))
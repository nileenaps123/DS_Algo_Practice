/* function isPalindrome(s){ //TC-O(n),SC-O(n)
    let regStr='',revStr='';
    for(let i=0;i<s.length;i++){

        let f=s[i].toLowerCase(); 

        if (!((f>='a' && f <='z')
        ||(f>='0' &&  f <='9'))) continue;
        
        regStr+=f;

    }    
    for(let j=regStr.length-1;j>=0;j--){
        
        revStr+=regStr[j];

    }
    return (regStr===revStr)

} */


function isPalindrome(s){

    let l=0,r=s.length-1;
    function isAlphaNumeric(c){
        return(

            (c>='a'  && c<='z')||
            (c>='A'  && c<='Z')||
            (c>='0'  && c<='9')

        );

    }

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


console.log(isPalindrome("Was it a car or a cat I saw?"));

console.log(isPalindrome("tab a cat"));


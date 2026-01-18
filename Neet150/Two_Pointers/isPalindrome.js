/* function isPalindrome(s){
    let newStr='';
    function isAlphaNumeric(c){
        return(

            (c>='a'  && c<='z')||
            (c>='A'  && c<='Z')||
            (c>='0'  && c<='9')

        );

    }
    for(let c of s){

        if(isAlphaNumeric(c)){

            newStr+=c.toLowerCase();


        }

    }

    return newStr===newStr.split('').reverse().join('');

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
        while((l<r)  && !isAlphaNumeric(s[l])){
            l++;

        }

        while((l<r)  && !isAlphaNumeric(s[r])){
            r--;

        }

        if(s[l].toLowerCase()!==s[r].toLowerCase()){
            return false;
        }
        l++;
        r--;

    }
    return true;


}    


console.log(isPalindrome("Was it a car or a cat I saw?"));

console.log(isPalindrome("tab a cat"));


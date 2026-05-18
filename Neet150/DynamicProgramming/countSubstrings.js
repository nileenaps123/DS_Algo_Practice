//TC-O(n2),SC-O(1)

function countSubstrings(s){

    let count=0;
    for(let i=0;i<s.length;i++){
        //odd palindromes
        count+=countPalindromes(s,i,i);
        //even palindromes
        count+=countPalindromes(s,i,i+1);
    }

    function countPalindromes(s,l,r){
        let count=0;
        while(l>=0&&r<s.length &&
            s.charAt(l)===s.charAt(r)
        ){
            count++;
            l--;
            r++;
        }
        return count;    
    }
    return count;
}
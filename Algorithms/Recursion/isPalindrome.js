console.log( isPalindrome('awesome')) // false
console.log( isPalindrome('foobar') )// false

console.log( isPalindrome('amanaplanacanalpanama') )// true
console.log( isPalindrome('amanaplan)acanalpandemonium') )// false

//My solution
/* function isPalindrome(str){
    
    if(str[0]!==str[str.length-1])  return false
    
    else if((str.length===1) || (str.length===2)) return true
    
    str=str.slice(1,str.length-1);
    return isPalindrome(str);

  } */

  console.log( isPalindrome('tacocat')) // true

//Course solution
  function isPalindrome(str){
    
    if(str.length===1)return true;
    if (str.length===2)return  str[0]===str[1];

    if(str[0]===str.slice(-1)) return isPalindrome(str.slice(1,-1))
    
        return false

  }
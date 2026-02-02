
   //Optimal Solution
   function validParantheses(s) {  //TC 0(n),SC 0(n)

        const stack=[];
        const closeToOpen={
            ')':'(',
            ']':'[',
            '}':'{'
        };

        for(let c of s){
            if(closeToOpen[c]){
                if(stack.length && stack[stack.length-1]===closeToOpen[c])
                    stack.pop();
                else{
                    return false;  //  ([)
                }

            }else{
                stack.push(c);
            }
        }
        return stack.length===0;
    }


//Brute Force TC -O(n2)
/*
 function validParantheses(s) {  //TC 0(n),SC 0(n)
    while(s.includes('()') ||s.includes('[]') ||
          s.includes('{}')){

          s=s.replace('()','');  
          s=s.replace('[]',''); 
          s=s.replace('{}',''); 


    }
    return s.length===0;
    } */


console.log( validParantheses("[]")) ; //true

console.log( validParantheses("([{}])")) ; //true
console.log( validParantheses("[(])")) ; //false

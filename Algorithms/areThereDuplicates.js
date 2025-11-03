/* function areThereDuplicates(...args) {
    //let argsArray=args;
    console.log(args);
    if (!(args.length)) return false
    let lookup={};

    for (let i of args){
        lookup[i]=(lookup[i]||0)+1;
        //console.log(i,lookup[i]);
        if(lookup[i]>1) return true;
    }

    return false
  } */


/*  function areThereDuplicates(...args) {

    if ((args.length===0)) return false 

    args.sort((a,b)=>{
        if(a<b) return -1;
        if(a>b) return 1;
        else return 0;
    });
    let i=0,temp;

    for (let j=i+1;j<args.length;j++ ){
        if(args[j]>args[i]){
            
            i++;
            temp=args[i];
            args[i]=args[j];
            args[j]=temp;
        }
    }
    if(i===(args.length-1)){
        return false
    }    
    else return true    
    

  }  */


/* function areThereDuplicates(...args){
    args.sort((a,b)=>{
        if(a<b) return -1;
        if(a>b) return 1;
        else return 0;
    });

    let start=0,end=1;

    while(end<args.length){
        if(args[start]===args[end]) return true
        start++;
        end++;
    }
    return false;
}    
 */

function areThereDuplicates(...args){
    return new Set(args).size!==args.length;
}    
console.log(areThereDuplicates());//false

console.log(areThereDuplicates(1,2,3,)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a') )// true

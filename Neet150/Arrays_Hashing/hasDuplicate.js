/* function hasDuplicate(nums){
    
    nums.sort((a,b)=>a-b);

    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]) return true;
    }
    return false;
    

} */
//Optimal Soln -O(n) my soln

function hasDuplicate(nums){
    
    let obj={};


    for(let num of nums){
        obj[num]=(obj[num]||0)+1;
        if(obj[num]>1) return true
        
    }
    return false;
    

}    

//Optimal  below -O(n)

/* function hasDuplicate(nums){
    const seen=new Set();
    for(const num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;

} */


//HashLength

/* 
function hasDuplicate(nums){
 
    return new Set(nums).size< nums.length

}
 */


console.log(hasDuplicate([1, 2, 3, 3]));
console.log(hasDuplicate([1, 2, 3, 4]));



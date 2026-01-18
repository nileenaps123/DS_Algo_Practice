//Aliatis

//1--Brute Force-O(n3)

/* function longestConsecutive(nums){
    let finalConsecutiveSeq=0;
    
    for(let i=0;i<nums.length;i++){ //O(n)
        let currNum=nums[i];
        let currConsecutiveSeq=1;
        while(nums.includes(currNum+1)){ //O(n)
            //O(n)
            currConsecutiveSeq++;
            currNum++;
        }

        finalConsecutiveSeq=Math.max(finalConsecutiveSeq,currConsecutiveSeq);
    }
    return finalConsecutiveSeq;
} */
//2---Using set O(n2)
/* function longestConsecutive(nums){
    let finalConsecutiveSeq=0;
    let trackerSet=new Set(nums);
    
    for(let i=0;i<trackerSet.size;i++){ //O(n)
        let currNum=nums[i];
        let currConsecutiveSeq=1;
        while(trackerSet.has(currNum+1)){ //O(1)
            //O(n)
            currConsecutiveSeq++;
            currNum++;
        }

        finalConsecutiveSeq=Math.max(finalConsecutiveSeq,currConsecutiveSeq);
    }
    return finalConsecutiveSeq;
}    */ 

//3---O(n+n)~~O(n)

/* function longestConsecutive(nums){
    let finalConsecutiveSeq=0;
    let trackerSet=new Set(nums);
    
    for(let i=0;i<trackerSet.size;i++){ //O(n)
        if(!trackerSet.has(nums[i]-1)){ 
            let currNum=nums[i];
            let currConsecutiveSeq=1;
             while(trackerSet.has(currNum+1)){ //O(1)
            //O(n)
                currConsecutiveSeq++;
                currNum++;
        }

        finalConsecutiveSeq=Math.max(finalConsecutiveSeq,currConsecutiveSeq);
        }
        
    }
    return finalConsecutiveSeq;
}  */  

//Sorting --my soln O(nlogn)  O(1)

function longestConsecutive(nums){

    if(nums.length===0) return 0;
    let sortedNums=nums.sort((a,b)=>a-b);
    let count=1;
    let currCount=1;
    for(let i=0;i<sortedNums.length;i++){
       
        if(nums[i]+1===nums[i+1]){
            currCount++;
        }
        else if(nums[i]===nums[i+1]){
            continue;

        }
        else{
            count =Math.max(currCount,count);
            currCount=1;
            continue;
        }
    }
    return count;
} 

//3,3,4,4,5,6,7,100,101,205,206,207,208,209,210
console.log(longestConsecutive([2,20,4,10,3,4,5]));
console.log(longestConsecutive([2,20,4,10,3,5]));
console.log(longestConsecutive([3,3,4,4,5,6,7,8,9,100,101,205,206,207,208,209,210]));
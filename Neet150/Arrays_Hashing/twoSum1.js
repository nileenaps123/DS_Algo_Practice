//Brute Force --O(n2) & O(1)
/* function twoSum(nums,target){
    for (let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return ([i,j]);
            }
        }
    }
    return [];
} */

//Sorting   --O(nlogn)+O(n)~~ O(nlogn),O(n)

/* function twoSum(nums,target){
    let A=[];
    for (let i=0;i<nums.length;i++){
        A.push([nums[i],i]);  //required to maintain the indices in return
    }

    A.sort((a,b)=>a[0]-b[0]);

    let i=0,j=nums.length-1;
    while(i<j){

        let curr=A[i][0]+A[j][0];
        if(curr===target) {
            return ([Math.min(A[i][1],A[j][1]),Math.max(A[i][1],A[j][1])]); //order of indices is important
        }
        else if(curr<target) i++;
        else j--;
    }

    return [];

    } */



    //Hash Map(two pass)


/*     function twoSum(nums,target){
        let indices={};

        for(let i=0;i<nums.length;i++){
            indices[nums[i]]=i;
        }

        for(let i=0;i<nums.length;i++){
            let diff=target-nums[i];
            if(indices[diff]!==undefined && indices[diff]!==i){
                return ([i,indices[diff]])
            }

        }
        return []

    }  */

    //Hash Map-single pass

       function twoSum(nums,target){
        let indxMap=new Map();


        for(let i=0;i<nums.length;i++){
            let diff=target-nums[i];

            if(indxMap.has(diff)){
                return [indxMap.get(diff),i]
            }

            indxMap.set(nums[i],i);
       

        }
        return []

    } 
    
    


    
 




console.log(twoSum([3,4,5,6],7));
console.log(twoSum([6,5,4],10));
console.log(twoSum([5,5],10));
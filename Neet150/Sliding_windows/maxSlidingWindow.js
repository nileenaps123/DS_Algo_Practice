//TC: O(n),SC: O(n)

function maxSlidingWindow(nums, k) {
    let res=[];
    let q=[];
    let l=0;
    
    for(let r=0;r<nums.length;r++){

        while(q.length && nums[q[q.length-1]] <nums[r]){
            q.pop();
        }

        

        if(l>q[0]){
            q.shift();
        }
        q.push(r);

        if(r+1>=k){
            res.push(nums[q[0]]);
            l++;
        }

    }
    return res;
       
    }

console.log(maxSlidingWindow([1,2,1,0,4,2,6],3));

console.log(maxSlidingWindow([1,1,1,1,1,4,5],6));

console.log(maxSlidingWindow([8,7,6,9],2));

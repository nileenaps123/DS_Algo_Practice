/* function topKFrequent(nums, k) {
        const count = {};
        for (let num of nums){
            count[num]=(count[num]||0)+1;

        }

        let arr=Object.entries(count).map(([num,freq])=>{
                    return [parseInt(num),freq];
        });
        console.log(arr)
        arr.sort((a,b)=>b[1]-a[1]);
        return arr.slice(0,k).map(pair=>pair[0]) ;


    } */

function topKFrequent(nums, k) {
        const count = {};
        for (let num of nums){
            count[num]=(count[num]||0)+1;

        }

        const arr=new Array(nums.length+1).fill().map(()=>[]);

        for(const entry of Object.entries(count)){
            const [key,value]=entry
            arr[value].push(parseInt(key));
        }
        const res=[];
        for(let i=arr.length-1;i>=0 && res.length<k;i--){
            for(let j of arr[i]){
                res.push(j);
                if(res.length===k) break;
            }
        }

        return res;



    }       




    console.log(topKFrequent( [1,1,1,1,2,2,3,3,3],2));
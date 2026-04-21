/*Using arrays ,TC-O(n),SC-O(n) */

function climbStairs(n){
    if(n<=2)return n;

    const ways=new Array(n+1);//SC O(n)
    ways[1]=1;
    ways[2]=2;

    for(let i=3;i<=n;i++){//TC O(n-3)

        ways[i]=ways[i-1]+ways[i-2]; //TC -O(1)
        
    }
    return ways[n];
}

/* Oprimized SC-O(1),TC -O(n) */


function climbStairs_otimized(n){
    if(n<=2)return n;
    //SC -O(1)
    let prev2=1; // ways to reach step 1 from 0th setp
    let prev1=2;// ways to reach step 2 from 0th setp
    let current;
    for(let i=3;i<=n;i++){//TC O(n-3)

        current=prev2+prev1;
        prev2=prev1;
        prev1=current
        
    }
    return current;
}   


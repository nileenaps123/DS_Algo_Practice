//Nikhil Lohia
//TC & SC -O(n)
function minCostClimbingStairs(cost){

    const n=cost.length;
    const minCost=new Array(n+1).fill(0);//n+1 as the top's min cost is reqd,
    //if its n ,0 to n-1 (last val in cost arr) indices array will be created,
    //we want top most which is one above max idx in cost arr

    //i=2,since minCost[0]=0 and minCost[1]=0 as we can start climbing from the
    //idx 0 th or idx 1st floor,so mincost reqd to climb 0th floor is 0 and also, minCost
    //to climb 1st floor is 0
    //minCost[0]=minCost[1]=0
    for(let i=2;i<=n;i++){

        minCost[i]=Math.min((cost[i-1]+minCost[i-1]),(cost[i-2]+minCost[i-2]));
    }
    return minCost[n];//thisis the top 

}

//TC -0(n),SC-O(1)
 function minCostClimbingStairs_otimized(cost){
    let prev2=0;
    let prev1=0;
    let current;

    for(let i=2;i<=cost.length;i++){
    
        current=Math.min(prev2+cost[i-2],prev1+cost[i-1]);
        prev2=prev1;
        prev1=current;

    }
    return current
    
} 
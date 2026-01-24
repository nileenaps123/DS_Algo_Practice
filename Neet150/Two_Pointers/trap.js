//TC O(n),SC O(1)

function trap(height) {
    
    if(!height ||(height.length===0)) return 0;

    let water=0,l=0,r=height.length-1;
    let leftMax=height[l],rightMax=height[r];

    while(l<r){
        if(leftMax<rightMax){
            l++;
            leftMax=Math.max(leftMax,height[l]);
            water+=leftMax-height[l];

        }else{
            r--;
            rightMax=Math.max(rightMax,height[r]);
            water+=rightMax-height[r]

        }
    }

    return water;
}

console.log(trap([0,2,0,3,1,0,1,3,2,1]));
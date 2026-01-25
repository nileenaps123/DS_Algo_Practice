//TC O(n)  ,SC -O(1)--neetcode

function maxArea(heights){

    let res;
    let l=0,r=heights.length-1;
    let area,maxArea=0,width;

    while (l<r){

        area=Math.min(heights[l],heights[r])*(r-l);
        maxArea=Math.max(maxArea,area);

        if(heights[l]<heights[r]){
            l++;
        }else{
            r--;
        }


    }
    return maxArea;

}

console.log(maxArea([1,7,2,5,4,7,3,6]));
console.log(maxArea([2,2,2]));
//console.log(maxArea());
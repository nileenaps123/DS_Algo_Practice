//Prev two sum was not sorted,
//since this is soted we can use
//Two pointer 
//TC-O(n)
//SC-O(1)

/*

array is sorted in incr order
return ****1-indexed ----- return index+1
numbers = [1,2,3,4], target = 3
1,2,3,4
l     r
1+4=5>3,r--
1+3=4>3,r--
1+2=3=3 ---and[1,2]
*/

function twoSum(numbers, target) {

    let l=0,r=numbers.length-1,sum;

    while(l<r){

        sum=numbers[l]+numbers[r];
        if(sum>target){
            r--;
        }
        else if(sum<target){
            l++;
        }
        else{
            return [l+1,r+1]
        }
    }

    return []


}

console.log(twoSum(numbers = [1,2,3,4], target = 3));
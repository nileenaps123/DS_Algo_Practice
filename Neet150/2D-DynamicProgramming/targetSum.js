function targetSumWays(nums, target){
//TC-O(n*s) n: The number of elements in the nums array.
//s: The range of possible sums.;If the sum of all elements in the array is s, 
// the range of possible sums is [-s, s], which is 2s.

//SC-O(s)
    let dp=new Map();
    dp.set(0,1);

    for (const num of nums){
        let nextDp=new Map();
        for( const [sum,count] of dp.entries()){

            nextDp.set(sum+num,(nextDp.get(sum+num)||0) +count);
            nextDp.set(sum-num,(nextDp.get(sum-num)||0 )+count);
            
        }
        dp=nextDp;
    }
    return dp.get(target)||0;
}

/*
Eg:
nums = [1, 2]

target = 1

Step-by-Step Execution
Start: dp = {0: 1} (We have one way to get a sum of 0).

Process 1:

Add 1: 0 + 1 = 1

Subtract 1: 0 - 1 = -1

dp becomes {1: 1, -1: 1}

Process 2:

Take current sum 1:

1 + 2 = 3

1 - 2 = -1

Take current sum -1:

-1 + 2 = 1

-1 - 2 = -3

Update counts:

Sum 3: count 1

Sum -1: count 1

Sum 1: count 1

Sum -3: count 1

dp becomes {3: 1, -1: 1, 1: 1, -3: 1}

Result: Look for the target 1 in the map. The count is 1.
***************************************************************


why we take nextDp.get(sum + num) instead of dp.get(sum + num)
--------------------------------------------------------------

If you used dp.get(sum + num) during the loop, you would be mixing "previous states" (the sums achievable 
before considering the current number) with "newly created states" (sums achievable after applying the current number).

Logic error: You might end up applying the same number to a sum you just calculated in 
the current loop iteration, which violates the rule that each number in nums can only be used exactly once.

State pollution: The dp map is meant to represent the state before considering the current number. By creating a nextDp map, 
you ensure that all calculations for the current number are based purely on the results from the previous step.

eg:
The "Overlapping Paths" Example
*********************************
To make the "Overlapping Paths" (nextDp.get(sum + num)) concept clearer, let's use a set where an overlap actually happens, like nums = [1, 1, 1].

Start: dp = {0: 1}

Process 1st 1: dp = {1: 1, -1: 1}

Process 2nd 1:

From 1: 1+1=2, 1-1=0

From -1: -1+1=0, -1-1=-2

Result: dp = {2: 1, 0: 2, -2: 1} (Notice the 0: 2—there are two ways to get zero: 1-1 and -1+1).


1. Can we write dp[0] = 1?
*****************************
No, you cannot use square bracket notation with a Map in JavaScript.
Correct way: dp.set(0, 1);

2.show result of dp.entries() with an eg
******************************************
dp = {2 => 1, 0 => 2, -2 => 1}
[
  [2, 1],  // [sum, count]
  [0, 2],  // [sum, count]
  [-2, 1]  // [sum, count]
]
*/
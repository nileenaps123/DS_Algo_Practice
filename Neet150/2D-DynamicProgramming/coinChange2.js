function coinChange2(amount,coins){
    //TC -O(n*m) n-no of coins,m--amount
    //SC -O(m) m-amount (size of array is m+1)
    const dp=new Array(amount+1).fill(0);

    dp[0]=1;//Base Case,to form amt 0 ,there is only way by not spending any coins

    for(const coin of coins){
        for (let i=coin;i<=amount;i++){
            dp[i]=dp[i]+dp[i-coin];
        }
    }
    return dp[amount];
}

/* 

References:Gems &   https://www.youtube.com/watch?v=it54iL8euC8&t=135s    (ByteQuest)


Why check dp[j - coin] specifically?

A Step-by-Step Scenario
Let’s say amount = 5 and your current coin is 2. You are calculating dp[5].

Look back at dp[3] (where 3 = 5 - 2):
Suppose there are 2 ways to make 3 using smaller coins:

{1, 1, 1}

{1, 2} 

The "Addition" Logic:

dp[5] currently holds the number of ways to make 5 using only the coins processed before 2.

By adding dp[3], you are importing all the ways to make 3 and adding a 2 to them.

This creates new combinations: {1, 1, 1, 2} and {1, 2, 2}.

Edge Cases:(handled by code itself)
----------------------------------

1. Amount is 0
Input: amount = 0, coins = [1, 2, 5]

Logic: The base case dp[0] = 1 is crucial here. If you have an amount of 0,
 there is exactly one way to make it: by choosing no coins at all. 
 If your code doesn't initialize dp[0] = 1, the entire calculation will result in 0, 
 which is technically incorrect.

2. No coins provided (Empty coins array)
Input: amount = 5, coins = []

Logic: If you cannot make change, the answer should be 0. 
Your code handles this naturally because the for (const coin of coins) loop 
will never execute, leaving the dp array filled with its initial values. 
Since dp[0] is 1 and all other indices (1 through 5) were initialized to 0, it will correctly return 0 for any amount > 0.

3. Amount is smaller than any coin
Input: amount = 3, coins = [5, 10]

Logic: If the target amount is smaller than the smallest coin, it is impossible to make change.

The inner loop for (let j = coin; j <= amount; j++) will never execute because coin (5) is 
already greater than amount (3).

The result remains 0 (the initial value), which is correct.

*/
function coinChange(coins,amount){
//Time Complexity: O(A * C),A -amount ,C-no of coins
//Space complexity :O(A)
    if(amount<1) return 0;

    const dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;//for dp[i-coin] when i=coin ,just do 1+0

    for(let i=1;i<=amount;i++){  --O(A)
        for(const coin of coins){--O(C)
            if(coin<=i && dp[i-coin]!==Infinity){//dp[i-coin]!==Infinity-- reqd as unneceesary calcn can be avoided
                dp[i]=Math.min(dp[i],1+dp[i-coin]);  //1+dp[i-coin]-- will give exact no of coins
            }
        }
    }
    return dp[amount]===Infinity?-1:dp[amount];
}
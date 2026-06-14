function longestCommonSubsequence(text1, text2){//Nikhil n gems
  //TC -O(m*n),SC-O(m*n)
    let m=text1.length;
    let n=text2.length;

    let dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));

    for(let i=1;i<=m;i++){
       for(let j=1;j<=n;j++){
            if(text1[i-1]===text2[j-1]){
                dp[i][j]=1+dp[i-1][j-1];
                /**When you are at dp[i][j], you are deciding the fate of text1[i-1] and text2[j-1].
                 *  If they match, you are essentially saying: "I have successfully matched these 
                 * two characters;  now I need to add that match to the longest common subsequence we
                 *  found before these two specific characters existed." */
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
            }
            
       } 
    }

    return dp[m][n];
}
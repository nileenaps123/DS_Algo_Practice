function wordBreak(s, wordDict){// TC -O(n2),SC -O(n)
    
    let wordSet=new Set(wordDict);
    let sMaxLen=0;
    for (let i=0;i<wordDict.length;i++){
        sMaxLen=Math.max(sMaxLen,wordDict[i].length);
    }
    const n=s.length;
    const dp=new Array(n+1).fill(false);
    dp[0]=true;

    for(let i=0;i<=n;i++){
        for(let j=i-1;j>=Math.max(0,i-sMaxLen);j--){

            if(dp[j] && wordSet.has(s.substring(j,i))){
                dp[i]=true;
                break;
            }
        }
    }
    return dp[n];
}
function numDecodings(s){
    //TC -O(n),SC -O(n)
    const n= s.length ;
    const dp=new Array(n+1).fill(0);
    dp[0]=1;
    dp[1]=s[0]==='0'?0:1;

    let onedigit,twodigit;
    for (let i=2;i<=n;i++){

        onedigit=parseInt(s.substring(i-1,i));
        twodigit=parseInt(s.substring(i-2,i));

        if(onedigit>0){
            dp[i]+=dp[i-1];
        }
        if(twodigit>=10 && twodigit <=26){
            dp[i]+=dp[i-2];
        }

    }
    return dp[n];
}

function numDecodings_optimized(s){
    //TC -O(n),SC -O(1)
    const n= s.length ;
    if (!s.length) return 1;
    let prev2=1;
    let prev1=s[0]==='0'?0:1;
    let curr=prev1;

    let onedigit,twodigit;
    for (let i=2;i<=n;i++){
        curr=0;
        onedigit=parseInt(s.substring(i-1,i));
        twodigit=parseInt(s.substring(i-2,i));

        if(onedigit>0){
            curr+=prev1;
        }
        if(twodigit>=10 && twodigit <=26){
            curr+=prev2;
        }
        prev2=prev1;
        prev1=curr;
        
    }
    return curr;
}
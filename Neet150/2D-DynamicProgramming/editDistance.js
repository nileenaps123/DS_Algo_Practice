function minDistance(word1,word2){

    const m= word1.length;//word 1 rows(m+1)
    const n= word2.length;//word2 columns(n+1)

    const costDP=Array.from({length:m+1},()=>{return new Array(n+1).fill(0)});
    //2d array with m+1 rows and n+1 cols

    for(let i=1;i<=m;i++){
        costDP[i][0]=i;//initialize 1st col with 1,2,3..
    }

    for(let j=1;j<=n;j++){
        costDP[0][j]=j;//initialize 1s row with 1,2,3.......
    }

    for (let i=1;i<=m;i++){
        for (let j=1;j<=n;j++){
            if (word1[i-1]=== word2[j-1]){//string idx starts from 0
                costDP[i][j]=costDP[i-1][j-1];
                //as ith string of word1 and jth string are same,
                //no extra cost is reqd for the word from the i-1 th and j-1th 
                //posn to become word at the ith and jth posn
            }
            if (word1[i-1]!== word2[j-1]){

                costDP[i][j]=Math.min(  //eg:az /abc (i/j) find cost for abc to become az 
                        costDP[i-1][j-1],//diagonal---replace 
                        costDP[i-1][j],//top-delete--
                        costDP[i][j-1],//left--- insert 
                )+1;
            }    
        }
    }

    return costDP[m][n];
}

/*

convert az to abc with min cost

const m = word1.length; // rows
const n = word2.length; // columns

and

dp[i][j]

means:

Convert word1[0...i-1] into word2[0...j-1]

So if:

word1 = az
word2 = abc

then:

dp[2][3]

means:

az -> abc

Let's analyze the three moves for this setup.

Diagonal = Replace
dp[1][2]

means:

a -> ab

Then we deal with:

z -> c

by replacing z with c.

So:

a -> ab
replace z -> c

This corresponds to:

dp[i-1][j-1] + 1
Top = Delete
dp[1][3]

means:

a -> abc

Notice:

az -> abc
 ^
extra z in word1

If we delete the z first:

az
 |
delete z
 v
a

then the remaining problem is:

a -> abc

which is exactly dp[1][3].

Therefore:

dp[i-1][j] + 1

is Delete from word1.

Left = Insert
dp[2][2]

means:

az -> ab

Now compare:

az -> ab
az -> abc
        ^
        extra c needed

After converting az to ab, we still need the c.

So:

az -> ab
insert c

This corresponds to:

dp[i][j-1] + 1

which is Insert into word1.
*/
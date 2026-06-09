function uniquePaths(m,n){//TC,SC -O(m*n)

    const grid=Array.from ({length:m},()=>new Array(n).fill(0));

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i===0||j===0){
                grid[i][j]=1;
            }else{
                grid[i][j]=grid[i][j-1]+grid[i-1][j];
            }
        }
    }
    return grid[m-1][n-1];
}

/*

1. Array.from({ length: m }, ...)
Array.from() is a built-in method that creates a new array from an array-like object.

By passing { length: m }, we are telling JavaScript: "Create a top-level array with exactly m items." At this exact moment, it creates an array of length m filled with undefined. This represents the rows of your grid.

2. () => new Array(n).fill(0)
This is a callback function (an arrow function) that Array.from() runs automatically for every single one of those m rows.

Inside this function:

new Array(n) creates a new sub-array (a column) with a length of n.

.fill(0) fills all n slots of that sub-array with the number 0.

Because Array.from() invokes this function freshly for every row, it returns a brand-new, independent array of zeros for every single row.

* */
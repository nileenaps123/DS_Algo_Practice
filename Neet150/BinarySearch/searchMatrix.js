function searchMatrix(matrix, target){//O(log m+log n)~~ O(log(m*n))   ,O(1)
                                      //m-no of rows,n -no of cols of matrix              

    let ROWS=matrix.length,COLS=matrix[0].length;

    let top=0,bottom=ROWS-1;
    let row;

    while(top<=bottom){
        row=Math.floor((top+bottom)/2);

        if(target<matrix[row][0]) bottom=row-1;
        else if (target>matrix[row][COLS-1]) top=row+1;
        else break;
    }

    if(!(top<=bottom)) return false;

    let m,l=0,r=COLS-1;

    while(l<=r){
        m=Math.floor((l+r)/2);
        if(target<matrix[row][m]) r=m-1;
        else if (target>matrix[row][m]) l=m+1;
        else return true

    }
    return false;

}

console.log(searchMatrix(matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10))
console.log(searchMatrix(matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15))
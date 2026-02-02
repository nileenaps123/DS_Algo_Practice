function isValidSudoku(board) {

    const N=9;//Aliatias Youtube Soln   
    const rowSets=new Array(N).fill().map(()=>new Set());
    const columnSets=new Array(N).fill().map(()=>new Set());
    const boxSets=new Array(N).fill().map(()=>new Set());

    for(let r=0;r<N;r++){
         for(let c=0;c<N;c++){
            const val=board[r][c];

            if(val==='.') continue;

            if(rowSets[r].has(val)) return false

            rowSets[r].add(val);

            if(columnSets[c].has(val)) return false

            columnSets[c].add(val);

            const boxIdx=Math.floor(r/3)*3+Math.floor(c/3);

            if(boxSets[boxIdx].has(val)) return false;

            boxSets[boxIdx].add(val);




         }
    }

    return true;


}

console.log(isValidSudoku([["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]));


console.log(isValidSudoku([["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]));

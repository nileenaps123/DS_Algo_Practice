/* TC-O(n),You visit each node exactly once using DFS. 
📦 Space Complexity: O(H)
Due to recursion call stack
H = height of the tree
Cases:
Balanced tree → H = log N
→ Space = O(log N)
Skewed tree (like a linked list) → H = N
→ Space = O(N)
*/
function maxPathSum(root){
    if(!root)return 0;
    let maxSum=-Infinity;
    function dfs(node){
        if (!node) return 0;

        let left=Math.max(dfs(node.left),0);
        let right=Math.max(dfs(node.right),0);

        let currentPath=node.val+left+right;
        maxSum=Math.max(maxSum,currentPath);

        return node.val+Math.max(left,right);


    }
    dfs(root);
    return maxSum;

}
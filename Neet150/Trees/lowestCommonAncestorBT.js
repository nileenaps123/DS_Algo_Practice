/*
Strivers,
TC-0(n),SC-O(n)

Time and Space Complexity
The time complexity is O(n), where n is the number of nodes in the binary tree. 
This is because in the worst case, the algorithm needs to visit every node in the tree exactly once. The recursive function traverses the entire tree by visiting each node and making recursive calls to its left and right children.

The space complexity is O(n), where n is the number of nodes in the binary tree. 
This space is used by the recursion call stack. In the worst case, when the tree is completely unbalanced (essentially a linked list), the recursion depth can reach n levels deep, requiring O(n) space on the call stack. In the best case of a balanced tree, the space complexity would be O(log n) due to the height of the tree, but we consider the worst-case scenario for complexity analysis.
 
 */

function lowestCommonAncestorBT(root,p,q){

    if(!root ||root===p ||root===q) return root;

    const left=lowestCommonAncestorBT(root.left,p,q);
    const right=lowestCommonAncestorBT(root.right,p,q);

    if(!left)return right;
    if(!right)return left;

    return root;
}
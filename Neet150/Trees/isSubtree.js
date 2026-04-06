/* TC -O(m*n)
In the worst case, we check every node in root (n nodes) and 
for each check, we might compare all nodes in subRoot (m nodes).
ie ---
For each node in the main tree root (which has n nodes), we potentially call the same function
The same function compares two trees for equality, which in the worst case needs to traverse all m nodes of subRoot
In the worst case, we check every node in root as a potential match, and for each check, we traverse up to m nodes in subRoot
Therefore, the time complexity is O(n × m)
******************************************************
SC-O(n) 
,n-nodes in Root
Space Complexity: O(n)

The space complexity comes from the recursion stack:

The isSubtree function recursively traverses the main tree root, which can go as deep as the height of the tree
In the worst case (a skewed tree), the height equals n, so the recursion stack for isSubtree uses O(n) space
The same function also uses recursion, but its stack depth is bounded by min(height of root subtree, height of subRoot), which 
is at most O(n)
Since these recursive calls don't happen simultaneously (we finish one same call before moving to the next node 
in isSubtree), the maximum stack depth is O(n)
Therefore, the space complexity is O(n)
*/

function isSubtree(root, subRoot) {

    if(!subRoot) return true;
    if(!root)return false;

    if(isSameTree(root,subRoot)) return true

    return (isSubtree(root.left,subRoot)||
            isSubtree(root.right,subRoot))

    function isSameTree(root,subRoot){

        if(!root && !subRoot) return true;
        if(!root || !subRoot || root.val!==subRoot.val) return false;

        if(root.val===subRoot.val ) 
            return (isSameTree(root.left,subRoot.left) &&
                    isSameTree(root.right,subRoot.right))
    }
}
   
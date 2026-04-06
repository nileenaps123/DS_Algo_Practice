function leftSideView_Ptr(root) {
    if (!root) return [];

    const q = [root];
    let left = 0;
    const result = [];

    while (left < q.length) {
        let qSize = q.length - left;

        for (let i = 0; i < qSize; i++) {
            let node = q[left++];

            if (i === 0) {
                result.push(node.val);
            }
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);

        }
    }

    return result;
}
//TC -O(n),SC-O(n)
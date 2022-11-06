/***Complete the PostOrder function in the editor below. It received 1 parameter: a pointer
 * to the root of a binary tree. It must print the values in the tree's postorder
 * traversal as a single line of space-separated values. */

// var Node = function(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
// }

function postOrder(root) {
  const traverse = (node) => {
    const left = node.left ? traverse(node.left) : [];
    const right = node.right ? traverse(node.right) : [];
    return [...left, ...right, node.data];
  };

  console.log(traverse(root).join(" "));
}

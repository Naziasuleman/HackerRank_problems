function preOrder(root) {
  const traverse = (node) => {
    const left = node.left ? traverse(node.left) : [];
    const right = node.right ? traverse(node.right) : [];
    return [node.data, ...left, ...right];
  };

  console.log(traverse(root).join(" "));
}
function solution() {
  var tree = new Tree();
  var n = parseInt(readLine());
  var m = readLine().split(" ").map(Number);
  for (var i = 0; i < n; i++) {
    tree.root = tree.insert(tree.root, m[i]);
  }

  preOrder(tree.root);
}

//another solution
function preOrder(root) {
  console.log(preOrderNodes(root).join(" "));
}
function preOrderNodes(root) {
  //empty array
  var arr = [];
  //checking whether the root node is null or not
  if (root != null) {
    //adding data of root node to array
    arr.push(root.data);
    //apply thye same function of preordernodes on the left and the right node
    //and joining the array with previous array
    arr = arr.concat(preOrderNodes(root.left));
    arr = arr.concat(preOrderNodes(root.right));
  }
  //returnning the complete array
  return arr;
}

//Another solution
function preOrder(root) {
  var temp = "";
  function traversal(node) {
    if (temp.length === 0) temp += node.data;
    else temp += " " + node.data;

    if (node.left) traversal(node.left);
    if (node.right) traversal(node.right);
  }
  traversal(root);
  console.log(temp);
}

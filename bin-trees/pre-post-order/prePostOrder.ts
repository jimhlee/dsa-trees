import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  let result: number[] = [];
  if (!node) return result;
  result.push(node!.val);

  if (node && node.lnode) {
    result.push(...preOrder(node.lnode));
  }

  if (node && node.rnode) {
    result.push(...preOrder(node.rnode));
  }

  return result;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */
// [ 5, 5, 3, 2, 1, 1, 6 ]
// to deeply equal
// [ 5, 2, 1, 3, 1, 5, 6 ]
function postOrder(node: BNodeNum | null): number[] {
  if (!node) return [];
  let result: number[] = [];

  if (node && node.lnode) {
    result.push(...postOrder(node.lnode));
  }

  if (node && node.rnode) {
    result.push(...postOrder(node.rnode));
  }

  result.push(node!.val);

  return result;
}

export { preOrder, postOrder };
import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  // if (node.children.length === 0) {
  //   return (node.val % 2 === 0 ? 1 : 0);
  // }

  let result = node.val % 2 === 0 ? 1 : 0;
  // let result = 0;
  // node.val % 2 === 0 ? result++ : 0;

  for (let child of node.children) {
    result += countEvens(child);
  }

  return result;
}


export { countEvens };

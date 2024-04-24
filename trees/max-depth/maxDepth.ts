import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  // Check if starting node has children
  if(!node) return 0;

  let result = 1;

  if (node.children.length > 0){
    for (let child of node.children){
      result = Math.max(result, maxDepth(child) + 1)
    }
  }

  return result;
}

export { maxDepth };

import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {

  let result = node.val;
  for (let child of node.children) {
    result += sumValues(child);
  }

  return result;
}

export { sumValues };

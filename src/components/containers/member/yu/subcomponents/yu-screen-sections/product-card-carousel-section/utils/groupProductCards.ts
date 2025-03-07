/**
 * Groups an array of items (each having a `body` property) into sub-arrays of one or two elements, following these rules.
 */
export function groupProductCards<T extends { body: string }>(items: T[]): (T | null)[][] {
  if (!items?.length) {
    return [];
  }

  if (items.length <= 2) {
    return items.map((item) => [item]);
  }

  const groups: T[][] = [];
  let expectedGroupSize = 1; // start with a solo group if possible
  let i = 0;

  while (i < items.length) {
    const currentItem = items[i];
    let groupSize = expectedGroupSize;

    // if the item is empty, force grouping with the next item (if there is one)
    if (currentItem.body.trim() === "" && i + 1 < items.length) {
      groupSize = 2;
    }

    // if we need a group of 2 but there isn’t a next item, fall back to 1
    if (groupSize === 2 && i + 1 >= items.length) {
      groupSize = 1;
    }

    groups.push(items.slice(i, i + groupSize));
    i += groupSize;

    // alternate between group sizes (after a group of 1, expect a group of 2; after a group of 2, expect a group of 1)
    expectedGroupSize = groupSize === 1 ? 2 : 1;
  }

  // post-process: merge consecutive groups of one
  const merged: T[][] = [];

  for (const group of groups) {
    if (merged.length && merged[merged.length - 1].length === 1 && group.length === 1) {
      // Merge two solo groups into a group of two.
      merged[merged.length - 1] = merged[merged.length - 1].concat(group);
    } else {
      merged.push(group);
    }
  }

  // final rule: if a group consists of a single item and that item has an empty body, pad the group with a null value
  const padded = merged.map((group) => {
    if (group.length === 1 && group[0].body.trim() === "") {
      return [...group, null];
    }

    return group;
  });

  return padded;
}

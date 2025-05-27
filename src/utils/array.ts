export const toArray = <T>(itemOrItems: T | T[]): T[] => (Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems]);

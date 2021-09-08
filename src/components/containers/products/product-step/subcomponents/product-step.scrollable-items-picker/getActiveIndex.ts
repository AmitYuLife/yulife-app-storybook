/**
 *
 * used in conjunction with onScrollEndDrag and onMomentumScrollEnd
 * to get the active item's index
 * @param offset event.nativeEvent.contentOffset.x - NativeScrollEvent["contentOffset"]
 * @param itemWidth Assumes the items of the FlatList have a homogenous width
 * @returns activeIndex - the index of the current active item
 */
export function getActiveIndex(offset: number, itemWidth: number) {
  const activeIndex = Math.round(offset / itemWidth);

  return activeIndex;
}

// On web, DEVICE_HEIGHT is fixed at 800px which is smaller than DEVICES.iPhone8.height (812px).
// The native helper would return background: -106, which gets clipped by FlashList's overflow:hidden.
// Always return 0 on web so the background renders within the item bounds.
export function getTopOffset() {
  return {
    background: 0,
    heading: -16,
  };
}

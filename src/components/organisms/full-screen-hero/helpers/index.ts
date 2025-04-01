import { Style } from "@styles";
import { DEVICES } from "@styles/media";

export function getTopOffset() {
  if (Style.DEVICE_HEIGHT < DEVICES.iPhone8.height) {
    return {
      background: -106,
      heading: -16,
    };
  }

  return {
    background: 0,
    heading: 0,
  };
}

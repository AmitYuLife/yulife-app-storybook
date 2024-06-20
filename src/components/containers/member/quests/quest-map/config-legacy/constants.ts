import { Media, Style } from "@styles";
import { isAndroid } from "@utils";

export const MOUNTAIN_SNAP_OFFSET = Media.select(
  [
    {
      condition: isAndroid() && Style.isShorterOrEqualTo(Media.DEVICES.ShortAndroid.height),
      value: 0,
    },
  ],
  20
);

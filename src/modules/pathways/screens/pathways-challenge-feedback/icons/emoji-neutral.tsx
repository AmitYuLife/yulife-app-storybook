import { Style } from "@styles";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

function EmojiNeutral({ size = 32 }: { size?: number }) {
  const adjustedSize = Style.adjust(size);

  return (
    <Svg width={adjustedSize} height={adjustedSize} viewBox="0 0 32 32" fill="none">
      <Path
        d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15z"
        fill="#FFDD67"
      />
      <Path
        d="M10.25 16.3a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM21.75 16.3a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM19.45 24h-6.9c-.75 0-.75-2 0-2h6.85c.8 0 .8 2 .05 2z"
        fill="#664E27"
      />
    </Svg>
  );
}

export default memo(EmojiNeutral);

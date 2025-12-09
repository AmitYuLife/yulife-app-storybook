import { memo } from "react";
import Svg, { G, Path } from "react-native-svg";
import { IMAGE_SIZE, TOP_HEIGHT } from "./challenge-tile.styles";

const PathwayTileShine: React.FC = () => (
  <Svg width={IMAGE_SIZE} height={TOP_HEIGHT} viewBox="0 0 155 127" fill="none" preserveAspectRatio="xMinYMin slice">
    <G opacity={0.4}>
      <Path
        d="M108 20.1503L2 126.15V112.008L103.008 11C105.936 12.1888 108 15.0609 108 18.4152V20.1503Z"
        fill="white"
      />
      <Path d="M86.1615 0L0 86.1615V29.5929L29.5929 0H86.1615Z" fill="white" />
    </G>
    <Path
      d="M22.0632 41L23.4526 45.5773L28 47.0619L23.4526 48.4227L22.0632 53L20.5474 48.4227L16 47.0619L20.5474 45.5773L22.0632 41Z"
      fill="white"
    />
    <Path
      d="M17.0421 94L17.9684 97.0515L21 98.0412L17.9684 98.9485L17.0421 102L16.0316 98.9485L13 98.0412L16.0316 97.0515L17.0421 94Z"
      fill="white"
    />
    <Path
      d="M149.063 72L150.453 76.5773L155 78.0619L150.453 79.4227L149.063 84L147.547 79.4227L143 78.0619L147.547 76.5773L149.063 72Z"
      fill="white"
    />
  </Svg>
);

export default memo(PathwayTileShine);

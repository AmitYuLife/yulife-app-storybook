// tslint:disable:max-line-length
import { Style } from "@styles/index";

import Svg, { Polygon } from "react-native-svg";

interface IProps {
  isHighlighted?: boolean;
  scale?: number;
}

const StarLeft = ({ isHighlighted, scale = 1 }: IProps) => (
  <Svg
    width={String(Style.adjust(87 * 0.5 * scale))}
    height={String(Style.adjust(84 * 0.5 * scale))}
    viewBox="0 0 87 84"
  >
    <Polygon
      fill={isHighlighted ? "#FBCF27" : "#E2E2E2"}
      points="42.1,0.4 33.4,32.3 0.4,33.6 28,51.8 19.1,83.6 44.9,63 72.3,81.2 60.7,50.3 86.6,29.9 53.6,31.4  "
    />
    <Polygon
      fillOpacity="0.59"
      fill={isHighlighted ? "#E59E00" : "#C4C4C4"}
      points="86.6,29.9 57.1,48.2 72.3,81.2 60.7,50.3    "
    />
    <Polygon
      fillOpacity="0.59"
      fill={isHighlighted ? "#E59E00" : "#C4C4C4"}
      points="0.4,33.6 31.3,49.3 19.1,83.6 28,51.8   "
    />
  </Svg>
);

export default StarLeft;

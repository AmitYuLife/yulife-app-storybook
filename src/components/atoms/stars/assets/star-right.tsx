// tslint:disable:max-line-length
import { Style } from "@styles/index";
import Svg, { Polygon } from "react-native-svg";

interface IProps {
  isHighlighted?: boolean;
  scale?: number;
}

const StarRight = ({ isHighlighted, scale = 1 }: IProps) => (
  <Svg
    width={String(Style.adjust(87 * 0.5 * scale))}
    height={String(Style.adjust(84 * 0.5 * scale))}
    viewBox="0 0 87 84"
  >
    <Polygon
      fill={isHighlighted ? "#FBCF27" : "#E2E2E2"}
      points="44.9,0.4 53.6,32.3 86.6,33.6 59,51.8 67.9,83.6 42.1,63 14.7,81.2 26.3,50.3 0.4,29.9 33.4,31.4 	"
    />
    <Polygon
      fillOpacity="0.59"
      fill={isHighlighted ? "#E59E00" : "#C4C4C4"}
      points="0.4,29.9 29.9,48.2 14.7,81.2 26.3,50.3 	"
    />
    <Polygon
      fillOpacity="0.59"
      fill={isHighlighted ? "#E59E00" : "#C4C4C4"}
      points="86.6,33.6 55.7,49.3 67.9,83.6 59,51.8 	"
    />
  </Svg>
);

export default StarRight;

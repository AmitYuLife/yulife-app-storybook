import { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
  size: number;
  testID?: string;
}

const UndoIcon = ({ size, testID }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" testID={testID}>
      <Path
        d="M13.068 1.01A9.5 9.5 0 001.5 5.756V2.5a.5.5 0 00-1 0V7H5a.5.5 0 000-1H2.5a8.5 8.5 0 11-1 4 .5.5 0 00-1 0 9.5 9.5 0 1012.568-8.99z"
        fill="#5C5757"
      />
    </Svg>
  );
};

export default memo(UndoIcon);

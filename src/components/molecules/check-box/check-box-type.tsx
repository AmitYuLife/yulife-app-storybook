import React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";
import { Style } from "@styles";

type CheckboxType = "circular" | "cubic";

type Props = SvgProps & {
  type: CheckboxType;
};

export const CheckBoxType = (props: Props) => {
  const { type } = props;
  const Checkbox = checkboxHashMap[type] || Circular;

  return <Checkbox {...props} />;
};

const checkboxHashMap = {
  circular: Circular,
  cubic: Cubic,
} as Record<CheckboxType, () => JSX.Element>;

interface SvgProps {
  checked: boolean;
  activeCheckboxFillColor: string;
  strokeColor: string;
  testID?: string;
}

function Circular({ checked, activeCheckboxFillColor, strokeColor, testID }: SvgProps) {
  return (
    <Svg height={Style.adjust(24)} width={Style.adjust(24)} viewBox="0 0 24 24" testID={testID}>
      {checked ? (
        <>
          <Circle cx={12} cy={12} r={11.5} fill="#fff" stroke={activeCheckboxFillColor} />
          <Circle cx={12} cy={12} r={8} fill={activeCheckboxFillColor} />
        </>
      ) : (
        <Circle cx={12} cy={12} r={11.5} stroke={strokeColor} />
      )}
    </Svg>
  );
}

function Cubic({ checked, activeCheckboxFillColor, strokeColor, testID }: SvgProps) {
  return (
    <Svg height={Style.adjust(24)} width={Style.adjust(24)} fill="#fff" viewBox="0 0 24 24" testID={testID}>
      {checked ? (
        <>
          <Rect width={24} height={24} rx={4} fill={activeCheckboxFillColor} />
          <Path
            d="m18 8-8.337 8L6 12.4"
            stroke="white"
            fill={activeCheckboxFillColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <Rect x={0.5} y={0.5} width={23} height={23} rx={3.5} stroke={strokeColor} />
      )}
    </Svg>
  );
}

import React, { ReactChild, FC } from "react";
import Svg, { Mask, Circle, Path, PathProps, MaskProps, EMaskUnits } from "react-native-svg";

export const ALCOHOL_DRINK_LIMIT = 31;

interface Props {
  color1: string;
  color2: string;
  color3?: string;
  color4?: string;
  color5?: string;
}
export function AlcoholCircles({ color1, color2, color3 = color2, color4 = color1, color5 = color2 }: Props) {
  return (
    <>
      <Circle cx="55" cy="209" r="5" fill={color1} />
      <Circle cx="74" cy="209" r="5" fill={color1} />
      <Circle cx="36" cy="209" r="5" fill={color1} />
      <Circle cx="17" cy="209" r="5" fill={color2} />
      <Circle cx="43" cy="197" r="5" fill={color3} />
      <Circle cx="62" cy="197" r="5" fill={color4} />
      <Circle cx="81" cy="197" r="5" fill={color4} />
      <Circle cx="24" cy="197" r="5" fill={color4} />
      <Circle cx="5" cy="197" r="5" fill={color4} />
      <Circle cx="55" cy="185" r="5" fill={color4} />
      <Circle cx="74" cy="185" r="5" fill={color4} />
      <Circle cx="36" cy="185" r="5" fill={color3} />
      <Circle cx="17" cy="185" r="5" fill={color4} />
      <Circle cx="45" cy="173" r="5" fill={color4} />
      <Circle cx="64" cy="173" r="5" fill={color4} />
      <Circle cx="83" cy="173" r="5" fill={color2} />
      <Circle cx="26" cy="173" r="5" fill={color4} />
      <Circle cx="7" cy="173" r="5" fill={color3} />
      <Circle cx="55" cy="161" r="5" fill={color3} />
      <Circle cx="74" cy="161" r="5" fill={color4} />
      <Circle cx="36" cy="161" r="5" fill={color4} />
      <Circle cx="17" cy="161" r="5" fill={color4} />
      <Circle cx="65" cy="149" r="5" fill={color4} />
      <Circle cx="84" cy="149" r="5" fill={color4} />
      <Circle cx="46" cy="149" r="5" fill={color4} />
      <Circle cx="27" cy="149" r="5" fill={color2} />
      <Circle cx="8" cy="149" r="5" fill={color4} />
      <Circle cx="37" cy="137" r="5" fill={color5} />
      <Circle cx="56" cy="137" r="5" fill={color4} />
      <Circle cx="75" cy="137" r="5" fill={color4} />
      <Circle cx="18" cy="137" r="5" fill={color4} />
      <Circle cx="47" cy="125" r="5" fill={color4} />
      <Circle cx="66" cy="125" r="5" fill={color4} />
      <Circle cx="85" cy="125" r="5" fill={color4} />
      <Circle cx="28" cy="125" r="5" fill={color4} />
      <Circle cx="9" cy="125" r="5" fill={color4} />
      <Circle cx="55" cy="113" r="5" fill={color4} />
      <Circle cx="74" cy="113" r="5" fill={color5} />
      <Circle cx="36" cy="113" r="5" fill={color2} />
      <Circle cx="17" cy="113" r="5" fill={color4} />
      <Circle cx="65" cy="101" r="5" fill={color4} />
      <Circle cx="84" cy="101" r="5" fill={color4} />
      <Circle cx="46" cy="101" r="5" fill={color4} />
      <Circle cx="27" cy="101" r="5" fill={color4} />
      <Circle cx="8" cy="101" r="5" fill={color4} />
      <Circle cx="55" cy="89" r="5" fill={color2} />
      <Circle cx="74" cy="89" r="5" fill={color4} />
      <Circle cx="36" cy="89" r="5" fill={color4} />
      <Circle cx="17" cy="89" r="5" fill={color5} />
      <Circle cx="47" cy="77" r="5" fill={color4} />
      <Circle cx="66" cy="77" r="5" fill={color5} />
      <Circle cx="28" cy="77" r="5" fill={color4} />
      <Circle cx="10" cy="77" r="5" fill={color4} />
      <Circle cx="56" cy="65" r="5" fill={color4} />
      <Circle cx="37" cy="65" r="5" fill={color5} />
      <Circle cx="19" cy="65" r="5" fill={color4} />
      <Circle cx="45" cy="53" r="5" fill={color5} />
      <Circle cx="64" cy="53" r="5" fill={color2} />
      <Circle cx="26" cy="53" r="5" fill={color4} />
      <Circle cx="56" cy="41" r="5" fill={color4} />
      <Circle cx="37" cy="41" r="5" fill={color4} />
      <Circle cx="47" cy="29" r="5" fill={color4} />
      <Circle cx="28" cy="29" r="5" fill={color5} />
      <Circle cx="55" cy="17" r="5" fill={color2} />
      <Circle cx="38" cy="17" r="5" fill={color4} />
      <Circle cx="47" cy="5" r="5" fill={color4} />
      <Circle cx="30" cy="5" r="5" fill={color4} />
    </>
  );
}

export function BottlePath(props: PathProps) {
  return (
    <Path
      d="M29.0629 2L28.3765 7.18675L24.6716 36.9411C24.6716 36.9411 20.893 65.3899 11.4465 72.9763C8.64451 75.3042 6.35714 78.1933 4.73057 81.4591C3.10399 84.7248 2.17399 88.2952 2 91.9422V207.634C2 210.652 3.1943 213.547 5.32017 215.681C7.44604 217.815 10.3293 219.014 13.3358 219.014H66.2361C69.2425 219.014 72.1258 217.815 74.2517 215.681C76.3776 213.547 77.5719 210.652 77.5719 207.634V91.9422C77.3979 88.2952 76.4679 84.7248 74.8413 81.4591C73.2147 78.1933 70.9274 75.3042 68.1254 72.9763C58.6789 65.3899 54.9003 36.9411 54.9003 36.9411L51.1953 7.18675L50.509 2"
      fill="white"
      {...props}
    />
  );
}

const DEFAULT_HEIGHT = 221;
const DEFAULT_WIDTH = 80;

interface MaskTemplateStaticProps {
  id: string;
}

export const MaskTemplate: FC<MaskProps> & MaskTemplateStaticProps = (
  props: MaskProps & {
    children: ReactChild;
  }
) => {
  return (
    <Mask
      id="MASK_TEMPLATE_ID"
      mask-type="alpha"
      maskUnits={"userSpaceOnUse" as EMaskUnits}
      x="0"
      y="0"
      width={DEFAULT_WIDTH}
      height={DEFAULT_HEIGHT}
      {...props}
    >
      {props.children}
    </Mask>
  );
};

MaskTemplate.id = "MASK_TEMPLATE_ID";

export const SvgTemplate: FC = ({ children }) => (
  <Svg width="90" height="214" viewBox="0 0 90 214">
    {children}
  </Svg>
);

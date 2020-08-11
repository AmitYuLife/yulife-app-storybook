import React from "react";
import { G, Defs } from "react-native-svg";
import { SvgTemplate, BottlePath, AlcoholCircles, MaskTemplate } from "./alcohol.common";

const DEFAULT_HEIGHT = 221;
const ORIGIN_X = 40;
const ORIGIN_Y = DEFAULT_HEIGHT / 2 - 3;
const ROTATE_TRANSFORM = {
  rotation: 180,
  origin: [ORIGIN_X, ORIGIN_Y],
};

const colors = {
  color1: "#FBE138",
  color2: "#F9BDD9",
  color3: "#B60B69",
  color4: "#F9D337",
  color5: "#CC0D6E",
};

interface Props {
  percentageVisible: number;
}

function AlcoholBottle(props: Props) {
  const maskHeight = (props.percentageVisible / 100) * DEFAULT_HEIGHT;
  return (
    <SvgTemplate>
      <Defs>
        <MaskTemplate height={maskHeight}>
          <BottlePath transform={ROTATE_TRANSFORM} />
        </MaskTemplate>
      </Defs>
      <G mask={`url(#${MaskTemplate.id})`} transform={ROTATE_TRANSFORM}>
        <G transform={ROTATE_TRANSFORM}>
          <AlcoholCircles {...colors} />
        </G>
      </G>
    </SvgTemplate>
  );
}

export default AlcoholBottle;

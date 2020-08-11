import React from "react";
import { Defs, G } from "react-native-svg";
import { BottlePath, MaskTemplate, AlcoholCircles, SvgTemplate } from "./alcohol.common";

const colors = {
  color1: "#C4C4C4",
  color2: "#5A5A5C",
};

function AlcoholBottleGreyscale() {
  return (
    <SvgTemplate>
      <Defs>
        <MaskTemplate>
          <BottlePath />
        </MaskTemplate>
      </Defs>
      <G mask={`url(#${MaskTemplate.id})`}>
        <AlcoholCircles {...colors} />
      </G>
    </SvgTemplate>
  );
}

export default AlcoholBottleGreyscale;

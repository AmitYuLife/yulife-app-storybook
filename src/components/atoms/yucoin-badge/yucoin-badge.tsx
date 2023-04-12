import React, { memo } from "react";
import Svg from "react-native-svg";
import { Style } from "@styles";
import {
  Glow,
  Body,
  GenericYucoin,
  Clasps,
  Crown,
  Gems,
  CycleTwoOrnament,
  CycleThreeOrnament,
  CycleFourOrnament,
  CycleFiveOrnament,
  CycleSixOrnament,
  CycleSevenOrnament,
} from "./";

interface IProps {
  isGeneric?: boolean;
  isGrayScale?: boolean;
  hasWhiteGlow?: boolean;
  level?: number;
  gems?: number;
  currentYuniverse: number;
  currentWorld: number;
  width: number;
  height: number;
}

const YuCoinBadge = (props: IProps) => {
  const { isGeneric, isGrayScale, hasWhiteGlow, gems, width, height, currentYuniverse, currentWorld } = props;

  if (isGeneric) {
    return <GenericYucoin isGrayScale={isGrayScale} />;
  }

  return (
    <>
      {isGrayScale ? null : <Glow hasWhiteGlow={hasWhiteGlow} />}
      <Svg width={Style.adjust(width)} height={Style.adjust(height)} viewBox="0 0 200 200">
        {currentYuniverse === 1 ? (
          <CycleTwoOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 2 ? (
          <CycleThreeOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 6 ? (
          <Crown isGrayScale={isGrayScale} />
        ) : null}
        <Body isGrayScale={isGrayScale} />
        {currentYuniverse === 3 ? (
          <CycleFourOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 4 ? (
          <CycleFiveOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 5 ? (
          <CycleSixOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 6 ? (
          <CycleSevenOrnament isGrayScale={isGrayScale} />
        ) : null}
        <Clasps isGrayScale={isGrayScale} />
        <Gems isGrayScale={isGrayScale} gemsToShow={gems || currentWorld} />
      </Svg>
    </>
  );
};

export default memo(YuCoinBadge);

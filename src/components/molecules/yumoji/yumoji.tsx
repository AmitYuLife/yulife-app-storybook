import React from "react";
import { Image } from "@atoms";
import { Style } from "@styles";
import { EmptyMaleBody } from "./assets/empty-male-body-svg";

interface Props {
  uri: string;
  testID?: string;
  height?: number;
  width?: number;
  emptyHeight?: number;
  emptyWidth?: number;
}

export const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(128.5);
export const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(58);
export const EMPTY_BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(146);
export const EMPTY_BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(40);

function _Yumoji({
  uri,
  testID,
  height = BODY_AVATAR_HEIGHT,
  width = BODY_AVATAR_WIDTH,
  emptyHeight = EMPTY_BODY_AVATAR_HEIGHT,
  emptyWidth = EMPTY_BODY_AVATAR_WIDTH,
}: Props) {
  if (!uri) {
    return <EmptyMaleBody height={emptyHeight} width={emptyWidth} />;
  }

  return <Image testID={testID} width={width} height={height} source={{ uri }} />;
}

const MemoizedYumoji = React.memo(_Yumoji);
export const Yumoji = Object.assign(MemoizedYumoji, {
  BODY_AVATAR_HEIGHT,
  BODY_AVATAR_WIDTH,
  EMPTY_BODY_AVATAR_HEIGHT,
  EMPTY_BODY_AVATAR_WIDTH,
});

import React from "react";
import { Image } from "@atoms";
import { Style } from "@styles";
import { EmptyMaleBody } from "./assets/empty-male-body-svg";

interface Props {
  uri: string;
  testID?: string;
  theme?: "light" | "dark";
  height?: number;
  width?: number;
  emptyHeight?: number;
  emptyWidth?: number;
  emptyBodyColor?: string;
  suppressLoadingUi?: boolean;
}

export const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(128.5);
export const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(58);
export const EMPTY_BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(146);
export const EMPTY_BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(40);

const _Yumoji = ({
  uri,
  testID,
  theme = "light",
  height = BODY_AVATAR_HEIGHT,
  width = BODY_AVATAR_WIDTH,
  emptyHeight = EMPTY_BODY_AVATAR_HEIGHT,
  emptyWidth = EMPTY_BODY_AVATAR_WIDTH,
  emptyBodyColor,
  suppressLoadingUi,
}: Props) => {
  if (!uri) {
    return <EmptyMaleBody height={emptyHeight} width={emptyWidth} body={emptyBodyColor} />;
  }

  return (
    <Image
      testID={testID}
      suppressLoadingUi={suppressLoadingUi}
      width={width}
      height={height}
      source={{ uri }}
      theme={theme}
    />
  );
};

const MemoizedYumoji = React.memo(_Yumoji);
export const Yumoji = Object.assign(MemoizedYumoji, {
  BODY_AVATAR_HEIGHT,
  BODY_AVATAR_WIDTH,
  EMPTY_BODY_AVATAR_HEIGHT,
  EMPTY_BODY_AVATAR_WIDTH,
});

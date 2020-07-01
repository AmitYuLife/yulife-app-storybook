/* tslint:disable */
import * as React from "react";
import Svg, { Path, Polygon, Rect, Ellipse } from "react-native-svg";
import { Style } from "@styles/index";
import { IBodyItem } from "../../../../../redux/avatar/avatar.reducer";
import { IAvatar } from "../avatar-builder/avatar.types";
import { AVATAR_BODY, LEADERBOARD_HEAD_AVATAR } from "@ids";

interface IProps {
  avatar: IAvatar;
  showElipse?: boolean;
  height?: number;
  width?: number;
  viewBox?: string;
}

const fillNames = ["main", "light", "shadow", "base", "nose", "eyebrows", "leftEar", "rightEar", "lips", "tongue"];

function renderPart(item: IBodyItem, type: "default" | "grid" = "default") {
  if (item) {
    const defaultColors: Record<string, string> = {
      light: "#775246",
      main: "#653f31",
      shadow: "#543127",
    };

    return (item.bodyElements || []).map(({ attributes, name }, i) => {
      let fill;
      if (type === "default") {
        fill = fillNames.includes(attributes.fill)
          ? (item?.colors?.colorScheme as any)[`${attributes.fill}`]
          : attributes.fill;
      } else if (type === "grid") {
        const doesFillExist = fillNames.includes(attributes.fill);
        const defaultColor = ((item.defaultColor as any) ?? defaultColors)[`${attributes.fill}`];
        fill = doesFillExist ? defaultColor : attributes.fill;
      }

      switch (name) {
        case "polygon":
          return <Polygon key={item.partId + i} {...attributes} fill={fill} />;
        case "rect":
          return <Rect key={item.partId + i} {...attributes} fill={fill} />;
        case "ellipse":
          return <Ellipse key={item.partId + i} {...attributes} fill={fill} />;
        default:
          return <Path key={item.partId + i} {...attributes} fill={fill} />;
      }
    });
  }
}

export const BodyAvatar = ({ avatar, showElipse, height, width, viewBox }: IProps) => {
  return (
    <Svg
      width={String(width || Style.SCALE_UP_AND_DOWN(248))}
      height={String(height || Style.SCALE_UP_AND_DOWN(248))}
      viewBox={viewBox ? viewBox : "0 0 248 248"}
      fill="none"
      testID={AVATAR_BODY([avatar.eyes.partId, avatar.hair.partId, avatar.facialHair.partId, avatar.glasses.partId])}
    >
      {!showElipse ? null : (
        <Path
          d="M135.47,552.16c62,0,112.25-8.08,112.25-18s-50.25-18-112.25-18-112.24,8.07-112.24,18S73.48,552.16,135.47,552.16Z"
          fill="#f9f9f9"
        />
      )}

      {renderPart(avatar.head)}
      {renderPart(avatar.eyes)}
      {renderPart(avatar.hair)}
      {renderPart(avatar.body)}
      {renderPart(avatar.pants)}
      {renderPart(avatar.boots)}
      {renderPart(avatar.chest)}
      {renderPart(avatar.gloves)}
      {renderPart(avatar.facialHair)}
      {renderPart(avatar.glasses)}
    </Svg>
  );
};

export const LeaderboardHeadAvatar = ({ avatar, height, width, viewBox = "19 30 230 150" }: IProps) => {
  return (
    <Svg
      width={String(Style.adjust(width ? width : 248))}
      height={String(Style.adjust(height ? height : 248))}
      viewBox={viewBox}
      fill="none"
      testID={LEADERBOARD_HEAD_AVATAR([
        avatar.facialHair.partId,
        avatar.eyes.partId,
        avatar.hair.partId,
        avatar.glasses.partId,
      ])}
    >
      {renderPart(avatar.head)}
      {renderPart(avatar.eyes)}
      {renderPart(avatar.hair)}
      {renderPart(avatar.body)}
      {renderPart(avatar.chest)}
      {renderPart(avatar.facialHair)}
      {renderPart(avatar.glasses)}
    </Svg>
  );
};

interface IBodyItemsProps {
  item: IBodyItem;
}

export const BodyItemSVG = ({ item }: IBodyItemsProps) => {
  return (
    <Svg
      width={String(Style.adjust(item.width ? Number(item.width) : 82))}
      height={String(Style.adjust(item.height ? Number(item.height) : 98))}
      viewBox={item.previewViewBox ? item.previewViewBox : "0 0 265 544"}
      fill="none"
    >
      {renderPart(item, "grid")}
    </Svg>
  );
};

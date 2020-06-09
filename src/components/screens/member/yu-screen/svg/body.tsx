/* tslint:disable */
import * as React from "react";
import Svg, { Path, Polygon, Rect } from "react-native-svg";
import { Style } from "@styles/index";
import { View } from "react-native";
import { IBodyItem } from "../../../../../redux/avatar/avatar.reducer";
import { IAvatar } from "../avatar-builder/avatar.types";

interface IProps {
  avatar: IAvatar;
  showElipse?: boolean;
  height?: number;
  width?: number;
  viewBox?: string;
}

const fillNames = ["main", "light", "shadow", "base", "nose", "eyebrows", "leftEar", "rightEar", "lips", "tongue"];

function renderPart(partElements: IBodyItem) {
  if (partElements) {
    return (partElements.bodyElements || []).map((instruction, i) => {
      const fill = fillNames.includes(instruction.attributes.fill)
        ? (partElements?.colors?.colorScheme as any)[`${instruction.attributes.fill}`]
        : instruction.attributes.fill;

      switch (instruction.name) {
        case "polygon":
          return <Polygon key={partElements.partId + i} {...instruction.attributes} fill={fill} />;
        case "rect":
          return <Rect key={partElements.partId + i} {...instruction.attributes} fill={fill} />;
        default:
          return <Path key={partElements.partId + i} {...instruction.attributes} fill={fill} />;
      }
    });
  }
}

export const BodyAvatar = ({ avatar, showElipse, height, width, viewBox }: IProps) => {
  return (
    <View style={{ top: 0 }}>
      <Svg
        width={String(width || Style.SCALE_UP_AND_DOWN(248))}
        height={String(height || Style.SCALE_UP_AND_DOWN(248))}
        viewBox={viewBox ? viewBox : "0 0 248 248"}
        fill="none"
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
    </View>
  );
};

export const LeaderboardHeadAvatar = ({ avatar, height, width }: IProps) => {
  return (
    <Svg
      width={String(Style.adjust(width ? width : 248))}
      height={String(Style.adjust(height ? height : 248))}
      viewBox={"19 30 230 150"}
      fill="none"
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
      width={String(Style.adjust(item.width ? item.width : 82))}
      height={String(Style.adjust(item.height ? item.height : 98))}
      viewBox={item.previewViewBox ? item.previewViewBox : "0 0 265 544"}
      fill="none"
    >
      {getGridElement(item)}
    </Svg>
  );
};

function getGridElement(avatarHead: IBodyItem) {
  const defaultColors: Record<string, string> = {
    light: "#775246",
    main: "#653f31",
    shadow: "#543127",
  };

  const gridElement = avatarHead.bodyElements.map(({ attributes }, i) => {
    const doesFillExist = fillNames.includes(attributes.fill);
    const defaultColor = ((avatarHead.defaultColor as any) ?? defaultColors)[`${attributes.fill}`];
    const fill = doesFillExist ? defaultColor : attributes.fill;

    return <Path key={avatarHead.partId + i} {...attributes} fill={fill} />;
  });

  return gridElement;
}

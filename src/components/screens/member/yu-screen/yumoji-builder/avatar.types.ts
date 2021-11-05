import { YuAvatarColor, YuAvatarColor_colorScheme } from "@graphql/_core/schema";

interface IBodyElements {
  name: string;
  // elements?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: any;
}

export interface IBodyItem {
  colors?: YuAvatarColor;
  bodyElements: IBodyElements[];
  type?: string;
  previewViewBox?: string;
  height?: number;
  width?: number;
  partId: string;
  defaultColor?: YuAvatarColor_colorScheme;
}

export type BodyItemKey =
  | "head"
  | "eyes"
  | "hair"
  | "body"
  | "pants"
  | "boots"
  | "chest"
  | "gloves"
  | "glasses"
  | "facialHair";

export type IAvatar = {
  [key in BodyItemKey]: IBodyItem;
};

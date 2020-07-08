import { IBodyItem } from "@redux/avatar/avatar.reducer";

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

export type Category = "items" | "colors";

export type AvatarBuilderHeading = "Create your Yumoji" | "Edit your Yumoji";

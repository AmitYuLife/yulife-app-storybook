import { AvatarPartType } from "../../graphql/_core/schema/globalTypes";
import { facialHairColection, facialHairColorColection } from "./avatar.facialHair.data";
import { hairColection, hairColorColection } from "./avatar.hair.data";
import { IBodyElements } from "./avatar.reducer";

export interface IAvatarData {
  head?: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  eyes?: { items?: IAvatarItem[]; colors: IAvatarItemColors[] };
  hair: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  body?: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  pants?: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  boots?: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  chest?: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  gloves?: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  facialHair?: { items: IAvatarItem[]; colors: IAvatarItemColors[] };
  glasses?: { items: IAvatarItem[]; colors?: IAvatarItemColors[] };
}

export const avatarData: IAvatarData = {
  hair: { items: hairColection, colors: hairColorColection },
  eyes: { colors: hairColorColection },
  facialHair: { items: facialHairColection, colors: facialHairColorColection },
};

export interface IAvatarItem {
  id: string;
  viewBox: string;
  bodyElements: IBodyElements[];
  colors?: { [key: string]: string }[];
}

export interface IAvatarItemColors {
  id: string;
  colors: { [key: string]: string }[];
}

export interface IBodyItemCategory {
  id: AvatarPartType | null;
  isSavingItem?: boolean;
  bodyItems: IBodyCategoryItem[];
}

export interface IBodyCategoryItem {
  id: string;
  bodyElements: string;
  itemTitle: string;
}

export const bodyItems: IBodyItemCategory[] = [
  {
    id: AvatarPartType.body,
    bodyItems: [
      {
        id: "colors",
        bodyElements: "",
        itemTitle: "Skin Tone",
      },
    ],
  },
  {
    id: AvatarPartType.hair,
    bodyItems: [
      {
        id: "items",
        bodyElements: "",
        itemTitle: "Hair Style",
      },
      {
        id: "colors",
        bodyElements: "",
        itemTitle: "Hair Colour",
      },
    ],
  },
  {
    id: AvatarPartType.facialHair,
    bodyItems: [
      {
        id: "items",
        bodyElements: "",
        itemTitle: "Facial Hair",
      },
      {
        id: "colors",
        bodyElements: "",
        itemTitle: "Facial Hair Colour",
      },
    ],
  },
  {
    id: AvatarPartType.eyes,
    bodyItems: [
      {
        id: "colors",
        bodyElements: "",
        itemTitle: "Eye Colour",
      },
    ],
  },
  {
    id: AvatarPartType.glasses,
    bodyItems: [
      {
        id: "items",
        bodyElements: "",
        itemTitle: "Accessories",
      },
    ],
  },
  {
    id: null,
    isSavingItem: true,
    bodyItems: [
      {
        id: "items",
        bodyElements: "",
        itemTitle: "",
      },
    ],
  },
];

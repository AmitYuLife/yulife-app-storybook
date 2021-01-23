import { REHYDRATE } from "redux-persist";
import { SyncAction } from "../_core/types";
import { LOGOUT } from "@redux/user/user.actions";
import { FEMALE_BODY_SELECTED, MALE_BODY_SELECTED, SAVE_AVATAR } from "./avatar.actions";
import {
  femaleBootsDefault,
  femaleChestDefault,
  femaleBodyDefault,
  unisexEyesDefault,
  femaleHairDefault,
  femalePantsDefault,
} from "./avatar.data";
import { femaleHeadDefault } from "./avatar.data";
import { YuAvatarColor, YuAvatarColor_colorScheme } from "../../graphql/_core/schema";
import {
  maleBodyDefault,
  maleBootsDefault,
  maleChestDefault,
  maleHairDefault,
  maleHeadDefault,
  malePantsDefault,
} from "./male-avatar.data";
import { IAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";

export interface IAvatarStore extends IAvatar {
  isAvatarCreated: boolean;
  avatarForYuscreen?: IAvatar;
}

export interface IBodyElements {
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

const defaultColors = {
  light: "#775246",
  main: "#653F31",
  shadow: "#543127",
  base: "",
  nose: "",
  eyebrows: "",
  leftEar: "",
  rightEar: "",
  lips: "",
  tongue: "",
};

const defaultBodyColor = {
  main: "#FCCBB9",
  shadow: "",
  light: "",
  base: "#FFD3C0",
  nose: "#F1B69C",
  eyebrows: "#010101",
  leftEar: "#FFD9CC",
  rightEar: "#FFC1AB",
  lips: "#FFA8B3",
  tongue: "#D85B77",
};

const getInitialFemaleState = (): IAvatarStore => ({
  isAvatarCreated: false,
  head: {
    partId: "female_head_1",
    bodyElements: femaleHeadDefault,
    colors: { colorScheme: defaultBodyColor, colorSchemeId: "skin_peach" },
  },
  eyes: {
    partId: "eyes_1",
    bodyElements: unisexEyesDefault,
    colors: { colorScheme: { ...defaultColors, main: "#7C4C45" }, colorSchemeId: "eyes_brown" },
  },
  hair: {
    partId: "absolute_curls",
    bodyElements: femaleHairDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "hair_mocha_brown" },
  },
  body: {
    partId: "female_body_1",
    bodyElements: femaleBodyDefault,
    colors: { colorScheme: defaultBodyColor, colorSchemeId: "skin_peach" },
  },
  pants: {
    partId: "female_pants_1",
    bodyElements: femalePantsDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  boots: {
    partId: "female_boots_1",
    bodyElements: femaleBootsDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  chest: {
    partId: "female_chest_1",
    bodyElements: femaleChestDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  gloves: {
    partId: "",
    bodyElements: [],
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  glasses: {
    partId: "",
    bodyElements: [],
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  facialHair: {
    partId: "",
    bodyElements: [],
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
});

export const getInitialMaleState = (): IAvatarStore => ({
  isAvatarCreated: false,
  head: {
    partId: "male_head_1",
    bodyElements: maleHeadDefault,
    colors: { colorScheme: defaultBodyColor, colorSchemeId: "skin_peach" },
  },
  eyes: {
    partId: "eyes_1",
    bodyElements: unisexEyesDefault,
    colors: { colorScheme: { ...defaultColors, main: "#7C4C45" }, colorSchemeId: "eyes_brown" },
  },
  hair: {
    partId: "spiral_curls",
    bodyElements: maleHairDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "hair_mocha_brown" },
  },
  body: {
    partId: "male_body_1",
    bodyElements: maleBodyDefault,
    colors: { colorScheme: defaultBodyColor, colorSchemeId: "skin_peach" },
  },
  pants: {
    partId: "male_pants_1",
    bodyElements: malePantsDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  boots: {
    partId: "male_boots_1",
    bodyElements: maleBootsDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  chest: {
    partId: "male_chest_1",
    bodyElements: maleChestDefault,
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  gloves: {
    partId: "",
    bodyElements: [],
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  glasses: {
    partId: "",
    bodyElements: [],
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
  facialHair: {
    partId: "",
    // add default facial hair
    bodyElements: [],
    colors: { colorScheme: defaultColors, colorSchemeId: "" },
  },
});

const avatarReducer = (state: IAvatarStore = getInitialMaleState(), action: SyncAction): IAvatarStore => {
  switch (action.type) {
    case REHYDRATE:
      return getInitialMaleState();

    case FEMALE_BODY_SELECTED:
      if (state.head.partId === "female_head_1") {
        return state;
      }

      return {
        ...getInitialFemaleState(),
        avatarForYuscreen: state.avatarForYuscreen,
      };

    case MALE_BODY_SELECTED:
      if (state.head.partId === "male_head_1") {
        return state;
      }

      return {
        ...getInitialMaleState(),
        avatarForYuscreen: state.avatarForYuscreen,
      };

    case SAVE_AVATAR:
      return {
        ...state,
        avatarForYuscreen: action.payload,
        head: {
          ...state.head,
          colors: action.payload.head.colors,
          bodyElements: action.payload.head.bodyElements,
          partId: action.payload.head.partId,
        },
        facialHair: {
          ...state.facialHair,
          colors: action.payload.facialHair.colors,
          bodyElements: action.payload.facialHair.bodyElements,
          partId: action.payload.facialHair.partId,
        },
        body: {
          ...state.body,
          colors: action.payload.body.colors,
          bodyElements: action.payload.body.bodyElements,
          partId: action.payload.body.partId,
        },
        glasses: {
          ...state.glasses,
          colors: action.payload.glasses.colors,
          bodyElements: action.payload.glasses.bodyElements,
          partId: action.payload.glasses.partId,
        },
        hair: {
          ...state.hair,
          colors: action.payload.hair.colors,
          bodyElements: action.payload.hair.bodyElements,
          partId: action.payload.hair.partId,
        },
        eyes: {
          ...state.eyes,
          colors: action.payload.eyes.colors,
          bodyElements: action.payload.eyes.bodyElements,
          partId: action.payload.eyes.partId,
        },
        chest: {
          ...state.chest,
          colors: action.payload.chest.colors,
          bodyElements: action.payload.chest.bodyElements,
          partId: action.payload.chest.partId,
        },
        pants: {
          ...state.pants,
          colors: action.payload.pants.colors,
          bodyElements: action.payload.pants.bodyElements,
          partId: action.payload.pants.partId,
        },
        gloves: {
          ...state.gloves,
          colors: action.payload.gloves.colors,
          bodyElements: action.payload.gloves.bodyElements,
          partId: action.payload.gloves.partId,
        },
      };

    case LOGOUT:
      return getInitialMaleState();

    default:
      return state;
  }
};

export default avatarReducer;

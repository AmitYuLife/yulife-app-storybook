import { createSelector } from "reselect";

import { IReduxState } from "../_core/reducers";

type State = IReduxState["avatar"];
const reducer = (state: IReduxState) => state.avatar;

const avatarHeadSelector = (state: State) => state.head;
export const getAvatarHead = createSelector(reducer, avatarHeadSelector);

const avatarEyesSelector = (state: State) => state.eyes;
export const getAvatarEyes = createSelector(reducer, avatarEyesSelector);

const avatarHairSelector = (state: State) => state.hair;
export const getAvatarHair = createSelector(reducer, avatarHairSelector);

const avatarBodySelector = (state: State) => state.body;
export const getAvatarBody = createSelector(reducer, avatarBodySelector);

const avatarPantsSelector = (state: State) => state.pants;
export const getAvatarPants = createSelector(reducer, avatarPantsSelector);

const avatarBootsSelector = (state: State) => state.boots;
export const getAvatarBoots = createSelector(reducer, avatarBootsSelector);

const avatarChestSelector = (state: State) => state.chest;
export const getAvatarChest = createSelector(reducer, avatarChestSelector);

const avatarGlovesSelector = (state: State) => state.gloves;
export const getAvatarGloves = createSelector(reducer, avatarGlovesSelector);

const avatarGlassesSelector = (state: State) => state.glasses;
export const getAvatarGlasses = createSelector(reducer, avatarGlassesSelector);

const avatarFacialHairSelector = (state: State) => state.facialHair;
export const getAvatarFacialHair = createSelector(reducer, avatarFacialHairSelector);

const isAvatarCreatedSelector = (state: State) => state.isAvatarCreated;
export const getIsAvatarCreated = createSelector(reducer, isAvatarCreatedSelector);

const avatarForYuScreen = (state: State) => state.avatarForYuscreen;
export const getAvatarForYuscreen = createSelector(reducer, avatarForYuScreen);

const avatarSelector = ({ head, eyes, hair, body, pants, boots, chest, gloves, facialHair, glasses }: State) => ({
  head,
  eyes,
  hair,
  body,
  pants,
  boots,
  chest,
  gloves,
  facialHair,
  glasses,
});
export const getAvatar = createSelector(reducer, avatarSelector);

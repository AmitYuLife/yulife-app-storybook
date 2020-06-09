import { IReduxState } from "../_core/reducers";
export const getAvatarHead = ({ avatar }: IReduxState) => avatar.head;

export const getAvatarEyes = ({ avatar }: IReduxState) => avatar.eyes;

export const getAvatarHair = ({ avatar }: IReduxState) => avatar.hair;

export const getAvatarBody = ({ avatar }: IReduxState) => avatar.body;

export const getAvatarPants = ({ avatar }: IReduxState) => avatar.pants;

export const getAvatarBoots = ({ avatar }: IReduxState) => avatar.boots;

export const getAvatarChest = ({ avatar }: IReduxState) => avatar.chest;

export const getAvatarGloves = ({ avatar }: IReduxState) => avatar.gloves;

export const getAvatarGlasses = ({ avatar }: IReduxState) => avatar.glasses;

export const getAvatarFacialHair = ({ avatar }: IReduxState) => avatar.facialHair;

export const getIsAvatarCreated = ({ avatar }: IReduxState) => avatar.isAvatarCreated;

export const getAvatar = ({ avatar }: IReduxState) => {
  return {
    head: avatar.head,
    eyes: avatar.eyes,
    hair: avatar.hair,
    body: avatar.body,
    pants: avatar.pants,
    boots: avatar.boots,
    chest: avatar.chest,
    gloves: avatar.gloves,
    facialHair: avatar.facialHair,
    glasses: avatar.glasses,
  };
};

export const getAvatarForYuscreen = ({ avatar }: IReduxState) => {
  return avatar.avatarForYuscreen;
};

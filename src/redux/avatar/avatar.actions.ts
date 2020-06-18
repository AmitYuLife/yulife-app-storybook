import { IBodyItem } from "./avatar.reducer";

export const FEMALE_BODY_SELECTED = "FEMALE_BODY_SELECTED";
export const MALE_BODY_SELECTED = "MALE_BODY_SELECTED";
export const SAVE_AVATAR = "SAVE_AVATAR";
export const AVATAR_CREATED = "AVATAR_CREATED";

export const maleBodySelected = () => ({
  type: MALE_BODY_SELECTED,
});

export const femaleBodySelected = () => ({
  type: FEMALE_BODY_SELECTED,
});

export const avatarCreated = () => ({
  type: AVATAR_CREATED,
});

export const saveAvatar = (payload: {
  head: IBodyItem;
  eyes: IBodyItem;
  hair: IBodyItem;
  body: IBodyItem;
  facialHair: IBodyItem;
  glasses: IBodyItem;
  chest: IBodyItem;
  pants: IBodyItem;
  gloves: IBodyItem;
}) => ({
  payload,
  type: SAVE_AVATAR,
});

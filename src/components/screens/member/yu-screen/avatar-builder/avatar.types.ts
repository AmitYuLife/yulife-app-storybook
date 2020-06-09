import { IBodyItem } from "@redux/avatar/avatar.reducer";

export interface IAvatar {
  head: IBodyItem;
  eyes: IBodyItem;
  hair: IBodyItem;
  body: IBodyItem;
  pants: IBodyItem;
  boots: IBodyItem;
  chest: IBodyItem;
  gloves: IBodyItem;
  glasses: IBodyItem;
  facialHair: IBodyItem;
}

export type Category = "items" | "colors";

export type AvatarBuilderHeading = "Create your avatar" | "Edit your avatar";

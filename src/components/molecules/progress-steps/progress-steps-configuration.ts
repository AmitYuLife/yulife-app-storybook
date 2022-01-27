import { Colours } from "@styles";
import { GetPersonalProductStep_getPersonalProductStep_header_ContentItemProgressSteps as IContentItemProgressSteps } from "@graphql/_core/schema";

export const defaultTheme: IContentItemProgressSteps["theme"] = {
  barColour: {
    active: Colours.primary.p100,
    inactive: Colours.metallic.m100,
  },
  barBorderColour: {
    active: Colours.primary.p100,
    inactive: Colours.metallic.m200,
  },
  stepBackgroundColour: {
    active: Colours.primary.p600,
    inactive: Colours.metallic.m200,
  },
  stepTextColour: {
    active: Colours.neutral.white,
    inactive: Colours.metallic.m300,
  },
};

import { Colours } from "@styles";
import { ContentItemProgressSteps } from "@graphql/__generated";

export const defaultTheme: ContentItemProgressSteps["theme"] = {
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

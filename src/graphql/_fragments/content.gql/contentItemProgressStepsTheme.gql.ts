import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_STEPS_THEME_OPTION } from "./contentItemProgressStepsThemeOption.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_STEPS_THEME = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_STEPS_THEME_OPTION}

  fragment ContentItemProgressStepsTheme on ContentItemProgressStepsTheme {
    barColour {
      ...ContentItemProgressStepsThemeOption
    }
    barBorderColour {
      ...ContentItemProgressStepsThemeOption
    }
    stepBackgroundColour {
      ...ContentItemProgressStepsThemeOption
    }
    stepTextColour {
      ...ContentItemProgressStepsThemeOption
    }
  }
`;

import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_STEPS_THEME } from "./contentItemProgressStepsTheme.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_STEPS = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_STEPS_THEME}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemProgressSteps on ContentItemProgressSteps {
    id
    currentStep
    numberOfSteps
    theme {
      ...ContentItemProgressStepsTheme
    }
    wrapperStyles {
      ...SduiStyle
    }
  }
`;

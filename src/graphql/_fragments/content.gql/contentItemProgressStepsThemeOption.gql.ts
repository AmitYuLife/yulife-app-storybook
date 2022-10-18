import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_STEPS_THEME_OPTION = gql`
  fragment ContentItemProgressStepsThemeOption on ContentItemProgressStepsThemeOption {
    active
    inactive
  }
`;

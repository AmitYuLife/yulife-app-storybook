import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD_PROVIDER_LOGO = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemSelectedPackageCardProviderLogo on ContentItemSelectedPackageCardProviderLogo {
    url {
      ...RemoteImage
    }
    width
  }
`;

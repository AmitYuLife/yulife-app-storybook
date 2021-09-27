import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { navigateToAvatarCreationScreen } from "./navigateToAvatarCreationScreen";

interface INavigateToAvatarModal {
  heading?: string;
  subheading?: string;
  useNewYumojiBuilder?: boolean;
}

export function navigateToAvatarModal(args: INavigateToAvatarModal = {}) {
  const { heading = "Edit your Yumoji", subheading = "Do you want to edit your Yumoji?", useNewYumojiBuilder } = args;

  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          Navigation.dismissModal(MODALS.generic);
          navigateToAvatarCreationScreen({ heading, useNewYumojiBuilder });
        },
        onPressSecondary: () => {
          Navigation.dismissModal(MODALS.generic);
        },
        heading,
        subheading,
        ctaLabel: "Yes Please",
        ctaLabelSecondary: "No Thanks",
      },
    },
  });
}

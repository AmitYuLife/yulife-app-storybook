import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

export function removeByIndex<T>(arr: T[], index: number) {
  const slice = arr.slice();
  slice.splice(index, 1);
  return slice;
}

export function openModal(removeItem: () => void) {
  return Navigation.showOverlay({
    component: {
      id: MODALS.genericOverlay,
      name: MODALS.genericOverlay,
      options: {
        layout: {
          componentBackgroundColor: "transparent",
        },
      },
      passProps: {
        heading: "Are you sure you want to remove cover?",
        buttons: [
          {
            label: "Yes, please remove",
            onPress: () => {
              removeItem();
              return Navigation.dismissOverlay(MODALS.genericOverlay);
            },
          },
          {
            label: "Don't remove",
            onPress: () => Navigation.dismissModal(MODALS.genericOverlay),
          },
        ],
      },
    },
  });
}

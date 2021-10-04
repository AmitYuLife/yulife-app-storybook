import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";

export function removeByIndex<T>(arr: T[], index: number) {
  const slice = arr.slice();
  slice.splice(index, 1);
  return slice;
}

export function openModal(removeItem: () => void) {
  return showYuModal({
    component: {
      id: MODALS.genericOverlay,
      name: MODALS.genericOverlay,
      passProps: {
        heading: "Are you sure you want to remove this cover?",
        buttons: [
          {
            label: "Yes, please remove",
            onPress: () => {
              removeItem();
              return Navigation.dismissModal(MODALS.genericOverlay);
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

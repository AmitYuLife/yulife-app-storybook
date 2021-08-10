import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { ISelectInputOption } from "./select-input.types";

const closeModal = () => Navigation.dismissOverlay(MODALS.listPicker);

interface ISelectInputModal {
  title: string;
  options: ISelectInputOption[];
  onPress: (values: any) => void;
}

export const showSelectInputModal = async ({ title, options, onPress }: ISelectInputModal) =>
  await Navigation.showOverlay({
    component: {
      id: MODALS.listPicker,
      name: MODALS.listPicker,
      options: {
        layout: {
          componentBackgroundColor: "transparent",
        },
        overlay: {
          interceptTouchOutside: true,
        },
      },
      passProps: {
        title,
        options,
        closeModal,
        onPress,
      },
    },
  });

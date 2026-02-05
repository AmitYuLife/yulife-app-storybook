import { Colours } from "@styles";
import { SmokingStreakCelebrationModal } from "@components/modals";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { MODALS } from "@navigation/constants";
import { VoidFunctionOrPromise } from "@utils";
import { Navigation } from "@navigation/main";

export const showSmokingStreakCelebrationModal = (
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"],
  onClose?: VoidFunctionOrPromise
) => {
  Navigation.showOverlayWithChild({
    children: <SmokingStreakCelebrationModal onClose={onClose} smokingData={smokingData} />,
    wrapperStyle: { flexDirection: "column-reverse" },
    modalId: MODALS.smokingStreakCelebration,
    closeOnBlur: false,
    passProps: {
      tint: "light",
      intensity: 8,
      backgroundColor: Colours.overlay.black80,
    },
  });
};

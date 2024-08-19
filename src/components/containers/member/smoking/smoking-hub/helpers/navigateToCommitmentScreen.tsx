import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

export const navigateToCommitmentScreen = (smokingState: HealthSmokingState) => {
  Navigation.push(ROUTES.smoking, {
    component: {
      id: ROUTES.smokingCommitment,
      name: ROUTES.smokingCommitment,
      passProps: {
        smokingState,
        onClose: () => {
          Navigation.popTo(ROUTES.smoking);
        },
      },
    },
  });
};

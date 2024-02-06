import { GetQuestMapLevel_getQuestMapLevel_slots } from "@graphql/_core/schema";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { MODALS, ROUTES, bottomTabs } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { isSamsung } from "@utils";
import RNFitKit from "@yu-life/react-native-fitkit";
import { useFitKit } from "@services/fitkit/fitkit.hooks";

interface IOnPressChallengeTileParams {
  levelSlot: GetQuestMapLevel_getQuestMapLevel_slots;
  componentId: string;
  level: number;
  showOverlay?: () => void;
  createChallenge: () => void;
  setActiveSlot: (slot: GetQuestMapLevel_getQuestMapLevel_slots) => void;
  authoriseFitKitTypes: ReturnType<typeof useFitKit>["authoriseFitKitTypes"];
}

export const onPressChallengeTile = async ({
  createChallenge,
  level,
  componentId,
  showOverlay,
  setActiveSlot,
  levelSlot,
  authoriseFitKitTypes,
}: IOnPressChallengeTileParams) => {
  if (levelSlot.isLocked) {
    return;
  }

  setActiveSlot(levelSlot);

  if (levelSlot.type === "brainGame") {
    switch (levelSlot.subtype) {
      case "sudoku": {
        return Navigation.push(componentId, {
          component: {
            id: ROUTES.sudokuStaging,
            name: ROUTES.sudokuStaging,
            passProps: {
              slot: levelSlot,
              createChallenge,
              level,
            },
          },
        });
      }
    }
  }

  // Check for isAuthorised only for samsung, for other devices the default will be true so the switchToGoogleFit modal will not be shown
  let activityFromGoogleFitAuthorised;
  let samsungHealthStepsAuthorised;
  if (isSamsung()) {
    activityFromGoogleFitAuthorised = await RNFitKit.isAuthorised({
      read: [],
      platform: "GoogleFit",
    });
    samsungHealthStepsAuthorised = await RNFitKit.isAuthorised({
      read: [],
      platform: "SamsungHealth",
    });
  }

  // TODO: show this popup for other devices if not authorised for the challenges that user select to start
  const isNotStepsAndMediationTypes = levelSlot.fitKitTypes.some((type) =>
    nonSamsungHealthTypesThatRequirePermissions.includes(type)
  );
  const isStepsAndMeditation = levelSlot.fitKitTypes.some((type) => samsungHealthAvailablePermissions.includes(type));

  if (!activityFromGoogleFitAuthorised && isNotStepsAndMediationTypes && isSamsung()) {
    await showYuModal({
      component: {
        id: MODALS.switchToGoogleFit,
        name: MODALS.switchToGoogleFit,
        passProps: {
          onConnect: async () => {
            await authoriseFitKitTypes(levelSlot.fitKitTypes);
          },
          onConnected: () => {
            showOverlay();
          },
        },
      },
    });
    return;
  }

  if (isSamsung() && isStepsAndMeditation && !(samsungHealthStepsAuthorised || activityFromGoogleFitAuthorised)) {
    const route = ROUTES.onboardingFitKitConnect;
    Navigation.push(componentId, {
      component: {
        id: route,
        name: route,
        passProps: {
          dismissButtonLabel: "Cancel",
          onDismiss: () => {
            Navigation.pop(ROUTES.onboardingFitKitConnect);
          },
          navigateToNext: () => {
            Navigation.pop(route);
            showOverlay();
          },
        },
        options: { bottomTabs },
      },
    });
    return;
  }

  showOverlay();
};

const nonSamsungHealthTypesThatRequirePermissions = [
  FitKitType.Flexibility,
  FitKitType.HIIT,
  FitKitType.Pilates,
  FitKitType.Sleep,
  FitKitType.Strength,
  FitKitType.Swimming,
  FitKitType.Yoga,
];

const samsungHealthAvailablePermissions = [FitKitType.StepCount, FitKitType.MindfulSession];

import {
  GetQuestMapLevel_getQuestMapLevel_slots,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent,
} from "@graphql/_core/schema";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { MODALS, ROUTES, bottomTabs } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { isSamsung } from "@utils";
import RNFitKit from "@yu-life/react-native-fitkit";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { useVerifyAndAuthorizeCapability } from "@hooks";

interface IOnPressChallengeTileParams {
  level: number;
  componentId: string;
  showOverlay?: () => void;
  createChallenge: () => void;
  tempGameEnableYuHealth?: boolean;
  capability?: HealthProviderCapability;
  levelSlot: GetQuestMapLevel_getQuestMapLevel_slots;
  setActiveSlot: (slot: GetQuestMapLevel_getQuestMapLevel_slots) => void;
  authoriseFitKitTypes: ReturnType<typeof useFitKit>["authoriseFitKitTypes"];
  verifyAndAuthorizeCapability?: ReturnType<typeof useVerifyAndAuthorizeCapability>;
}

export const onPressChallengeTile = async ({
  showOverlay,
  levelSlot,
  setActiveSlot,
  capability,
  componentId,
  verifyAndAuthorizeCapability,
  createChallenge,
  level,
  tempGameEnableYuHealth,
  ...props
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

  if (!tempGameEnableYuHealth) {
    return onPressChallengeTileFitkit({
      showOverlay,
      levelSlot,
      setActiveSlot,
      componentId,
      createChallenge,
      level,
      tempGameEnableYuHealth,
      ...props,
    });
  }

  const result = await verifyAndAuthorizeCapability(capability);

  if (!result) {
    return;
  }

  showOverlay();
};

export const onPressChallengeTileFitkit = async ({
  levelSlot,
  componentId,
  showOverlay,
  authoriseFitKitTypes,
}: IOnPressChallengeTileParams) => {
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
    NON_SAMSUNG_HEALTH_TYPES_THAT_REQUIRE_PERMISSIONS_FITKIT.includes(type)
  );
  const isStepsAndMeditation = levelSlot.fitKitTypes.some((type) =>
    SAMSUNG_HEALTH_AVAILABLE_PERMISSIONS_FITKIT.includes(type)
  );

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

type InternalContentProps = GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent;
export const handleInternalContentChallenge = ({
  internalContent,
  componentId,
  createChallenge,
  levelSlot,
  level,
}: IOnPressChallengeTileParams & { internalContent: InternalContentProps[] }) => {
  switch (internalContent[0].contentType) {
    case "meditopia": {
      return Navigation.push(componentId, {
        component: {
          id: ROUTES.meditopiaMediaList,
          name: ROUTES.meditopiaMediaList,
          passProps: {
            createChallenge,
            levelSlotId: levelSlot.id,
            fitKitTypes: levelSlot.fitKitTypes,
            tutorialUrl: levelSlot.details.tutorialUrl,
            ...internalContent[0],
            level,
          },
        },
      });
    }

    case "fiit":
    case "workout-content": {
      return Navigation.push(componentId, {
        component: {
          id: ROUTES.fiitMediaCategoryList,
          name: ROUTES.fiitMediaCategoryList,
          passProps: {
            createChallenge,
            levelSlotId: levelSlot.id,
            fitKitTypes: levelSlot.fitKitTypes,
            tutorialUrl: levelSlot.details.tutorialUrl,
            content: internalContent,
            reward: levelSlot.reward,
            level,
          },
        },
      });
    }
  }
};

const NON_SAMSUNG_HEALTH_TYPES_THAT_REQUIRE_PERMISSIONS_FITKIT = [
  FitKitType.Flexibility,
  FitKitType.HIIT,
  FitKitType.Pilates,
  FitKitType.Sleep,
  FitKitType.Strength,
  FitKitType.Swimming,
  FitKitType.Yoga,
];

const SAMSUNG_HEALTH_AVAILABLE_PERMISSIONS_FITKIT = [FitKitType.StepCount, FitKitType.MindfulSession];

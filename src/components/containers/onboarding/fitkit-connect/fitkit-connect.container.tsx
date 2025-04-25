import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fitKitConsentAuthorised } from "@redux/user/user.actions";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { FitKitConnectScreen } from "@components/screens";
import { handleLinkPress } from "@services/app-link";
import Storage from "@services/storage";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import { region } from "@locale";

// TODO find where these props actually come from in RNN types
interface IProps {
  componentId: string;
  navigateToNext: () => void;
  onDismiss?: () => void;
  /*
    we're using this method only when the screen is shown from daily step not authorised screen,
    if we're not using the handleAuthorised defined there, screen will not update the status to active
    after user will grant permission (only after a force close of the app)
  */
  dailyStepScreenHandleAuthorised?: (platform: FitKitHealthTrackingPlatform) => Promise<boolean>;
  dismissButtonTranslationKey?: string;
}

type Props = IProps;

const FitKitConnectContainer: React.FC<Props> = (props) => {
  const { dailyStepScreenHandleAuthorised, navigateToNext, onDismiss, dismissButtonTranslationKey } = props;
  const [isConnecting, setIsConnecting] = React.useState(false);
  const { authorise, loading, available } = useFitKit();
  const dispatch = useDispatch();

  const handleConnect = useCallback(
    async (platform: FitKitHealthTrackingPlatform) => {
      setIsConnecting(true);
      dispatch(fitKitConsentAuthorised());
      await Storage.fitkit.setFitkitPermission(Storage.fitkit.REQUESTED);

      const authorizedResult = dailyStepScreenHandleAuthorised
        ? await dailyStepScreenHandleAuthorised(platform)
        : await authorise({ ...FitKitPermissions(), platform });

      setIsConnecting(false);
      if (authorizedResult) {
        navigateToNext();
      }
    },
    [setIsConnecting, fitKitConsentAuthorised, dailyStepScreenHandleAuthorised, authorise, navigateToNext]
  );

  return (
    <FitKitConnectScreen
      connecting={isConnecting}
      loading={loading}
      fitKitAvailable={available}
      onConnectPress={handleConnect}
      onPrivacyPolicyPress={handleLinkPress(region.getConfig("urls").privacyPolicy)}
      onSkipPress={onDismiss || navigateToNext}
      dismissButtonTranslationKey={dismissButtonTranslationKey}
    />
  );
};

export default FitKitConnectContainer;

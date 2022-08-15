import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFitKitConnectCopy } from "@redux/copy/copy.selectors";
import { fitKitConsentAuthorised } from "@redux/user/user.actions";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { FitKitConnectScreen } from "@components/screens";
import { handleLinkPress } from "@services/app-link";
import Storage from "@services/storage";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import region from "@services/region";

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
  dismissButtonLabel?: string;
}

type Props = IProps;

const FitKitConnectContainer: React.FC<Props> = (props) => {
  const { dailyStepScreenHandleAuthorised, navigateToNext, onDismiss, dismissButtonLabel } = props;
  const [isConnecting, setIsConnecting] = React.useState(false);
  const { authorise, authorised, loading, available } = useFitKit();
  const dispatch = useDispatch();
  const copy = useSelector(getFitKitConnectCopy);

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
      loading={loading || authorised}
      fitKitAvailable={available}
      onConnectPress={handleConnect}
      onPrivacyPolicyPress={handleLinkPress(region.getConfig("urls").privacyPolicy)}
      onSkipPress={onDismiss || navigateToNext}
      copy={copy}
      dismissButtonLabel={dismissButtonLabel}
    />
  );
};

export default FitKitConnectContainer;

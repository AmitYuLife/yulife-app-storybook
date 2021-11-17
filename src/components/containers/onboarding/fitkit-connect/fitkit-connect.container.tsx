import React, { useCallback } from "react";
import Config from "react-native-config";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { fitKitConsentAuthorised } from "@redux/user/user.actions";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { FitKitConnectScreen } from "@components/screens";
import { handleLinkPress } from "@services/app-link";
import Storage from "@services/storage";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";

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
  dailyStepScreenHandleAuthorised?: (platform: FitKitHealthTrackingPlatform) => void;
  dismissButtonLabel?: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const handlePrivacyPolicy = handleLinkPress(Config.PRIVACY_POLICY_URL);

const FitKitConnectContainer: React.FC<Props> = (props) => {
  const {
    dailyStepScreenHandleAuthorised,
    fitKitConsentAuthorised,
    navigateToNext,
    onDismiss,
    copy,
    dismissButtonLabel,
  } = props;
  const [isConnecting, setIsConnecting] = React.useState(false);
  const { authorise, authorised, loading, available } = useFitKit();

  const handleConnect = useCallback(
    async (platform: FitKitHealthTrackingPlatform) => {
      setIsConnecting(true);
      fitKitConsentAuthorised();
      await Storage.fitkit.setFitkitPermission(Storage.fitkit.REQUESTED);
      dailyStepScreenHandleAuthorised
        ? await dailyStepScreenHandleAuthorised(platform)
        : await authorise({ ...FitKitPermissions, platform });
      navigateToNext();
    },
    [setIsConnecting, fitKitConsentAuthorised, dailyStepScreenHandleAuthorised, authorise, navigateToNext]
  );

  return (
    <FitKitConnectScreen
      connecting={isConnecting}
      loading={loading || authorised}
      fitKitAvailable={available}
      onConnectPress={handleConnect}
      onPrivacyPolicyPress={handlePrivacyPolicy}
      onSkipPress={onDismiss || navigateToNext}
      copy={copy}
      dismissButtonLabel={dismissButtonLabel}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "fitkitConnect"),
});

const mapDispatchToProps = {
  fitKitConsentAuthorised,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(FitKitConnectContainer);

import * as React from "react";
import Config from "react-native-config";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { fitKitConsentAuthorised } from "@redux/user/user.actions";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { FitKitConnectScreen } from "@components/screens";
import { handleLinkPress } from "@services/app-link";
import Storage from "@services/storage";
import { FitKitAuthoriseFunction, FitKitAvailable } from "@services/fitkit/fitkit.service";

// TODO find where these props actually come from in RNN types
interface IProps {
  componentId: string;
  navigateToNext: () => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const handlePrivacyPolicy = handleLinkPress(Config.PRIVACY_POLICY_URL);

const FitKitConnectContainer: React.FC<Props> = (props) => {
  const [isConnecting, setIsConnecting] = React.useState(false);

  const handleConnect = async (authorise: FitKitAuthoriseFunction) => {
    setIsConnecting(true);
    props.fitKitConsentAuthorised();
    await Storage.fitkit.setFitkitPermission(Storage.fitkit.REQUESTED);
    await authorise(FitKitPermissions);
    props.navigateToNext();
  };

  return (
    <FitKitAvailable>
      {({ available, authorised, authorise, loading }) => (
        <FitKitConnectScreen
          connecting={isConnecting}
          loading={loading || authorised}
          fitKitAvailable={available}
          onConnectPress={() => handleConnect(authorise)}
          onPrivacyPolicyPress={handlePrivacyPolicy}
          onSkipPress={props.navigateToNext}
          copy={props.copy}
        />
      )}
    </FitKitAvailable>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "fitkitConnect"),
});

const mapDispatchToProps = {
  fitKitConsentAuthorised,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(FitKitConnectContainer);

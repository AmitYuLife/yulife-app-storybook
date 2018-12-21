import * as React from "react";
import { SFC } from "react";
import { Button, CentredScreen, Loading, Pad } from "../../../atoms";
import FitKitAvailable from "./fitkit-available";
import data from "./fitkit-connect.screen.data";
import FitKitUnavailable from "./fitkit-unavailable";

interface IProps {
    connecting: boolean;
    fitKitAvailable: boolean;
    loading: boolean;
    onConnectPress: () => void;
    onPrivacyPolicyPress: () => void;
    onSkipPress: () => void;
}

const FitKitConnectScreen: SFC<IProps> = ({
    connecting,
    fitKitAvailable,
    loading,
    onConnectPress,
    onPrivacyPolicyPress,
    onSkipPress
}) => (
    <>
        {!loading ? (
            <CentredScreen footerImage="forest">
                <Pad height={120} />
                {fitKitAvailable ? (
                    <FitKitAvailable connecting={connecting} onConnectPress={onConnectPress} />
                ) : (
                    <FitKitUnavailable />
                )}
                <Pad height={19} />
                <Button
                    disabled={connecting}
                    label={data.secondaryButtonLabel}
                    onPress={onSkipPress}
                    type={Button.Types.SECONDARY}
                />
                <Pad height={10} />
                <Button label={data.linkButtonLabel} onPress={onPrivacyPolicyPress} type={Button.Types.LINK} />
            </CentredScreen>
        ) : (
            <Loading />
        )}
    </>
);

export default FitKitConnectScreen;

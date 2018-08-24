import * as React from "react";
import { SFC } from "react";
import { Button, CentredScreen, Pad } from "../../../atoms";
import data from "./fitkit-connect.screen.data";
import FitKitUnavailable from "./fitkit-unavailable";
import FitKitAvailable from "./fitkit-available";

interface IProps {
    connecting: boolean;
    fitKitAvailable: boolean;
    onConnectPress: () => void;
    onPrivacyPolicyPress: () => void;
    onSkipPress: () => void;
}

const FitKitConnectScreen: SFC<IProps> = ({
    connecting,
    fitKitAvailable,
    onConnectPress,
    onPrivacyPolicyPress,
    onSkipPress,
}) => (
    <CentredScreen
        footerImage={CentredScreen.FooterImages.FOREST}
    >
        <Pad height={120} />
        {fitKitAvailable ? (
            <FitKitAvailable
                connecting={connecting}
                onConnectPress={onConnectPress}
            />
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
        <Button
            label={data.linkButtonLabel}
            onPress={onPrivacyPolicyPress}
            type={Button.Types.LINK}
        />
    </CentredScreen>
);

export default FitKitConnectScreen;

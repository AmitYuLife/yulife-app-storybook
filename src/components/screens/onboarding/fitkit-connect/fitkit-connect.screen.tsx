import * as React from "react";
import { SFC } from "react";
import {
    Blurb,
    Button,
    CentredScreen,
    Heading,
    Pad,
} from "../../../atoms";
import data from "./fitkit-connect.screen.data";
import styles from "./fitkit-connect.screen.styles";

interface IProps {
    connecting: boolean;
    onConnectPress: () => void;
    onPrivacyPolicyPress: () => void;
    onSkipPress: () => void;
}

// TODO add disabled state to buttons when connecting

const FitKitConnectScreen: SFC<IProps> = ({
    connecting,
    onConnectPress,
    onPrivacyPolicyPress,
    onSkipPress,
}) => (
    <CentredScreen
        footerImage={CentredScreen.FooterImages.FOREST}
    >
        <Pad height={120} />
        <Heading label={data.heading} />
        <Pad height={14} />
        <Blurb
            label={data.blurb}
            wrapperStyle={styles.blurbWrapper}
        />
        <Pad height={34} />
        <Button
            label={connecting ? data.primaryButtonConnecting : data.primaryButtonLabel}
            onPress={onConnectPress}
            type={Button.Types.PRIMARY}
        />
        <Pad height={19} />
        <Button
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

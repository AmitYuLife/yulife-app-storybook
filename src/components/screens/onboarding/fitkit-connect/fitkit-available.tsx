import * as React from "react";
import { SFC } from "react";
import { Heading, Pad, Blurb, Button } from "../../../atoms";
import styles from "./fitkit-connect.screen.styles";
import data from "./fitkit-connect.screen.data";

interface IProps {
    connecting: boolean;
    onConnectPress: () => void;
}

const FitKitAvailable: SFC<IProps> = ({ connecting, onConnectPress }) => (
    <>
        <Heading label={data.heading} />
        <Pad height={14} />
        <Blurb
            label={data.blurb}
            wrapperStyle={styles.blurbWrapper}
        />
        <Pad height={34} />
        <Button
            disabled={connecting}
            label={connecting ? data.primaryButtonConnecting : data.primaryButtonLabel}
            onPress={onConnectPress}
            type={Button.Types.PRIMARY}
        />
    </>
);

export default FitKitAvailable;

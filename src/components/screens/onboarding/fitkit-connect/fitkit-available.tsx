import * as React from "react";
import { SFC } from "react";
import { Blurb, Button, Heading, Pad } from "../../../atoms";
import data from "./fitkit-connect.screen.data";
import styles from "./fitkit-connect.screen.styles";

interface IProps {
    connecting: boolean;
    onConnectPress: () => void;
}

const FitKitAvailable: SFC<IProps> = ({ connecting, onConnectPress }) => (
    <>
        <Heading label={data.heading} />
        <Pad height={14} />
        <Blurb label={data.blurb} wrapperStyle={styles.blurbWrapper} />
        <Pad height={34} />
        <Button
            isLoading={connecting}
            disabled={connecting}
            label={connecting ? data.primaryButtonConnecting : data.primaryButtonLabel}
            onPress={onConnectPress}
            type={Button.Types.PRIMARY}
        />
    </>
);

export default FitKitAvailable;

import * as React from "react";
import { SFC } from "react";
import { Platform } from "react-native";
import { Blurb, Heading, Pad } from "../../../atoms";
import data from "./fitkit-connect.screen.data";
import styles from "./fitkit-connect.screen.styles";

const FitKitUnavailable: SFC<{}> = () => (
    <>
        <Heading label={data.unavailableHeading} />
        <Pad height={14} />
        <Blurb
            label={Platform.select({
                android: data.unavailableAndroid,
                ios: data.unavailableIOS
            })}
            wrapperStyle={styles.blurbWrapper}
        />
    </>
);

export default FitKitUnavailable;

import * as React from "react";
import { SFC } from "react";
import { Heading, Pad, Blurb } from "../../../atoms";
import styles from "./fitkit-connect.screen.styles";
import data from "./fitkit-connect.screen.data";
import { Platform } from "react-native";

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

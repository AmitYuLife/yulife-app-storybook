import * as React from "react";
import { SFC } from "react";
import { Platform } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_fitkitConnect } from "../../../../graphql/_core/schema";
import { Blurb, Heading, Pad } from "../../../atoms";
import styles from "./fitkit-connect.screen.styles";
interface IProps {
    copy: GetMobileCopy_getMobileCopy_screens_fitkitConnect;
}

const FitKitUnavailable: SFC<IProps> = ({ copy }) => (
    <>
        <Heading label={copy.unavailableHeading} />
        <Pad height={14} />
        <Blurb
            label={Platform.select({
                android: copy.unavailableAndroid,
                ios: copy.unavailableIOS
            })}
            wrapperStyle={styles.blurbWrapper}
        />
    </>
);

export default FitKitUnavailable;

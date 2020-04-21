import * as React from "react";
import { SFC } from "react";
import { GetMobileCopy_getMobileCopy_screens_fitkitConnect } from "../../../../graphql/_core/schema";
import { Button, CentredScreen, Loading, Pad } from "../../../atoms";
import FitKitAvailable from "./fitkit-available";
import FitKitUnavailable from "./fitkit-unavailable";

interface IProps {
    connecting: boolean;
    fitKitAvailable: boolean;
    loading: boolean;
    onConnectPress: () => void;
    onPrivacyPolicyPress: () => void;
    onSkipPress: () => void;
    copy: GetMobileCopy_getMobileCopy_screens_fitkitConnect;
}

const FitKitConnectScreen: SFC<IProps> = ({
    connecting,
    fitKitAvailable,
    loading,
    onConnectPress,
    onPrivacyPolicyPress,
    onSkipPress,
    copy
}) => (
    <>
        {!loading ? (
            <CentredScreen footerImage="forest">
                <Pad height={120} />
                {fitKitAvailable ? (
                    <FitKitAvailable connecting={connecting} onConnectPress={onConnectPress} copy={copy} />
                ) : (
                    <FitKitUnavailable copy={copy} />
                )}
                <Pad height={19} />
                <Button
                    disabled={connecting}
                    label={copy.secondaryButtonLabel}
                    onPress={onSkipPress}
                    type="Secondary"
                />
                <Pad height={10} />
                <Button label={copy.linkButtonLabel} onPress={onPrivacyPolicyPress} type="Link" />
            </CentredScreen>
        ) : (
            <Loading />
        )}
    </>
);

export default FitKitConnectScreen;

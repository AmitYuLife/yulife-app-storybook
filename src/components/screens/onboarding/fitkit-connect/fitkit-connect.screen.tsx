import { LinkGroup } from "@components/molecules";
import React, { FC } from "react";
import { GetMobileCopy_getMobileCopy_screens_fitkitConnect } from "@graphql/_core/schema";
import { Loading, Pad } from "@atoms";
import FitKitAvailable from "./fitkit-available";
import FitKitUnavailable from "./fitkit-unavailable";
import { Style } from "@styles";
import { isSamsung } from "@utils";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import { CentredScreen } from "@molecules";

interface IProps {
  connecting: boolean;
  fitKitAvailable: boolean;
  loading: boolean;
  onConnectPress: (platform: FitKitHealthTrackingPlatform) => void;
  onPrivacyPolicyPress: () => void;
  onSkipPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_fitkitConnect;
  dismissButtonLabel?: string;
}

const isShortToMediumSamsung = Style.isShortToMedium() && isSamsung();

const FitKitConnectScreen: FC<IProps> = ({
  connecting,
  fitKitAvailable,
  loading,
  onConnectPress,
  onPrivacyPolicyPress,
  onSkipPress,
  copy,
  dismissButtonLabel,
}) => (
  <>
    {!loading ? (
      <CentredScreen footerImage="forest">
        {isShortToMediumSamsung ? <Pad height={50} /> : <Pad height={120} />}
        {fitKitAvailable ? (
          <FitKitAvailable connecting={connecting} onConnectPress={onConnectPress} copy={copy} />
        ) : (
          <FitKitUnavailable copy={copy} />
        )}
        {isShortToMediumSamsung ? null : <Pad height={19} />}
        <LinkGroup data={getLinks(onSkipPress, onPrivacyPolicyPress, dismissButtonLabel)} />
      </CentredScreen>
    ) : (
      <Loading />
    )}
  </>
);

const getLinks = (onSkip: () => void, onPrivacy: () => void, dismissButtonLabel: string) => {
  return [
    {
      label: dismissButtonLabel || "Skip this step",
      onPress: onSkip,
    },
    {
      label: "Privacy notice",
      onPress: onPrivacy,
    },
  ];
};

export default FitKitConnectScreen;

import { LinkGroup } from "@components/molecules";
import React, { FC } from "react";
import { GetMobileCopy_getMobileCopy_screens_fitkitConnect } from "../../../../graphql/_core/schema";
import { CentredScreen, Loading, Pad } from "@atoms";
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

const FitKitConnectScreen: FC<IProps> = ({
  connecting,
  fitKitAvailable,
  loading,
  onConnectPress,
  onPrivacyPolicyPress,
  onSkipPress,
  copy,
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
        <LinkGroup data={getLinks(onSkipPress, onPrivacyPolicyPress)} />
      </CentredScreen>
    ) : (
      <Loading />
    )}
  </>
);

const getLinks = (onSkip: () => void, onPrivacy: () => void) => {
  return [
    {
      label: "Skip this step",
      onPress: onSkip,
    },
    {
      label: "Privacy notice",
      onPress: onPrivacy,
    },
  ];
};

export default FitKitConnectScreen;

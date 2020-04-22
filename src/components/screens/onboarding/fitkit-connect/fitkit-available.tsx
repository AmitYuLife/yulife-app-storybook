import * as React from "react";
import { SFC } from "react";
import { GetMobileCopy_getMobileCopy_screens_fitkitConnect } from "../../../../graphql/_core/schema";
import { Blurb, Button, Heading, Pad } from "../../../atoms";

interface IProps {
  connecting: boolean;
  onConnectPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_fitkitConnect;
}

const FitKitAvailable: SFC<IProps> = ({ connecting, onConnectPress, copy }) => (
  <>
    <Heading label={copy.heading} />
    <Pad height={14} />
    <Blurb label={copy.blurb} />
    <Pad height={34} />
    <Button
      isLoading={connecting}
      disabled={connecting}
      label={connecting ? copy.primaryButtonConnecting : copy.primaryButtonLabel}
      onPress={onConnectPress}
      type="Primary"
    />
  </>
);

export default FitKitAvailable;

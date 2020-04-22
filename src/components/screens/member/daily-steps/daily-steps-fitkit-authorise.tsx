import * as React from "react";
import { SFC } from "react";
import { GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise } from "../../../../graphql/_core/schema";
import { Button, Text } from "../../../atoms";
import styles from "./daily-steps.screen.styles";

interface IProps {
  onPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise;
}

const DailyStepsFitKitAuthorise: SFC<IProps> = ({ onPress, copy }) => (
  <>
    <Text style={styles.permissionText}>{copy.permission}</Text>
    <Button label={copy.permissionCta} onPress={onPress} type="PrimaryMedium" />
  </>
);

export default DailyStepsFitKitAuthorise;

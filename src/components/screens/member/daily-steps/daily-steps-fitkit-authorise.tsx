import React from "react";
import { GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise } from "@graphql/_core/schema";
import { Button, Text } from "@atoms";
import { ViewStyle } from "react-native";
import { Style } from "@styles";

interface Props {
  onPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise;
}

const DailyStepsFitKitAuthorise = ({ onPress, copy }: Props) => (
  <>
    <Text style={styles.permissionText}>{copy.permission}</Text>
    <Button label={copy.permissionCta} onPress={onPress} size="Medium" />
  </>
);

export default DailyStepsFitKitAuthorise;

const styles = {
  permissionText: {
    color: "rgb(96,96,96)",
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(300),
  } as ViewStyle,
};

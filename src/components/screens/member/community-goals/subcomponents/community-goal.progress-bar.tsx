import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";

interface Props {
  isExpired?: boolean;
  currentValue: number;
  maxValue: number;
}

export function CommunityGoalProgressBar({ currentValue, maxValue, isExpired }: Props) {
  const [width, setWidth] = React.useState(-1);
  const progressValue = currentValue > maxValue ? maxValue : currentValue; // if currentValue exceeds maxValue, default to maxValue
  const progressWidth = (width / maxValue) * progressValue;

  return (
    <View style={styles.wrapper} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {width < 0 ? null : (
        <View style={[styles.progress, { width: progressWidth }, isExpired ? styles.done : styles.ongoing]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    borderRadius: Style.adjust(4),
    width: "100%",
    height: Style.adjust(8),
    backgroundColor: "rgba(120,146,179, 0.2)",
  },
  progress: {
    borderRadius: Style.adjust(4),
    height: Style.adjust(8),
  },
  ongoing: {
    backgroundColor: "#9ED3E9",
  },
  done: {
    backgroundColor: "#CCC",
  },
});

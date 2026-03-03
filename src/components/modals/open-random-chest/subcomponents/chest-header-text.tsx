import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

interface IChestHeaderTextProps {
  label?: string;
  body?: string;
}

const ChestHeaderText = ({ label, body }: IChestHeaderTextProps) => {
  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeInUp.duration(500)}
        style={styles.header}
        accessibilityLabel={label}
        accessible={true}
      >
        <TextTemplate type="b1b" color="white">
          {label}
        </TextTemplate>
      </Animated.View>
      {body ? (
        <Animated.View entering={FadeInUp.duration(500)} accessibilityLabel={body} accessible={true}>
          <TextTemplate type="b2" color="white">
            {body}
          </TextTemplate>
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: Style.adjust(4),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Style.adjust(26),
  },
  header: {
    marginBottom: Style.adjust(8),
  },
});

export default memo(ChestHeaderText);

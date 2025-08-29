import MaskedView from "@react-native-masked-view/masked-view";
import { Colours, Style, StyleSheet } from "@styles";
import { ComponentProps, memo } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

type Props = {
  maskStyle: ComponentProps<typeof Animated.View>["style"];
  count: number;
  backgroundColor: string;
};

export const ProgressItems = memo((props: Props) => (
  <View style={styles.wrapper}>
    <MaskedView
      style={styles.maskedView}
      maskElement={
        <View style={styles.itemsWrapper}>
          {Array.from({ length: props.count }, (_, i) => (
            <View key={i} style={styles.item} />
          ))}
        </View>
      }
    >
      <View style={[styles.background, { backgroundColor: props.backgroundColor }]} />
      <Animated.View style={props.maskStyle} />
    </MaskedView>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: Style.adjust(16),
    left: 0,
    right: 0,
    height: Style.adjust(20),
  },
  maskedView: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
  },
  itemsWrapper: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: Style.adjust(16),
  },
  item: {
    height: Style.adjust(8),
    borderWidth: 1,
    flex: 1,
    borderRadius: 999,
    backgroundColor: Colours.neutral.white,
  },
  background: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

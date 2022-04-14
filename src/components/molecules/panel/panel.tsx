import React, { memo, useMemo } from "react";
import { CloseSvg, TextTemplate } from "@atoms";
import { Stars3 } from "@atoms/icon/stars-icon";
import { Colours, Style } from "@styles";
import { StyleSheet, View } from "react-native";
import { PressableWithDelay } from "@molecules";

interface IProps {
  title: string;
  description: string;
  currentWorld: number;
  onClose: () => void;
}

const Panel = ({ title, description, currentWorld, onClose }: IProps) => {
  const fontColour = useMemo(() => (currentWorld === 1 ? Colours.neutral.white : Colours.neutral.n800), [currentWorld]);
  const wrapper = useMemo(() => ({ ...styles.wrapper, backgroundColor: getBackgroundColor(currentWorld) }), [
    currentWorld,
  ]);

  return (
    <View style={wrapper}>
      <View style={styles.stars}>
        <Stars3 />
      </View>
      <View style={styles.closeButton}>
        <PressableWithDelay onPress={onClose}>
          <CloseSvg stroke={fontColour} />
        </PressableWithDelay>
      </View>
      <TextTemplate type="b1b" color={fontColour}>
        {title}
      </TextTemplate>
      <View style={styles.description}>
        <TextTemplate type="b2" color={fontColour}>
          {description}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(280),
    height: Style.adjust(132),
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  stars: {
    position: "absolute",
    left: Style.adjust(16),
    top: Style.adjust(16),
  },
  closeButton: { position: "absolute", right: Style.adjust(8), top: Style.adjust(8) },
  description: {
    marginTop: Style.adjust(8),
  },
});

const getBackgroundColor = (currentWorld: number) => {
  switch (currentWorld) {
    case 1:
      return Colours.ocean.up203;
    case 2:
      return "#FFFBE9";
    case 3:
      return "#FFE7EC";
    default:
      return "#FFFFE5";
  }
};

export default memo(Panel);

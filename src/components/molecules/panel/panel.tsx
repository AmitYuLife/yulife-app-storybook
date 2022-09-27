import React, { memo, useMemo } from "react";
import { CloseSvg, TextTemplate } from "@atoms";
import { Stars3 } from "@atoms/icon/stars-icon";
import { Style } from "@styles";
import { StyleSheet, View } from "react-native";
import { PressableWithDelay } from "@molecules";
import { useSelector } from "react-redux";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";

interface IProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Panel = ({ title, description, onClose }: IProps) => {
  const {
    centredScreen: { online },
  } = useSelector(getDailyStepsTheme);

  const wrapper = useMemo(() => ({ ...styles.wrapper, backgroundColor: online?.eventPanel?.backgroundColor }), [
    online?.eventPanel,
  ]);

  return (
    <View style={wrapper}>
      <View style={styles.stars}>
        <Stars3 />
      </View>
      <View style={styles.closeButton}>
        <PressableWithDelay onPress={onClose}>
          <CloseSvg stroke={online?.eventPanel.fontColor} />
        </PressableWithDelay>
      </View>
      <TextTemplate type="b1b" color={online?.eventPanel.fontColor}>
        {title}
      </TextTemplate>
      <View style={styles.description}>
        <TextTemplate type="b2" color={online?.eventPanel.fontColor}>
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

export default memo(Panel);

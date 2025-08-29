import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { SecondaryButton } from "@molecules";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { Sizes } from "@components/molecules/button/button.types";

interface IProps {
  title?: string;
  text: string;
  onPress?: () => void;
  buttonLabel?: string;
  buttonSize?: Sizes;
  wrapperStyle?: any;
}

const InfoMessage = ({ title, text, onPress, buttonLabel, buttonSize = "Fill", wrapperStyle = {} }: IProps) => {
  const wrapper = useMemo(() => [styles.wrapper, wrapperStyle], [wrapperStyle]);
  return (
    <View style={wrapper}>
      {!title ? null : <TextTemplate type={"b2b"}>{title}</TextTemplate>}
      <TextTemplate type={"l2"}>{text}</TextTemplate>
      {!buttonLabel ? null : (
        <SecondaryButton
          testID="info-message-button"
          wrapperStyle={styles.buttonWrapper}
          size={buttonSize}
          translatedLabel={buttonLabel}
          onPress={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(271),
    paddingHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(12),
    paddingBottom: Style.adjust(10),
  },
  buttonWrapper: {
    marginTop: Style.adjust(14),
  },
});

export default memo(InfoMessage);

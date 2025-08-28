import React, { memo, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Image, Source, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style } from "@styles";
import { SduiAction } from "@graphql/__generated";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { DENTAL_TOOLTIP_INFO } from "@ids";

interface Props {
  leftText: string;
  rightTextBody?: string;
  rightTextLabel?: string;
  styles?: ViewStyle;
  info?: {
    onPress?: SduiAction;
  };
  infoIcon?: Source;
}

export const Item = memo((props: Props) => {
  const { info, infoIcon, rightTextBody, rightTextLabel, leftText } = props;

  return (
    <View style={StyleSheet.flatten([styles.wrapper, props.styles])}>
      <View style={styles.column1}>
        <TextTemplate type="b2">{leftText}</TextTemplate>
      </View>
      <View style={styles.column2}>
        <View style={styles.body}>
          {!rightTextBody ? null : (
            <TextTemplate textAlign="right" type="b2b">
              {rightTextBody}
            </TextTemplate>
          )}
          {!rightTextLabel ? null : (
            <TextTemplate textAlign="right" color={Colours.neutral.n400} type="l2">
              {rightTextLabel}
            </TextTemplate>
          )}
        </View>
        <Info info={info} infoIcon={infoIcon} leftText={leftText} />
      </View>
    </View>
  );
});

const HIT_SLOP = {
  top: 16,
  left: 16,
  right: 16,
  bottom: 16,
};

const Info = memo(
  ({ info, infoIcon, leftText }: { info: Props["info"]; infoIcon: Source; leftText: Props["leftText"] }) => {
    const dispatch = useDispatch();

    const handlePress = useCallback(() => {
      dispatch(logMixpanelEventActionCreator("information_viewed", { name: leftText }));
      if (info?.onPress) {
        dispatch(info?.onPress);
      }
    }, [info?.onPress]);

    if (!info) {
      return null;
    }

    return (
      <TouchableOpacityWithDelay style={styles.pressableIcon} hitSlop={HIT_SLOP} onPress={handlePress}>
        <Image source={infoIcon} width={24} testID={DENTAL_TOOLTIP_INFO} />
      </TouchableOpacityWithDelay>
    );
  }
);

const styles = StyleSheet.create({
  pressableIcon: {
    marginStart: Style.adjust(8),
  } as ViewStyle,
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  column1: {
    flex: 1,
  } as ViewStyle,
  column2: {
    flexDirection: "row",
    marginStart: Style.adjust(16),
  } as ViewStyle,
  body: {
    width: Style.adjust(120),
  } as ViewStyle,
});

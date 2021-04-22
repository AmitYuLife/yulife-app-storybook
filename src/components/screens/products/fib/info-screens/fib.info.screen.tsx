import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Colours, Style } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import YugiRejected from "@components/screens/products/fib/info-screens/yugi-assets/yugi-rejected";
import YugiPriceChanged from "@components/screens/products/fib/info-screens/yugi-assets/yugi-price-changed";
import YugiSuccess from "@components/screens/products/fib/info-screens/yugi-assets/yugi-success";

export type InfoYugiType = "priceChanged" | "success" | "rejected";

export interface FibHoldingScreenProps {
  onActionHandler: () => void;
  icon: InfoYugiType;
  title: string;
  message: string;
  canResetFib?: boolean;
  onResetFib?: () => void;
}

export const FibInfoScreen = memo(function (props: FibHoldingScreenProps) {
  const { onActionHandler, icon, title, message, canResetFib, onResetFib } = props;
  const isPriceChangeScreen = icon === "priceChanged";

  const backHandler = useCallback(() => {
    onActionHandler();
    return true;
  }, [onActionHandler]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.yugiWrapper}>{getYugiIcon(icon)}</View>
      <View style={styles.textWrapper}>
        <Text bold={true} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {canResetFib ? <Button onPress={onResetFib} label={"restart journey (beta only)"} /> : null}
        <Button label="Continue" onPress={onActionHandler} />
      </View>
      <GenericHeadingAbsolute onLeftIconPress={!isPriceChangeScreen && onActionHandler} />
    </View>
  );
});

const isShortScreen = Style.DEVICE_HEIGHT < 700;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  yugiWrapper: {
    marginHorizontal: Style.adjust(32),
    alignItems: "center",
    marginTop: isShortScreen ? 0 : Style.adjust(32),
    marginBottom: isShortScreen ? 0 : Style.adjust(32),
  } as ViewStyle,
  textWrapper: {
    marginHorizontal: Style.adjust(32),
    alignItems: "center",
    flexShrink: 1,
    flexGrow: 1,
  } as ViewStyle,
  message: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n700,
    textAlign: "center",
  } as TextStyle,
  title: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: Style.adjust(1),
    color: Colours.neutral.n800,
    textAlign: "center",
    marginBottom: Style.adjust(16),
  } as TextStyle,
  stepsWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    margin: Style.adjust(32),
    alignItems: "center",
  } as ViewStyle,
  buttonWrapper: {
    marginBottom: isShortScreen ? Style.adjust(16) : Style.adjust(32),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n400,
  } as TextStyle,
  activeText: {
    color: Colours.forest.fp306,
  } as TextStyle,
  iconTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  iconWrapper: {
    position: "relative",
    marginLeft: Style.adjust(Style.DEVICE_WIDTH / 4),
    marginRight: Style.adjust(16),
  } as ViewStyle,
});

function getYugiIcon(icon: InfoYugiType) {
  switch (icon) {
    case "rejected":
      return <YugiRejected />;
    case "priceChanged":
      return <YugiPriceChanged />;
    case "success":
    default:
      return <YugiSuccess />;
  }
}

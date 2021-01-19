import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { ArrowRightSvg, Text } from "@atoms";
import { ContactDetailsIcon } from "./icons/contact-details-icon";
import { GpDetailsIcon } from "./icons/gp-details-icon";
import { PaymentDetailsIcon } from "./icons/payment-details-icon";
import MarkdownFib from "@atoms/fib/markdown/markdown";
import { PressableWithDelay } from "@components/molecules";
import { ContactDetailsColouredIcon } from "./icons/contact-details-icon-coloured";
import { GpDetailsColouredIcon } from "./icons/gp-details-coloured";
import { PaymentDetailsColouredIcon } from "./icons/payment-details-coloured";

export enum LEFT_ICON {
  CONTACT_DETAILS = "CONTACT_DETAILS",
  CONTACT_DETAILS_COLOURED = "CONTACT_DETAILS_COLOURED",
  GP_DETAILS = "GP_DETAILS",
  GP_DETAILS_COLOURED = "GP_DETAILS_COLOURED",
  PAYMENT_DETAILS = "PAYMENT_DETAILS",
  PAYMENT_DETAILS_COLOURED = "PAYMENT_DETAILS_COLOURED",
}

interface Props {
  leftIcon: LEFT_ICON;
  markdown: string;
  onPress: () => void;
  center?: boolean;
}

export const InfoCard = (props: Props) => {
  const { markdown, onPress, center } = props;
  const LeftIcon = getIcon(props);

  return (
    <PressableWithDelay onPress={onPress}>
      <View style={[styles.wrapper, { alignItems: center ? "center" : "flex-start" }]}>
        <View style={styles.background} />
        <LeftIcon />
        {center ? ( // ugly design decision, but it's because of some weird Android margin that I can't solve in time
          <View style={styles.promptWrapper}>
            <Text style={styles.prompt} bold={true}>
              {markdown}
            </Text>
          </View>
        ) : (
          <MarkdownFib wrapperStyle={styles.markdownWrapper} style={markdownStyles} text={markdown} />
        )}
        <View style={styles.iconRight}>
          <ArrowRightSvg />
        </View>
      </View>
    </PressableWithDelay>
  );
};

function getIcon(props: Props) {
  switch (props.leftIcon) {
    case LEFT_ICON.CONTACT_DETAILS:
      return ContactDetailsIcon;
    case LEFT_ICON.CONTACT_DETAILS_COLOURED:
      return ContactDetailsColouredIcon;
    case LEFT_ICON.GP_DETAILS:
      return GpDetailsIcon;
    case LEFT_ICON.GP_DETAILS_COLOURED:
      return GpDetailsColouredIcon;
    case LEFT_ICON.PAYMENT_DETAILS:
      return PaymentDetailsIcon;
    case LEFT_ICON.PAYMENT_DETAILS_COLOURED:
      return PaymentDetailsColouredIcon;
    default:
      return View;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(16),
    marginTop: Style.adjust(20),
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.n100,
    marginHorizontal: Style.adjust(24),
    paddingVertical: Style.adjust(24),
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  } as ViewStyle,
  background: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 4,
  } as ViewStyle,
  label: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: Colours.neutral.n700,
    marginLeft: Style.adjust(16),
  } as TextStyle,
  iconRight: {
    marginLeft: "auto",
  } as ViewStyle,
  markdownWrapper: {
    marginLeft: Style.adjust(16),
    width: Style.DEVICE_WIDTH - 160,
    marginTop: 0,
  } as ViewStyle,
  promptWrapper: {
    marginLeft: Style.adjust(16),
    width: Style.DEVICE_WIDTH - 160,
  } as ViewStyle,
  prompt: {
    letterSpacing: 0.6,
    color: Colours.neutral.n700,
  } as TextStyle,
});

const markdownStyles = {
  paragraph: {
    letterSpacing: 0.6,
  },
} as StyleSheet.NamedStyles<ViewStyle>;

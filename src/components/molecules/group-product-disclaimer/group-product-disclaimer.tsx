import React, { memo } from "react";
import { ViewStyle } from "react-native";
import Intercom from "react-native-intercom";
import { Style, Colours } from "@styles";
import Markdown from "../markdown/markdown";

type Props = {
  text: string;
  containerStyle?: ViewStyle;
};

const GroupProductDisclaimer = memo((props: Props) => (
  <Markdown
    text={props.text}
    markdownStyles={markdownStyles}
    containerStyle={props.containerStyle}
    linkActions={markdownLinkActions}
  />
));

export default GroupProductDisclaimer;

const markdownLinkActions = {
  contactUs: () => Intercom.displayMessageComposer(),
};

const markdownStyles = {
  text: {
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(14),
    letterSpacing: 0.6,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    color: Colours.neutral.n700,
  },
  link: {
    color: Colours.primary.p600,
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
};

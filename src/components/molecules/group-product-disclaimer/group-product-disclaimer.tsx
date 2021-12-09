import React, { memo } from "react";
import { ViewStyle } from "react-native";
import Intercom from "@intercom/intercom-react-native";
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
    // l1 TextTemplate style
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(14),
    letterSpacing: 0.4,
    color: Colours.neutral.n800,
  },
  link: {
    color: Colours.primary.p600,
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
};

import React, { memo } from "react";
import { ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import Markdown from "../markdown/markdown";
import { useDispatch } from "react-redux";
import { sduiActionOpenSupportChat } from "@redux/server-driven-ui/sdui.actions";
import { FOOTER_LEGAL_DISCLAIMER } from "@ids";

type Props = {
  text: string;
  containerStyle?: ViewStyle;
};

const GroupProductDisclaimer = memo((props: Props) => {
  const dispatch = useDispatch();

  const openSupport = React.useCallback(() => {
    dispatch(sduiActionOpenSupportChat());
  }, [dispatch]);

  return (
    <Markdown
      text={props.text}
      markdownStyles={markdownStyles}
      containerStyle={props.containerStyle}
      linkActions={markdownLinkActions(openSupport)}
      testID={FOOTER_LEGAL_DISCLAIMER}
    />
  );
});

export default GroupProductDisclaimer;

const markdownLinkActions = (openSupport: () => void) => ({
  contactUs: () => {
    openSupport();
  },
});

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

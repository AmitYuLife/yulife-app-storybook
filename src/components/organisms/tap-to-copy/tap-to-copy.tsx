import React, { memo, useEffect, useRef, useState } from "react";
import { StyleSheet, View, ViewStyle, Vibration } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { CopyIcon } from "@atoms/icon/copy-icon";
import { Pressable } from "@molecules";
import Markdown from "@molecules/markdown/markdown";
import { IMarkdownStyle } from "@molecules/markdown/markdown.styles";
import Logger from "@services/logging/logger";
import { MixpanelEvent } from "@services/logging/types";
import { t } from "@locale";
import { VOUCHER_CODE, VOUCHER_CODE_TITLE } from "@ids";

interface IProps {
  heading?: string;
  customCopyText?: string;
  text: string;
  canCopy: boolean;
  markdown: boolean;
  markdownStyle?: IMarkdownStyle;
  analyticsEvent?: {
    name: MixpanelEvent;
    location: string;
  };
}

const TapToCopy = ({ heading, customCopyText, text, canCopy, markdown, markdownStyle, analyticsEvent }: IProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const resetCopyMessage = useRef(null);

  useEffect(() => {
    resetCopyMessage.current = setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
    }, 2000);
    return () => clearTimeout(resetCopyMessage.current);
  }, [isCopied]);

  const copyMarkdown = () => {
    Clipboard.setString(customCopyText || text);
    Vibration.vibrate(100);
    setIsCopied(true);
    if (analyticsEvent) {
      Logger.logMixpanelEvent(analyticsEvent.name, { location: analyticsEvent.location });
    }
  };

  const color = isCopied ? "#40C057" : Colours.primary.p600;

  return (
    <Pressable delay={1000} onPress={copyMarkdown} disabled={!canCopy}>
      <View style={styles.wrapper}>
        {!heading ? null : (
          <View style={styles.heading}>
            <TextTemplate type={"b2b"} testID={VOUCHER_CODE_TITLE(heading)}>
              {heading}
            </TextTemplate>
          </View>
        )}
        <View style={styles.markdownWrapper}>
          <View style={styles.textWrapper} testID={VOUCHER_CODE(text)}>
            {markdown ? (
              <Markdown text={text} markdownStyles={markdownStyle} />
            ) : (
              <TextTemplate type="b2" numberOfLines={1} decoration="underline">
                {text}
              </TextTemplate>
            )}
          </View>
          {!canCopy ? null : (
            <View style={styles.copyWrapper}>
              <View style={styles.copyText}>{isCopied ? <Copied /> : <Copy />}</View>
              <CopyIcon color={color} />
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const Copy = memo(() => (
  <TextTemplate type="l2b" color={Colours.primary.p600}>
    {t("labels.cta.copy")}
  </TextTemplate>
));

const Copied = memo(() => (
  <View style={styles.copyBox}>
    <TextTemplate type="l2b" color={Colours.neutral.white}>
      {t("labels.copied")}
    </TextTemplate>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: Style.adjust(24),
    borderWidth: Style.adjust(1),
    borderRadius: Style.adjust(8),
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.n50,
    marginTop: Style.adjust(24),
  } as ViewStyle,
  heading: {
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  markdownWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  textWrapper: {
    flexShrink: 1,
  },
  copyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: Style.adjust(24),
  } as ViewStyle,
  copyBox: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: "#40C057",
    borderRadius: 8,
  } as ViewStyle,
  copyText: {
    marginRight: Style.adjust(12),
  } as ViewStyle,
});

export default memo(TapToCopy);

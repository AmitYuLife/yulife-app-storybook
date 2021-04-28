import React, { memo, useEffect, useRef, useState } from "react";
import { StyleSheet, View, ViewStyle, Vibration } from "react-native";
import Clipboard from "@react-native-community/clipboard";
import { TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Markdown from "@components/molecules/markdown/markdown";
import { Colours, Style } from "@styles";
import { CopyIcon } from "@atoms/icon/copy-icon";
interface IProps {
  heading: string;
  markdown: string;
  canCopy: boolean;
}

export const ContentItemBox = memo(function (props: IProps) {
  const [isCopied, setIsCopied] = useState(false);
  const resetCopyMessage = useRef(null);
  const { heading, markdown, canCopy } = props;

  useEffect(() => {
    resetCopyMessage.current = setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
    }, 2000);
    return () => clearTimeout(resetCopyMessage.current);
  }, [isCopied]);

  const copyMarkdown = () => {
    Clipboard.setString(markdown);
    Vibration.vibrate(100);
    setIsCopied(true);
  };

  const color = isCopied ? "#40C057" : Colours.primary.p600;

  return (
    <TouchableOpacityWithDelay onPress={copyMarkdown} disabled={!canCopy}>
      <View style={styles.wrapper}>
        <TextTemplate type={"b2b"}>{heading}</TextTemplate>
        <View style={styles.markdownWrapper}>
          <Markdown text={markdown} containerStyle={styles.markdownContainerStyle} />
          {!canCopy ? null : (
            <View style={styles.copyWrapper}>
              <View style={styles.copyText}>{isCopied ? <Copied /> : <TapTopCopy />}</View>
              <CopyIcon color={color} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
});

const TapTopCopy = memo(() => (
  <TextTemplate type="l2b" color={Colours.primary.p600}>
    Tap to copy
  </TextTemplate>
));

const Copied = memo(() => (
  <View style={styles.copyBox}>
    <TextTemplate type="l2b" color={Colours.neutral.white}>
      Copied!
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
  markdownWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  copyWrapper: {
    flexDirection: "row",
    alignItems: "center",
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
  markdownContainerStyle: {
    maxWidth: Style.adjust(Style.DEVICE_WIDTH - 100),
  } as ViewStyle,
});

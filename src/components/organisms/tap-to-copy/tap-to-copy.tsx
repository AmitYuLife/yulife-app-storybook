import React, { memo, useEffect, useRef, useState } from "react";
import { StyleSheet, View, ViewStyle, Vibration } from "react-native";
import Clipboard from "@react-native-community/clipboard";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { CopyIcon } from "@atoms/icon/copy-icon";
import { PressableWithDelay } from "@components/molecules";
import Markdown from "@components/molecules/markdown/markdown";

interface IProps {
  heading?: string;
  customCopyText?: string;
  text: string;
  canCopy: boolean;
  markdown: boolean;
}

const TapToCopy = ({ heading, customCopyText, text, canCopy, markdown }: IProps) => {
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
  };

  const color = isCopied ? "#40C057" : Colours.primary.p600;

  return (
    <PressableWithDelay onPress={copyMarkdown} disabled={!canCopy}>
      <View style={styles.wrapper}>
        {!heading ? null : (
          <View style={styles.heading}>
            <TextTemplate type={"b2b"}>{heading}</TextTemplate>
          </View>
        )}
        <View style={styles.markdownWrapper}>
          {markdown ? (
            <Markdown text={text} containerStyle={styles.markdownContainerStyle} />
          ) : (
            <TextTemplate type="b2">{text}</TextTemplate>
          )}
          {!canCopy ? null : (
            <View style={styles.copyWrapper}>
              <View style={styles.copyText}>{isCopied ? <Copied /> : <Copy />}</View>
              <CopyIcon color={color} />
            </View>
          )}
        </View>
      </View>
    </PressableWithDelay>
  );
};

const Copy = memo(() => (
  <TextTemplate type="l2b" color={Colours.primary.p600}>
    Copy
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
  heading: {
    marginBottom: Style.adjust(8),
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

export default memo(TapToCopy);

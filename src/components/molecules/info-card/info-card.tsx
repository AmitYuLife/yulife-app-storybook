import React, { ComponentProps, memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms/text/text-template";
import Markdown from "@components/molecules/markdown/markdown";
import { Hyperlink } from "@molecules";

interface IProps {
  icon: React.ReactNode;
  title?: string;
  description?: string;
  customBody?: React.ReactNode;
  hyperlink?: ComponentProps<typeof Hyperlink>;
  wrapperStyle?: ViewStyle;
  titleStyle?: ViewStyle;
}

const InfoCard = memo(({ icon, title, description, customBody, hyperlink, wrapperStyle, titleStyle }: IProps) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={styles.image}>{icon}</View>
      <View style={styles.flex}>
        {customBody ? (
          customBody
        ) : (
          <>
            {!title ? null : (
              <View style={[styles.title, titleStyle]}>
                <TextTemplate type="b2b">{title}</TextTemplate>
              </View>
            )}
            {!description ? null : <Markdown markdownStyles={markdownStyles} text={description} />}
            {!hyperlink ? null : <HyperlinkInstance {...hyperlink} />}
          </>
        )}
      </View>
    </View>
  );
});

const HyperlinkInstance = ({ title, url }: IProps["hyperlink"]) => (
  <View style={styles.hyperlinkWrapper}>
    <Hyperlink title={title} url={url} />
  </View>
);

const LINE_HEIGHT_OFFSET = -Style.adjust(8);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginTop: LINE_HEIGHT_OFFSET,
    paddingEnd: Style.adjust(8),
  } as ViewStyle,
  wrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colours.metallic.m100,
    padding: Style.adjust(16),
    flexDirection: "row",
  } as ViewStyle,
  image: {
    marginEnd: 16,
  } as ViewStyle,
  title: {
    marginBottom: 0,
    marginTop: Style.adjust(8),
  } as ViewStyle,
  hyperlinkWrapper: {
    marginTop: Style.adjust(28),
  },
});

const markdownStyles = {
  paragraph: {
    fontSize: Style.adjust(16),
  },
};

export default InfoCard;

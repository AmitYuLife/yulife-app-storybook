import React, { ComponentProps, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms/text/text-template";
import Markdown from "@components/molecules/markdown/markdown";
import { Hyperlink } from "@molecules";

interface IProps {
  icon: React.ReactNode;
  iconAlign?: "flex-start" | "center" | "flex-end";
  title?: string;
  description?: string;
  customBody?: React.ReactNode;
  hyperlink?: ComponentProps<typeof Hyperlink>;
}

const InfoCard = memo(({ icon, title, description, customBody, iconAlign = "center", hyperlink }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.image, { justifyContent: iconAlign }]}>{icon}</View>
      <View style={styles.flex}>
        {customBody ? (
          customBody
        ) : (
          <>
            {!title ? null : (
              <View style={styles.title}>
                <TextTemplate type="b2b">{title}</TextTemplate>
              </View>
            )}
            {!description ? null : <Markdown text={description} />}
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

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
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
    marginRight: 16,
  } as ViewStyle,
  title: {
    marginBottom: 8,
  } as ViewStyle,
  hyperlinkWrapper: {
    marginTop: Style.adjust(28),
  },
});

export default InfoCard;

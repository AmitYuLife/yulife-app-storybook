import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms/text/text-template";
import Markdown from "@components/molecules/markdown/markdown";

interface IProps {
  icon: React.ReactNode;
  iconAlign?: "flex-start" | "center" | "flex-end";
  title?: string;
  description?: string;
  customBody?: React.ReactNode;
}

const InfoCard = memo(({ icon, title, description, customBody, iconAlign = "center" }: IProps) => {
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
            {!description ? null : (
              <Markdown text={description} containerStyle={styles.markdownContainer} markdownStyles={markdownStyles} />
            )}
          </>
        )}
      </View>
    </View>
  );
});

const markdownStyles = {
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: Colours.neutral.n800,
  },
};

const styles = StyleSheet.create({
  markdownContainer: {},
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
});

export default InfoCard;

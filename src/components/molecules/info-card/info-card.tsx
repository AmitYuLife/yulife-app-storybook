import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms/text/text-template";

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
            {!description ? null : <TextTemplate type="b2">{description}</TextTemplate>}
          </>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
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

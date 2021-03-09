import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style, mapCoverToColor } from "@styles";
import { Icon, TextTemplate } from "@atoms";
import { CoverType } from "@graphql/_core/schema/globalTypes";

interface Props {
  title: string;
  coverType: CoverType;
}

export const ContentHead = ({ title, coverType }: Props) => {
  const { certificateBackground, certificatePrimary } = mapCoverToColor(coverType);
  return (
    <View style={styles.wrapper}>
      <Icon.YugiCertificateHead accent={certificateBackground} fill={certificatePrimary} />
      <View style={styles.titleWrapper}>
        <TextTemplate color={certificatePrimary} type="h3">
          {title}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(52),
    paddingBottom: Style.adjust(24),
    alignItems: "center",
  } as ViewStyle,
  titleWrapper: {
    marginTop: Style.adjust(20),
  } as ViewStyle,
});

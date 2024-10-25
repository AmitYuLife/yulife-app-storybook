import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style, mapCoverToColor } from "@styles";
import { Icon, TextTemplate } from "@atoms";
import { CoverType } from "@graphql/__generated";
import { POLICY_CERTIFICATE_TITLE } from "@ids";

interface Props {
  title: string;
  subtitle?: string;
  coverType: CoverType;
}

export const ContentHead = ({ title, subtitle, coverType }: Props) => {
  const { certificateBackground, certificatePrimary } = mapCoverToColor(coverType);
  return (
    <View style={styles.wrapper}>
      <Icon.YugiCertificateHead accent={certificateBackground} fill={certificatePrimary} />
      <View style={styles.titleWrapper}>
        <TextTemplate textAlign="center" color={certificatePrimary} type="h3" testID={POLICY_CERTIFICATE_TITLE}>
          {title}
        </TextTemplate>
        {!subtitle ? null : (
          <TextTemplate textAlign="center" color={certificatePrimary} type="b2">
            {subtitle}
          </TextTemplate>
        )}
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

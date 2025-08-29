import React, { memo, useMemo } from "react";
import { Image, TextTemplate } from "@atoms";
import { TEXT_TEMPLATE } from "@ids";
import { Style, StyleSheet } from "@styles";
import { View, ViewStyle } from "react-native";

interface IProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  iconUrl?: string;
  testID?: string;
}

const YugiHeader = ({ title, description, icon, iconUrl, testID }: IProps) => {
  const hasIcon = icon || iconUrl;

  const iconStyle = useMemo(() => (hasIcon ? 0.6 : 0.9), [hasIcon]);

  return (
    <View style={styles.container}>
      <View style={{ flex: iconStyle }}>
        <TextTemplate type="h3" testID={testID || TEXT_TEMPLATE(title)}>
          {title}
        </TextTemplate>
        <View style={styles.description}>
          <TextTemplate type="b2">{description}</TextTemplate>
        </View>
      </View>

      {!hasIcon ? null : (
        <View style={styles.yugiWellBeing}>
          {icon || (
            <Image source={{ uri: iconUrl }} width={Style.adjust(87)} height={Style.adjust(160)} theme="light" />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  description: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  yugiWellBeing: {
    flex: 0.4,
    alignItems: "flex-end",
  } as ViewStyle,
});

export default memo(YugiHeader);

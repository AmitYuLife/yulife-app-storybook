import { View, StyleSheet } from "react-native";
import React, { memo, useMemo } from "react";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { Source } from "react-native-fast-image";
import { MEDITATION_PARTNER_LOGO, TODAYS_MEDITATION_DESCRIPTION, TODAYS_MEDITATION_HEADER } from "@ids";

interface IProps {
  title: string;
  description: string;
  logo: {
    uri: Source;
    width: number;
    height: number;
  };
}

const MediaListHeader = ({ title, description, logo: { uri, ...logoProps } }: IProps) => {
  const logoStyles = useMemo(() => ({ ...styles.logo, ...logoProps }), [logoProps]);
  return (
    <View style={styles.wrapper}>
      {/* need to rename this testIDs later */}
      <View style={styles.header} testID={TODAYS_MEDITATION_HEADER(title)}>
        <TextTemplate type="b1b">{title}</TextTemplate>
      </View>
      <View style={styles.description}>
        <TextTemplate type="b2" textAlign="center" testID={TODAYS_MEDITATION_DESCRIPTION(description)}>
          {description}
        </TextTemplate>
        <View style={logoStyles}>
          <Image source={uri} width={logoProps.width} height={logoProps.height} testID={MEDITATION_PARTNER_LOGO} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(16),
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: Style.adjust(10),
    marginBottom: Style.adjust(10),
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    paddingLeft: Style.adjust(8),
  },
  description: {
    paddingHorizontal: Style.adjust(70),
    marginBottom: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(MediaListHeader);

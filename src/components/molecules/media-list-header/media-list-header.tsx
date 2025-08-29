import { View } from "react-native";
import React, { memo, useMemo } from "react";
import { Image, Source, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { MEDIA_LIST_DESCRIPTION, MEDIA_LIST_HEADER, PARTNER_LOGO } from "@ids";

interface IProps {
  title: string;
  description: string;
  logo?: {
    uri: Source;
    width: number;
    height: number;
  };
}

const MediaListHeader = ({ title, description, logo }: IProps) => {
  const { uri, ...logoProps } = logo ?? undefined;
  const logoStyles = useMemo(() => ({ ...styles.logo, ...logoProps }), [logoProps]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header} testID={MEDIA_LIST_HEADER(title)}>
        <TextTemplate type="b1b">{title}</TextTemplate>
      </View>
      <View style={styles.description}>
        <TextTemplate type="l1" textAlign="center" testID={MEDIA_LIST_DESCRIPTION(description)}>
          {description}
        </TextTemplate>
        {uri?.uri ? (
          <View style={logoStyles}>
            <Image source={uri} width={logoProps.width} height={logoProps.height} testID={PARTNER_LOGO} />
          </View>
        ) : null}
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
    paddingStart: Style.adjust(8),
  },
  description: {
    paddingHorizontal: Style.adjust(20),
    marginBottom: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(MediaListHeader);

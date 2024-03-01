import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";

interface IProps {
  title: string;
  titleColor: string;
  description: string;
  backgroundColor: string;
  icon: {
    id: string;
    uri: string;
  };
}

const EnterpriseRewardInfo = ({ title, titleColor, description, backgroundColor, icon }: IProps) => {
  const wrapperStyle = useMemo(
    () => ({
      ...styles.wrapper,
      backgroundColor,
    }),
    [backgroundColor]
  );
  return (
    <View style={wrapperStyle}>
      <View style={styles.image}>
        <Image source={icon} width={styles.icon.width} height={styles.icon.height} />
      </View>
      <View style={styles.title}>
        <TextTemplate type="h1" color={titleColor} lineHeight={32}>
          {title}
        </TextTemplate>
        <TextTemplate type="l2" color={"#464647"} textAlign="right">
          {description}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    flexDirection: "row",
    paddingLeft: Style.adjust(8),
    alignItems: "center",
    height: Style.adjust(60),
  },
  image: {
    top: Style.adjust(-15),
  },
  title: {
    position: "absolute",
    right: Style.adjust(8),
  },
  icon: {
    width: Style.adjust(90),
    height: Style.adjust(70),
  },
});

export default memo(EnterpriseRewardInfo);

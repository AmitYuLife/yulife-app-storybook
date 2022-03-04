import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { YugiStatusIcon } from "@atoms/icon/yugi-status-icon";
import { Image } from "@atoms";
import { Colours, Style } from "@styles";
import Markdown from "../markdown/markdown";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { RemoteImage } from "@graphql/_core/schema";

export type BannerType = "success" | "info" | "warning" | "error" | "neutral";

interface Props {
  markdown: string;
  type?: BannerType;
  remoteImage?: RemoteImage;
  wrapperStyle?: ViewStyle;
  style?: ViewStyle;
}

const InfoPanel = ({ markdown, remoteImage, type = "warning", wrapperStyle, style }: Props) => {
  const styleWrapper = useMemo(() => {
    return [styles.wrapper, getBannerTheme(type), wrapperStyle];
  }, [type, wrapperStyle]);

  const copyStyle = useMemo(() => [styles.copyWrapper], [style]);

  return (
    <View style={styleWrapper}>
      <View style={styles.imageWrapper}>
        {remoteImage ? <Image width={Style.adjust(56)} source={remoteImage} /> : <YugiStatusIcon />}
      </View>
      <View style={copyStyle}>
        <Markdown markdownStyles={markdownStyles} text={markdown} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    overflow: "hidden",
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  } as ViewStyle,
  copyWrapper: {
    paddingVertical: Style.adjust(8),
    marginLeft: Style.adjust(64),
    marginRight: Style.adjust(24),
  } as ViewStyle,
});

export default memo(InfoPanel);

function getBannerTheme(bannerType: BannerType) {
  switch (bannerType) {
    case "warning":
      return { backgroundColor: Colours.status.wa100 };
    case "success":
      return { backgroundColor: Colours.status.su100 };
    case "info":
      return { backgroundColor: Colours.status.in100 };
    case "error":
      return { backgroundColor: Colours.status.er100 };
    default:
      return { backgroundColor: Colours.neutral.n100 };
  }
}

const markdownStyles = {
  text: textTemplateStyle.b2,
  paragraph: {
    paddingVertical: Style.adjust(8),
  },
};

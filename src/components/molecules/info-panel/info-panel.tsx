import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { CloseSvg, Image } from "@atoms";
import { Colours, Style, templateTextStyles } from "@styles";
import Markdown from "../markdown/markdown";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Pressable from "../pressable/pressable";
import { Button } from "../button";
import { BUTTON_SIZES } from "../button/button.types";
import { CtaErrorSVG, CtaInformationSVG, CtaSuccessSVG, CtaWarningSVG } from "./svgs";
import { INFO_PANEL_IMAGE, PCP_LIST_DESCRIPTION, removeTextStyling, WARNING_BANNER } from "@ids";
import { RemoteImage } from "@graphql/__generated";

export type BannerType = "success" | "info" | "warning" | "error" | "neutral";

interface Props {
  markdown: string;
  type?: BannerType;
  remoteImage?: RemoteImage;
  wrapperStyle?: ViewStyle;
  titleMarkdown?: string;
  button?: {
    label: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
  };
  showIcon?: boolean;
  forceShowButton?: boolean;
  hideButtonIcon?: boolean;
  onClose?: () => void;
  containerOnPress?: () => void;
}

const InfoPanel = ({
  markdown,
  remoteImage,
  type = "info",
  wrapperStyle,
  titleMarkdown,
  button,
  forceShowButton,
  hideButtonIcon,
  showIcon,
  onClose,
  containerOnPress,
}: Props) => {
  const { light, dark, icon, buttonIcon: ButtonIcon } = useMemo(() => getBannerTheme(type), [type]);
  const hasButton = (!!button && !containerOnPress) || forceShowButton;
  const showButtonIcon = !!button && !!ButtonIcon && !hideButtonIcon;

  const additionalWrapperStyles = useMemo(() => ({ paddingBottom: Style.adjust(hasButton ? 8 : 16) }), [hasButton]);

  // Container onPress trumps all other pressables - if this is present
  // they will not be rendered.
  const InfoPanelWrapper = containerOnPress ? TouchableOpacityWithDelay : View;

  return (
    <InfoPanelWrapper
      onPress={containerOnPress}
      style={StyleSheet.flatten([
        styles.wrapper,
        { backgroundColor: light, borderColor: dark },
        wrapperStyle,
        additionalWrapperStyles,
      ])}
      testID={WARNING_BANNER(removeTextStyling(markdown))}
    >
      <View style={styles.innerWrapper}>
        <View style={styles.contentWrapper}>
          {showIcon ? (
            <View style={styles.imageWrapper}>
              <Image
                height={Style.adjust(48)}
                width={Style.adjust(48)}
                testID={INFO_PANEL_IMAGE(remoteImage?.uri)}
                source={remoteImage || icon}
              />
            </View>
          ) : null}
          <View style={StyleSheet.flatten([styles.markdownWrapper])} testID={PCP_LIST_DESCRIPTION}>
            {titleMarkdown ? <Markdown markdownStyles={titleMarkdownStyles} text={titleMarkdown} /> : null}
            <Markdown markdownStyles={textMarkdownStyles} text={markdown} />
          </View>
        </View>
        {hasButton ? (
          <View style={styles.buttonWrapper}>
            <Button
              testID="info-panel-button"
              disabled={button.disabled}
              isLoading={button.isLoading}
              translatedLabel={button.label}
              leftIcon={showButtonIcon ? <ButtonIcon /> : null}
              onPress={button.onPress}
              shadowColor="transparent"
              backgroundColor={dark}
              size={BUTTON_SIZES.NARROW}
            />
          </View>
        ) : null}
      </View>
      {onClose && !containerOnPress ? (
        <Pressable onPress={onClose} style={styles.closeWrapper} delay={1000}>
          <CloseSvg stroke={dark} size={Style.adjust(16)} />
        </Pressable>
      ) : null}
    </InfoPanelWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: Style.adjust(16),
    borderWidth: Style.adjust(1),
    paddingTop: Style.adjust(16),
    paddingLeft: Style.adjust(16),
    paddingRight: Style.adjust(20),
  } as ViewStyle,
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  markdownWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  } as ViewStyle,
  imageWrapper: {
    paddingRight: Style.adjust(10),
  },
  closeWrapper: {
    position: "absolute",
    top: Style.adjust(7),
    right: Style.adjust(7),
  },
  buttonWrapper: {
    paddingTop: Style.adjust(12),
  },
});

export default memo(InfoPanel);

const getBannerTheme = (bannerType: BannerType) => {
  switch (bannerType) {
    case "warning":
      return {
        light: Colours.status.wa100,
        dark: Colours.status.wa300,
        icon: require("@assets/icons/yugi-status-warning.png"),
        buttonIcon: CtaWarningSVG,
      };
    case "success":
      return {
        light: Colours.status.su100,
        dark: Colours.status.su300,
        icon: require("@assets/icons/yugi-status-success.png"),
        buttonIcon: CtaSuccessSVG,
      };
    case "error":
      return {
        light: Colours.status.er100,
        dark: Colours.status.er300,
        icon: require("@assets/icons/yugi-status-error.png"),
        buttonIcon: CtaErrorSVG,
      };
    default:
      return {
        light: Colours.status.in100,
        dark: Colours.status.in300,
        icon: require("@assets/icons/yugi-status-information.png"),
        buttonIcon: CtaInformationSVG,
      };
  }
};

const titleMarkdownStyles = {
  text: templateTextStyles.l1b,
  paragraph: {
    paddingTop: 0,
    paddingBottom: Style.adjust(2),
  },
};

export const textMarkdownStyles = {
  text: templateTextStyles.l1,
  paragraph: {
    paddingVertical: 0,
  },
};

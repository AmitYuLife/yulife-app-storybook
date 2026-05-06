import styles from "./generic-heading.styles";
import { IGenericHeadingProps } from "./generic-heading.types";
import { Logo } from "./subcomponents/logo";
import { BUTTON_CLOSE_HEADER, LEFT_HEADING_BUTTON } from "@ids";
import GenericHeaderRightIcon from "./subcomponents/generic-header-right-icon";
import GenericHeaderLeftIcon from "./subcomponents/generic-header-left-icon";
import { Box, Image, TextTemplate } from "@atoms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { View } from "react-native";
import { useTheme } from "@modules/themes/hooks/useTheme";
import { Colours, Style } from "@styles";
import { MobileGameTheme } from "@app/modules/themes/types";

type LogoType = NonNullable<IGenericHeadingProps["logoType"]>;
type Theme = ReturnType<typeof useTheme>["theme"];

const GenericHeading = (props: IGenericHeadingProps) => {
  const {
    heading,
    onLeftIconPress,
    onRightIconPress,
    leftIcon,
    rightIcon,
    logo,
    RightIcon,
    color,
    rightIconTestID,
    leftIconTestID,
    leftIconAccessibilityLabel,
    rightIconAccessibilityLabel,
    disabled,
    logoType,
  } = props;

  const { theme } = useTheme();
  const themeIconAssetKey = getIconThemeLogo(theme, logoType);

  return (
    <Box style={styles.wrapper} pointerEvents="box-none">
      <Box alignSelf="center" justifyContent="flex-start" style={styles.leftSection}>
        {!onLeftIconPress ? (
          <View style={styles.leftSection} />
        ) : (
          <GenericHeaderLeftIcon
            icon={leftIcon || LeftIcon.BACK}
            color={color}
            onPress={onLeftIconPress}
            testID={leftIconTestID || LEFT_HEADING_BUTTON(heading)}
            accessibilityLabel={leftIconAccessibilityLabel}
            disabled={disabled}
          />
        )}
      </Box>
      <Box
        alignSelf="center"
        justifyContent="center"
        alignContent="center"
        disableAutoAdjust={true}
        style={styles.centerSection}
      >
        {!heading ? (
          <Box
            alignItems="center"
            alignSelf="center"
            flexDirection="row"
            flexWrap="nowrap"
            height="100%"
            justifyContent="center"
            gap={8}
          >
            {themeIconAssetKey?.uri && logo === "yulife" ? (
              <>
                <Image
                  source={{ uri: themeIconAssetKey.uri }}
                  width={Style.adjust(26)}
                  height={Style.adjust(26)}
                  disableAutoAdjust={true}
                />
                <Box w={1} h={26} bg={Colours.neutral.n300} />
              </>
            ) : null}
            {logo ? <Logo logo={logo} type={logoType} /> : null}
          </Box>
        ) : typeof heading === "string" ? (
          <Box style={styles.centerTextWrapper}>
            <TextTemplate numberOfLines={1} type="b1b" color={color} accessibilityLabel={heading}>
              {heading}
            </TextTemplate>
          </Box>
        ) : (
          <Box style={styles.centerTextWrapper}>{heading}</Box>
        )}
      </Box>

      <Box alignSelf="center" justifyContent="flex-end" style={styles.rightSection}>
        {!onRightIconPress ? (
          <View style={styles.rightSection} />
        ) : (
          <GenericHeaderRightIcon
            icon={rightIcon || "CLOSE"}
            Icon={RightIcon}
            color={color}
            onPress={onRightIconPress}
            testID={rightIconTestID || BUTTON_CLOSE_HEADER(heading || logo || "button_only")}
            accessibilityLabel={rightIconAccessibilityLabel}
            disabled={disabled}
          />
        )}
      </Box>
    </Box>
  );
};

const LOGO_TYPE_TO_ASSET: Partial<Record<LogoType, keyof MobileGameTheme["assets"]>> = {
  inverted: "iconWhite",
  "logo-only": "icon",
};

const getIconThemeLogo = (theme: Theme, logoType: IGenericHeadingProps["logoType"]) => {
  const assetKey = (logoType && LOGO_TYPE_TO_ASSET[logoType]) ?? LOGO_TYPE_TO_ASSET["logo-only"];
  const icon = assetKey ? theme.assets[assetKey] : undefined;
  return icon ? icon : null;
};

export default GenericHeading;

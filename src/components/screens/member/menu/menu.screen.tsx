import React from "react";
import { Image as RNImage, ImageRequireSource, ScrollView, View } from "react-native";
import { DEBUG_MENU, MENU_ITEM, MENU_SCREEN } from "@ids";
import { CloseSvg, Pad } from "@atoms";
import Logo from "@atoms/logo";
import { TextTemplate } from "@atoms/text/text-template";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours } from "@styles";
import styles, { SCROLL_PADDING } from "./menu.screen.styles";
import { t } from "@locale";
import LottieView from "@components/molecules/lottie-view/lottie-view";

export interface IMenuLink {
  condition?: boolean;
  label: string;
  onPress: () => void;
  source?: ImageRequireSource;
  highlight?: boolean;
}

interface IProps {
  links: IMenuLink[];
  onPressClose: () => void;
  onDebugPress: (() => void) | null;
  version: string;
}

const HIT_SLOP = { left: 8, right: 8 };

const MenuScreen = ({ onDebugPress, onPressClose, links, version }: IProps) => {
  return (
    <>
      <View style={styles.wrapper} testID={MENU_SCREEN}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContentContainer}>
          <Pad height={SCROLL_PADDING} />
          <Logo scale={0.37} type="full" />
          <DebugAndVersion onDebugPress={onDebugPress} version={version} />
          <Links links={links} />
          <View style={styles.bottomPadding} />
        </ScrollView>
      </View>
      <TouchableOpacityWithDelay
        onPress={onPressClose}
        style={styles.closeWrapper}
        accessibilityLabel={t("generic_heading.right_icon.close.accessibility_label")}
      >
        <CloseSvg />
      </TouchableOpacityWithDelay>
    </>
  );
};

const Links = ({ links }: { links: IProps["links"] }) => (
  <>
    {!links
      ? null
      : links.map(({ source, onPress, label, condition, highlight }, index) =>
          !condition ? null : (
            <View key={`menu-${index}`}>
              <TouchableOpacityWithDelay
                style={[styles.itemWrapper, highlight ? styles.itemWrapperHighlight : {}]}
                onPress={onPress}
                testID={MENU_ITEM(label)}
                hitSlop={HIT_SLOP}
                accessibilityLabel={label}
              >
                {!source ? null : (
                  <View style={styles.iconWrapper}>
                    <RNImage source={source} />
                    {!highlight ? null : (
                      <LottieView
                        source={require("./assets/sparkles.json")}
                        autoPlay={true}
                        loop={true}
                        style={styles.sparks}
                      />
                    )}
                  </View>
                )}
                <TextTemplate type={highlight ? "l1b" : "l1"}>{label}</TextTemplate>
              </TouchableOpacityWithDelay>
            </View>
          )
        )}
  </>
);

const DebugAndVersion = ({ onDebugPress, version }: Pick<IProps, "onDebugPress" | "version">) => (
  <View accessible={true} accessibilityLabel={t("screens.menu.version.accessibility_label", { version })}>
    <TouchableOpacityWithDelay
      style={styles.debugVersionWrapper}
      onPress={onDebugPress}
      activeOpacity={onDebugPress ? 0.7 : 1}
      hitSlop={HIT_SLOP}
      importantForAccessibility="no"
    >
      <TextTemplate color={Colours.neutral.n400} type="l3">{`Version ${version}${
        onDebugPress ? " | " : ""
      }`}</TextTemplate>
      {!onDebugPress ? null : (
        <TextTemplate color={Colours.neutral.n400} type="l3" decoration="underline" testID={DEBUG_MENU}>
          Debug menu
        </TextTemplate>
      )}
    </TouchableOpacityWithDelay>
  </View>
);

export default MenuScreen;

import * as React from "react";
import { Image, ImageRequireSource, ScrollView, View } from "react-native";
import { Button, CloseSvg } from "@atoms";
import Logo from "@atoms/logo";
import { MENU_ITEM, MENU_SCREEN } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import { Pad } from "@atoms/index";
import styles, { SCROLL_PADDING } from "./menu.screen.styles";
import { Colours } from "@styles";
import { TextTemplate } from "@atoms/text/text-template";

export interface IMenuLink {
  condition?: boolean;
  label: string;
  onPress: () => void;
  source?: ImageRequireSource;
}

interface IProps {
  links: IMenuLink[];
  onPressClose: () => void;
  onDebugPress: (() => void) | null;
  onInvitePress: (() => void) | null;
  version: string;
  showReferralButton: boolean;
}

const HIT_SLOP = { left: 8, right: 8 };

const MenuScreen = ({ onDebugPress, onInvitePress, onPressClose, links, version, showReferralButton }: IProps) => (
  <>
    <View style={styles.wrapper} testID={MENU_SCREEN}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        <Pad height={SCROLL_PADDING} />
        <Logo scale={0.37} type="full" />
        <DebugAndVersion onDebugPress={onDebugPress} version={version} />
        <Links links={links} />
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
    <TouchableOpacityWithDelay onPress={onPressClose} style={styles.closeWrapper}>
      <CloseSvg />
    </TouchableOpacityWithDelay>
    {!showReferralButton ? null : <ReferralButton onInvitePress={onInvitePress} />}
  </>
);

interface ReferralButtonProps {
  onInvitePress: () => void;
}

const ReferralButton = ({ onInvitePress }: ReferralButtonProps) => (
  <View pointerEvents="box-none" style={styles.referralSection}>
    <View pointerEvents="none" style={styles.referralBackgroundWrapper}>
      <Image style={styles.referralImage} source={require("@assets/menu/background.png")} />
    </View>
    <View style={styles.referralButtonWrapper}>
      <Button label="Invite a colleague" size="Fill" onPress={onInvitePress} />
    </View>
  </View>
);

const Links = ({ links }: { links: IProps["links"] }) => (
  <>
    {!links
      ? null
      : links.map(({ source, onPress, label, condition }, index) =>
          !condition ? null : (
            <View key={`menu-${index}`}>
              <TouchableOpacityWithDelay
                style={styles.itemWrapper}
                onPress={onPress}
                testID={MENU_ITEM(label)}
                hitSlop={HIT_SLOP}
              >
                {!source ? null : (
                  <View style={styles.iconWrapper}>
                    <Image source={source} />
                  </View>
                )}
                <TextTemplate type="l1">{label}</TextTemplate>
              </TouchableOpacityWithDelay>
            </View>
          )
        )}
  </>
);

const DebugAndVersion = ({ onDebugPress, version }: Pick<IProps, "onDebugPress" | "version">) => (
  <TouchableOpacityWithDelay
    style={styles.debugVersionWrapper}
    onPress={onDebugPress}
    activeOpacity={onDebugPress ? 0.7 : 1}
    hitSlop={HIT_SLOP}
  >
    <TextTemplate color={Colours.neutral.n400} type="l3">{`Version ${version}${
      onDebugPress ? " | " : ""
    }`}</TextTemplate>
    {!onDebugPress ? null : (
      <TextTemplate color={Colours.neutral.n400} type="l3" underline={true}>
        Debug menu
      </TextTemplate>
    )}
  </TouchableOpacityWithDelay>
);

export default MenuScreen;

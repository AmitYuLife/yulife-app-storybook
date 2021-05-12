import * as React from "react";
import { Text } from "@atoms/index";
import Logo from "@atoms/logo";
import { MENU_ITEM, MENU_SCREEN } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import { Pad } from "@atoms/index";
import { Image, ImageRequireSource, View } from "react-native";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import styles, { CLOSE_WRAPPER_TOP_MARGIN } from "./menu.screen.styles";
import { Style } from "@styles";

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
  version: string;
}

const HIT_SLOP = { left: Style.DEVICE_WIDTH / 3 };

const MenuScreen = ({ onDebugPress, onPressClose, links, version }: IProps) => (
  <>
    <View style={styles.wrapper} testID={MENU_SCREEN}>
      <Pad height={CLOSE_WRAPPER_TOP_MARGIN} />
      <View style={styles.logoWrapper}>
        <Logo scale={0.7} type="full" />
      </View>
      {!links
        ? null
        : links.map(({ source, onPress, label, condition }, index) =>
            !condition ? null : (
              <TouchableOpacityWithDelay
                key={`menu-${index}`}
                style={styles.itemWrapper}
                onPress={onPress}
                testID={MENU_ITEM(label)}
                hitSlop={HIT_SLOP}
              >
                {!source ? null : (
                  <View style={styles.iconWrapper}>
                    <Image style={styles.logo} source={source} />
                  </View>
                )}
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>{`${label}  `}</Text>
                </View>
              </TouchableOpacityWithDelay>
            )
          )}
    </View>
    <View style={styles.versionTextWrapper}>
      {!onDebugPress ? null : (
        <TouchableOpacityWithDelay onPress={onDebugPress}>
          <Text style={styles.debugText}>debug</Text>
        </TouchableOpacityWithDelay>
      )}
      <Text style={styles.versionText}>{version}</Text>
    </View>
    <GenericHeadingAbsolute onRightIconPress={onPressClose} />
  </>
);

export default MenuScreen;

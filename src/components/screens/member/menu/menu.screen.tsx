import { Logo, Text } from "@atoms/index";
import { MENU_ITEM, MENU_SCREEN } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import * as React from "react";
import { SFC } from "react";
import { Image, ImageRequireSource, TouchableOpacity, View } from "react-native";
import assets from "./assets";
import styles from "./menu.screen.styles";

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

const MenuScreen: SFC<IProps> = ({ onDebugPress, onPressClose, links, version }) => (
  <>
    <View style={styles.wrapper} testID={MENU_SCREEN}>
      <TouchableOpacity style={styles.closeWrapper} onPress={onPressClose}>
        <Image resizeMode="contain" style={styles.close} source={assets.close} />
      </TouchableOpacity>
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
  </>
);

export default MenuScreen;

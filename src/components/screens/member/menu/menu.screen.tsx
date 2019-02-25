import { TouchableOpacityWithState } from "@molecules/index";
import * as React from "react";
import { SFC } from "react";
import { Image, ImageRequireSource, TouchableOpacity, View } from "react-native";
import { Text } from "../../../atoms";
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
    version: string;
}

const MenuScreen: SFC<IProps> = ({ onPressClose, links, version }) => (
    <>
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.closeWrapper} onPress={onPressClose}>
                <Image resizeMode="contain" style={styles.close} source={assets.close} />
            </TouchableOpacity>
            <View style={styles.logoWrapper}>
                <Image resizeMode="contain" style={styles.logo} source={assets.logo} />
            </View>
            {!links
                ? null
                : links.map(({ source, onPress, label, condition }, index) =>
                      !condition ? null : (
                          <TouchableOpacityWithState key={`menu-${index}`} style={styles.itemWrapper} onPress={onPress}>
                              {source && (
                                  <View style={styles.iconWrapper}>
                                      <Image style={styles.logo} source={source} />
                                  </View>
                              )}
                              <View style={styles.textWrapper}>
                                  <Text style={styles.text} bold={true}>{`${label}  `}</Text>
                              </View>
                          </TouchableOpacityWithState>
                      )
                  )}
        </View>
        <View style={styles.versionTextWrapper}>
            <Text style={styles.versionText}>{version}</Text>
        </View>
    </>
);

export default MenuScreen;

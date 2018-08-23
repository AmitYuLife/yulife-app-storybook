import * as React from "react";
import { SFC } from "react";
import { View, TouchableOpacity, Image, ImageRequireSource, StatusBar } from "react-native";
import styles from "./menu.screen.styles";
import { Text } from "../../../atoms";
import assets from "./assets";

export interface IMenuLink {
    source?: ImageRequireSource;
    onPress: () => void;
    label: string;
    condition: boolean;
}

interface IProps {
    links: IMenuLink[];
    onPressClose: () => void;
}

const MenuScreen: SFC<IProps> = ({ onPressClose, links }) => (
    <>
        <StatusBar />
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.closeWrapper} onPress={onPressClose}>
                <Image resizeMode="contain" style={styles.close} source={assets.close} />
            </TouchableOpacity>
            <View style={styles.logoWrapper}>
                <Image resizeMode="contain" style={styles.logo} source={assets.logo} />
            </View>
            {!links
                ? null
                : links.map(
                      ({ source, onPress, label, condition }, index) =>
                          !condition ? null : (
                              <TouchableOpacity key={index} style={styles.itemWrapper} onPress={onPress}>
                                  {source && (
                                      <View style={styles.iconWrapper}>
                                          <Image style={styles.logo} source={source} />
                                      </View>
                                  )}
                                  <View style={styles.textWrapper}>
                                      <Text style={styles.text} bold={true}>{`${label}  `}</Text>
                                  </View>
                              </TouchableOpacity>
                          ),
                  )}
        </View>
    </>
);

export default MenuScreen;

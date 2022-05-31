import { TextTemplate } from "@atoms/index";
import * as React from "react";
import { Image, View } from "react-native";
import { TouchableOpacityWithDelay } from "@molecules";
import assets from "./assets";
import styles from "./item.styles";

interface IProps {
  name: string;
  onPressInfo: () => void;
}

const ItemTitle = ({ name, onPressInfo }: IProps) => (
  <View>
    <TouchableOpacityWithDelay style={styles.infoButton} onPress={onPressInfo}>
      <TextTemplate type="b2b">{name}</TextTemplate>
      <Image style={styles.image} source={assets.infoIcon} />
    </TouchableOpacityWithDelay>
  </View>
);

export default React.memo(ItemTitle);

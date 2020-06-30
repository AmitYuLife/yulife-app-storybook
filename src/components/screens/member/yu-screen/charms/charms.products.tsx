import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "./charms.products.styles";
import Charm from "../svg/charms";
import { TextWithBoldText } from "@components/molecules";
import { Style } from "@styles";

interface IProps {
  icon: string;
  description: string;
  earnRate: number;
  active?: boolean;
  textPosition: number;
}

function CharmsProducts({ description, icon, earnRate, active = true, textPosition }: IProps) {
  const viewIconWrapperMargin = 16;
  return (
    <View style={styles.charmWrapper}>
      <View style={{ marginHorizontal: viewIconWrapperMargin, position: "absolute" }}>
        <Charm
          active={active}
          icon={icon}
          rateViewStyle={styles.rateView}
          rateTextStyle={StyleSheet.flatten(styles.rateText)}
          earnRate={earnRate}
          showEarnRate={true}
          height={Style.adjust(95)}
          width={Style.adjust(95)}
        />
      </View>
      <View style={{ marginLeft: textPosition }}>
        <TextWithBoldText style={styles.charmDescription} value={description} />
      </View>
    </View>
  );
}

export default CharmsProducts;

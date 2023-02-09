import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { GetActiveBuffsOverlay_getActiveBuffsOverlay } from "@graphql/_core/schema";
import { Image, TextTemplate } from "@atoms";
import { PressableWithDelay } from "@molecules";
import { Style, Colours } from "@styles";
import styles from "./active-buffs.styles";
import Equipment from "./equipment";
import { t } from "@locale";

interface IProps {
  activeBuffs: GetActiveBuffsOverlay_getActiveBuffsOverlay;
  closeOverlay?: () => void;
}

const ActiveBuffs = ({ activeBuffs, closeOverlay }: IProps) => {
  const { icon: powerUpIcon, image: headImage, title, equipment } = activeBuffs;

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <PressableWithDelay onPress={closeOverlay} style={styles.pressable}>
          <Image style={styles.headImage} width={Style.adjust(407)} height={Style.adjust(158)} source={headImage} />
          <View style={styles.titleWrapper}>
            <TextTemplate type="h2" color={Colours.neutral.white} textAlign="center">
              {title}
            </TextTemplate>
            <Image style={styles.powerUpIcon} width={Style.adjust(40)} height={Style.adjust(40)} source={powerUpIcon} />
          </View>
          {equipment.map((item, index) => (
            <Equipment key={index} item={item} />
          ))}
        </PressableWithDelay>
      </ScrollView>
      <PressableWithDelay onPress={closeOverlay}>
        <LinearGradient
          useAngle={true}
          angle={0}
          colors={["rgba(0,0,0,0.73)", "rgba(0,0,0,0.73)", "rgba(0,0,0,0)"]}
          locations={[0, 0.2, 0.8]}
          style={styles.gradient}
        >
          <TextTemplate type="b2b" color={Colours.neutral.white} textAlign="center">
            {t("modals.active_buffs.tap_anywhere")}
          </TextTemplate>
        </LinearGradient>
      </PressableWithDelay>
    </View>
  );
};

export default memo(ActiveBuffs);

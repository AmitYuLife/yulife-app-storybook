import React from "react";
import { Image, View, ListRenderItemInfo } from "react-native";
import { Text } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import { Style } from "@styles/index";

import styles from "./intro-yuscreen.styles";
import { data, images } from "./intro-yuscreen.helper";

interface IProps {
  setYuscreenIntroShown: () => void;
}

export function YuScreenIntro(props: IProps) {
  return <OnboardingSwiper data={data} renderItem={renderItem} onClose={props.setYuscreenIntroShown} />;
}

function renderItem({ item, index }: ListRenderItemInfo<OnboardingSwiperData>) {
  return (
    <View style={{ height: Style.DEVICE_HEIGHT, width: Style.DEVICE_WIDTH }}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={images[index]} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
    </View>
  );
}

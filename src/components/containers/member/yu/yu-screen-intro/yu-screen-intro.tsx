import React from "react";
import { Image, View, ListRenderItemInfo } from "react-native";
import { Text } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import { Style } from "@styles/index";
import styles from "./yu-screen-intro.styles";
import { data, images } from "./yu-screen-intro.helper";
import { useDispatch } from "react-redux";
import { setYuscreenIntroShown } from "@redux/onboarding/onboarding.actions";

export function YuScreenIntro() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setYuscreenIntroShown());

  return <OnboardingSwiper data={data} renderItem={renderItem} onClose={handleClose} />;
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

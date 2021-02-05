import React from "react";
import { Image, View, ListRenderItemInfo } from "react-native";
import { Text } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import styles from "./yu-screen-intro.styles";
import { data, images } from "./yu-screen-intro.helper";
import { useDispatch } from "react-redux";
import { setYuscreenIntroShown } from "@redux/onboarding/onboarding.actions";

export function YuScreenIntro() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setYuscreenIntroShown());

  return <OnboardingSwiper type="yuscreen" data={data} renderItem={renderItem} onClose={handleClose} />;
}

function renderItem({ item, index }: ListRenderItemInfo<OnboardingSwiperData>) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={images[index]} />
      </View>
      <Text bold={true} style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
    </View>
  );
}

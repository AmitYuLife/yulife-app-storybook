import { Image } from "@atoms";
import { Button } from "@molecules";
import { YuScreenCarousel_items as CarouselItem } from "@graphql/_core/schema";
import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import { BUTTON_HEIGHT, CARD_BACKGROUND_IMAGE_HEIGHT, CARD_WIDTH, styles } from "./styles";
import { CAROUSEL_CARD } from "@ids";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";

interface Props extends CarouselItem {
  marginRight: number;
}

export const CarouselCard: FC<Props> = memo(({ button, image, marginRight }) => {
  const handlePress = useYuScreenOnPressHandler({ event: button?.event, onPress: button?.onPress });

  return (
    <View style={StyleSheet.flatten([styles.carouselCardWrapper, { marginRight }])}>
      <View style={styles.carouselCard} testID={CAROUSEL_CARD}>
        <Image width={CARD_WIDTH} height={CARD_BACKGROUND_IMAGE_HEIGHT} resizeMode="contain" source={image} />
      </View>
      {button ? (
        <View style={styles.carouselCardButton}>
          <View style={styles.buttonWrapper}>
            <Button height={BUTTON_HEIGHT} size="Fill" label={button.label} onPress={handlePress} />
          </View>
        </View>
      ) : null}
    </View>
  );
});

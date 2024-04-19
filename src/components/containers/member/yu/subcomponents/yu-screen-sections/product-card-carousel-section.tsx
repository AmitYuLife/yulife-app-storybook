import React from "react";
import { View } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";

interface IProductCardCarouselSection {
  id: string;
}

export const ProductCardCarouselSection = ({ id }: IProductCardCarouselSection) => {
  return (
    <View key={id} style={style}>
      <TextTemplate type="h2" textAlign="center">
        Product Card Carousel
      </TextTemplate>
    </View>
  );
};

const style = {
  padding: Style.adjust(24),
};

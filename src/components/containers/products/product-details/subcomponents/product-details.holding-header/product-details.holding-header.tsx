import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { ContentItemProductDetailsHoldingHeaderFragment } from "@graphql/__generated";
import { Image } from "./image";
import { Title } from "./title";
import { Description } from "./description";
import LinearGradient from "react-native-linear-gradient";
import { ProcessingTimer } from "@components/molecules";

import { StyleSheet } from "@styles";
export const ProductDetailsHoldingHeader = memo((props: ContentItemProductDetailsHoldingHeaderFragment) => {
  const { image, linearGradient, title, timer, description } = props;

  return (
    <View>
      {linearGradient ? (
        <LinearGradient
          colors={linearGradient.colors}
          style={styles.gradient}
          start={linearGradient.start}
          end={linearGradient.end}
        />
      ) : null}
      <Image image={image} />
      <Title title={title} />
      <Description description={description} />
      <ProcessingTimer secondsUntilTarget={timer.secondsUntilTarget} />
    </View>
  );
});

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});

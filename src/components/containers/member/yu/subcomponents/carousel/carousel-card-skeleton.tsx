import { SkeletonLoading } from "@atoms";
import React, { FC, memo } from "react";
import { StyleSheet } from "react-native";
import { styles } from "./styles";

interface Props {
  marginRight: number;
}

export const CarouselCardSkeleton: FC<Props> = memo(({ marginRight }) => (
  <SkeletonLoading style={StyleSheet.flatten([styles.carouselCardWrapper, { marginRight }])} />
));

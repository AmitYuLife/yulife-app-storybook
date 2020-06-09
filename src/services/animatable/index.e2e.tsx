import * as Animatable from "react-native-animatable";
import React, { FC, ComponentProps } from "react";
import { Image } from "react-native";

type Props = ComponentProps<Animatable.Image>;

export const AnimatableImage: FC<Props> = ({ style, source }) => <Image style={style} source={source} />;

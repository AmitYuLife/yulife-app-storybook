import React from "react";
import { Image as RNImage, ImageBackground as RNImageBackground } from "react-native";

export const Image = RNImage;
export const ImageBackground = RNImageBackground;

// Type stubs
export const ImageSource = undefined;
export const ImageStyle = undefined;
export const ImageContentFit = { cover: "cover", contain: "contain", fill: "fill", none: "none", scaleDown: "scale-down" };
export const ImageContentPosition = { center: "center" };

export default { Image, ImageBackground, ImageSource, ImageStyle, ImageContentFit, ImageContentPosition };

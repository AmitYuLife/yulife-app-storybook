import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "./button";
import { withProvider } from "../../storybook/withProvider";
import { ImageButton } from "./image-button/image.button";
import { Colours, Style } from "@styles";
import { LinkButton } from "./link-button/link-button";
import { SecondaryButton } from "./secondary-button/secondary-button";
import { TertiaryButton } from "./tertiary-button/tertiary-button";

const voidFunc: () => void = () => null;

const storyWrapperStyle = {
  width: Style.DEVICE_WIDTH,
  paddingHorizontal: 32,
  backgroundColor: Colours.neutral.n50,
  flex: 1,
  justifyContent: "space-around",
  alignItems: "center",
  maxHeight: 400,
} as ViewStyle;

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("Primary", () => {
    return (
      <View style={storyWrapperStyle}>
        <Button size="Small" onPress={voidFunc} label="Small" />
        <Button size="Medium" onPress={voidFunc} label="Medium" />
        <Button onPress={voidFunc} label="Large" />
        <Button disabled={true} onPress={voidFunc} label="Disabled" />
      </View>
    );
  })
  .add("Secondary", () => {
    return (
      <View style={storyWrapperStyle}>
        <SecondaryButton size="Small" onPress={voidFunc} label="Small" />
        <SecondaryButton size="Medium" onPress={voidFunc} label="Medium" />
        <SecondaryButton onPress={voidFunc} label="Large" />
        <SecondaryButton disabled={true} onPress={voidFunc} label="Disabled" />
      </View>
    );
  })
  .add("Tertiary", () => {
    return (
      <View style={storyWrapperStyle}>
        <TertiaryButton size="Small" onPress={voidFunc} label="Small" />
        <TertiaryButton size="Medium" onPress={voidFunc} label="Medium" />
        <TertiaryButton onPress={voidFunc} label="Large" />
        <TertiaryButton disabled={true} onPress={voidFunc} label="Disabled" />
      </View>
    );
  })
  .add("Link", () => {
    return (
      <View>
        <LinkButton onPress={voidFunc} label="Link" />
        <LinkButton disabled={true} onPress={voidFunc} label="Disabled" />
      </View>
    );
  })
  .add("ImageButton", () => {
    return (
      <View style={storyWrapperStyle}>
        <ImageButton
          onPress={voidFunc}
          shadowColor={"#2937DF"}
          backgroundColor="transparent"
          backgroundGradient={["#3AB5EA", "#5064E4"]}
          icon="calm"
        />
        <View style={{ height: 50 }} />
        <ImageButton onPress={voidFunc} shadowColor={"#C9C9C9"} backgroundColor="white" icon="headspace" />
      </View>
    );
  });

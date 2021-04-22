import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "./button";
import { withProvider } from "../../storybook/withProvider";
import { LinkButton } from "./link-button/link-button";
import { SecondaryButton } from "./secondary-button/secondary-button";

const voidFunc: () => void = () => null;

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("Primary", () => {
    return (
      <View>
        <Button type="Primary" size="Small" onPress={voidFunc} label="Small" />
        <Button type="Primary" size="Medium" onPress={voidFunc} label="Medium" />
        <Button type="Primary" onPress={voidFunc} label="Large" />
        <Button disabled={true} type="Primary" onPress={voidFunc} label="Disabled" />
      </View>
    );
  })
  .add("Secondary", () => {
    return (
      <View>
        <SecondaryButton size="Small" onPress={voidFunc} label="Small" />
        <SecondaryButton size="Medium" onPress={voidFunc} label="Medium" />
        <SecondaryButton onPress={voidFunc} label="Large" />
        <SecondaryButton disabled={true} onPress={voidFunc} label="Disabled" />
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
  });

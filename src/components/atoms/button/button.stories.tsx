import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "./button";
import { withProvider } from "../../storybook/withProvider";

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
        <Button type="Secondary" size="Small" onPress={voidFunc} label="Small" />
        <Button type="Secondary" size="Medium" onPress={voidFunc} label="Medium" />
        <Button type="Secondary" onPress={voidFunc} label="Large" />
        <Button disabled={true} type="Secondary" onPress={voidFunc} label="Disabled" />
      </View>
    );
  })
  .add("Link", () => {
    return (
      <View>
        <Button type="Link" onPress={voidFunc} label="Link" />
        <Button disabled={true} type="Link" onPress={voidFunc} label="Disabled" />
      </View>
    );
  });

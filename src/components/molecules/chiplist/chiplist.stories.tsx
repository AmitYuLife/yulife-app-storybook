import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { withProvider } from "../../storybook/withProvider";
import ChipList from "./chiplist";
import { ChipProps } from "@atoms/chip/chip";

const voidFunc: () => void = () => null;
const items: ChipProps[] = [
  {
    id: "test",
    label: "Test ttttesttttt",
    active: Math.random() > 0.5,
    iconType: "image",
    icon: "ears-nose-throat",
    onPress: voidFunc,
  },
  {
    id: "test",
    label: "Test ttttesttttt",
    active: Math.random() > 0.5,
    iconType: "image",
    icon: "ears-nose-throat",
    onPress: voidFunc,
  },
  {
    id: "test",
    label: "Test ttttesttttt",
    active: Math.random() > 0.5,
    iconType: "image",
    icon: "ears-nose-throat",
    onPress: voidFunc,
  },
  {
    id: "test",
    label: "Test ttttesttttt",
    active: Math.random() > 0.5,
    iconType: "image",
    icon: "ears-nose-throat",
    onPress: voidFunc,
  },
  {
    id: "test",
    label: "Test ttttesttttt",
    active: Math.random() > 0.5,
    iconType: "image",
    icon: "ears-nose-throat",
    onPress: voidFunc,
  },
  {
    id: "test",
    label: "Test ttttesttttt",
    active: Math.random() > 0.5,
    iconType: "image",
    icon: "ears-nose-throat",
    onPress: voidFunc,
  },
  {
    id: "test",
    label: "Test ttttesttttt",
    active: Math.random() > 0.5,
    iconType: "image",
    icon: "ears-nose-throat",
    onPress: voidFunc,
  },
];

storiesOf("ChipList", module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .addDecorator((g: () => React.ReactNode) => <View style={{ flex: 1, justifyContent: "center" }}>{g()}</View>)
  .add("Two column", () => {
    return <ChipList items={items} columns={2} />;
  });

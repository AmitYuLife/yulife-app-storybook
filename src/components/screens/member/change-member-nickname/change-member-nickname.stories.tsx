import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChangeMemberNickname } from "@components/screens";

let voidFunc: () => null;

storiesOf("ChangeMemberNick", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => <View>{g()}</View>)
  .add("With button", () => <ChangeMemberNickname enableButton={true} onPress={voidFunc} />)
  .add("Without button", () => <ChangeMemberNickname enableButton={false} onPress={voidFunc} />)
  .add("Button loading", () => <ChangeMemberNickname isLoading={true} enableButton={true} onPress={voidFunc} />);

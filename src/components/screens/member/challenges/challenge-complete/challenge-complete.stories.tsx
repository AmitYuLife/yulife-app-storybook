import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import ChallengeCompleteScreen from "./challenge-complete.screen";

const voidFunc: () => void = () => null;

// this breaks because of the call to logger
storiesOf("Challenge Complete Screen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => <View style={styles.container}>{g()}</View>)
  .add("default", () => <ChallengeCompleteScreen isLoading={false} onCtaPress={voidFunc} />);

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });

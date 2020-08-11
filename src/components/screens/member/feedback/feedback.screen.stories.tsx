import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { FeedbackScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("FeedbackScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => <View style={styles.container}>{g()}</View>)
  .add("default", () => (
    <FeedbackScreen
      isSubmitting={false}
      onCancel={voidFunc}
      onRatingSelect={voidFunc}
      onSubmit={voidFunc}
      rating={50}
    />
  ));

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });

import React from "react";
import { Colours, Style } from "@styles";
import { SafeAreaView, ScrollView, View, ViewStyle, StyleSheet } from "react-native";
import { GenericHeading, Button } from "@atoms";

interface Props {
  children: React.ReactNode;
  buttonTitle: string;
  buttonAction: () => void;
  onLeftIconPress: () => void;
}

export function ScrollableLayout(props: Props) {
  const { children, buttonTitle, buttonAction, onLeftIconPress } = props;
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading isBeta={true} logo="yulife" onLeftIconPress={onLeftIconPress} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.padTop} />
          {children}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.button}>
        <Button label={buttonTitle} onPress={buttonAction} type="Primary" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: Colours.products.fib.n800,
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  },
  button: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
  } as ViewStyle,
  padTop: {
    height: 16,
  } as ViewStyle,
});

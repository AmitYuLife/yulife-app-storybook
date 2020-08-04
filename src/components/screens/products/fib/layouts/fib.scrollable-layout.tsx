import React from "react";
import { Colours, Style } from "@styles";
import { SafeAreaView, ScrollView, View, ViewStyle, StyleSheet } from "react-native";
import { GenericHeading, MinimalButton } from "@atoms";

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
        <MinimalButton
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          height={53}
          title={buttonTitle}
          titleStyle={{
            fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
            fontSize: 16,
          }}
          onPress={buttonAction}
          color="white"
          borderRadius={50}
        />
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

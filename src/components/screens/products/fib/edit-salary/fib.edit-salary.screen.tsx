import React, { memo, useState } from "react";
import { View, StyleSheet, SafeAreaView, ViewStyle } from "react-native";
import { GenericHeading, Text } from "@atoms";
import { Style, Colours } from "@styles";
import { FibEditSalaryInput } from "./fib.edit-salary-input";
import MinimalButton from "@atoms/button/minimalButton";

interface IEditSalaryScreen {
  onNavigateBack: () => void;
}

export const FibEditSalaryScreen = memo(function (props: IEditSalaryScreen) {
  const { onNavigateBack } = props;
  const [isSalaryDescriptionVisible, setSalaryDescriptionVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  if (isSalaryDescriptionVisible) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading heading="Salary" onLeftIconPress={() => setSalaryDescriptionVisibility(false)} />
        <View style={styles.mainContent}>
          <Text style={styles.text}>
            Your gross annual earned income for tax purposes. It does not include unearned income such as investment
            income.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading heading="Salary" onLeftIconPress={onNavigateBack} />
      <View style={styles.mainContent}>
        <Text style={styles.text}>
          Because we designed this product based on your current salary we will need your{" "}
        </Text>
        <Text
          onPress={() => setSalaryDescriptionVisibility(true)}
          style={StyleSheet.flatten([styles.link, styles.text])}
        >
          annual gross salary.
        </Text>
        <View style={styles.inputWrapper}>
          <FibEditSalaryInput value={inputValue} onChange={setInputValue} />
        </View>
      </View>
      <View style={styles.button}>
        <MinimalButton
          disabled={!inputValue}
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          height={53}
          title="Done"
          onPress={onNavigateBack}
          color="white"
          borderRadius={50}
        />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  },
  mainContent: {
    marginTop: 28,
    paddingHorizontal: Style.adjust(32),
  },
  link: {
    color: Colours.darkHotPink,
    textDecorationLine: "underline",
  },
  inputWrapper: {
    marginVertical: Style.adjust(50),
    marginHorizontal: Style.adjust(60),
  },
  text: {
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    lineHeight: Style.adjust(30),
  },
  button: {
    position: "absolute",
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
    bottom: 0,
  } as ViewStyle,
});

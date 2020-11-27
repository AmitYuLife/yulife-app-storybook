import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import * as Animatable from "react-native-animatable";
import { Heading, Text } from "@atoms";
import { Style, Colours } from "@styles";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { FibIntroductionToLifeInsuranceSvg } from "./fib-introduction-to-life-insurance-svg";
import { ScrollableLayout } from "@molecules";

export interface IFibIntroductionScreenProps {
  navigateToYuScreen: () => void;
  avatar: string;
  onNavigateToSalary: () => void;
  firstName: string;
}

export const FibIntroductionScreen = memo(function (props: IFibIntroductionScreenProps) {
  const { navigateToYuScreen, onNavigateToSalary, firstName, avatar } = props;

  return (
    <ScrollableLayout
      buttonAction={onNavigateToSalary}
      onLeftIconPress={navigateToYuScreen}
      buttonTitle="Continue"
      logo={"yulife"}
      isBeta={false}
    >
      <Animatable.View duration={1000} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
        <View style={styles.imagesWrapper}>
          <View style={styles.avatarWrapper}>
            <Avatar sizeMultiplier={0.6} avatarUrl={avatar} isAvatarCreated={true} />
          </View>
          <View style={styles.imageWrapper}>
            <FibIntroductionToLifeInsuranceSvg />
          </View>
        </View>
        <Heading label={`Welcome, ${firstName}`} style={styles.header} />
        <View style={styles.mainContent}>
          <Text style={styles.text}>This life insurance protects your family from the loss of your income.</Text>
          <Text style={styles.text}>This means every package is unique to you and your current earnings.</Text>
          <Text style={styles.text}>In order to create your package we will need you to enter your salary.</Text>
        </View>
      </Animatable.View>
    </ScrollableLayout>
  );
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  imagesWrapper: {
    alignItems: "center",
    marginVertical: 12,
  },
  avatarWrapper: {
    position: "absolute",
    zIndex: 1,
    bottom: 0,
  },
  mainContent: {
    marginVertical: 16,
    paddingHorizontal: Style.adjust(32),
  },
  imageWrapper: {
    alignSelf: "center",
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginVertical: 12,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  },
  header: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.products.fib.n800,
    marginTop: 16,
    marginHorizontal: 32,
    textAlign: "left",
  },
});

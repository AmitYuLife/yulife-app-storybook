import React, { memo } from "react";
import { View, StyleSheet, ScrollView, ViewStyle, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import { GenericHeading, Heading, Text } from "@atoms";
import { Style, Colours } from "@styles";
import MinimalButton from "@atoms/button/minimalButton";
import { IAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { FibIntroductionToLifeInsuranceSvg } from "./fib-introduction-to-life-insurance-svg";

export interface IFibIntroductionScreenProps {
  navigateToYuScreen: () => void;
  avatar: IAvatar;
  onNavigateToSalary: () => void;
  userName: string;
}

export const FibIntroductionScreen = memo(function (props: IFibIntroductionScreenProps) {
  const { navigateToYuScreen, onNavigateToSalary, userName, avatar } = props;

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading heading="Life Insurance" rightIcon={{ icon: "CLOSE" }} onRightIconPress={navigateToYuScreen} />
        <ScrollView>
          <Animatable.View duration={1000} animation="fadeIn" style={{ flex: 1 }}>
            <View style={styles.imagesWrapper}>
              <View style={styles.avatarWrapper}>
                <Avatar
                  sizeMultiplier={0.6}
                  avatar={avatar}
                  isAvatarCreated={true}
                  avatarFromLocal={avatar}
                  loading={false}
                />
              </View>
              <View style={styles.imageWrapper}>
                <FibIntroductionToLifeInsuranceSvg />
              </View>
            </View>
            <Heading label={`Welcome ${userName}`} style={styles.header} />
            <View style={styles.mainContent}>
              <Text style={styles.text}>This life insurance protects your family from the loss of your income.</Text>
              <Text style={styles.text}>This means every package is unique to you and your current earnings.</Text>
              <Text style={styles.text}>In order to create your packages we will need you to enter your salary.</Text>
            </View>
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.button}>
        <MinimalButton
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          height={53}
          title="Enter Salary"
          titleStyle={{
            fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
            fontSize: 16,
          }}
          onPress={onNavigateToSalary}
          color="white"
          borderRadius={50}
        />
      </View>
    </>
  );
});

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
    textAlign: "center",
    marginVertical: 12,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  },
  button: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: 90,
  } as ViewStyle,
  header: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.products.fib.n800,
    marginTop: 16,
    marginHorizontal: 32,
  },
});

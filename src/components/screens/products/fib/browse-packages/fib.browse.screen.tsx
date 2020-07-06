import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { GenericHeading } from "@atoms";
import { Style, Colours } from "@styles";
import { IAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { AvatarAndDescription } from "./subcomponents";
import FIBHowItWorks from "./how-it-works/how-it-works";
import { ContinueButton } from "./continue-button/continue-button";
import { Package } from "./fib.browse.types";
import { Faqs } from "./subcomponents/faqs/faqs";

interface IFibBrowseScreenProps {
  fibPackage: Package;
  onNavigateBack: () => void;
  currentEarnRate: number;
  avatar: IAvatar;
  faqs: ComponentProps<typeof Faqs>["items"];
}

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const { onNavigateBack, avatar, currentEarnRate, fibPackage, faqs } = props;
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.headingWrapper}>
          <GenericHeading heading="browse packages" onLeftIconPress={onNavigateBack} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
          <AvatarAndDescription avatar={avatar} fibPackage={fibPackage} currentEarnRate={currentEarnRate} />
          <FIBHowItWorks
            coverTypeColor={Colours.products.fib.common}
            coverType={"common"}
            paragraphs={"In the event of death, your loved ones will receive 25% of your future earnings from the date of death until age 70 (based on your current salary)./nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end./nThis is paid as a single payment.".split(
              "/n"
            )}
          />
          <Faqs items={faqs} />
        </ScrollView>
      </View>
      <ContinueButton onNavigateBack={onNavigateBack} />
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    backgroundColor: "#fafafe",
  },
  headingWrapper: {
    position: "absolute",
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1,
  },
  scrollView: {
    paddingTop: Platform.select({ ios: 46, android: 56 }),
    paddingBottom: 96,
  },
});

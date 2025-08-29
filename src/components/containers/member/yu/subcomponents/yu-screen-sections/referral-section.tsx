import React from "react";
import { Platform, View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { Image, TextTemplate } from "@atoms";
import Markdown from "@components/molecules/markdown/markdown";
import { SecondaryButton } from "@components/molecules";
import { Navigation } from "@navigation/main";
import { ROUTES, bottomTabs } from "@navigation/constants";
import { ShareIcon } from "@atoms/icon/share-icon";
import { REFERRAL_BUTTON, REFERRAL_IMAGE } from "@ids";
import { ReferralSection as IReferralSection } from "@redux/yu-screen/yu-screen.types";

export const ReferralSection = ({ sectionInstanceId, content }: IReferralSection) => {
  const { illustration, title, markdown, buttonLabel, buttonIcon } = content || {};

  if (!title || !markdown || !buttonLabel) {
    return null;
  }

  const Icon = buttonIcon?.uri ? (
    <Image width={Style.adjust(24)} height={Style.adjust(24)} source={buttonIcon} suppressLoadingUi={true} />
  ) : (
    <ShareIcon width={Style.adjust(24)} height={Style.adjust(24)} color={Colours.neutral.white} />
  );

  return (
    <View key={sectionInstanceId} style={styles.wrapper}>
      {!illustration?.image.uri ? null : (
        <Image
          width={Style.adjust(illustration.width)}
          height={Style.adjust(illustration.height)}
          source={illustration.image}
          resizeMode="contain"
          style={styles.imageWrapper}
          testID={REFERRAL_IMAGE}
        />
      )}
      <View style={styles.header}>
        <TextTemplate type="b2b" textAlign="center">
          {title}
        </TextTemplate>
        <Markdown text={markdown} markdownStyles={markdownStyles} />
      </View>
      <SecondaryButton
        onPress={onPress}
        size="Fill"
        translatedLabel={buttonLabel}
        wrapperStyle={styles.button}
        leftIcon={Icon}
        testID={REFERRAL_BUTTON(buttonLabel)}
      />
    </View>
  );
};

const onPress = () =>
  Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.referralInformation,
      name: ROUTES.referralInformation,
      passProps: { sourceId: ROUTES.yuScreen },
      options: {
        bottomTabs,
        sideMenu: {
          left: {
            enabled: false,
            visible: false,
          },
        },
      },
    },
  });

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: Style.adjust(20),
    paddingHorizontal: Style.adjust(40),
    display: "flex",
    alignItems: "center",
  },
  imageWrapper: {
    marginBottom: Style.adjust(16),
  },
  header: {
    width: "100%",
  },
  button: {
    marginTop: Style.adjust(16),
  },
});

const markdownStyles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  imageWrapper: {
    width: Style.adjust(16),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    bottom: Style.adjust(
      Platform.select({
        ios: -5,
        android: -2,
      })
    ),
  },
});

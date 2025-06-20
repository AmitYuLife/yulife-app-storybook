import React, { memo, useMemo } from "react";
import { GenericHeadingPad, GenericHeadingAbsolute } from "@organisms";
import { Style } from "@styles";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemForm } from "@molecules";
import { IElement } from "@components/molecules/content-item-form/content-item-form";
import { PERK_SCREEN } from "@ids";
import { GetPerkSubscriptionInfoQuery, GetSduiJourneyQuery } from "@graphql/__generated";
import { Body } from "@components/sdui/_renderer/sections/body";

interface IProps {
  handleBack: () => void;
  onSubmit: (formValues: Record<string, string>) => void;
  item: GetPerkSubscriptionInfoQuery["getPerkSubscriptionInfo"];
  loading: boolean;
}

const keyboardAvoidingViewBehavior = Platform.select({
  ios: "padding" as "padding",
  android: null,
});

const PerkSubscriptionInfoScreen = ({ handleBack, item, onSubmit, loading }: IProps) => {
  const getForm: any = useMemo(() => item?.content?.find((i) => i?.__typename === "ContentItemForm"), [item?.content]); //@TODO: fix this type later

  return (
    <KeyboardAvoidingView behavior={keyboardAvoidingViewBehavior} style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainerStyle}>
        <View style={styles.block} testID={PERK_SCREEN}>
          <Body isSafeAreaView={false} items={item.content as GetSduiJourneyQuery["getSduiJourney"]["body"]} />
          <ContentItemForm elements={getForm.elements as IElement[]} onSubmit={onSubmit} isLoading={loading} />
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleBack} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  block: {
    paddingHorizontal: Style.adjust(24),
  },
  contentItemButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  scrollContentContainerStyle: {
    paddingBottom: Style.adjust(32),
  },
  contentButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  headerAndCopy: {
    marginTop: Style.adjust(40),
  },
  imageWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  imageStyle: {
    borderRadius: 8,
  },
});

export default memo(PerkSubscriptionInfoScreen);

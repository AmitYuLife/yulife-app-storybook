import React, { useRef, useEffect } from "react";
import { StyleSheet, View, ViewStyle, Animated, ScrollView, TextStyle, Platform } from "react-native";
import { Style } from "@styles";
import { TextWithBoldText } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Text, Button } from "@atoms";
import EarnRateTable from "./table/table";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER, GQL_QUERY_GET_EARN_RATE_DETAILS } from "@graphql/yuscreen";
import { EarnRateDetails } from "@graphql/_core/schema/EarnRateDetails.ts";
import media from "@styles/media";
import { SurgedInfo } from "./surged-info";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";

const COPY =
  "To increase your <bold>YuCoin Power</bold>, check out the gear available on your Yu screen. All gear comes with <bold>power-ups</bold> that increase your earn rate and more!";

const YuEarnRateModal = () => {
  const translateY = useRef(new Animated.Value(Style.DEVICE_HEIGHT)).current;
  const { data: earnRateData, loading } = useQuery<EarnRateDetails>(GQL_QUERY_GET_EARN_RATE_DETAILS);
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      delay: 100,
    }).start();
  }, [translateY]);

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.headingWrapper}>
          <Text bold={true} style={styles.heading}>
            Your YuCoin Power
          </Text>
        </View>
        <EarnRateTable
          earnRate={data.getYulifer.earnRate}
          explainData={earnRateData?.getEarnRateDetails || []}
          loading={loading}
        />
        <SurgedInfo earnRate={data.getYulifer.earnRate} />
        <View style={styles.footerWrapper}>
          <TextWithBoldText style={styles.footer} value={COPY} />
        </View>
        <Button wrapperStyle={styles.confirm} size="Large" type="Primary" onPress={dismissOverlay} label="Got it!" />
        <View style={styles.bottomPad} />
      </ScrollView>
    </GenericOverlay>
  );
};

const headingWrapperMarginTop = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.iPhone8.height,
        value: Style.adjust(80),
      },
    ],
    Style.adjust(80)
  ),
  android: Style.adjust(80),
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 1,
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(140),
  } as ViewStyle,
  innerWrapper: {
    height: Style.DEVICE_HEIGHT,
    borderRadius: 16,
    backgroundColor: "white",
    overflow: "hidden",
  } as ViewStyle,
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: Style.adjust(16),
  } as ViewStyle,
  headingWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: headingWrapperMarginTop,
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(30),
    letterSpacing: 1,
  } as TextStyle,
  footerWrapper: {
    paddingHorizontal: Style.adjust(30),
    marginTop: Style.adjust(24),
  } as ViewStyle,
  footer: {
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    lineHeight: Style.adjust(24),
  } as TextStyle,
  confirm: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
});

export default YuEarnRateModal;

async function dismissOverlay() {
  await Navigation.dismissOverlay(MODALS.earnRate);
}

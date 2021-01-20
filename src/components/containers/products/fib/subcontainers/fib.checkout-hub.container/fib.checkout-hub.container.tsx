import React, { memo } from "react";
import { StyleSheet, View, ScrollView, ViewStyle, ActivityIndicator, Platform } from "react-native";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import { Colours, TOP_BAR, Style } from "@styles";
import { Card } from "./card";
import { Heading } from "./heading";
import { FibLocalNavigation, FIB_CONTACT_DETAILS, FIB_GP_DETAILS } from "../../fib.types";
import { ContactDetails } from "./contact-details";
import { Cta } from "./cta";
import { GpDetails } from "./gp-details";
import { PaymentDetails } from "./payment-details";
import { useSelector } from "react-redux";
import { getFIBStyle } from "@redux/product/product.selectors";
import { GetCheckoutDetails } from "@graphql/_core/schema/GetCheckoutDetails";
import { StripePaymentRequestToken } from "tipsi-stripe";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface Props {
  navigation: FibLocalNavigation;
  paymentProviderDetails: StripePaymentRequestToken;
  loading?: boolean;
  data: GetCheckoutDetails;
  onPressPayment: () => void;
  onContinue: () => void;
  onClose: () => void;
}

export const FibCheckoutHubContainer = memo((props: Props) => {
  const { navigation, loading, onPressPayment, onContinue, onClose, data, paymentProviderDetails } = props;
  const fibStyle = useSelector(getFIBStyle);
  const goToContactDetails = () => navigation.push(FIB_CONTACT_DETAILS);
  const goToGpDetails = () => navigation.push(FIB_GP_DETAILS);

  useBackHandler(() => {
    navigation.pop();
    return true;
  });

  const personalProductArmor = data?.personal?.chest?.options
    ?.find((item) => item.type === data.quote.coverType)
    ?.styles?.find((item) => item.world === fibStyle)?.armor;

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.indicatorWrapper}>
          <ActivityIndicator color={Colours.primary.p600} animating={true} />
        </View>
        <GenericHeadingAbsolute heading="Checkout" onLeftIconPress={props.navigation.pop} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topPad} />
        <Card
          name={data?.personal?.chest?.name}
          armor={personalProductArmor}
          coverType={data.quote.coverType}
          actualCost={data.quote.actualCost.toFixed(2)}
        />
        <Heading />
        <ContactDetails goToContactDetails={goToContactDetails} />
        <GpDetails gpDetails={data?.gpDetails} goToGpDetails={goToGpDetails} />
        <PaymentDetails paymentProviderDetails={paymentProviderDetails} goToPaymentDetails={onPressPayment} />
        <Cta paymentProviderDetails={paymentProviderDetails} coverType={data.quote.coverType} onPress={onContinue} />
        <View style={styles.bottomPad} />
      </ScrollView>
      <GenericHeadingAbsolute onRightIconPress={onClose} heading="Checkout" onLeftIconPress={props.navigation.pop} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  indicatorWrapper: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  topPad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD + Platform.select({ ios: 0, android: 20 }),
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(16),
  } as ViewStyle,
});

import React, { memo, useState } from "react";
import { StyleSheet, View, ScrollView, ViewStyle, ActivityIndicator, Platform, Linking, TextStyle } from "react-native";
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
import { Documents } from "@components/screens/products/fib/browse-packages/subcomponents/documents/documents";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import * as docs from "@containers/products/fib/data/documents-data";
import { CheckBox, Text, Button } from "@atoms";
import { formatMoney } from "@services/money";

interface Props {
  navigation: FibLocalNavigation;
  paymentProviderDetails: StripePaymentRequestToken;
  loading?: boolean;
  data: GetCheckoutDetails;
  onPressPayment: () => void;
  onContinue: () => void;
  onClose: () => void;
}

const handlePressLink = ({ uri, title, id }: { uri: string; title: string; id: string }) => {
  return async () => {
    if (Platform.OS === "ios") {
      try {
        handleOpenWebView({ uri, title });
      } catch (e) {
        Logger.error(e, { documentId: id, file: "fib-checkout-hub.container", platform: "ios" });
      }
    } else {
      try {
        await Linking.openURL(uri);
      } catch (e) {
        Logger.error(e, { documentId: id, file: "fib-checkout-hub.container", platform: "android" });
      }
    }
  };
};

const documents: IFaq[] = docs.checkoutDocs.map((document) => ({
  redirectType: "external",
  label: document.question,
  onPress: handlePressLink({ uri: document.url, title: document.question, id: document.id }),
  iconSvgXml: document.iconSvgXml,
}));

export const FibCheckoutHubContainer = memo((props: Props) => {
  const { navigation, loading, onPressPayment, onContinue, onClose, data, paymentProviderDetails } = props;
  const fibStyle = useSelector(getFIBStyle);
  const goToContactDetails = () => navigation.push(FIB_CONTACT_DETAILS);
  const goToGpDetails = () => navigation.push(FIB_GP_DETAILS);
  const [confirmed, setConfirmed] = useState(false);

  const toggleConfirmed = () => setConfirmed(!confirmed);

  useBackHandler(() => {
    navigation.pop();
    return true;
  });

  const personalProductArmor = data?.personal?.chest?.options
    ?.find((item) => item.type === data?.quote?.coverType)
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
          coverType={data?.quote?.coverType}
          actualCost={formatMoney(data?.quote?.actualCost || 0)}
        />
        <Heading />
        <ContactDetails goToContactDetails={goToContactDetails} />
        <GpDetails gpDetails={data?.gpDetails} goToGpDetails={goToGpDetails} />
        <PaymentDetails paymentProviderDetails={paymentProviderDetails} goToPaymentDetails={onPressPayment} />
        <View style={styles.documents}>
          <Documents items={documents} title="Key documents" />
        </View>
        <View style={styles.checkboxWrapper}>
          <CheckBox
            checked={confirmed}
            value=""
            label="I confirm that I have understood and answered all the questions honestly, accurately and to the best of my knowledge."
            onChange={toggleConfirmed}
          >
            <View style={styles.checkboxContentWrapper}>
              <Text style={styles.checkboxContent}>{"I have read and agree to the "}</Text>
              <Text
                style={StyleSheet.flatten([styles.checkboxContent, styles.checkboxContentLink])}
                onPress={handlePressLink({
                  uri: docs.policyTermsConditions.url,
                  id: docs.policyTermsConditions.id,
                  title: docs.policyTermsConditions.question,
                })}
              >
                {"Insurance Terms & Conditions"}
              </Text>
              <View style={styles.row}>
                <Text style={styles.checkboxContent}>{"and "}</Text>
                <Text
                  style={StyleSheet.flatten([styles.checkboxContent, styles.checkboxContentLink])}
                  onPress={handlePressLink({
                    uri: docs.generalTermsOfBusiness.url,
                    title: docs.generalTermsOfBusiness.question,
                    id: docs.generalTermsOfBusiness.id,
                  })}
                >
                  {"YuLife Terms of Business"}
                </Text>
              </View>
            </View>
          </CheckBox>
        </View>
        <Cta
          disable={!confirmed}
          paymentProviderDetails={paymentProviderDetails}
          coverType={data?.quote?.coverType}
          onPress={onContinue}
        />
        <Button
          wrapperStyle={styles.privacyButtonWrapper}
          type="Link"
          label="Privacy policy"
          onPress={handlePressLink({
            id: docs.privacyPolicy.id,
            title: docs.privacyPolicy.question,
            uri: docs.privacyPolicy.url,
          })}
          underline={true}
        />
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
  privacyButtonWrapper: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  topPad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD + Platform.select({ ios: 0, android: 20 }),
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(16),
  } as ViewStyle,
  documents: {
    marginTop: Style.adjust(38),
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  checkboxWrapper: {
    marginHorizontal: Style.adjust(24),
    paddingVertical: Style.adjust(24),
    paddingLeft: Style.adjust(24),
    paddingRight: Style.adjust(32),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colours.neutral.n400,
    marginTop: Style.adjust(16),
  } as ViewStyle,
  checkboxContentWrapper: {
    marginLeft: Style.adjust(24),
  } as ViewStyle,
  checkboxContent: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  } as TextStyle,
  checkboxContentLink: {
    textDecorationLine: "underline",
    textDecorationColor: Colours.primary.p600,
    color: Colours.primary.p600,
  } as TextStyle,
  row: { flexDirection: "row" },
});

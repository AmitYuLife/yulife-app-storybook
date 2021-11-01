import React, { memo, useCallback } from "react";
import { View, StyleSheet, ViewStyle, ScrollView, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { GroupProductDisclaimer } from "@molecules";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ROUTES } from "@navigation/constants";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";
import { Documents } from "./subcomponents/documents";
import { Card } from "./subcomponents/card";
import { Stamp } from "./subcomponents/stamp";
import media from "@styles/media";
import ProductDetailsModal from "./product-details.modal";
import { Beneficiaries } from "./subcomponents/beneficiaries";
import { PRODUCT_DETAILS_SCROLL_VIEW } from "@ids";
import { SecondaryButton, TertiaryButton, TextTemplate } from "@atoms";
import { useDispatch } from "react-redux";
import { openMyAccount } from "@redux/user/user.actions";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

type ProductDetailsModalProps = React.ComponentProps<typeof ProductDetailsModal>;

interface Props {
  coverType: CoverType;
  productName: string;
  policyNumber: string;
  productIconUri: string;
  benefitValue: string;
  benefitDescription: string;
  benefitDescriptionLong: string;
  yuCoinValue: string;
  yuCoinDescription: string;
  lastUpdated: string;
  modalProps?: ProductDetailsModalProps;
  productId: string;
  productCodeId: string;
  isPersonalProduct?: boolean;
  disclaimer?: string;
  hasBeneficiariesEnabled?: boolean;
}

export const ProductDetailsScreen = memo((props: Props) => {
  const {
    modalProps,
    lastUpdated,
    productId,
    isPersonalProduct,
    productCodeId,
    disclaimer,
    hasBeneficiariesEnabled = false,
  } = props;

  const handleClose = () => {
    Navigation.pop(ROUTES.productDetails);
    return true;
  };

  useBackHandler(handleClose);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        testID={PRODUCT_DETAILS_SCROLL_VIEW}
      >
        <View style={styles.topPadding} />
        <Card {...props} />
        <Documents modalProps={modalProps} />
        {!hasBeneficiariesEnabled ? null : <Beneficiaries productId={productId} />}
        {!isPersonalProduct ? null : <PersonalProduct productCodeId={productCodeId} />}
        <Stamp value={lastUpdated} />
        {!disclaimer ? null : <GroupProductDisclaimer text={disclaimer} containerStyle={styles.disclaimer} />}
        <View style={styles.bottomPadding} />
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
    </View>
  );
});

const BOTTOM_PADDING = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.adjust(140),
    },
  ],
  Style.adjust(40)
);

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 24,
  } as ViewStyle,
  marginBottom: {
    marginBottom: 24,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  topPadding: {
    height: Style.adjust(24),
  } as ViewStyle,
  scroll: {
    paddingHorizontal: Style.adjust(24),
  },
  bottomPadding: {
    height: BOTTOM_PADDING,
  },
  disclaimer: {
    marginTop: Style.adjust(16),
  },
});

const PersonalProduct = (props: Pick<Props, "productCodeId">) => {
  const { productCodeId } = props;
  const dispatch = useDispatch();

  const handleNavigateToDocs = useCallback(
    () =>
      Navigation.push(ROUTES.yuScreen, {
        component: {
          id: ROUTES.productStepDocuments,
          name: ROUTES.productStepDocuments,
          passProps: { productId: productCodeId },
        },
      }),
    [productCodeId]
  );

  const handleNavigateToFaqs = useCallback(
    () =>
      Navigation.push(ROUTES.yuScreen, {
        component: {
          id: ROUTES.productStepFaqs,
          name: ROUTES.productStepFaqs,
          passProps: { productId: productCodeId },
        },
      }),
    [productCodeId]
  );

  return (
    <>
      <View style={styles.marginTop}>
        <View>
          <TextTemplate type="h2">Policy Documents</TextTemplate>
        </View>
        <SecondaryButton
          wrapperStyle={styles.marginTop}
          onPress={handleNavigateToDocs}
          size="Fill"
          label="View all Policy documents"
        />
      </View>
      <View style={styles.marginTop}>
        <View style={styles.marginBottom}>
          <TextTemplate type="h2">Account Details</TextTemplate>
        </View>
        <TextTemplate type="b2">
          In order to view payment details, email address, or make changes to personal details; please visit the My
          Account section
        </TextTemplate>
        <SecondaryButton
          wrapperStyle={styles.marginTop}
          onPress={() => dispatch(openMyAccount())}
          size="Fill"
          label="My Account"
        />
      </View>
      <View style={styles.marginTop}>
        <TertiaryButton
          size="Fill"
          onPress={handleNavigateToFaqs}
          label="FAQs"
          leftIcon={BUTTON_ICON.QUESTION_BUBBLE}
          rightIcon={BUTTON_ICON.ARROW_RIGHT}
        />
      </View>
    </>
  );
};

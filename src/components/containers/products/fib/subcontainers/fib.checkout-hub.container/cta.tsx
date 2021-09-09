import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Button } from "@atoms";
import { Style } from "@styles";
import { useSelector } from "react-redux";
import { getContactDetails, getFullName, getFIBState } from "@redux/product/product.selectors";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { toCapitalLetter } from "@utils";
import { StripePaymentRequestToken } from "tipsi-stripe";
import { GetCheckoutDetails_paymentDetails } from "@graphql/_core/schema";

interface Props {
  onPress: () => void;
  coverType: CoverType;
  disable?: boolean;
  paymentProviderDetails?: StripePaymentRequestToken | GetCheckoutDetails_paymentDetails;
}

export const Cta = memo((props: Props) => {
  const { firstAddressLine = "", townOrCity = "", postCode = "", personalEmail = "", phoneNumber = "" } = useSelector(
    getContactDetails
  );
  const fullName = useSelector(getFullName);
  const { paymentProviderDetails, onPress, coverType, disable } = props;
  const { gpName, practiceAddress, practiceName, practicePostCode, practiceTown } = useSelector(getFIBState).gpDetails;

  const disabled =
    disable ||
    !paymentProviderDetails ||
    !fullName ||
    !firstAddressLine ||
    !townOrCity ||
    !postCode ||
    !personalEmail ||
    !phoneNumber ||
    !gpName ||
    !practiceAddress ||
    !practiceName ||
    !practicePostCode ||
    !practiceTown;

  return (
    <View style={styles.ctaWrapper}>
      <Button
        wrapperStyle={styles.cta}
        disabled={disabled}
        onPress={onPress}
        label={`Buy ${toCapitalLetter(coverType)} cover`}
        size="Fill"
      />
    </View>
  );
});

const styles = {
  ctaWrapper: {
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  cta: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
};

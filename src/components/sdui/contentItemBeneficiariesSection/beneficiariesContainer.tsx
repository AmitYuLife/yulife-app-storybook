import { View, ViewStyle, TextStyle } from "react-native";
import { Navigation } from "@navigation/main";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";
import { SecondaryButton } from "@molecules";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { truncate } from "@utils";
import { useQuery } from "@apollo/client";
import { TEXT_TEMPLATE, ADD_BENEFICIARY, BENEFICIARY_DETAILS } from "@ids";
import EngagementTracking from "@services/logging/engagement-tracking";
import { GetProductBeneficiariesQuery, gql } from "@graphql/__generated";

interface IBeneficiariesProps {
  productId: string;
  style?: ViewStyle;
}

export const Beneficiaries = ({ productId, style }: IBeneficiariesProps) => {
  const { data, error } = useQuery(gql("GetProductBeneficiariesDocument"), {
    variables: { productId },
    fetchPolicy: "cache-and-network",
  });

  if (error?.graphQLErrors?.length) {
    return null;
  }

  const beneficiaries = data?.getProductBeneficiaries?.beneficiaries;
  const beneficiariesExist = data?.getProductBeneficiaries?.beneficiaries?.length;
  const description = beneficiariesExist
    ? "Below are your beneficiaries and their allocated percentages."
    : "You haven’t added any beneficiaries for this product yet.";

  return (
    <View style={[styles.wrapper, style]}>
      <TextTemplate type={"h3"} testID={TEXT_TEMPLATE("Beneficiaries")}>
        Beneficiaries
      </TextTemplate>
      <View style={styles.description}>
        <TextTemplate type={"b2"} color={Colours.neutral.n700}>
          {description}
        </TextTemplate>
      </View>

      {!beneficiariesExist ? null : (
        <BeneficiariesDetails beneficiaries={beneficiaries} onPress={() => onBeneficiaryPress(productId)} />
      )}
      <SecondaryButton
        testID={ADD_BENEFICIARY}
        wrapperStyle={styles.buttonWrapper}
        translatedLabel="Add a beneficiary" // TODO: localise
        onPress={() => onAddBeneficiaryPress(productId)}
      />
    </View>
  );
};

interface IBeneficiariesDetailsProps {
  beneficiaries: GetProductBeneficiariesQuery["getProductBeneficiaries"]["beneficiaries"];
  onPress?: () => void;
}

const BeneficiariesDetails = ({ beneficiaries, onPress }: IBeneficiariesDetailsProps) => {
  return (
    <TouchableOpacityWithDelay onPress={onPress}>
      <View style={styles.beneficiariesWrapper}>
        {beneficiaries.map((beneficiary, index) => (
          <View
            key={index}
            testID={BENEFICIARY_DETAILS(
              beneficiary.shareOfBenefit,
              beneficiary.firstName,
              beneficiary.lastName,
              beneficiary.relationship
            )}
          >
            <View style={styles.beneficiary}>
              <View>
                <TextTemplate type={"b2b"}>{truncate(beneficiary.fullName, 25)}</TextTemplate>
                <TextTemplate type={"b2"}>{beneficiary.relationship}</TextTemplate>
              </View>
              <TextTemplate type={"b1b"}>{`${beneficiary.shareOfBenefit}%`}</TextTemplate>
            </View>
            {index < beneficiaries.length - 1 ? <View style={styles.separator} /> : null}
          </View>
        ))}
      </View>
    </TouchableOpacityWithDelay>
  );
};

const onAddBeneficiaryPress = (productId: string) => {
  /**
   * Event Taxonomy 104
   */
  EngagementTracking.logEvent("benificiary_add_started");

  showYuModal({
    component: {
      id: MODALS.addBeneficiary,
      name: MODALS.addBeneficiary,
      passProps: {
        pushEditRoot: true,
        productId,
      },
    },
  });
};

const onBeneficiaryPress = (productId: string) =>
  Navigation.push(ROUTES.productDetails, {
    component: {
      id: ROUTES.beneficiary,
      name: ROUTES.beneficiary,
      passProps: {
        productId,
      },
    },
  });

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
  description: {
    marginTop: Style.adjust(16),
    maxWidth: Style.adjust(328),
  } as TextStyle,
  beneficiariesWrapper: {
    marginTop: Style.adjust(24),
    paddingVertical: Style.adjust(8),
    paddingHorizontal: Style.adjust(32),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(16),
    borderWidth: Style.adjust(1),
    borderColor: Colours.neutral.n100,
  } as ViewStyle,
  beneficiary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: Style.adjust(16),
  } as ViewStyle,
  separator: {
    height: Style.adjust(1),
    width: "100%",
    backgroundColor: Colours.neutral.n100,
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

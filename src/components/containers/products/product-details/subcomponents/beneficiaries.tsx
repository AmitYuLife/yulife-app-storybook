import * as React from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { Colours, Style } from "@styles";
import { Button, Text, TextTemplate } from "@atoms";
import { Beneficiary } from "@components/modals/yuscreen/beneficiary/add-beneficiary-modal.screen";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "@navigation/constants";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { truncate } from "@services/utils";

interface Props {
  beneficiaries: Beneficiary[];
  onPress?: () => void;
}

export const Beneficiaries = ({ beneficiaries }: Props) => {
  const beneficiariesExist = beneficiaries?.length;
  const description = beneficiariesExist
    ? "Below are your beneficiaries and their allocated percentages."
    : "You haven’t added any beneficiaries for this product yet.";

  return (
    <View style={styles.wrapper}>
      <TextTemplate type={"h2"}>Beneficiaries</TextTemplate>
      <Text style={styles.description}>{description}</Text>
      {!beneficiariesExist ? null : (
        <BeneficiariesDetails beneficiaries={beneficiaries} onPress={() => onBeneficiaryPress(beneficiaries)} />
      )}
      <Button
        wrapperStyle={styles.buttonWrapper}
        type="Secondary"
        label="Add a beneficiary"
        onPress={onAddBeneficiaryPress}
      />
    </View>
  );
};

const BeneficiariesDetails = ({ beneficiaries, onPress }: Props) => {
  return (
    <TouchableOpacityWithDelay onPress={onPress}>
      <View style={styles.beneficiariesWrapper}>
        {beneficiaries.map((beneficiary, index) => (
          <View key={index}>
            <View style={styles.beneficiary}>
              <View>
                <Text bold={true} style={styles.beneficiaryDetails}>
                  {truncate(`${beneficiary.firstName} ${beneficiary.lastName}`, 25)}
                </Text>
                <Text style={styles.beneficiaryDetails}>{beneficiary.relation}</Text>
              </View>
              <Text bold={true} style={styles.beneficiaryPercentage}>{`${beneficiary.percentage}%`}</Text>
            </View>
            {index < beneficiaries.length - 1 ? <View style={styles.separator} /> : null}
          </View>
        ))}
      </View>
    </TouchableOpacityWithDelay>
  );
};

const onAddBeneficiaryPress = () =>
  Navigation.showModal({
    component: {
      id: MODALS.addBeneficiary,
      name: MODALS.addBeneficiary,
    },
  });

const onBeneficiaryPress = (beneficiaries: Beneficiary[]) =>
  Navigation.push(ROUTES.productDetails, {
    component: {
      id: ROUTES.beneficiary,
      name: ROUTES.beneficiary,
      passProps: {
        beneficiaries,
      },
    },
  });

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
  description: {
    marginTop: Style.adjust(16),
    color: Colours.neutral.n700,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
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
  beneficiaryDetails: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
  } as TextStyle,
  beneficiaryPercentage: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.8),
  } as TextStyle,
  buttonWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

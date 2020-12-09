import React, { memo, useCallback } from "react";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, ViewStyle, Image, ImageStyle, TextStyle, ScrollView, Platform, Linking } from "react-native";
import { useBackHandler } from "../../../../../../services/hooks/useBackHandler";
import { Button, Text, CheckBox } from "@atoms";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { PackageId } from "../../fib.helper";
import { handleOpenWebView } from "../../../../../../navigation/utils";
import Config from "react-native-config";

const data = [
  {
    id: "commonPackage",
    type: "Common",
    color: "#31B689",
    source: require("../../../../../../../assets/fib/browse-packages/common-chest.png"),
    shadow: "rgba(166, 255, 224, 0.33)",
    selectedBackground: "rgba(167, 253, 224, 0.45)",
  },
  {
    id: "rarePackage",
    type: "Rare",
    color: "#00C0F3",
    source: require("../../../../../../../assets/fib/browse-packages/rare-passive.png"),
    shadow: "rgba(0, 192, 243, 0.1)",
    selectedBackground: "rgba(138, 230, 255, 0.31)",
  },
  {
    id: "epicPackage",
    type: "Epic",
    color: "#956AFF",
    source: require("../../../../../../../assets/fib/browse-packages/epic-passive.png"),
    shadow: "#E1D5FF",
    selectedBackground: "rgba(210, 194, 253, 0.5)",
  },
];

export interface IFibConfirmationDeclarationScreenProps {
  onBackButtonPress: () => void;
  onClose?: () => void;
  onContinueButton: () => void;
  onDetailsPress: () => void;
  selectedPackage: PackageId;
  actualCost: number;
  loading: boolean;
  statementConfirmed: boolean;
  setStatementConfirmed: () => void;
}

export const FibConfirmationDeclarationScreen = memo(function (props: IFibConfirmationDeclarationScreenProps) {
  const {
    onBackButtonPress,
    onClose,
    onContinueButton,
    onDetailsPress,
    selectedPackage,
    actualCost,
    loading,
    setStatementConfirmed,
    statementConfirmed,
  } = props;

  const handlePolicySummary = useCallback(async () => {
    const url = `${Config.WEB_SITE_URL}static/docs/insurance-top-up/terms-and-conditions/4.0.0/life-Insurance-top-up-cover-terms-and-conditions.pdf`;
    if (Platform.OS === "ios") {
      handleOpenWebView({
        uri: url,
        title: "Policy",
      });
    } else {
      try {
        await Linking.openURL(url);
      } catch (e) {}
    }
  }, []);

  const backHandler = useCallback(() => {
    onBackButtonPress();
    return true;
  }, [onBackButtonPress]);

  useBackHandler(backHandler);

  const item = data.find((item) => item.type.toLowerCase() === selectedPackage.toString().toLowerCase());

  return (
    <FibUnderwritingJourneyLayout
      heading={"Confirmation"}
      onClose={onClose}
      onPreviousQuestion={onBackButtonPress}
      hideProgressBar={true}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 48 }}>
        <View style={styles.wrapper}>
          <View style={styles.packageWrapper}>
            <View style={styles.armourWrapper}>
              <View style={StyleSheet.flatten([styles.shadow, { backgroundColor: item.shadow }])} />
              <Image
                style={item.type === "Epic" ? styles.imageEpicPackage : styles.imagePackage}
                source={item.source}
              />
            </View>

            <View style={styles.packageDetailsWrapper}>
              <Text style={StyleSheet.flatten([styles.lifeInsuranceText, { color: item.color }])}>Life Insurance</Text>
              <Text style={StyleSheet.flatten([styles.packageTypeText, { color: item.color }])}>{item.type}</Text>
              <View style={styles.detailsAndPriceWrapper}>
                <Text style={styles.priceText}>{loading ? `loading...` : `£${actualCost.toFixed(2)} per month`}</Text>
                <TouchableOpacityWithDelay onPress={onDetailsPress}>
                  <Text style={styles.detailsText}>details</Text>
                </TouchableOpacityWithDelay>
              </View>
            </View>
          </View>

          <View style={styles.separator} />

          <Text style={styles.boldText}>Please read and confirm that all the below statements are true:</Text>
          <Text style={styles.simpleText}>
            • I confirm that I have had the opportunity to read the
            <Text style={styles.linkText} onPress={handlePolicySummary}>
              {` Policy Summary `}
            </Text>
            and
            <Text style={styles.linkText} onPress={handlePolicySummary}>
              {" "}
              Terms and Conditions
            </Text>
          </Text>
          <Text style={styles.simpleText}>
            • I confirm that all the information I have provided is true and accurate
          </Text>

          <View style={styles.checkBoxWrapper}>
            <CheckBox
              checked={statementConfirmed}
              value=""
              label="I have read the documents and confirm that all the statements above are true"
              onChange={setStatementConfirmed}
              textStyle={styles.checkBoxTextStyle}
            />
          </View>
        </View>
        <Button
          type="Primary"
          size={"Large"}
          onPress={onContinueButton}
          label={"Continue"}
          disabled={!statementConfirmed}
        />
      </ScrollView>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 31,
    paddingTop: 50,
    marginBottom: 20,
  },
  checkBoxTextStyle: { width: 264 } as TextStyle,
  checkBoxWrapper: {
    marginTop: 40,
  } as ViewStyle,
  packageWrapper: {
    flexDirection: "row",
    marginBottom: 32,
    height: 74,
  },
  separator: {
    backgroundColor: "#D3D3D6",
    height: 1,
  } as ViewStyle,
  boldText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
    marginTop: 23,
  } as TextStyle,
  simpleText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
    marginTop: 16,
  } as TextStyle,
  linkText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#E30D76",
  } as TextStyle,
  lifeInsuranceText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 1,
  } as TextStyle,
  packageTypeText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
  } as TextStyle,
  detailsAndPriceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  priceText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#464647",
  } as TextStyle,
  detailsText: {
    color: "#E30D76",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    textDecorationLine: "underline",
  } as TextStyle,
  packageDetailsWrapper: {
    justifyContent: "space-between",
    flex: 1,
  } as ViewStyle,
  armourWrapper: {
    height: Style.adjust(64),
    width: Style.adjust(64),
    borderRadius: 10,
    alignSelf: "center",
    marginRight: 15,
  } as ViewStyle,
  imageEpicPackage: {
    height: Style.adjust(77),
    width: Style.adjust(65),
    marginLeft: Style.adjust(-1),
    marginTop: Style.adjust(-12),
  } as ImageStyle,
  shadow: {
    position: "absolute",
    marginBottom: -30,
    height: Style.adjust(73),
    width: Style.adjust(64),
    borderRadius: 21,
  } as ViewStyle,
  imagePackage: {
    height: Style.adjust(64),
    width: Style.adjust(64),
  } as ImageStyle,
});

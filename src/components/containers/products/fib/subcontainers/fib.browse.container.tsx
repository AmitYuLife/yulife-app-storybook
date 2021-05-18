import React, { memo } from "react";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { View, Linking, Platform } from "react-native";
import { Text } from "@atoms";
import { FibDetailsScreen } from "@screens";
import { FibLocalNavigation, FIB_FAQ_LIST, FIB_PAYOUT_CALCULATOR, FIB_UNDERWRITING_JOURNEY } from "../fib.types";
import fibDocumentsItems from "../data/documents-data";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { packages, useCover } from "../fib.helpers";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { FIB_PAYOUT_CALCULATOR_INITIAL_STATE } from "./fib.payout-calculator.conainer";

interface IFibContainer {
  navigation: FibLocalNavigation;
}

const documents = fibDocumentsItems.map((document) => ({
  label: document.question,
  onPress: async () => {
    if (Platform.OS === "ios") {
      try {
        handleOpenWebView({ uri: document.url, title: document.question });
      } catch (e) {
        Logger.error(e, { documentId: document.id, file: "fib-browse.container", platform: "ios" });
      }
    } else {
      try {
        await Linking.openURL(document.url);
      } catch (e) {
        Logger.error(e, { documentId: document.id, file: "fib-browse.container", platform: "android" });
      }
    }
  },
  icon: document.icon,
}));

const otherBenefits = {
  title: "Other benefits",
  items: [
    {
      id: "yuLifeApp",
      title: "YuLife app",
      description: "Continue to enjoy the app no matter where your career takes you.",
    },
    {
      id: "smartHealth",
      title: "Smart Health",
      description:
        "Receive and keep access to Smart Health, a doctor-on-demand service with video and phone GP consultations.",
    },
  ],
};

const _FibBrowseContainer = memo(function (props: IFibContainer & ReturnType<typeof mapStateToProps>) {
  const { navigation, selectedPackage, userDateOfBirth } = props;
  const [selectedCoverType, selectCoverType] = useCover(selectedPackage || CoverType.epic);

  const maxTermAge = moment().diff(moment(userDateOfBirth), "years") + 40;

  const { data: yuliferData, error } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER);

  const navigateToIntroScreen = () => {
    navigation.pop();
    return true;
  };

  useBackHandler(navigateToIntroScreen);

  const navigateToFaqsList = () => navigation.push(FIB_FAQ_LIST);

  const navigateToPayoutCalculator = () =>
    navigation.push(FIB_PAYOUT_CALCULATOR, { type: FIB_PAYOUT_CALCULATOR_INITIAL_STATE.needData });

  const navigateToContinue = () => {
    navigation.push(FIB_UNDERWRITING_JOURNEY);
  };

  if (error) {
    // TODO: Don't show this! Add back button?
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const fibProduct = yuliferData?.personal?.chest;

  const selectedProductOption = fibProduct?.options.filter(
    (productOption) => productOption.type === selectedCoverType
  )[0];

  const packageDetails: Package = {
    newEarnRate: (yuliferData?.getYulifer?.earnRate || 0) + (selectedProductOption?.earnRate || 0),
    earnRate: selectedProductOption?.earnRate || 0,
    salaryPercentageCovered: selectedProductOption?.percentageCovered * 100 || 0,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: selectedProductOption?.heading || "",
    term: maxTermAge,
    title: fibProduct?.name,
    powers: selectedProductOption?.powers || [],
  };

  const howItWorks = `We’ve designed this policy to protect your loved ones. It’s for YuLifers who want to make sure their family will be taken care of in the event that they should pass away unexpectedly.\n\nEquipping this item means we will pay your chosen beneficiaries ${packageDetails.salaryPercentageCovered}% of your salary as a lump sum based on the date you passed away until the policy would have ended.\n\nOur policies aim to cover you as long as possible and will last for a maximum of 40 years or until you reach 70 years old.`;

  return (
    <FibDetailsScreen
      selectedPackage={packageDetails}
      selectCoverType={selectCoverType}
      continueButtonIsFixed={true}
      onScrollEnd={navigation.onScrollEnd}
      offset={navigation.currentRoute.offset || { x: 0, y: 0 }}
      documents={documents}
      otherBenefits={otherBenefits}
      howItWorks={howItWorks}
      navigateToContinue={navigateToContinue}
      navigateToBack={navigation.pop}
      navigateToExit={navigation.popToMain}
      navigateToFaqsList={navigateToFaqsList}
      navigateToPayoutCalculator={navigateToPayoutCalculator}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  grossSalary: getFIBState(state).salary,
  userDateOfBirth: getUserDateOfBirth(state),
  selectedPackage: getFIBState(state).selectedPackage,
});

const FibBrowseContainer = connect<ReturnType<typeof mapStateToProps>>(mapStateToProps)(_FibBrowseContainer);

export default FibBrowseContainer;

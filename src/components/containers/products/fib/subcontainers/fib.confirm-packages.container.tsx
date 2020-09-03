import { useQuery } from "@apollo/react-hooks";
import React, { memo, useState, useEffect } from "react";
import { View, Linking } from "react-native";
import { connect } from "react-redux";
import { Text } from "@atoms";
import { FibLocalNavigation, FIB_FEEDBACK_FORM, FIB_FAQ } from "../fib.types";
import {
  GetLifeInsuranceToUpsData,
  GetLifeInsuranceTopUpsVars,
  GQL_GET_LIFE_INSURANCE_TOP_UPS,
} from "@graphql/products";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { packages, useCover, calculatePayoutCalculatorItems, calculatePayoutAmount } from "../fib.helpers";
import { FibSummaryScreen } from "@components/screens/products/fib/browse-packages/fib.summary.screen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import fibDocumentsItems, { policyScheduleDocument } from "../data/documents-data";
import Logger from "@services/logging/logger";
import fibFaqItems from "../data/faq-fib-data";
import moment from "moment";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface OwnProps {
  navigation: FibLocalNavigation;
  selectFaq: (fabId: string) => void;
}

type FibConfirmPackagesContainerProps = ConnectedState & OwnProps;

const documents: IFaq[] = [...fibDocumentsItems, policyScheduleDocument].map((document) => ({
  redirectType: "external",
  label: document.question,
  onPress: async () => {
    try {
      await Linking.openURL(document.url);
    } catch (e) {
      Logger.logMixpanelError(e, `${document.id}_error`);
    }
  },
  iconSvgXml: document.iconSvgXml,
}));

const FibConfirmPackagesContainer = memo(function (props: FibConfirmPackagesContainerProps) {
  const { navigation, grossSalary, userDateOfBirth, selectedPackage, selectFaq } = props;
  const [selectedCoverType, selectCoverType] = useCover(selectedPackage || "common");

  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const [payoutEstimatorItems, setPayoutEstimatorItems] = useState(
    calculatePayoutCalculatorItems(props.userDateOfBirth, deceaseAgeIndexYear)
  );

  const customerAge = moment().diff(moment(userDateOfBirth), "years");

  useEffect(() => {
    const newItems = calculatePayoutCalculatorItems(props.userDateOfBirth, deceaseAgeIndexYear);
    setPayoutEstimatorItems(newItems);
  }, [deceaseAgeIndexYear, props.userDateOfBirth]);

  const deceaseAgeMonth =
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth]) ===
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth])
      ? payoutEstimatorItems.months[deceaseAgeIndexMonth]
      : payoutEstimatorItems.months[payoutEstimatorItems.months.length - 1] || 0; // Never show error, default to 0

  const deceaseAgeYear = payoutEstimatorItems.years[deceaseAgeIndexYear];

  const queryVariables: GetLifeInsuranceTopUpsVars = {
    grossSalary: grossSalary,
    coverType: selectedCoverType,
    customCoverPercentage: 0,
  };

  const { loading, error, data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(
    GQL_GET_LIFE_INSURANCE_TOP_UPS,
    {
      variables: queryVariables,
    }
  );

  const payoutAmount = calculatePayoutAmount({
    deceaseAgeMonth,
    deceaseAgeYear,
    sumAssured: data?.getLifeInsuranceTopUps?.sumAssured,
    term: data?.getLifeInsuranceTopUps?.term,
    dateOfBirth: userDateOfBirth,
  });

  const monthlyAmountProtected = Math.round(
    ((data?.getLifeInsuranceTopUps?.sumAssured / (data?.getLifeInsuranceTopUps?.term * 12)) * 100) / 100
  );

  const packageDetails: Package = {
    newEarnRate: data?.getLifeInsuranceTopUps.newEarnRate || 0,
    payoutAmount: Math.round(payoutAmount),
    earnRate: data?.getLifeInsuranceTopUps.earnRate || 0,
    salaryPercentageCovered: data?.getLifeInsuranceTopUps.salaryPercentageCovered || 0,
    estimatedCost: data?.getLifeInsuranceTopUps.estimatedCost || 0,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: data?.getLifeInsuranceTopUps.descriptionHeading || "",
    term: data?.getLifeInsuranceTopUps.term,
    monthlyAmountProtected,
  };

  const faqs: IFaq[] = fibFaqItems.map((faq) => ({
    label: faq.question,
    redirectType: "internal",
    onPress: () => {
      navigation.push(FIB_FAQ);
      return selectFaq(faq.id);
    },
  }));

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <FibSummaryScreen
      navigateToFeedbackForm={() => navigation.push(FIB_FEEDBACK_FORM)} // TODO: Rename to onContinue? and redirect to address questions
      selectedPackage={packageDetails}
      selectCoverType={selectCoverType}
      faqs={faqs}
      documents={documents}
      payoutEstimatorItems={payoutEstimatorItems}
      setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
      setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
      loading={loading}
      onNavigateBack={navigation.pop}
      customerAge={customerAge}
      onScrollEnd={navigation.onScrollEnd}
      offset={navigation.currentRoute.offset || { x: 0, y: 0 }}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  grossSalary: getFIBState(state).salary,
  userDateOfBirth: getUserDateOfBirth(state),
  selectedPackage: getFIBState(state).selectedPackage,
});

export default connect(mapStateToProps)(FibConfirmPackagesContainer);

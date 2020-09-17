import { useQuery } from "@apollo/react-hooks";
import React, { memo, useState, useEffect, useCallback } from "react";
import { View, Linking, Platform } from "react-native";
import { connect, useDispatch } from "react-redux";
import { Text } from "@atoms";
import { FibLocalNavigation, FIB_FEEDBACK_FORM, FIB_FAQ } from "../fib.types";
import {
  GetLifeInsuranceToUpsData,
  GetLifeInsuranceTopUpsVars,
  GQL_GET_LIFE_INSURANCE_TOP_UPS,
  LifeInsuranceUserAnswers,
} from "@graphql/products";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { packages, useCover, calculatePayoutCalculatorItems, calculatePayoutAmount } from "../fib.helpers";
import { FibSummaryScreen } from "@components/screens/products/fib/browse-packages/fib.summary.screen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import fibDocumentsItems, { policyScheduleDocument } from "../data/documents-data";
import fibFaqItems from "../data/faq-fib-data";
import moment from "moment";
import { updateFIBValue } from "@redux/product/product.actions";
import { MODALS } from "@navigation/constants";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { Navigation } from "react-native-navigation";

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
    if (Platform.OS === "ios") {
      handleOpenWebView({ uri: document.url, title: "Policy" });
    } else {
      try {
        await Linking.openURL(document.url);
      } catch (e) {
        Logger.logMixpanelError(e, `${document.id}_error`);
      }
    }
  },
  iconSvgXml: document.iconSvgXml,
}));

const FibConfirmPackagesContainer = memo(function (props: FibConfirmPackagesContainerProps) {
  const { navigation, grossSalary, userDateOfBirth, selectedPackage, selectFaq, fibAnswers } = props;
  const dispatch = useDispatch();

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

  const userAnswers = Object.keys(fibAnswers).map((questionId: string) => {
    return {
      questionId,
      value: JSON.stringify(fibAnswers[questionId]),
    } as LifeInsuranceUserAnswers;
  });

  const queryVariables: GetLifeInsuranceTopUpsVars = {
    grossSalary: grossSalary,
    coverType: selectedCoverType,
    customCoverPercentage: 0,
    userAnswers,
  };

  const { loading, error, data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(
    GQL_GET_LIFE_INSURANCE_TOP_UPS,
    {
      variables: queryVariables,
      fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (data?.getLifeInsuranceTopUps?.actualCost) {
      dispatch(updateFIBValue({ key: "actualCost", value: data.getLifeInsuranceTopUps.actualCost }));
    }

    if (data?.getLifeInsuranceTopUps?.medicalInvestigationRequired) {
      dispatch(
        updateFIBValue({
          key: "medicalInvestigationRequired",
          value: data.getLifeInsuranceTopUps.medicalInvestigationRequired,
        })
      );
    }
  }, [data, dispatch]);

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
    actualCost: data?.getLifeInsuranceTopUps.actualCost || 0,
  };

  const faqs: IFaq[] = fibFaqItems.map((faq) => ({
    label: faq.question,
    redirectType: "internal",
    onPress: () => {
      navigation.push(FIB_FAQ);
      return selectFaq(faq.id);
    },
  }));

  const onExitHandler = useCallback(async () => {
    await Navigation.showModal({
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps: {
          onPress: async () => {
            await Navigation.dismissModal(MODALS.generic);
          },
          heading: "Exit",
          subheading: "Are you sure you want to exit? Your progressed will be saved",
          ctaLabel: "Stay",
          ctaLabelSecondary: "Exit",
          onPressSecondary: async () => {
            await Navigation.dismissModal(MODALS.generic);
            return navigation.popToMain();
          },
        },
      },
    });
  }, [navigation]);

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <FibSummaryScreen
      onContinue={() => navigation.push(FIB_FEEDBACK_FORM)} // TODO: redirect to address questions
      onExit={onExitHandler}
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
  fibAnswers: getFIBState(state).answers,
});

export default connect(mapStateToProps)(FibConfirmPackagesContainer);

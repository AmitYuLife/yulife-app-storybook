import React, { memo, useState, useEffect } from "react";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { View, Linking } from "react-native";
import { Text } from "@atoms";
import { FibBrowseScreen, FibCustomCoverScreen } from "@screens";
import {
  GQL_GET_LIFE_INSURANCE_TOP_UPS,
  GetLifeInsuranceToUpsData,
  GetLifeInsuranceTopUpsVars,
} from "@graphql/products";
import Logger from "@services/logging/logger";

import { FIB_EDIT_SALARY, FIB_FAQ, FibLocalNavigation, FIB_CUSTOM_PERCENTAGE, FIB_FEEDBACK_FORM } from "../fib.types";
import fibFaqItems from "../data/faq-fib-data";
import fibDocumentsItems from "../data/documents-data";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { calculatePayoutCalculatorItems, packages, useCover } from "../fib.helpers";

interface IFibContainer {
  navigation: FibLocalNavigation;
  selectFaq: (fabId: string) => void;
}

const documents: IFaq[] = fibDocumentsItems.map((document) => ({
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

const FibBrowseContainer = memo(function (props: IFibContainer & ReturnType<typeof mapStateToProps>) {
  const { navigation, selectFaq, grossSalary, selectedPackage } = props;
  const { isCustomCover, customCoverPercentage = null } = navigation.currentRoute.passProps;
  const [selectedCoverType, selectCoverType] = useCover(isCustomCover ? "custom" : selectedPackage || "common");
  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const [payoutEstimatorItems, setPayoutEstimatorItems] = useState(
    calculatePayoutCalculatorItems(props.userDateOfBirth, deceaseAgeIndexYear)
  );
  const maxTermAge = moment().diff(moment(props.userDateOfBirth), "years") + 40;

  useEffect(() => {
    const newItems = calculatePayoutCalculatorItems(props.userDateOfBirth, deceaseAgeIndexYear);
    setPayoutEstimatorItems(newItems);
  }, [deceaseAgeIndexYear, props.userDateOfBirth]);

  //TODO: deceaseAgeIndexMonth should be handle on calculate payout calculator items
  const deceaseAgeMonth =
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth]) ===
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth])
      ? payoutEstimatorItems.months[deceaseAgeIndexMonth]
      : payoutEstimatorItems.months[payoutEstimatorItems.months.length - 1] || 0; // Never show error, default to 0

  const topUpsQueryVariables = {
    grossSalary,
    coverType: selectedCoverType,
    customCoverPercentage,
    deceaseAgeYear: payoutEstimatorItems.years[deceaseAgeIndexYear],
    deceaseAgeMonth: deceaseAgeMonth,
  };

  const { loading, error, data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(
    GQL_GET_LIFE_INSURANCE_TOP_UPS,
    {
      variables: topUpsQueryVariables,
      fetchPolicy: "network-only",
    }
  );

  const { data: yuliferData } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER);

  const faqs: IFaq[] = fibFaqItems.map((faq) => ({
    label: faq.question,
    redirectType: "internal",
    onPress: () => {
      navigation.push(FIB_FAQ);
      return selectFaq(faq.id);
    },
  }));

  if (error) {
    // TODO: Don't show this! Add back button?
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const packageDetails: Package = {
    newEarnRate: data?.getLifeInsuranceTopUps.newEarnRate || 0,
    payoutAmount: Math.round(data?.getLifeInsuranceTopUps.payoutAmount || 0),
    earnRate: data?.getLifeInsuranceTopUps.earnRate || 0,
    salaryPercentageCovered: data?.getLifeInsuranceTopUps.salaryPercentageCovered || 0,
    estimatedCost: data?.getLifeInsuranceTopUps.estimatedCost || 0,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: data?.getLifeInsuranceTopUps.descriptionHeading || "",
    term: data?.getLifeInsuranceTopUps.term,
    monthlyAmountProtected: data?.getLifeInsuranceTopUps.monthlyAmountProtected,
  };

  if (isCustomCover) {
    return (
      <FibCustomCoverScreen
        avatarUrl={yuliferData?.getYulifer.avatarRemoteFiles?.pngFull}
        onNavigateBack={navigation.pop}
        navigateToEditSalary={() => navigation.push(FIB_EDIT_SALARY, { onPressDone: navigation.pop })}
        navigateToFeedbackForm={() => navigation.push(FIB_FEEDBACK_FORM)}
        faqs={faqs}
        documents={documents}
        selectedPackage={packageDetails}
        payoutEstimatorItems={payoutEstimatorItems}
        setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
        setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
        loading={loading}
      />
    );
  }

  return (
    <FibBrowseScreen
      avatarUrl={yuliferData?.getYulifer.avatarRemoteFiles?.pngFull}
      onNavigateToYuScreen={navigation.popToMain}
      navigateToEditSalary={() => navigation.push(FIB_EDIT_SALARY)}
      navigateToCustomCover={() => navigation.push(FIB_CUSTOM_PERCENTAGE)}
      navigateToFeedbackForm={() => navigation.push(FIB_FEEDBACK_FORM)}
      selectCoverType={selectCoverType}
      selectedPackage={packageDetails}
      faqs={faqs}
      documents={documents}
      payoutEstimatorItems={payoutEstimatorItems}
      setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
      setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
      onScrollEnd={navigation.onScrollEnd}
      offset={navigation.currentRoute.offset || { x: 0, y: 0 }}
      loading={loading}
      maxTermAge={maxTermAge}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  grossSalary: getFIBState(state).salary,
  userDateOfBirth: getUserDateOfBirth(state),
  selectedPackage: getFIBState(state).selectedPackage,
});

export default connect<ReturnType<typeof mapStateToProps>>(mapStateToProps)(FibBrowseContainer);

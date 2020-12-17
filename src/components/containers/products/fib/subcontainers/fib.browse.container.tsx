import React, { memo, useState, useEffect } from "react";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { View, Linking, Platform } from "react-native";
import { Text } from "@atoms";
import { FibBrowseScreen, FibCustomCoverScreen } from "@screens";
import { GQL_QUERY_GET_TOP_UPS_ESTIMATE_COST } from "@graphql/products";
import {
  FIB_EDIT_SALARY,
  FIB_FAQ,
  FibLocalNavigation,
  FIB_CUSTOM_PERCENTAGE,
  FIB_UNDERWRITING_JOURNEY_INTRODUCTION,
} from "../fib.types";
import fibFaqItems from "../data/faq-fib-data";
import fibDocumentsItems from "../data/documents-data";
import { GetTopUpsEstimateCost, GetTopUpsEstimateCostVariables, GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { calculatePayoutCalculatorItems, packages, useCover, calculatePayoutAmount } from "../fib.helpers";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { CoverType, ProductCode } from "../../../../../graphql/_core/schema/globalTypes";

interface IFibContainer {
  navigation: FibLocalNavigation;
  selectFaq: (fabId: string) => void;
}

const documents: IFaq[] = fibDocumentsItems.map((document) => ({
  redirectType: "external",
  label: document.question,
  onPress: async () => {
    if (Platform.OS === "ios") {
      handleOpenWebView({ uri: document.url, title: "Policy" });
    } else {
      try {
        await Linking.openURL(document.url);
      } catch (e) {
        Logger.error(e, { documentId: document.id, file: "fib-browse.container" });
      }
    }
  },
  iconSvgXml: document.iconSvgXml,
}));

const _FibBrowseContainer = memo(function (props: IFibContainer & ReturnType<typeof mapStateToProps>) {
  const { navigation, selectFaq, grossSalary, selectedPackage, userDateOfBirth } = props;
  const { isCustomCover, customCoverPercentage = null } = navigation.currentRoute.passProps;
  const [selectedCoverType, selectCoverType] = useCover(
    isCustomCover ? CoverType.custom : selectedPackage || CoverType.common
  );
  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const [payoutEstimatorItems, setPayoutEstimatorItems] = useState(
    calculatePayoutCalculatorItems(userDateOfBirth, deceaseAgeIndexYear)
  );
  const maxTermAge = moment().diff(moment(userDateOfBirth), "years") + 40;

  useEffect(() => {
    const newItems = calculatePayoutCalculatorItems(userDateOfBirth, deceaseAgeIndexYear);
    setPayoutEstimatorItems(newItems);
  }, [deceaseAgeIndexYear, userDateOfBirth]);

  //TODO: deceaseAgeIndexMonth should be handle on calculate payout calculator items
  const deceaseAgeMonth =
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth]) ===
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth])
      ? payoutEstimatorItems.months[deceaseAgeIndexMonth]
      : payoutEstimatorItems.months[payoutEstimatorItems.months.length - 1] || 0; // Never show error, default to 0
  const deceaseAgeYear = payoutEstimatorItems.years[deceaseAgeIndexYear];

  const topUpsQueryVariables = {
    grossSalary,
    coverType: selectedCoverType as CoverType,
    customCoverPercentage,
  };

  const { loading, error, data } = useQuery<GetTopUpsEstimateCost, GetTopUpsEstimateCostVariables>(
    GQL_QUERY_GET_TOP_UPS_ESTIMATE_COST,
    {
      variables: {
        input: topUpsQueryVariables,
        product: ProductCode.YULFIB,
      },
      fetchPolicy: "cache-first",
    }
  );

  const { data: yuliferData } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER);
  const payoutAmount = calculatePayoutAmount({
    term: data?.getTopUpsEstimateCost?.term,
    deceaseAgeMonth,
    deceaseAgeYear,
    sumAssured: data?.getTopUpsEstimateCost?.sumAssured,
    dateOfBirth: userDateOfBirth,
  });

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

  const monthlyAmountProtected = Math.round(
    ((data?.getTopUpsEstimateCost?.sumAssured / (data?.getTopUpsEstimateCost?.term * 12)) * 100) / 100
  );

  const packageDetails: Package = {
    newEarnRate: data?.getTopUpsEstimateCost?.newEarnRate || 0,
    payoutAmount: Math.round(payoutAmount),
    earnRate: data?.getTopUpsEstimateCost?.earnRate || 0,
    salaryPercentageCovered: data?.getTopUpsEstimateCost?.salaryPercentageCovered || 0,
    estimatedCost: data?.getTopUpsEstimateCost?.estimatedCost || 0,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: data?.getTopUpsEstimateCost?.descriptionHeading || "",
    term: data?.getTopUpsEstimateCost?.term,
    monthlyAmountProtected,
  };

  if (isCustomCover) {
    return (
      <FibCustomCoverScreen
        avatarUrl={yuliferData?.getYulifer.avatarRemoteFiles?.pngFull}
        onNavigateBack={navigation.pop}
        navigateToEditSalary={() => navigation.push(FIB_EDIT_SALARY, { onPressDone: navigation.pop })}
        onContinue={() => navigation.push(FIB_UNDERWRITING_JOURNEY_INTRODUCTION)}
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
      onContinue={() => navigation.push(FIB_UNDERWRITING_JOURNEY_INTRODUCTION)}
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

const FibBrowseContainer = connect<ReturnType<typeof mapStateToProps>>(mapStateToProps)(_FibBrowseContainer);

export default FibBrowseContainer;

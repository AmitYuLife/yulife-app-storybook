import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { memo, useState, useEffect, useCallback } from "react";
import { View, Linking, Platform } from "react-native";
import { connect, useDispatch } from "react-redux";
import { Text } from "@atoms";
import { FibLocalNavigation, FIB_FAQ, FIB_CONTACT_DETAILS } from "../fib.types";
import { GQL_MUTATION_CREATE_TOP_UPS_QUOTE, GQL_QUERY_GET_TOP_UPS_QUOTE } from "@graphql/products";
import { getFIBState, getLifeInsuranceUserAnswers } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { packages, useCover, calculatePayoutCalculatorItems, calculatePayoutAmount } from "../fib.helpers";
import { FibSummaryScreen } from "@components/screens/products/fib/browse-packages/fib.summary.screen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import fibDocumentsItems, { policyScheduleDocument } from "../data/documents-data";
import fibFaqItems from "../data/faq-fib-data";
import moment from "moment";
import { updateFIBValue, updateFIBValuesFromNewQuote } from "@redux/product/product.actions";
import { MODALS } from "@navigation/constants";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { Navigation } from "react-native-navigation";
import { CreateTopUpsQuote, CreateTopUpsQuoteVariables } from "../../../../../graphql/_core/schema";
import { CoverType, CreateTopUpsQuoteInput, ProductCode } from "../../../../../graphql/_core/schema/globalTypes";
import { GetTopUpsQuote, GetTopUpsQuoteVariables } from "../../../../../graphql/_core/schema/GetTopUpsQuote";
import { getBirthday } from "../../../../../redux/product/product.selectors";

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
  const { navigation, userDateOfBirth, userDateOfBirthFib, selectFaq, fibState, userAnswers } = props;
  const { salary: grossSalary, selectedPackage, productEntityId, latestQuoteId } = fibState;
  const dispatch = useDispatch();

  const [selectedCoverType, selectCoverType] = useCover(selectedPackage || "common");

  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const [payoutEstimatorItems, setPayoutEstimatorItems] = useState(
    calculatePayoutCalculatorItems(props.userDateOfBirthFib || props.userDateOfBirth, deceaseAgeIndexYear)
  );

  const customerAge = moment().diff(moment(userDateOfBirthFib || userDateOfBirth), "years");

  useEffect(() => {
    const newItems = calculatePayoutCalculatorItems(
      props.userDateOfBirthFib || props.userDateOfBirth,
      deceaseAgeIndexYear
    );
    setPayoutEstimatorItems(newItems);
  }, [deceaseAgeIndexYear, props.userDateOfBirth, props.userDateOfBirthFib]);

  const deceaseAgeMonth =
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth]) ===
    Number(payoutEstimatorItems.months[deceaseAgeIndexMonth])
      ? payoutEstimatorItems.months[deceaseAgeIndexMonth]
      : payoutEstimatorItems.months[payoutEstimatorItems.months.length - 1] || 0; // Never show error, default to 0

  const deceaseAgeYear = payoutEstimatorItems.years[deceaseAgeIndexYear];

  const queryVariables: CreateTopUpsQuoteInput = {
    grossSalary: grossSalary,
    coverType: selectedCoverType as CoverType,
    customCoverPercentage: 0,
    userAnswers,
  };

  const { loading, data, error } = useQuery<GetTopUpsQuote, GetTopUpsQuoteVariables>(GQL_QUERY_GET_TOP_UPS_QUOTE, {
    variables: {
      input: {
        customerProductEntityId: productEntityId,
        quoteId: latestQuoteId,
      },
      product: ProductCode.YULFIB,
    },
  });

  const [createFibQuote] = useMutation<CreateTopUpsQuote, CreateTopUpsQuoteVariables>(
    GQL_MUTATION_CREATE_TOP_UPS_QUOTE
  );

  useEffect(() => {
    if (data?.getTopUpsQuote?.actualCost && fibState.actualCost !== data.getTopUpsQuote.actualCost) {
      dispatch(updateFIBValue({ key: "actualCost", value: data.getTopUpsQuote.actualCost }));
    }

    if (data?.getTopUpsQuote?.medicalInvestigationRequired) {
      dispatch(
        updateFIBValue({
          key: "medicalInvestigationRequired",
          value: data.getTopUpsQuote?.medicalInvestigationRequired,
        })
      );
    }
  }, [data, dispatch, fibState.actualCost]);

  useEffect(() => {
    async function createNewQuote() {
      const { data: newFibQuoteData } = await createFibQuote({
        variables: {
          input: queryVariables,
          product: ProductCode.YULFIB,
        },
      });

      dispatch(updateFIBValuesFromNewQuote(newFibQuoteData?.createTopUpsQuote));
    }

    createNewQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCoverType, createFibQuote]);

  const payoutAmount = calculatePayoutAmount({
    deceaseAgeMonth,
    deceaseAgeYear,
    sumAssured: data?.getTopUpsQuote?.sumAssured,
    term: data?.getTopUpsQuote?.term,
    dateOfBirth: userDateOfBirthFib || userDateOfBirth,
  });

  const monthlyAmountProtected = Math.round(
    ((data?.getTopUpsQuote?.sumAssured / (data?.getTopUpsQuote?.term * 12)) * 100) / 100
  );

  const packageDetails: Package = {
    newEarnRate: data?.getTopUpsQuote?.newEarnRate || 0,
    payoutAmount: Math.round(payoutAmount),
    earnRate: data?.getTopUpsQuote?.earnRate || 0,
    salaryPercentageCovered: data?.getTopUpsQuote?.salaryPercentageCovered || 0,
    estimatedCost: data?.getTopUpsQuote?.actualCost || 0,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: data?.getTopUpsQuote?.descriptionHeading || "",
    term: data?.getTopUpsQuote?.term,
    monthlyAmountProtected,
    actualCost: data?.getTopUpsQuote?.actualCost || 0,
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
          heading: "Leave Application?",
          subheading: "We’ll save your progress for you.",
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

  const handleOnContinue = useCallback(async () => {
    return navigation.push(FIB_CONTACT_DETAILS);
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
      onContinue={handleOnContinue}
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
  fibState: getFIBState(state),
  userDateOfBirth: getUserDateOfBirth(state),
  userDateOfBirthFib: getBirthday(state, "YYYY-MM-DD"),
  userAnswers: getLifeInsuranceUserAnswers(state),
});

const FIBConfirmPackages = connect(mapStateToProps)(FibConfirmPackagesContainer);

export default FIBConfirmPackages;

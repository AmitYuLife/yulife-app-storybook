import React, { memo, useState, useEffect, useCallback } from "react";
import { Linking, Platform } from "react-native";
import { connect, useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { FibLocalNavigation, FIB_DECLARATION_CONFIRMATION, FIB_FAQ_LIST } from "../fib.types";
import { getFIBState, getLifeInsuranceUserAnswers } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { packages, calculatePayoutCalculatorItems, calculatePayoutAmount } from "../fib.helpers";
import { FibSummaryScreen } from "@components/screens/products/fib/browse-packages/fib.summary.screen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import fibDocumentsItems, { policyScheduleDocument } from "../data/documents-data";
import moment from "moment";
import { updateFIBValuesFromNewQuote } from "@redux/product/product.actions";
import { MODALS } from "@navigation/constants";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { Navigation } from "react-native-navigation";
import {
  CreateTopUpsQuote,
  CreateTopUpsQuoteVariables,
  CreateTopUpsQuote_createTopUpsQuote,
  GetYulifer,
} from "@graphql/_core/schema";
import { CoverType, CreateTopUpsQuoteInput, ProductCode, YuProductId } from "@graphql/_core/schema/globalTypes";
import { getBirthday } from "@redux/product/product.selectors";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { GQL_MUTATION_CREATE_TOP_UPS_QUOTE } from "@graphql/products";

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
      try {
        handleOpenWebView({ uri: document.url, title: document.question });
      } catch (e) {
        Logger.error(e, { documentId: document.id, file: "fib-confirm-packages.container", platform: "ios" });
      }
    } else {
      try {
        await Linking.openURL(document.url);
      } catch (e) {
        Logger.error(e, { documentId: document.id, file: "fib-confirm-packages.container", platform: "android" });
      }
    }
  },
  iconSvgXml: document.iconSvgXml,
}));

const FibConfirmPackagesContainer = memo(function (props: FibConfirmPackagesContainerProps) {
  const [selectedCoverType, setSelectedCoverType] = useState(props?.fibState.selectedPackage || "common");
  const [fibQuoteData, setFibQuoteData] = useState<CreateTopUpsQuote_createTopUpsQuote>();
  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const [payoutEstimatorItems, setPayoutEstimatorItems] = useState(
    calculatePayoutCalculatorItems(props.userDateOfBirthFib || props.userDateOfBirth, deceaseAgeIndexYear)
  );
  const { navigation, userDateOfBirth, userDateOfBirthFib, fibState, userAnswers } = props;
  const { salary: grossSalary } = fibState;

  const dispatch = useDispatch();

  const customerAge = moment().diff(moment(userDateOfBirthFib || userDateOfBirth), "years");
  const { data: yuliferData } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const [createFibQuote] = useMutation<CreateTopUpsQuote, CreateTopUpsQuoteVariables>(
    GQL_MUTATION_CREATE_TOP_UPS_QUOTE
  );

  useEffect(() => {
    const newItems = calculatePayoutCalculatorItems(
      props.userDateOfBirthFib || props.userDateOfBirth,
      deceaseAgeIndexYear
    );
    setPayoutEstimatorItems(newItems);
  }, [deceaseAgeIndexYear, props.userDateOfBirth, props.userDateOfBirthFib]);

  const deceaseAgeMonth = Number(payoutEstimatorItems.months[deceaseAgeIndexMonth])
    ? payoutEstimatorItems.months[deceaseAgeIndexMonth]
    : payoutEstimatorItems.months[payoutEstimatorItems.months.length - 1] || 0; // Never show error, default to 0

  const deceaseAgeYear = payoutEstimatorItems.years[deceaseAgeIndexYear];

  const queryVariables: CreateTopUpsQuoteInput = {
    grossSalary: grossSalary,
    coverType: selectedCoverType as CoverType,
    customCoverPercentage: 0,
    userAnswers,
  };

  const createNewQuote = async () => {
    const { data: newFibQuoteData } = await createFibQuote({
      variables: {
        input: queryVariables,
        product: ProductCode.YULFIB,
      },
    });

    setFibQuoteData(newFibQuoteData?.createTopUpsQuote);
    dispatch(updateFIBValuesFromNewQuote(newFibQuoteData?.createTopUpsQuote));
  };

  useEffect(() => {
    createNewQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payoutAmount = calculatePayoutAmount({
    deceaseAgeMonth,
    deceaseAgeYear,
    sumAssured: fibQuoteData?.coverTypesInfo[selectedCoverType]?.sumAssured,
    term: fibQuoteData?.term,
    dateOfBirth: userDateOfBirthFib || userDateOfBirth,
  });

  const monthlyAmountProtected = Math.round(
    ((fibQuoteData?.coverTypesInfo[selectedCoverType]?.sumAssured / (fibQuoteData?.term * 12)) * 100) / 100
  );

  const fibProduct = yuliferData?.personal?.filter(
    (product) => product.productId === YuProductId.family_income_benefit
  )[0];

  const selectedProductOption = fibProduct?.options.filter(
    (productOption) => productOption.type === selectedCoverType
  )[0];

  const packageDetails: Package = {
    newEarnRate: fibQuoteData?.newEarnRate || 0,
    payoutAmount: Math.round(payoutAmount),
    earnRate: selectedProductOption?.earnRate || 0,
    salaryPercentageCovered: selectedProductOption?.percentageCovered * 100 || 0,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: fibQuoteData?.descriptionHeading || "",
    term: fibQuoteData?.term,
    monthlyAmountProtected,
    actualCost: fibQuoteData?.coverTypesInfo[selectedCoverType]?.actualCost || 0,
    title: fibProduct?.name,
    powers: selectedProductOption?.powers || [],
  };

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
    await createNewQuote();
    return navigation.push(FIB_DECLARATION_CONFIRMATION);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const navigateToFaqsList = () => navigation.push(FIB_FAQ_LIST);

  return (
    <FibSummaryScreen
      onContinue={handleOnContinue}
      onExit={onExitHandler}
      selectedPackage={packageDetails}
      selectCoverType={(cover) => setSelectedCoverType(cover)}
      documents={documents}
      payoutEstimatorItems={payoutEstimatorItems}
      setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
      setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
      loading={false}
      onNavigateBack={navigation.pop}
      customerAge={customerAge}
      onScrollEnd={navigation.onScrollEnd}
      offset={navigation.currentRoute.offset || { x: 0, y: 0 }}
      navigateToFaqsList={navigateToFaqsList}
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

import React, { memo, useState, useEffect, useCallback } from "react";
import { Linking, Platform } from "react-native";
import { connect, useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  FibLocalNavigation,
  FIB_DECLARATION_CONFIRMATION,
  FIB_FAQ_LIST,
  FIB_PAYOUT_CALCULATOR,
  FIB_CUSTOM_PERCENTAGE,
} from "../fib.types";
import { getFIBState, getLifeInsuranceUserAnswers } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { packages, useCover } from "../fib.helpers";
import { FibDetailsScreen } from "@screens";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import fibDocumentsItems from "../data/documents-data";
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
import { CoverType, CreateTopUpsQuoteInput, ProductCode } from "@graphql/_core/schema/globalTypes";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { GQL_MUTATION_CREATE_TOP_UPS_QUOTE } from "@graphql/products";
import { FIB_PAYOUT_CALCULATOR_INITIAL_STATE } from "./fib.payout-calculator.conainer";
import { addCommasToNumber } from "@services/utils";
import { formatMoney } from "@services/money";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface OwnProps {
  navigation: FibLocalNavigation;
  selectFaq: (fabId: string) => void;
}

type FibConfirmPackagesContainerProps = ConnectedState & OwnProps;

const documents = fibDocumentsItems.map((document) => ({
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
  icon: document.icon,
}));

const FibConfirmPackagesContainer = memo(function (props: FibConfirmPackagesContainerProps) {
  const [selectedCoverType, setSelectedCoverType] = useCover(props?.fibState.selectedPackage || CoverType.epic);
  const [fibQuoteData, setFibQuoteData] = useState<CreateTopUpsQuote_createTopUpsQuote>();
  const { navigation, fibState, userAnswers } = props;
  const { salary: grossSalary } = fibState;
  const isCustomCover = navigation?.currentRoute?.passProps?.isCustomCover;
  const dispatch = useDispatch();

  const { data: yuliferData } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const [createFibQuote] = useMutation<CreateTopUpsQuote, CreateTopUpsQuoteVariables>(
    GQL_MUTATION_CREATE_TOP_UPS_QUOTE
  );

  const queryVariables: CreateTopUpsQuoteInput = {
    grossSalary: grossSalary,
    coverType: isCustomCover ? CoverType.custom : (selectedCoverType as CoverType),
    customCoverPercentage: props?.navigation?.currentRoute?.passProps?.percentage || 0,
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
  }, [navigation?.currentRoute?.passProps?.coverType]);

  const monthlyAmountProtected = Math.round(
    ((fibQuoteData?.coverTypesInfo[isCustomCover ? CoverType.custom : selectedCoverType]?.sumAssured /
      (fibQuoteData?.term * 12)) *
      100) /
      100
  );

  const fibProduct = yuliferData?.personal?.chest;

  const selectedProductOption = fibProduct?.options.filter(
    (productOption) => productOption.type === selectedCoverType
  )[0];

  const salaryPercentageCovered =
    props?.navigation?.currentRoute?.passProps?.percentage || selectedProductOption?.percentageCovered * 100;

  // @TODO: Maybe move all this content to a different file

  // Start
  const dateFormat = "DD/MM/YYYY";
  const now = moment();
  const packageDetails: Package = {
    newEarnRate: fibQuoteData?.newEarnRate || 0,
    earnRate: selectedProductOption?.earnRate || 0,
    salaryPercentageCovered: salaryPercentageCovered || 0,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: fibQuoteData?.descriptionHeading || "",
    term: fibQuoteData?.term,
    monthlyAmountProtected,
    actualCost: fibQuoteData?.coverTypesInfo[isCustomCover ? CoverType.custom : selectedCoverType]?.actualCost || 0,
    title: fibProduct?.name,
    powers: selectedProductOption?.powers || [],
    filterBySelected: isCustomCover,
  };

  const additionalInformation = {
    items: [
      {
        id: "policyTerm",
        title: "Policy term",
        description: `${packageDetails?.term} years\nStart date: ${now.format(dateFormat)}\nEnd date: ${now
          .add(packageDetails?.term, "years")
          .format(dateFormat)}`,
      },
      {
        id: "amountProtected",
        title: "Amount protected",
        description: `£${addCommasToNumber(
          packageDetails?.monthlyAmountProtected
        )} for every month remaining in policy at time of death.`,
      },
      {
        id: "cost",
        title: "Cost",
        description: `£${formatMoney(packageDetails?.actualCost)} per month`,
      },
    ],
  };
  // End

  const navigateToExit = useCallback(async () => {
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

  const navigateToContinue = useCallback(async () => {
    await createNewQuote();

    return navigation.push(FIB_DECLARATION_CONFIRMATION, {
      coverType: selectedCoverType,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const navigateToFaqsList = () => navigation.push(FIB_FAQ_LIST);

  const navigateToPayoutCalculator = () => {
    navigation.push(FIB_PAYOUT_CALCULATOR, {
      type: isCustomCover ? FIB_PAYOUT_CALCULATOR_INITIAL_STATE.custom : FIB_PAYOUT_CALCULATOR_INITIAL_STATE.dataAdded,
      coverTypesInfo: fibQuoteData.coverTypesInfo,
      customCoverPercentage: props?.navigation?.currentRoute?.passProps?.percentage,
    });
  };

  const navigateToCustomCover = () =>
    navigation.push(FIB_CUSTOM_PERCENTAGE, {
      percentage: salaryPercentageCovered,
    });

  return (
    <FibDetailsScreen
      selectedPackage={packageDetails}
      selectCoverType={setSelectedCoverType}
      onScrollEnd={navigation.onScrollEnd}
      offset={navigation.currentRoute.offset || { x: 0, y: 0 }}
      documents={documents}
      additionalInformation={additionalInformation}
      navigateToContinue={navigateToContinue}
      navigateToBack={navigation.pop}
      navigateToExit={navigateToExit}
      navigateToFaqsList={navigateToFaqsList}
      navigateToPayoutCalculator={navigateToPayoutCalculator}
      navigateToCustomCover={!isCustomCover ? navigateToCustomCover : null}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  fibState: getFIBState(state),
  userAnswers: getLifeInsuranceUserAnswers(state),
});

const FIBConfirmPackages = connect(mapStateToProps)(FibConfirmPackagesContainer);

export default FIBConfirmPackages;

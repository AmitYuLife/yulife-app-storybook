import React, { memo } from "react";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { View, Linking, Platform } from "react-native";
import { Text } from "@atoms";
import { FibBrowseScreen, FibCustomCoverScreen } from "@screens";
import { FibLocalNavigation, FIB_CUSTOM_PERCENTAGE, FIB_FAQ_LIST, FIB_INTRO_YUGI } from "../fib.types";
import fibDocumentsItems from "../data/documents-data";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";
import { getUserDateOfBirth } from "@redux/user/user.selectors";
import { packages, useCover } from "../fib.helpers";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { YUGI_INTRO_TYPE } from "./fib.yugi-intro.container";
import { noop } from "../../../../../services/utils";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

interface IFibContainer {
  navigation: FibLocalNavigation;
}

const documents: IFaq[] = fibDocumentsItems.map((document) => ({
  redirectType: "external",
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
  iconSvgXml: document.iconSvgXml,
}));

const _FibBrowseContainer = memo(function (props: IFibContainer & ReturnType<typeof mapStateToProps>) {
  const { navigation, selectedPackage, userDateOfBirth } = props;
  const { isCustomCover } = navigation.currentRoute.passProps;
  const [selectedCoverType, selectCoverType] = useCover(
    isCustomCover ? CoverType.custom : selectedPackage || CoverType.epic
  );

  const maxTermAge = moment().diff(moment(userDateOfBirth), "years") + 40;

  const { data: yuliferData, loading, error } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER);

  const navigateToIntroScreen = () => {
    navigation.pop();
    return true;
  };

  useBackHandler(navigateToIntroScreen);

  const navigateToFaqsList = () => navigation.push(FIB_FAQ_LIST);

  const handleContinue = () => {
    navigation.push(FIB_INTRO_YUGI, {
      type: YUGI_INTRO_TYPE.PACKAGE_CHOSEN,
    });
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

  if (isCustomCover) {
    return (
      <FibCustomCoverScreen
        avatarUrl={yuliferData?.getYulifer.avatarRemoteFiles?.pngFull}
        onNavigateBack={navigation.pop}
        onContinue={handleContinue}
        navigateToEditSalary={noop}
        selectedPackage={packageDetails}
        payoutEstimatorItems={{} as any}
        setDeceaseAgeIndexYear={noop}
        setDeceaseAgeIndexMonth={noop}
        loading={loading}
        onNavigateToFaqsList={navigateToFaqsList}
        documents={documents}
      />
    );
  }

  return (
    <FibBrowseScreen
      onNavigateToYuScreen={navigation.popToMain}
      navigateToCustomCover={() => navigation.push(FIB_CUSTOM_PERCENTAGE)}
      onContinue={handleContinue}
      selectCoverType={selectCoverType}
      selectedPackage={packageDetails}
      documents={documents}
      onScrollEnd={navigation.onScrollEnd}
      offset={navigation.currentRoute.offset || { x: 0, y: 0 }}
      onNavigateToFaqsList={navigateToFaqsList}
      onNavigateToIntroScreen={navigateToIntroScreen}
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

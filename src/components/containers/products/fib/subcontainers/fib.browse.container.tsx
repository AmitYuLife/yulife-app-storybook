import { useQuery } from "@apollo/react-hooks";
import React, { memo, useState } from "react";
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

import { FIB_EDIT_SALARY, FIB_FAQ, FibLocalNavigation, FIB_CUSTOM_PERCENTAGE } from "../fib.types";
import fibFaqItems from "../data/faq-fib-data";
import fibDocumentsItems from "../data/documents-data";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { PackageId } from "@components/screens/products/fib/fib.helper";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { IFaq } from "@components/screens/products/fib/browse-packages/subcomponents/faqs/faq";

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

const packages = {
  common: {
    label: "Common",
  },
  rare: {
    label: "Rare",
  },
  epic: {
    label: "Epic",
  },
  custom: {
    label: "Custom",
  },
};

const payoutEstimatorItems = {
  years: Array.from({ length: 31 }).map((_, i) => i + 40),
  months: Array.from({ length: 12 }).map((_, i) => i),
};

const FibBrowseContainer = memo(function (props: IFibContainer & ReturnType<typeof mapStateToProps>) {
  const { navigation, selectFaq, grossSalary } = props;
  const { isCustomCover, customCoverPercentage = null } = navigation.currentRoute.passProps;
  const [selectedCoverType, selectCoverType] = useState<PackageId>(isCustomCover ? "custom" : "common");
  const [deceaseAgeIndexYear, setDeceaseAgeIndexYear] = useState(0);
  const [deceaseAgeIndexMonth, setDeceaseAgeIndexMonth] = useState(0);
  const { loading, error, data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(
    GQL_GET_LIFE_INSURANCE_TOP_UPS,
    {
      variables: {
        grossSalary,
        coverType: selectedCoverType,
        customCoverPercentage,
        deceaseAgeYear: payoutEstimatorItems.years[deceaseAgeIndexYear],
        deceaseAgeMonth: payoutEstimatorItems.months[deceaseAgeIndexMonth],
      },
    }
  );

  const { data: yuliferData } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
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
  };

  if (isCustomCover) {
    return (
      <FibCustomCoverScreen
        avatarUrl={yuliferData.getYulifer.avatarRemoteFiles?.pngFull}
        onNavigateToYuScreen={navigation.pop}
        navigateToEditSalary={() => navigation.push(FIB_EDIT_SALARY, { onPressDone: navigation.pop })}
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
      avatarUrl={yuliferData.getYulifer.avatarRemoteFiles?.pngFull}
      onNavigateToYuScreen={navigation.popToMain}
      navigateToEditSalary={() => navigation.push(FIB_EDIT_SALARY)}
      navigateToCustomCover={() => navigation.push(FIB_CUSTOM_PERCENTAGE)}
      selectCoverType={selectCoverType}
      selectedPackage={packageDetails}
      faqs={faqs}
      documents={documents}
      payoutEstimatorItems={payoutEstimatorItems}
      setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
      setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
      loading={loading}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  grossSalary: getFIBState(state).salary,
});

export default connect<ReturnType<typeof mapStateToProps>>(mapStateToProps)(FibBrowseContainer);

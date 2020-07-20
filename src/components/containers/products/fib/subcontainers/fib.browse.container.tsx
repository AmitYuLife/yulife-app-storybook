import { useQuery } from "@apollo/react-hooks";
import React, { memo, useState } from "react";
import { View, Linking } from "react-native";
import { Text } from "@atoms";
import {
  GQL_GET_LIFE_INSURANCE_TOP_UPS,
  GetLifeInsuranceToUpsData,
  GetLifeInsuranceTopUpsVars,
} from "@graphql/products";
import { FibBrowseScreen } from "@screens/index";
import Logger from "@services/logging/logger";

import { FIB_EDIT_SALARY, FIB_FAQ, FibLocalNavigation } from "../fib.types";
import fibFaqItems from "../data/faq-fib-data";
import fibDocumentsItems from "../data/documents-data";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { PackageId } from "@components/screens/products/fib/fib.helper";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";
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

const FibBrowseContainer = memo(function (props: IFibContainer) {
  const { navigation, selectFaq } = props;
  const [selectedCoverType, selectCoverType] = useState<PackageId>("common");
  const { loading, error, data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(
    GQL_GET_LIFE_INSURANCE_TOP_UPS,
    {
      variables: {
        grossSalary: 50000,
        coverType: selectedCoverType,
        customCoverPercentage: 50,
        deceaseAgeMonth: 0,
        deceaseAgeYear: 20,
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

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const { newEarnRate, salaryPercentageCovered, estimatedCost, descriptionHeading } = data.getLifeInsuranceTopUps;

  const packageDetails: Package = {
    earnRate: newEarnRate,
    salaryPercentageCovered,
    estimatedCost,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading,
  };

  return (
    <FibBrowseScreen
      avatarUrl={yuliferData.getYulifer.avatarRemoteFile}
      onNavigateToYuScreen={navigation.popToMain}
      navigateToEditSalary={() => navigation.push(FIB_EDIT_SALARY)}
      currentEarnRate={data.getLifeInsuranceTopUps.earnRate}
      selectCoverType={selectCoverType}
      selectedPackage={packageDetails}
      faqs={faqs}
      documents={documents}
    />
  );
});

export default FibBrowseContainer;

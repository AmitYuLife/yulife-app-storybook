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
import { transformAvatar } from "@screens/member/yu-screen/avatar-builder/avatar-builder.helper";
import Logger from "@services/logging/logger";

import { FIB_EDIT_SALARY, FIB_FAQ, FibLocalNavigation } from "../fib.types";
import fibFaqItems from "../data/faq-fib-data";
import fibDocumentsItems from "../data/documents-data";
import { PackageId } from "@components/screens/products/fib/fib.helper";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";

interface IFibContainer {
  navigation: FibLocalNavigation;
  selectFaq: (fabId: string) => void;
}

const documents = fibDocumentsItems.map((document) => ({
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
    descriptionHeading: "Designed to cover the basics",
  },
  rare: {
    label: "Rare",
    descriptionHeading: "Cover the home and basics",
  },
  epic: {
    label: "Epic",
    descriptionHeading: "Maximum protection for your loved ones",
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

  const faqs = fibFaqItems.map((faq) => ({
    label: faq.question,
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

  const { earnRate, salaryPercentageCovered, estimatedCost } = data.getLifeInsuranceTopUps;

  const packageDetails: Package = {
    earnRate,
    salaryPercentageCovered,
    estimatedCost,
    id: selectedCoverType,
    label: packages[selectedCoverType].label,
    descriptionHeading: packages[selectedCoverType].descriptionHeading,
  };

  return (
    <FibBrowseScreen
      avatar={transformAvatar(data.getLifeInsuranceTopUps.avatar)}
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

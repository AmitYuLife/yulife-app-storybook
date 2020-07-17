import { useQuery } from "@apollo/react-hooks";
import React, { memo } from "react";
import { View, Linking } from "react-native";
import { Text } from "@atoms";
import { FibBrowseScreen } from "@screens/index";
import { transformAvatar } from "@screens/member/yu-screen/avatar-builder/avatar-builder.helper";
import Logger from "@services/logging/logger";

import { FIB_EDIT_SALARY, FIB_FAQ, FibLocalNavigation } from "../fib.types";
import fibFaqItems from "../data/faq-fib-data";
import fibDocumentsItems from "../data/documents-data";
import {
  GQL_QUERY_GET_LIFE_INSURANCE_TOP_UPS,
  GetLifeInsuranceTopUpsData,
} from "@graphql/yuscreen/getLifeInsuranceTopUps";
import { LifeInsuranceTopUpsInput, CoverType } from "@graphql/_core/schema/globalTypes";

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

const FibBrowseContainer = memo(function (props: IFibContainer) {
  const { navigation, selectFaq } = props;

  // TODO: Send correct data to query
  const queryInputData: LifeInsuranceTopUpsInput = {
    grossSalary: 30000,
    coverType: CoverType.common,
  };

  const { loading, error, data } = useQuery<GetLifeInsuranceTopUpsData>(GQL_QUERY_GET_LIFE_INSURANCE_TOP_UPS, {
    variables: {
      input: queryInputData,
    },
  });

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

  return (
    <FibBrowseScreen
      avatar={transformAvatar(data.getLifeInsuranceTopUps.avatar)}
      onNavigateToYuScreen={navigation.popToMain}
      navigateToEditSalary={() => navigation.push(FIB_EDIT_SALARY)}
      currentEarnRate={data.getLifeInsuranceTopUps.earnRate}
      faqs={faqs}
      documents={documents}
    />
  );
});

export default FibBrowseContainer;

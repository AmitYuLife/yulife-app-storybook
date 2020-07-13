import React, { memo, useCallback } from "react";
import { FibBrowseScreen } from "@screens/index";
import { useQuery } from "@apollo/react-hooks";
import { handleNavigateBack } from "@navigation/utils";
import { transformAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar-builder.helper";
import { GQL_QUERY_GET_YULIFER, GetYuliferData } from "@graphql/yuscreen";
import { View, Linking } from "react-native";
import { Text } from "@atoms";
import fibFaqItems, { IFibFAQ } from "@components/containers/products/fib/data/faq-fib-data";
import fibDocumentsItems from "@components/containers/products/fib/data/documents-data";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";

interface IFibContainer {
  componentId: string;
}

interface IPassedFaqContainerProps {
  faq: IFibFAQ;
}

const FibContainer = memo(function (props: IFibContainer) {
  const navigateToFaqScreen = useCallback(
    ({ faq }: IPassedFaqContainerProps) => () =>
      Navigation.push(props.componentId, {
        component: {
          id: ROUTES.fibFaq,
          name: ROUTES.fibFaq,
          passProps: {
            faq,
          } as IPassedFaqContainerProps,
        },
      }),
    [props.componentId]
  );

  const navigateToEditSalaryScreen = useCallback(
    () =>
      Navigation.push(props.componentId, {
        component: {
          id: ROUTES.fibEditSalary,
          name: ROUTES.fibEditSalary,
        },
      }),
    [props.componentId]
  );

  const faqs = fibFaqItems.map((faq) => ({
    label: faq.question,
    onPress: navigateToFaqScreen({ faq }),
  }));

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

  const { loading, error, data } = useQuery<GetYuliferData>(GQL_QUERY_GET_YULIFER);

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
      avatar={transformAvatar(data.getYulifer.avatar)}
      onNavigateBack={handleNavigateBack(props.componentId)}
      navigateToEditSalary={navigateToEditSalaryScreen}
      currentEarnRate={20}
      faqs={faqs}
      documents={documents}
    />
  );
});

export default FibContainer;

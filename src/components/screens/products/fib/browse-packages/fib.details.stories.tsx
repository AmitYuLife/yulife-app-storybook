import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibDetailsScreen } from "./fib.details.screen";
import { View } from "react-native";
import documentsData from "@components/containers/products/fib/data/documents-data";
import { Package } from "./fib.browse.types";
import { IFaq } from "./subcomponents/faqs/faq";
import { CoverType } from "@graphql/_core/schema/globalTypes";

const selectedPackage: Package = {
  earnRate: 20,
  salaryPercentageCovered: 50,
  id: CoverType.common,
  label: "Common",
  descriptionHeading: "basic cover",
  newEarnRate: 40,
  payoutAmount: 400000,
  term: 40,
  monthlyAmountProtected: 1000,
  powers: [
    {
      id: "double_chest",
      title: "Double Chest",
      description: "Increase your chances of getting a double chest on a quest.",
      icon: "",
    },
  ],
};

const onPress = (): null => null;
const documents: IFaq[] = documentsData.map(({ question, iconSvgXml }) => ({
  label: question,
  onPress,
  iconSvgXml: iconSvgXml,
  redirectType: "external",
}));

storiesOf("FibBrowse", module)
  .addDecorator((g: any) => <View style={{ flex: 1 }}>{g()}</View>)
  .add("default", () => (
    <FibDetailsScreen
      selectedPackage={selectedPackage}
      offset={{ x: 0, y: 0 }}
      onScrollEnd={() => null}
      selectCoverType={() => null}
      documents={documents}
      navigateToContinue={() => null}
      navigateToBack={() => null}
      navigateToExit={() => null}
      navigateToFaqsList={() => null}
      navigateToPayoutCalculator={() => null}
      navigateToCustomCover={() => null}
    />
  ));

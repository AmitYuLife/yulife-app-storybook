import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibDetailsScreen } from "./fib.details.screen";
import { View } from "react-native";
import { Package } from "./fib.browse.types";
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

storiesOf("FibBrowse", module)
  .addDecorator((g: any) => <View style={{ flex: 1 }}>{g()}</View>)
  .add("default", () => (
    <FibDetailsScreen
      selectedPackage={selectedPackage}
      offset={{ x: 0, y: 0 }}
      onScrollEnd={onPress}
      selectCoverType={onPress}
      showDocuments={true}
      navigateToContinue={onPress}
      navigateToBack={onPress}
      navigateToExit={onPress}
      navigateToFaqsList={onPress}
      navigateToDocuments={onPress}
      navigateToPayoutCalculator={onPress}
      navigateToCustomCover={onPress}
    />
  ));

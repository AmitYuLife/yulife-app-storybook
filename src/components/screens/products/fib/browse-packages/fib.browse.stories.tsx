import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibBrowseScreen } from "./fib.browse.screen";
import { View } from "react-native";
import documentsData from "@components/containers/products/fib/data/documents-data";
import { Package } from "./fib.browse.types";
import { IFaq } from "./subcomponents/faqs/faq";
import { FibCustomCoverScreen } from "./fib.custom-cover";

const selectedPackage: Package = {
  earnRate: 20,
  salaryPercentageCovered: 50,
  id: "common",
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
    <FibBrowseScreen
      selectedPackage={selectedPackage}
      onNavigateToYuScreen={(): void => null}
      onContinue={(): void => null}
      offset={{ x: 0, y: 0 }}
      onScrollEnd={() => null}
      selectCoverType={() => null}
      onNavigateToFaqsList={() => null}
      documents={documents}
      navigateToCustomCover={() => null}
      loading={false}
      maxTermAge={40}
      onNavigateToIntroScreen={() => null}
    />
  ))
  .add("browse custom cover", () => (
    <FibCustomCoverScreen
      selectedPackage={selectedPackage}
      navigateToEditSalary={() => null}
      onNavigateToFaqsList={() => null}
      onNavigateBack={(): void => null}
      onContinue={() => null}
      avatarUrl={""}
      documents={documents}
      payoutEstimatorItems={{
        years: Array.from({ length: 31 }).map((_, i) => i + 40),
        months: Array.from({ length: 12 }).map((_, i) => i),
        max: {
          year: 70,
          month: 1,
        },
        min: {
          year: 30,
          month: 1,
        },
      }}
      setDeceaseAgeIndexYear={(_: number): void => null}
      setDeceaseAgeIndexMonth={(_: number): void => null}
      loading={false}
    />
  ));

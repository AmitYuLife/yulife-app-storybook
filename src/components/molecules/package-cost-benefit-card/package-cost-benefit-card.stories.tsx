import React from "react";
import { ScrollView, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import PackageCostBenefitCard from "./package-cost-benefit-card";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";

storiesOf("molecules/package-cost-benefit-card", module).add("default", () => {
  return (
    <ScrollView>
      <View style={{ height: Style.DEVICE_HEIGHT / 3 }} />
      <View style={{ paddingHorizontal: Style.adjust(24) }}>
        <PackageCostBenefitCard
          costValue="£6666.66*"
          costDescription="per month"
          coverType={CoverType.epic}
          benefitDescription="In the event of your passing, we’ll pay out:"
          benefitValue="£6,083.33"
          benefitIntervalMarkdown={`a month until\n20th May 2065`}
        />
      </View>
    </ScrollView>
  );
});

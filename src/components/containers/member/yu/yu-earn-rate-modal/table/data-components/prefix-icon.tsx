import React from "react";
import { View, Image, ImageRequireSource } from "react-native";
import { Style } from "@styles";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";

const earnRateDetailIcon: { [name: string]: ImageRequireSource } = {
  steps: require("@assets/stats/steps.png"),
  mindfulness: require("@assets/stats/mindfulness.png"),
  challenges: require("@assets/stats/challenges.png"),
  streaks: require("@assets/stats/streaks.png"),
  chests: require("@assets/stats/chests.png"),
  default: require("@assets/stats/challenges.png"),
};

export function PrefixIcon({ icon }: { icon: EarnRateDetails_getEarnRateDetails["icon"] }) {
  return (
    <View
      style={{
        width: Style.adjust(16),
        marginTop: Style.adjust(15),
      }}
    >
      <Image
        style={{
          width: Style.adjust(16, { shrinkMultiplier: 0.2 }),
          height: Style.adjust(16, { shrinkMultiplier: 0.2 }),
        }}
        source={earnRateDetailIcon[icon] || earnRateDetailIcon.default}
      />
    </View>
  );
}

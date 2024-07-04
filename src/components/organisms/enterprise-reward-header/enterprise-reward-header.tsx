import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { EnterpriseRewardList, EnterpriseRewardProgressBar, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import EnterpriseYucoinCounter from "@components/molecules/enterprise-yucoin-counter/enterprise-yucoin-counter";
import { IEnterpriseRewardItem } from "@organisms/enterprise-reward-item/enterprise-reward-item";
import { IEnterpriseRewardProgressBar } from "@organisms/enterprise-reward-progress-bar/enterprise-reward-progress-bar";
import { ImageBackground } from "expo-image";

interface IEnterpriseRewardHeaderProps {
  title: string;
  textColor?: string;
  description: string;
  step?: number;
  backgroundImage: {
    uri: string;
  };
  items: IEnterpriseRewardItem[];
  progressStatus: IEnterpriseRewardProgressBar;
}

const EnterpriseRewardHeader = ({
  title,
  textColor = Colours.neutral.white,
  progressStatus,
  description,
  backgroundImage,
  items,
  step,
}: IEnterpriseRewardHeaderProps) => {
  return (
    <ImageBackground source={backgroundImage} contentFit="cover">
      <View style={styles.headerWrapper}>
        <GenericHeadingPad />
        <EnterpriseYucoinCounter step={step} />
        <View style={styles.title}>
          <TextTemplate type="b1b" color={textColor}>
            {title}
          </TextTemplate>
        </View>
        <TextTemplate type="l1" color={textColor}>
          {description}
        </TextTemplate>
      </View>
      <EnterpriseRewardList items={items} />
      <View style={styles.sectionWrapper}>
        <EnterpriseRewardProgressBar {...progressStatus} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    paddingLeft: Style.adjust(16),
    marginBottom: Style.adjust(24),
  },
  title: {
    marginTop: Style.adjust(8),
  },
  sectionWrapper: {
    marginVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
  },
});

export default memo(EnterpriseRewardHeader);

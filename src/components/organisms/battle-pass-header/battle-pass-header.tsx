import React, { memo } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { BattlePassList, BattlePassProgressBar, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import BattlePassYucoinCounter from "@components/molecules/battle-pass-yucoin-counter/battle-pass-yucoin-counter";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { ImageBackground } from "expo-image";

interface IEnterpriseRewardHeaderProps {
  title: string;
  textColor?: string;
  description: string;
  step?: number;
  backgroundImage: ImageSourcePropType;
  items: IBattlePassListItem[];
  progressStatus: IBattlePassProgressBar;
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
    <ImageBackground source={backgroundImage} contentFit="cover" style={styles.backgroundImage}>
      <View style={styles.headerWrapper}>
        <GenericHeadingPad />
        <BattlePassYucoinCounter step={step} />
        <View style={styles.title}>
          <TextTemplate type="b1b" color={textColor}>
            {title}
          </TextTemplate>
        </View>
        <TextTemplate type="l1" color={textColor}>
          {description}
        </TextTemplate>
      </View>
      <BattlePassList items={items} />
      <View style={styles.sectionWrapper}>
        <BattlePassProgressBar {...progressStatus} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    paddingBottom: Style.adjust(50),
  },
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
    position: "absolute",
    bottom: -Style.adjust(45),
  },
});

export default memo(EnterpriseRewardHeader);

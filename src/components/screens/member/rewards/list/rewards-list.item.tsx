import React, { memo } from "react";
import { ActivityIndicator, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { BoxOption } from "@molecules";
import { REWARD_ITEM, LOCKED_REWARD_ITEM } from "@ids";
import { Colours, Style, StyleSheet } from "@styles";
import Lock from "./subcomponents/lock";
import RewardPill from "./subcomponents/pill";
import { ArrowButton } from "@components/molecules/arrow-button";
import { GetMobileRewardsListQuery } from "@graphql/__generated";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

type RewardsListItem = GetMobileRewardsListQuery["data"]["list"][0] & {
  onPress: () => void;
};

const _RewardsListItem = ({
  onPress,
  imageUrl,
  name,
  description,
  pills,
  showLockedRewardOverlay,
  id,
}: RewardsListItem) => {
  const { theme } = useTheme();
  const resolvedColour = showLockedRewardOverlay ? Colours.neutral.n800 : theme.colors.primary.p600;
  return (
    <BoxOption
      onPress={onPress}
      isSelected={false}
      innerWrapperStyle={showLockedRewardOverlay && styles.locked}
      wrapperStyle={styles.wrapper}
      innerHeight={BOX_HEIGHT}
      testID={REWARD_ITEM(id)}
    >
      <View style={styles.main}>
        <View style={styles.imageWrapper}>
          {!imageUrl?.uri ? null : (
            <Image
              CustomLoader={CustomRewardListItemImageLoader}
              height={IMAGE_HEIGHT}
              width={IMAGE_WIDTH}
              source={imageUrl}
              resizeMode="cover"
            />
          )}
          {!showLockedRewardOverlay ? null : <Lock testID={LOCKED_REWARD_ITEM(id)} />}
        </View>
        <View style={styles.detailWrapper}>
          <TextTemplate type="b2b">{name}</TextTemplate>
          <TextTemplate type="b2" numberOfLines={3}>
            {description}
          </TextTemplate>
        </View>
        <View>
          <ArrowButton color={resolvedColour} />
        </View>
        <View style={styles.pillsWrapper}>
          {pills.map((p) => (
            <RewardPill key={p.id} backgroundColor={p.backgroundColor} text={p.text} />
          ))}
        </View>
      </View>
    </BoxOption>
  );
};

export const RewardsListItem = memo(_RewardsListItem);

const IMAGE_HEIGHT = Style.adjust(100);
const IMAGE_WIDTH = Style.adjust(112);
const BOX_HEIGHT = Style.adjust(116);

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(16),
    marginBottom: Style.adjust(16),
  },
  main: {
    width: "100%",
    padding: Style.adjust(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  locked: {
    backgroundColor: Colours.neutral.n50,
  },
  border: {
    bottom: Style.adjust(4),
    borderBottomColor: Colours.neutral.n100,
    borderBottomWidth: Style.adjust(5),
  },
  // image
  imageWrapper: {
    borderRadius: Style.adjust(12),
    overflow: "hidden",
  },
  imageLoader: {
    width: BOX_HEIGHT,
    height: BOX_HEIGHT,
    backgroundColor: Colours.neutral.n200,
    alignItems: "center",
    justifyContent: "center",
  },
  // reward details
  detailWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginStart: Style.adjust(16),
  },
  pillsWrapper: {
    position: "absolute",
    right: Style.adjust(8),
    top: Style.adjust(8),
  },
});

const CustomRewardListItemImageLoader = (
  <View style={styles.imageLoader}>
    <ActivityIndicator size="small" color={Colours.neutral.white} />
  </View>
);

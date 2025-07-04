import { Box, Image } from "@atoms";
import { GlowStarsIcon } from "@atoms/icon/glow-stars";
import { ContentItemWrapper } from "@components/sdui";
import { BattlePassList } from "@organisms";
import { Colours, Style, templateTextStyles } from "@styles";
import { ComponentProps, memo } from "react";
import { StyleSheet } from "react-native";
import { ProductGameItemProgress } from "./progress";
import { ImageOverlay } from "./image-overlay";
import { Header } from "./header";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useNavigation } from "@navigation/navigation.context";
import { Markdown } from "@components/molecules";
import { useScrollToItem } from "@hooks";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";

type Props = {
  id?: string;
  title: string;
  icon?: {
    uri?: string;
  };
  progress?: {
    current: number;
    max: number;
    title?: string;
    info?: string;
  };
  rewards: ComponentProps<typeof BattlePassList>["items"];
  info?: ComponentProps<typeof ContentItemWrapper>;
};

export const ProductGameItem = memo(({ title, icon, progress, rewards, info }: Props) => {
  const { componentId } = useNavigation();
  const { activeListRef, scrollToReward } = useScrollToItem<IBattlePassListItem>({ items: rewards });

  return (
    <Box
      key={title}
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      borderBottomLeftRadius={8}
      borderBottomRightRadius={8}
      ml={16}
      mr={16}
      mt={24}
      bg={Colours.neutral.white}
      pt={16}
      pb={16}
      borderWidth={1}
      borderColor={Colours.neutral.n20}
    >
      <Header title={title} icon={icon} info={info} />
      <Box mt={16}>
        <BattlePassList
          ref={activeListRef}
          battlePassType="unlock"
          items={rewards.map(mapRewardItemToBattlePassListItem(componentId))}
          contentContainerStyle={styles.padding}
          onLoad={scrollToReward}
        />
      </Box>
      {!progress?.max ? null : (
        <ProductGameItemProgress
          current={progress.current}
          max={progress.max}
          title={progress.title}
          info={progress.info}
        />
      )}
    </Box>
  );
});

function goToRewardDetails({ componentId, rewardId }: { componentId: string; rewardId: string }) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.rewardDetailsSdui,
      name: ROUTES.rewardDetailsSdui,
      passProps: {
        stepId: "reward_details",
        dynamicId: rewardId,
        shouldRefetchOnScreenSeen: true,
      },
    },
  });
}

function mapRewardItemToBattlePassListItem(componentId: string) {
  return function (gameRewardItem: Props["rewards"][number]) {
    const isClaimed = gameRewardItem.status === "claimed";

    return {
      ...gameRewardItem,
      ctaTextColour: gameRewardItem.backgroundColour,
      imageOverlay:
        gameRewardItem.status === "pending" ? <ImageOverlay backgroundColor={gameRewardItem.backgroundColour} /> : null,
      background: isClaimed ? (
        <Box opacity={0.5}>
          <GlowStarsIcon />
        </Box>
      ) : null,
      onContainerPress:
        gameRewardItem.onContainerPress ||
        (isClaimed
          ? // defaults to going to reward details for goal_products
            () => goToRewardDetails({ componentId, rewardId: gameRewardItem.rewardId })
          : undefined),
      overlayIcon: gameRewardItem.icon,
      modalRewardImageComponent: (
        <Box position="absolute">
          <Image source={gameRewardItem.icon} width={Style.adjust(90)} suppressLoadingUi={true} />
        </Box>
      ),
      detailsTitle: gameRewardItem.detailsTitle,
      tickColour: gameRewardItem.tickColour,
      rewardLevelComponent: <Box position="absolute" />,
      rewardSubtitleComponent: !gameRewardItem.subtitle ? (
        <Box position="absolute" />
      ) : (
        <Box px={32}>
          <Markdown markdownStyles={markdownStyles} text={gameRewardItem.subtitle} />
        </Box>
      ),
      icon: {
        ...gameRewardItem.icon,
        height: 58,
        width: 58,
        style: {
          marginTop: Style.adjust(11),
          marginLeft: Style.adjust(18),
          borderRadius: Style.adjust(56),
          marginRight: "auto",
        },
      } as Props["rewards"][number]["icon"],
    };
  };
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: Style.adjust(16),
  },
});

const markdownStyles = {
  text: {
    ...templateTextStyles.b2,
    color: Colours.neutral.n900,
  },
};

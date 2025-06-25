import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { FlashList } from "@shopify/flash-list";
import LeaderboardToggle, { IChangeConsentProps } from "@organisms/leaderboard-toggle/leaderboard-toggle";
import { ISocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.types";
import BirthdayVisibilityToggle, {
  IChangeBirthdayVisibilityProps,
} from "../../../organisms/birthday-visibility-toggle/birthday-visibility-toggle";
import { groupBy } from "lodash";

interface ILeaderboardItem extends ISocialGroupLeaderboard {
  socialGroupId: string;
  socialGroupName: string;
}

export interface LifeEventsData {
  birthday?: Birthday | null;
  isBirthdayGiftingEnabled: boolean;
}

export interface Birthday {
  isVisible?: boolean;
  dateOfBirth?: string;
}

interface IProps {
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  leaderboards?: ILeaderboardItem[];
  lifeEvents?: LifeEventsData;
  onChangeConsent: (consentProps: IChangeConsentProps) => void;
  onChangeBirthdayVisibility?: (props: IChangeBirthdayVisibilityProps) => void;
}

const LeaderboardSettings = ({
  onChangeConsent,
  leaderboards,
  onLeftIconPress,
  onRightIconPress,
  lifeEvents,
  onChangeBirthdayVisibility,
}: IProps) => {
  const t = useTranslation(["screens.leaderboard_settings.title", "screens.leaderboard_settings.screen_description"]);

  const allLeaderboardsDisabled = leaderboards.every((leaderboard) => !leaderboard.consent);
  const flatLeaderboardListWithHeaders = leaderboards
    ? Object.values(groupBy(leaderboards, "socialGroupId")).flatMap(([first, ...rest]) => [
        first.socialGroupName,
        first,
        ...rest,
      ])
    : [];

  const renderItem = useCallback(
    ({ item }: { item: string | ILeaderboardItem }) => {
      const isSectionHeader = typeof item === "string";
      if (isSectionHeader) {
        return (
          <Box
            borderColor={Colours.neutral.n100}
            borderWidth={1}
            bg={Colours.neutral.n50}
            alignItems="center"
            justifyContent="center"
            mh={-20}
            pv={8}
          >
            <TextTemplate
              color={Colours.inkSubtle}
              type="b2"
            >{`${item} ${t["screens.leaderboard_settings.title"]}`}</TextTemplate>
          </Box>
        );
      }

      return (
        <LeaderboardToggle
          key={item.leaderboardId}
          socialGroupId={item.socialGroupId}
          leaderboardId={item.leaderboardId}
          consent={item.consent}
          name={item.name}
          onChangeConsent={onChangeConsent}
        />
      );
    },
    [onChangeConsent]
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={80}
        data={flatLeaderboardListWithHeaders}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        refreshing={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <TextTemplate type="b2">{t["screens.leaderboard_settings.screen_description"]}</TextTemplate>
            {lifeEvents?.isBirthdayGiftingEnabled && (
              <BirthdayVisibilityToggle
                disabled={allLeaderboardsDisabled}
                isVisible={lifeEvents?.birthday?.isVisible ?? false}
                onBirthdayVisibilityChange={onChangeBirthdayVisibility}
              />
            )}
          </View>
        }
        ListFooterComponent={<View style={styles.footer} />}
      />
      <GenericHeadingAbsolute
        heading={t["screens.leaderboard_settings.title"]}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
  header: {
    paddingVertical: Style.adjust(20),
  },
  content: {
    paddingHorizontal: Style.adjust(20),
  },
  footer: {
    paddingBottom: Style.adjust(50),
  },
});

export default memo(LeaderboardSettings);

import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";
import { Image, TextTemplate } from "@atoms";
import { Avatar, BoxOption, Markdown } from "@molecules";
import { BattlePassDonationButton } from "@organisms";
import { Style, templateTextStyles } from "@styles";
import { ImageSource } from "expo-image";
import { pushToScreen } from "@navigation/root";
import { ROUTES } from "@navigation/constants";
import { ArrowIcon } from "@atoms/icon/arrow";

export interface IDonationListItem {
  id: string;
  title: string;
  description?: string;
  yuCoin: number;
  showAnimation?: boolean;
  onSubmit: (donationId: string, amount: number) => void;
  avatars?: string[];
  image: ImageSource;
  leaderboard?: {
    id: string;
    items: {
      id: string;
      position: number;
      isTarget: boolean;
      firstName: string;
      avatar: {
        id: string;
        uri?: string;
      };
    }[];
  };
}

const DESCRIPTION_MARKDOWN_STYLES = {
  text: templateTextStyles.l1,
  paragraph: {
    paddingVertical: 0,
  },
};

const DonationListItem = ({
  id,
  title,
  description,
  image,
  yuCoin,
  showAnimation,
  onSubmit,
  leaderboard,
}: IDonationListItem) => {
  const handleOnPress = useCallback(async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onSubmit(id, yuCoin);
  }, [id, onSubmit, yuCoin]);

  const handleOnLeaderboardPress = useCallback(() => {
    if (leaderboard?.id && leaderboard?.items?.length) {
      pushToScreen(ROUTES.rewards, {
        component: {
          id: ROUTES.learnAboutDonations,
          name: ROUTES.learnAboutDonations,
          passProps: {
            leaderboardId: leaderboard.id,
            templateId: id,
          },
        },
      });
    }
  }, [leaderboard?.id, title, leaderboard?.items]);

  const { top, me } = useMemo(() => {
    if (!leaderboard?.items?.length) {
      return { top: [], me: null };
    }

    return { top: leaderboard.items.slice(0, 3), me: leaderboard.items[3] };
  }, [leaderboard?.items]);

  return (
    <BoxOption
      onPress={handleOnLeaderboardPress}
      isSelected={true}
      wrapperStyle={styles.boxOption}
      innerHeight={Style.adjust(120)}
    >
      <View style={styles.wrapper}>
        <View style={styles.details}>
          <View style={styles.title}>
            <TextTemplate type="b2b">{title}</TextTemplate>
            <View style={styles.arrow}>
              <ArrowIcon width={Style.adjust(20)} color="#464647" />
            </View>
          </View>

          {!description ? null : (
            <View style={styles.description}>
              <Markdown text={description} markdownStyles={DESCRIPTION_MARKDOWN_STYLES} />
            </View>
          )}
          {!leaderboard?.items?.length ? null : (
            <View style={styles.avatarsWrapper}>
              {top.map((item) => (
                <View key={item.id} style={styles.avatar}>
                  <Avatar size={Style.adjust(32)} uri={item.avatar.uri} position={item.position} />
                </View>
              ))}
              <View style={styles.avatarText}>
                <TextTemplate type="b1b" color="#5C5757">
                  ...
                </TextTemplate>
              </View>
              {!me ? null : (
                <View style={styles.avatar}>
                  <Avatar size={Style.adjust(32)} uri={me.avatar.uri} position={me.position} />
                </View>
              )}
            </View>
          )}
        </View>
        <View style={styles.rightColumn}>
          <Image suppressLoadingUi={true} source={image} width={Style.adjust(88)} height={Style.adjust(88)} />

          <BattlePassDonationButton
            testID={`donation-button-${id}`}
            onPress={handleOnPress}
            translatedLabel={`${yuCoin}`}
            showAnimation={showAnimation}
          />
        </View>
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  boxOption: {
    overflow: "visible",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Style.adjust(16),
    paddingBottom: Style.adjust(14),
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginLeft: Style.adjust(4),
  },
  rightColumn: {
    position: "absolute",
    right: Style.adjust(16),
    top: Style.adjust(16),
  },
  details: {
    flexDirection: "column",
    marginTop: Style.adjust(16),
    marginLeft: Style.adjust(8),
  },
  description: {
    marginTop: Style.adjust(4),
    marginBottom: Style.adjust(8),
    width: Style.adjust(200),
  },

  avatarsWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatarText: {
    marginHorizontal: Style.adjust(8),
  },
  avatar: {
    marginRight: Style.adjust(2),
  },
});

export default memo(DonationListItem);

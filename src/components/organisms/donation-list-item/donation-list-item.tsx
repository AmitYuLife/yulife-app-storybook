import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";
import { Image, TextTemplate } from "@atoms";
import { Avatar, BoxOption, Markdown } from "@molecules";
import { BattlePassDonationButton } from "@organisms";
import { Style, templateTextStyles } from "@styles";
import { t } from "@locale";
import { ImageSource } from "expo-image";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";

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
    if (leaderboard?.id) {
      showYuModal({
        component: {
          id: MODALS.leaderboardRank,
          name: MODALS.leaderboardRank,
          passProps: {
            leaderboardId: leaderboard.id,
            limit: 501,
            onListItemPress: () => console.log("heeh"),
            heading: title,
          },
        },
      });
    }
  }, [leaderboard?.id, title]);

  return (
    // This is disabled because the onPress itself is inside of the BoxOption and onPress is required on BoxOption
    <BoxOption onPress={handleOnLeaderboardPress} isSelected={false} wrapperStyle={styles.boxOption}>
      <View style={styles.wrapper}>
        <View style={styles.image}>
          <Image source={image} width={Style.adjust(72)} height={Style.adjust(72)} />
        </View>
        <View style={styles.details}>
          <TextTemplate type="b2b">{title}</TextTemplate>
          {!description ? null : (
            <View style={styles.description}>
              <Markdown text={description} markdownStyles={DESCRIPTION_MARKDOWN_STYLES} />
            </View>
          )}

          {!leaderboard?.items?.length ? null : (
            <View style={styles.avatarsWrapper}>
              <View style={styles.avatarText}>
                <TextTemplate type="l2" color="#A0A09B">
                  {t("labels.many_more")}
                </TextTemplate>
              </View>
              {leaderboard?.items.map((item, index) => (
                <View key={index} style={styles.avatar}>
                  <Avatar size={24} uri={item.avatar.uri} />
                </View>
              ))}
            </View>
          )}
        </View>
        <BattlePassDonationButton
          testID={`donation-button-${id}`}
          onPress={handleOnPress}
          translatedLabel={`${yuCoin}`}
          showAnimation={showAnimation}
        />
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  boxOption: {
    overflow: "visible",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginTop: Style.adjust(8),
    marginLeft: Style.adjust(8),
  },
  details: {
    flexDirection: "column",
    marginTop: Style.adjust(16),
    marginLeft: Style.adjust(8),
  },
  description: {
    marginTop: Style.adjust(4),
    marginBottom: Style.adjust(8),
  },

  avatarsWrapper: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  avatarText: {
    marginLeft: Style.adjust(8),
  },
  avatar: {
    marginRight: -4,
  },
});

export default memo(DonationListItem);

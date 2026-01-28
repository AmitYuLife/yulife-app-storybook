import { Image, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { useScreenReaderChange } from "@hooks";
import { DONATION_BUTTON, DONATION_LIST_AVATARS, IMPACT_DONATION_IMAGE, IMPACT_DONATION_TITLE } from "@ids";
import { t } from "@locale";
import { Avatar, BoxOption, Markdown, Pressable } from "@molecules";
import { BattlePassDonationButton } from "@organisms";
import { Style, templateTextMarkdownStyles, StyleSheet } from "@styles";
import * as Haptics from "expo-haptics";
import { ImageSource } from "expo-image";
import React, { memo, useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";

export interface IDonationListItem {
  id: string;
  title: string;
  description?: string;
  yuCoin: number;
  showAnimation?: boolean;
  onSubmit: (donationId: string, amount: number) => void;
  onLeaderboardPress: (leaderboardId: string, templateId: string) => void;
  avatars?: string[];
  rewardId?: string;
  image: ImageSource;
  leaderboard?: {
    id: string;
    items: {
      id: string;
      position: number;
      isTarget: boolean;
      avatar: {
        id: string;
        uri?: string;
      };
    }[];
  };
}

const DESCRIPTION_MARKDOWN_STYLES = {
  text: templateTextMarkdownStyles.l1,
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
  onLeaderboardPress,
  leaderboard,
}: IDonationListItem) => {
  const [buttonX, setButtonX] = useState<number>(0);
  const isScreenReaderEnabled = useScreenReaderChange();

  const handleOnPress = useCallback(async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onSubmit(id, yuCoin);
  }, [id, onSubmit, yuCoin]);

  const handleOnLeaderboardPress = useCallback(() => {
    onLeaderboardPress(leaderboard?.id, id);
  }, [onLeaderboardPress, leaderboard?.id, id]);

  const { top, me } = useMemo(() => {
    if (!leaderboard?.items?.length) {
      return { top: [], me: null };
    }

    return { top: leaderboard.items.slice(0, 3), me: leaderboard.items[3] };
  }, [leaderboard?.items]);

  const onRightColumnLayout = useCallback((event: LayoutChangeEvent) => {
    setButtonX(event.nativeEvent.layout.x);
  }, []);

  return (
    <BoxOption
      onPress={handleOnLeaderboardPress}
      isSelected={true}
      wrapperStyle={styles.boxOption}
      innerHeight={Style.adjust(120)}
      importantForAccessibility={"no"}
      disabled={isScreenReaderEnabled}
    >
      <View
        style={styles.wrapper}
        accessible={true}
        importantForAccessibility="yes"
        accessibilityLabel={t("screens.battle_pass.accessibility.donation_title", { title })}
      >
        <Pressable style={styles.details} onPress={handleOnLeaderboardPress}>
          <View
            style={styles.title}
            testID={IMPACT_DONATION_TITLE(title)}
            accessible={true}
            importantForAccessibility="yes"
            accessibilityLabel={t("screens.battle_pass.accessibility.view_donation_leaderboard", { title })}
          >
            <TextTemplate type="b1b" accessible={true}>
              {title}
            </TextTemplate>
            <View style={styles.arrow}>
              <ArrowIcon size={Style.adjust(20)} color="#464647" />
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
                  <Avatar
                    size={32}
                    uri={item.avatar.uri}
                    position={item.position}
                    testID={DONATION_LIST_AVATARS(top.length)}
                  />
                </View>
              ))}
              {top.length < 3 ? null : (
                <View style={styles.avatarText}>
                  <TextTemplate type="b1b" color="#5C5757">
                    ...
                  </TextTemplate>
                </View>
              )}
              {!me ? null : (
                <View style={styles.avatar}>
                  <Avatar size={32} uri={me.avatar.uri} position={me.position} />
                </View>
              )}
            </View>
          )}
        </Pressable>
        <Pressable delay={1000} onPress={handleOnPress} style={styles.rightColumn} onLayout={onRightColumnLayout}>
          <Image
            suppressLoadingUi={true}
            source={image}
            width={Style.adjust(88)}
            height={Style.adjust(88)}
            testID={IMPACT_DONATION_IMAGE(image.uri)}
          />
          <BattlePassDonationButton
            x={buttonX}
            testID={DONATION_BUTTON(id)}
            onPress={handleOnPress}
            translatedLabel={`${yuCoin}`}
            showAnimation={showAnimation}
            accessibilityLabel={t("screens.battle_pass.accessibility.donate_button", { amount: yuCoin, title: title })}
          />
        </Pressable>
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
    paddingHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(6),
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginStart: Style.adjust(4),
  },
  rightColumn: {
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flexDirection: "column",
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
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(4),
  },
  avatarText: {
    marginHorizontal: Style.adjust(8),
  },
  avatar: {
    marginEnd: Style.adjust(2),
  },
});

export default memo(DonationListItem);

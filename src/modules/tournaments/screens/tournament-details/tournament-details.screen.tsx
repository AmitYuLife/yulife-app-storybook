import LinearGradient from "react-native-linear-gradient";
import React, { memo, useCallback, useMemo } from "react";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

import { Colours, Style, StyleSheet } from "@styles";
import { MIN_SAFE_BOTTOM_PADDING } from "@styles/safeAreaViewOffset";
import { Box } from "@atoms";
import { Button } from "@molecules";
import { GenericHeadingAbsolute } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TournamentHeader from "../../components/tournament-header/tournament-header";
import TournamentLeaderboardSection from "../../components/tournament-leaderboard-section/tournament-leaderboard-section";
import TournamentScoreCard from "../../components/tournament-score-card/tournament-score-card";
import TournamentMemberRow from "../../components/tournament-member-row/tournament-member-row";
import TournamentSectionHeader from "../../components/tournament-section-header/tournament-section-header";
import { HeadingAndCopy, InfoPanel } from "@molecules";
import { t } from "@locale";
import type {
  GetTournamentDetailsQuery,
  GetTournamentLeaderboardQuery,
  GetTournamentTeamLeaderboardQuery,
} from "@graphql/__generated";

enum TournamentDetailsSectionType {
  Header,
  Leaderboard,
  MyTeamTitle,
  MyTeamScore,
  MyTeamMember,
  About,
  Banner,
  Spacer,
}

type TournamentData = NonNullable<GetTournamentDetailsQuery["getTournamentDetails"]>;
type LeaderboardTeam = NonNullable<GetTournamentLeaderboardQuery["getTournamentLeaderboard"]>["teams"][number];
type MyTeamData = NonNullable<GetTournamentTeamLeaderboardQuery["getTournamentTeamLeaderboard"]>;
type TeamMember = MyTeamData["members"][number];

type SectionItem =
  | {
      __type: TournamentDetailsSectionType.Header;
      title: string;
      labels?: string[];
      daysLeft?: number;
      bgColor: string;
      onHowToPlay?: () => void;
    }
  | {
      __type: TournamentDetailsSectionType.Leaderboard;
      teams: LeaderboardTeam[];
      onViewAll?: () => void;
      onTeamPress?: (teamId: string) => void;
    }
  | { __type: TournamentDetailsSectionType.MyTeamTitle; teamName: string }
  | { __type: TournamentDetailsSectionType.MyTeamScore; totalScore: number }
  | { __type: TournamentDetailsSectionType.MyTeamMember; member: TeamMember; position: number; isCurrentUser: boolean }
  | { __type: TournamentDetailsSectionType.About; title: string; markdown: string }
  | { __type: TournamentDetailsSectionType.Banner; banner: NonNullable<TournamentData["banner"]> }
  | { __type: TournamentDetailsSectionType.Spacer; height: number };

const GRADIENT_COLORS = ["rgba(250, 250, 254, 0)", Colours.neutral.n50, Colours.neutral.n50, Colours.neutral.n50];

interface ITournamentDetailsScreenProps {
  title: string;
  headerBackgroundColor: string;
  headerTextColor: string;
  headerImage?: { uri: string };
  labels?: string[];
  daysLeft?: number;
  teams?: LeaderboardTeam[];
  myTeam?: MyTeamData;
  about?: TournamentData["about"];
  banner?: TournamentData["banner"];
  button?: TournamentData["button"];
  onLeftIconPress: () => void;
  onButtonPress?: () => void;
  onViewAllTeams?: () => void;
  onHowToPlay?: () => void;
  onMemberPress?: (userId: string) => void;
  onTeamPress?: (teamId: string) => void;
  currentUserId?: string;
}

const TournamentDetailsScreen = ({
  title,
  headerBackgroundColor,
  labels,
  daysLeft,
  teams,
  myTeam,
  about,
  banner,
  button,
  onLeftIconPress,
  onButtonPress,
  onViewAllTeams,
  onHowToPlay,
  onMemberPress,
  onTeamPress,
  currentUserId,
}: ITournamentDetailsScreenProps) => {
  const { bottom } = useSafeAreaInsets();
  const bgColor = headerBackgroundColor || "#290163";

  const listData = useMemo(() => {
    const items: SectionItem[] = [];

    items.push({ __type: TournamentDetailsSectionType.Header, title, labels, daysLeft, bgColor, onHowToPlay });

    if (teams?.length) {
      items.push({ __type: TournamentDetailsSectionType.Leaderboard, teams, onViewAll: onViewAllTeams, onTeamPress });
    }

    if (myTeam?.members?.length) {
      items.push({ __type: TournamentDetailsSectionType.MyTeamTitle, teamName: myTeam.teamName });
      items.push({ __type: TournamentDetailsSectionType.MyTeamScore, totalScore: myTeam.totalScore });
      myTeam.members.forEach((member, i) => {
        items.push({
          __type: TournamentDetailsSectionType.MyTeamMember,
          member,
          position: i + 1,
          isCurrentUser: member.id === currentUserId,
        });
      });
    }

    if (about) {
      items.push({ __type: TournamentDetailsSectionType.About, title: about.title, markdown: about.markdown });
    }

    if (banner) {
      items.push({ __type: TournamentDetailsSectionType.Banner, banner });
    }

    if (button) {
      items.push({ __type: TournamentDetailsSectionType.Spacer, height: 60 });
    }

    return items;
  }, [
    title,
    labels,
    daysLeft,
    bgColor,
    teams,
    myTeam,
    about,
    banner,
    button,
    onViewAllTeams,
    onTeamPress,
    currentUserId,
  ]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SectionItem>) => {
      switch (item.__type) {
        case TournamentDetailsSectionType.Header:
          return (
            <TournamentHeader
              title={item.title}
              labels={item.labels}
              daysLeft={item.daysLeft}
              bgColor={item.bgColor}
              onHowToPlay={item.onHowToPlay}
            />
          );
        case TournamentDetailsSectionType.Leaderboard:
          return (
            <TournamentLeaderboardSection
              teams={item.teams}
              onViewAll={item.onViewAll}
              onTeamPress={item.onTeamPress}
            />
          );
        case TournamentDetailsSectionType.MyTeamTitle:
          return <TournamentSectionHeader title={t("screens.tournaments.my_team", { teamName: item.teamName })} />;
        case TournamentDetailsSectionType.MyTeamScore:
          return <TournamentScoreCard label={t("screens.tournaments.total_team_score")} score={item.totalScore} />;
        case TournamentDetailsSectionType.MyTeamMember:
          return (
            <TournamentMemberRow
              member={item.member}
              position={item.position}
              isCurrentUser={item.isCurrentUser}
              onPress={onMemberPress}
            />
          );
        case TournamentDetailsSectionType.About:
          return (
            <Box bg={Colours.neutral.n50} px={24} mt={24} mb={24}>
              <HeadingAndCopy title={item.title} titleType="b1b" markdown={item.markdown} />
            </Box>
          );
        case TournamentDetailsSectionType.Banner:
          return (
            <Box bg={Colours.neutral.n50} px={24} mb={24}>
              <InfoPanel
                markdown={item.banner.markdown}
                remoteImage={item.banner.icon ? { ...item.banner.icon, id: item.banner.icon.uri } : undefined}
                showIcon={true}
                type={item.banner.type}
              />
            </Box>
          );
        case TournamentDetailsSectionType.Spacer:
          return <Box h={item.height} bg={Colours.neutral.n50} />;
        default:
          return null;
      }
    },
    [onMemberPress]
  );

  return (
    <Box flexGrow={1} bg={Colours.neutral.n50}>
      <Box position="absolute" bg={bgColor} width="100%" height={"50%"} top={0} />
      <FlashList
        data={listData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom + Style.adjust(20) }}
      />
      <GenericHeadingAbsolute
        heading={null}
        color={Colours.neutral.white}
        onLeftIconPress={onLeftIconPress}
        backgroundColor="transparent"
      />
      {button ? (
        <Box position="absolute" bottom={0} w="100%">
          <LinearGradient style={styles.gradient} colors={GRADIENT_COLORS} />
          <Box p={32} pt={50} pb={Math.max(bottom, MIN_SAFE_BOTTOM_PADDING)} bottom={0}>
            <Button
              testID="TOURNAMENT_DETAILS_BUTTON"
              size="Fill"
              translatedLabel={button.label}
              onPress={onButtonPress}
              shadowColor={button.shadowColor || undefined}
              backgroundColor={button.backgroundColor || undefined}
            />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});

export default memo(TournamentDetailsScreen);

import { memo, useCallback, useMemo } from "react";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import moment from "moment";

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
  GracePeriod,
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
  | { __type: TournamentDetailsSectionType.GracePeriod; hours: number }
  | {
      __type: TournamentDetailsSectionType.Leaderboard;
      teams: LeaderboardTeam[];
      onViewAll?: () => void;
    }
  | { __type: TournamentDetailsSectionType.MyTeamTitle; teamName: string }
  | { __type: TournamentDetailsSectionType.MyTeamScore; totalScore: number }
  | { __type: TournamentDetailsSectionType.MyTeamMember; member: TeamMember; position: number; isCurrentUser: boolean }
  | { __type: TournamentDetailsSectionType.About; title: string; markdown: string }
  | { __type: TournamentDetailsSectionType.Banner; banner: NonNullable<TournamentData["banner"]> }
  | { __type: TournamentDetailsSectionType.Spacer; height: number };

interface ITournamentDetailsScreenProps {
  title: string;
  headerBackgroundColor: string;
  headerTextColor: string;
  headerImage?: { uri: string };
  labels?: string[];
  daysLeft?: number;
  teams?: LeaderboardTeam[];
  myTeam?: MyTeamData;
  hasJoined: boolean;
  about?: TournamentData["about"];
  banner?: TournamentData["banner"];
  endDate?: string | null;
  gracePeriodEnd?: string | null;
  onLeftIconPress: () => void;
  onJoinPress?: () => void;
  joining?: boolean;
  onViewAllTeams?: () => void;
  onHowToPlay?: () => void;
  onMemberPress?: (userId: string) => void;
  currentUserId?: string;
}

const TournamentDetailsScreen = ({
  title,
  headerBackgroundColor,
  labels,
  daysLeft,
  teams,
  myTeam,
  hasJoined,
  about,
  banner,
  endDate,
  gracePeriodEnd,
  onLeftIconPress,
  onJoinPress,
  joining,
  onViewAllTeams,
  onHowToPlay,
  onMemberPress,
  currentUserId,
}: ITournamentDetailsScreenProps) => {
  const { bottom } = useSafeAreaInsets();
  const bgColor = headerBackgroundColor || "#290163";

  const gracePeriodHours = useMemo(() => {
    if (!gracePeriodEnd || !endDate) {
      return null;
    }

    const now = moment();
    if (!now.isBetween(moment(endDate), moment(gracePeriodEnd))) {
      return null;
    }

    return moment(gracePeriodEnd).diff(moment(endDate), "hours");
  }, [endDate, gracePeriodEnd]);

  const listData = useMemo(() => {
    const items: SectionItem[] = [];

    items.push({ __type: TournamentDetailsSectionType.Header, title, labels, daysLeft, bgColor, onHowToPlay });

    if (gracePeriodHours !== null) {
      items.push({ __type: TournamentDetailsSectionType.GracePeriod, hours: gracePeriodHours });
    }

    if (hasJoined && teams?.length) {
      items.push({ __type: TournamentDetailsSectionType.Leaderboard, teams, onViewAll: onViewAllTeams });
    }

    if (hasJoined && myTeam?.members?.length) {
      items.push({
        __type: TournamentDetailsSectionType.MyTeamTitle,
        teamName: myTeam.teamName ?? t("screens.tournaments.your_team_fallback"),
      });
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
      const aboutTitle = hasJoined ? about.title ?? "" : t("screens.tournaments.join_title");
      const aboutMarkdown = hasJoined
        ? about.markdown ?? ""
        : `${t("screens.tournaments.consent_copy")}\n\n${about.markdown ?? ""}`;
      items.push({ __type: TournamentDetailsSectionType.About, title: aboutTitle, markdown: aboutMarkdown });
    }

    if (hasJoined && banner) {
      items.push({ __type: TournamentDetailsSectionType.Banner, banner });
    }

    items.push({ __type: TournamentDetailsSectionType.Spacer, height: 100 });

    return items;
  }, [
    title,
    labels,
    daysLeft,
    bgColor,
    teams,
    myTeam,
    hasJoined,
    about,
    banner,
    onViewAllTeams,
    onHowToPlay,
    currentUserId,
    gracePeriodHours,
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
        case TournamentDetailsSectionType.GracePeriod:
          return (
            <Box bg={Colours.neutral.n50} px={24} pt={16}>
              <InfoPanel
                showIcon={true}
                type="info"
                markdown={t("screens.leaderboard.grace_period_banner", { hours: item.hours })}
              />
            </Box>
          );
        case TournamentDetailsSectionType.Leaderboard:
          return <TournamentLeaderboardSection teams={item.teams} onViewAll={item.onViewAll} />;
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
                remoteImage={item.banner.icon ? { ...item.banner.icon, id: item.banner.icon.uri ?? "" } : undefined}
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

  const contentContainerStyle = useMemo(
    () =>
      StyleSheet.create({
        list: { paddingBottom: bottom + Style.adjust(!hasJoined && onJoinPress ? 120 : 20) },
      }).list,
    [bottom, hasJoined, onJoinPress]
  );

  return (
    <Box flexGrow={1} h="100%" bg={Colours.neutral.n50}>
      <Box position="absolute" bg={bgColor} width="100%" height={"50%"} top={0} />
      <Box flexGrow={1} h="100%">
        <FlashList
          data={listData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}
        />
      </Box>
      <GenericHeadingAbsolute
        heading={null}
        color={Colours.neutral.white}
        onLeftIconPress={onLeftIconPress}
        backgroundColor="transparent"
      />
      {!hasJoined && onJoinPress ? (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          px={24}
          pt={12}
          pb={Math.max(bottom, MIN_SAFE_BOTTOM_PADDING)}
          bg={Colours.neutral.n50}
        >
          <Button
            testID="TOURNAMENT_JOIN_BUTTON"
            size="Fill"
            translatedLabel={t("screens.tournaments.join_button")}
            onPress={onJoinPress}
            isLoading={joining}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default memo(TournamentDetailsScreen);

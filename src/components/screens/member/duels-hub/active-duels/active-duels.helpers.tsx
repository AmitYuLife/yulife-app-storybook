import React from "react";
import moment from "moment";
import { SectionListRenderItemInfo, SectionListData } from "react-native";
import { Text } from "@atoms";
import styles from "./active-duels.styles";
import { GetDuelsHubData_getDuelsHubData_activeDuels } from "@graphql/_core/schema";
import { DuelEntry, DuelInvitation, DuelHeading } from "../subcomponents";
import { DuelHubTab } from "@components/containers/member/duels-hub/duels-hub.container";
import { DUEL_TAB_HEIGHT } from "../subcomponents/duel-tabs/duels-tabs.styles";
import { DUEL_ENTRY_HEIGHT } from "../subcomponents/duel-entry/duel-entry.styles";

type TypeDuels = GetDuelsHubData_getDuelsHubData_activeDuels[];

type RenderItemProps = SectionListRenderItemInfo<GetDuelsHubData_getDuelsHubData_activeDuels>;

interface GetResToListProps {
  activeDuels: TypeDuels;
  upcomingDuels: TypeDuels;
  duelInvitations: TypeDuels;
  totalSteps: number;
  activeTab: DuelHubTab;
  onChangeTab: (tab: DuelHubTab) => () => void;
}

export function getResToList({
  activeDuels,
  upcomingDuels,
  duelInvitations,
  totalSteps,
  onChangeTab,
  activeTab,
}: GetResToListProps) {
  const isEmpty = activeDuels.length === 0 && upcomingDuels.length === 0 && duelInvitations.length === 0;
  if (isEmpty) {
    return [];
  }

  const totalYuCoin = activeDuels.reduce((acc, curr) => {
    return acc + curr.yucoin;
  }, 0);
  return [
    {
      title: "activeDuels",
      activeTab,
      onChangeTab,
      data: activeDuels.map((duel) => ({ ...duel, isActiveDuel: true })),
    },
    {
      title: "totalYucoin",
      totalYuCoin,
      data: [
        {
          id: "totalYucoin",
        },
      ],
    },
    {
      title: "totalSteps",
      totalSteps,
      data: [
        {
          id: "totalSteps",
        },
      ],
    },
    {
      title: "Upcoming duels",
      data: upcomingDuels,
    },
    {
      title: "Invitations",
      data: duelInvitations,
    },
  ];
}

export function renderItem({
  item: { id, opponents, date, yucoin, status, isResponseRequired },
  section,
  index,
}: RenderItemProps) {
  const isActiveDuel = section.title === "activeDuels";
  const isUpcomingDuel = section.title === "Upcoming duels";
  if (isActiveDuel || isUpcomingDuel) {
    const { firstName, lastName } = opponents[0]?.name || { firstName: "", lastName: "" };
    const opponentName = `${firstName} ${lastName}`;

    const duelDate = moment(date).format("DD/MM/YYYY");
    const isFirst = index === 0;
    const isLast = index === section.data.length - 1;
    const uri = opponents[0].avatar;
    return (
      <DuelEntry
        isActive={isActiveDuel}
        opponent={opponentName}
        yucoin={yucoin}
        date={duelDate}
        isFirst={isUpcomingDuel && isFirst}
        isLast={isUpcomingDuel && isLast}
        uri={uri}
      />
    );
  }

  if (section.title === "totalYucoin") {
    if (section.totalYuCoin > 0) {
      return (
        <Text style={styles.keyText}>
          You’re wagering <Text bold={true}>{section.totalYuCoin} YuCoin</Text>
        </Text>
      );
    }

    return null;
  }

  if (section.title === "totalSteps") {
    if (section.totalSteps > 0) {
      return (
        <Text style={styles.keyText}>
          You’ve walked <Text bold={true}>{section.totalSteps.toLocaleString()} steps</Text> today
        </Text>
      );
    }

    return null;
  }

  if (section.title === "Invitations") {
    const { firstName, lastName } = opponents[0]?.name || { firstName: "", lastName: "" };
    const opponentName = `${firstName} ${lastName}`;

    const isFirst = index === 0;
    const isLast = index === section.data.length - 1;

    return (
      <DuelInvitation
        status={status}
        opponent={opponentName}
        duelId={id}
        yucoin={yucoin}
        responseRequired={isResponseRequired}
        isFirst={isFirst}
        isLast={isLast}
      />
    );
  }

  return null;
}

export function renderSectionHeader({
  section,
}: {
  section: SectionListData<GetDuelsHubData_getDuelsHubData_activeDuels>;
}) {
  const dataCount = section.data.length;
  if ((section.title === "Upcoming duels" && dataCount) || (section.title === "Invitations" && dataCount)) {
    return <DuelHeading label={section.title} />;
  }

  return null;
}

export function getItemLayout(item: ReturnType<typeof getResToList>, index: number) {
  /**
   * getItemLayout is a lot more complex with SectionList.
   * Data is flattened so you depend on the index as your basis.
   * Weirdly enough, after every section, the index in getItemLayout skips one number
   */
  const { activeDuelsCount, upcomingDuelsCount, duelInvitationsCount } = item.reduce(
    (accumulator, { title, data }) => {
      if (title === "activeDuels") {
        accumulator.activeDuelsCount = data.length;
      }

      if (title === "Upcoming duels") {
        accumulator.upcomingDuelsCount = data.length;
      }

      if (title === "Invitations") {
        accumulator.duelInvitationsCount = data.length;
      }

      return accumulator;
    },
    { activeDuelsCount: 0, upcomingDuelsCount: 0, duelInvitationsCount: 0 }
  );

  const duelTabsIndex = 1;
  const activeDuelsIndexEnd = activeDuelsCount + duelTabsIndex;

  const totalYucoinNullHeaderIndex = activeDuelsCount + duelTabsIndex + 2;
  const totalYucoinItemIndex = totalYucoinNullHeaderIndex + 1;

  const totalYucoinNullStepsIndex = totalYucoinItemIndex + 2;
  const totalStepsItemIndex = totalYucoinNullStepsIndex + 1;

  const upcomingDuelsHeaderIndex = totalStepsItemIndex + 2;
  const upcomingDuelsIndexStart = upcomingDuelsHeaderIndex + 1;
  const upcomingDuelsIndexEnd = upcomingDuelsIndexStart + upcomingDuelsCount;

  const duelInvitationsHeaderIndex = upcomingDuelsIndexEnd + 1;
  const duelInvitationsIndexStart = duelInvitationsHeaderIndex + 1;
  const duelInvitationsIndexEnd = duelInvitationsIndexStart + duelInvitationsCount;

  if (index === duelTabsIndex) {
    // Section Header of active duels
    return {
      index,
      offset: DUEL_TAB_HEIGHT * index,
      length: DUEL_TAB_HEIGHT,
    };
  }

  if (index <= activeDuelsIndexEnd) {
    // active duels height
    return {
      index,
      offset: DUEL_ENTRY_HEIGHT * index,
      length: DUEL_ENTRY_HEIGHT,
    };
  }

  if (totalYucoinNullHeaderIndex === index || totalYucoinNullStepsIndex === index) {
    // this checks for the empty section headers
    return {
      index,
      offset: 0 * index,
      length: 0,
    };
  }

  if (
    totalYucoinItemIndex === index ||
    totalStepsItemIndex === index ||
    (index >= duelInvitationsIndexStart && index <= duelInvitationsIndexEnd) ||
    (index >= upcomingDuelsIndexStart && index <= upcomingDuelsIndexEnd)
  ) {
    // this checks for the text for total steps & total yucoin
    return {
      index,
      offset: 32 * index,
      length: 32,
    };
  }

  if (upcomingDuelsHeaderIndex === index || duelInvitationsHeaderIndex === index) {
    return {
      index,
      offset: 72 * index,
      length: 72,
    };
  }

  return {
    index,
    offset: 32 * index,
    length: 32,
  };
}

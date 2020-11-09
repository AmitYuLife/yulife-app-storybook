import React from "react";
import moment from "moment";
import { SectionListRenderItemInfo, SectionListData } from "react-native";
import { Text } from "@atoms";
import styles from "./active-duels.styles";
import { GetDuelsHubData_getDuelsHubData_activeDuels } from "@graphql/_core/schema";
import { DuelEntry, DuelInvitation, DuelHeading } from "../subcomponents";
import { DUEL_ENTRY_HEIGHT } from "../subcomponents/duel-entry/duel-entry.styles";
import { addCommasToNumber } from "@services/utils";

type TypeDuels = GetDuelsHubData_getDuelsHubData_activeDuels[];

type RenderItemProps = SectionListRenderItemInfo<GetDuelsHubData_getDuelsHubData_activeDuels>;

interface GetResToListProps {
  activeDuels: TypeDuels;
  upcomingDuels: TypeDuels;
  duelInvitations: TypeDuels;
  totalSteps: number;
}

export function getResToList({ activeDuels, upcomingDuels, duelInvitations, totalSteps }: GetResToListProps) {
  const isActiveDuelsEmpty = activeDuels.length === 0;
  const isUpcomingDuelsEmpty = upcomingDuels.length === 0;
  const isInvitationsEmpty = duelInvitations.length === 0;
  const isEmpty = isActiveDuelsEmpty && isUpcomingDuelsEmpty && isInvitationsEmpty;
  if (isEmpty) {
    return [];
  }

  const totalYuCoin = activeDuels.reduce((acc, curr) => {
    return acc + curr.yucoin;
  }, 0);
  const sections = [];

  if (!isActiveDuelsEmpty) {
    sections.push({
      id: "activeDuels",
      title: "activeDuels",
      data: activeDuels.map((duel) => ({ ...duel, isActiveDuel: true })),
    });
  }

  if (totalYuCoin > 0) {
    sections.push({
      id: "totalYucoin",
      title: "totalYucoin",
      totalYuCoin,
      data: [
        {
          id: "totalYucoin",
        },
      ],
    });
  }

  if (totalSteps > 0) {
    sections.push({
      id: "totalSteps",
      title: "totalSteps",
      totalSteps,
      data: [
        {
          id: "totalSteps",
        },
      ],
    });
  }

  if (!isUpcomingDuelsEmpty) {
    sections.push({
      id: "Upcoming duels",
      title: "Upcoming duels",
      data: upcomingDuels,
    });
  }

  if (!isInvitationsEmpty) {
    sections.push({
      id: "Invitations",
      title: "Invitations",
      data: duelInvitations,
    });
  }

  return sections;
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
          You’ve walked <Text bold={true}>{addCommasToNumber(section.totalSteps)} steps</Text> today
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
  const EMPTY_HEIGHT = 0;

  const itemLengths = item.reduce((acc, data) => {
    if (data.id === "activeDuels" || data.id === "Upcoming duels" || data.id === "Invitations") {
      acc.push(data.id === "activeDuels" ? EMPTY_HEIGHT : 72);
      for (let i = 0; i < data.data.length; i++) {
        acc.push(data.id === "Invitations" ? 32 : DUEL_ENTRY_HEIGHT);
      }

      acc.push(EMPTY_HEIGHT);
    }

    if (data.id === "totalYucoin" || data.id === "totalSteps") {
      acc.push(EMPTY_HEIGHT);
      acc.push(32);
      acc.push(EMPTY_HEIGHT);
    }

    return acc;
  }, []);
  const offsetTotal = itemLengths.slice(0, index + 1).reduce((acc, length) => acc + length, 0);
  return {
    index,
    offset: offsetTotal,
    length: itemLengths[index],
  };
}

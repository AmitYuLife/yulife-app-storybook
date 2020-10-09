import React from "react";
import { ListRenderItemInfo } from "react-native";
import { GetDuelsHubData_getDuelsHubData_pastDuels } from "@graphql/_core/schema";
import moment from "moment";
import { DuelEntry } from "../subcomponents";
import { DUEL_ENTRY_HEIGHT } from "../subcomponents/duel-entry/duel-entry.styles";

interface IPastDuels extends GetDuelsHubData_getDuelsHubData_pastDuels {
  isFirst: boolean;
  isLast: boolean;
}

export function getItemLayout(_: unknown, index: number) {
  return {
    index,
    length: DUEL_ENTRY_HEIGHT,
    offset: DUEL_ENTRY_HEIGHT * index,
  };
}

export function renderItem({
  item: { opponents, date, id, status, yucoin, isFirst, isLast },
}: ListRenderItemInfo<IPastDuels>) {
  const { firstName, lastName } = opponents[0]?.name || { firstName: "", lastName: "" };
  const opponentName = `${firstName} ${lastName}`;

  const formattedDate = moment(date).format("DD/MM/YYYY");
  const uri = opponents[0].avatar;
  return (
    <DuelEntry
      key={id}
      status={status}
      opponent={opponentName}
      uri={uri}
      yucoin={yucoin}
      date={formattedDate}
      isFirst={isFirst}
      isLast={isLast}
    />
  );
}

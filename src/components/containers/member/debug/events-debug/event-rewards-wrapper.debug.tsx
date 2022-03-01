import { RewardStatus } from "@organisms/event-reward/event-reward";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import React from "react";
import WrapperDebug from "../wrapper.debug";

const EventRewardsDebug = () => (
  <WrapperDebug>
    <EventRewardsWrapper rewards={[commonRewards[1]]} />
    <EventRewardsWrapper rewards={commonRareRewards} />
    <EventRewardsWrapper rewards={mixedRewards} />

    <EventRewardsWrapper rewards={commonRewards} />
    <EventRewardsWrapper rewards={rareRewards} />
    <EventRewardsWrapper rewards={epicRewards} />
  </WrapperDebug>
);

const whiteStarUri =
  "https://yulife-local.imgix.net/events/rewards/white-star-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=42&w=42&s=7db1c7666e5d3f416acdd0821bae6abc";
const yellowStarUri =
  "https://yulife-local.imgix.net/events/rewards/yellow-star-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=42&w=42&s=64eebfe8e26fd13f8839fe43e13cd631";
const commonBackground =
  "https://yulife-local.imgix.net/events/rewards/items/common-reward-background-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=144&w=144&s=dddd68c2fa9ab75869d52a5a4c8c82db";
const commonItem =
  "https://yulife-local.imgix.net/events/rewards/items/common-armor-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=144&w=144&s=6fc38ae5d8a7f742e1c5c09af62cf161";
const rareBackground =
  "https://yulife-local.imgix.net/events/rewards/items/rare-reward-background-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=144&w=144&s=f8163f270f61b0694aca87e2a4e95d8a";
const rareItem =
  "https://yulife-local.imgix.net/events/rewards/items/rare-armor-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=144&w=144&s=711dd791420d790937174551787602f8";
const epicBackground =
  "https://yulife-local.imgix.net/events/rewards/items/epic-background-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=144&w=144&s=d16fb45a6294c634bee0f83ad5b0195f";
const epicItem =
  "https://yulife-local.imgix.net/events/rewards/items/epic-armor-2022-01-31.svg?ixlib=js-3.2.1&fm=png&h=144&w=144&s=f8c49e87a381f4a56188ad348c8deaf3";

const commonRewards = [
  {
    id: "reward_common_1",
    title: "Common Item",
    description: "10,000 steps",
    itemBackground: commonBackground,
    item: commonItem,
    status: "pending" as RewardStatus,
    stars: [
      {
        id: "star1",
        uri: whiteStarUri,
      },
    ],
  },
  {
    id: "reward_common_2",
    title: "Common Item",
    description: "10,000 steps",
    itemBackground: commonBackground,
    item: commonItem,
    status: "completed" as RewardStatus,
    stars: [
      {
        id: "star1",
        uri: yellowStarUri,
      },
    ],
  },
  {
    id: "reward_common_3",
    title: "Common Item",
    description: "10,000 steps",
    itemBackground: commonBackground,
    item: commonItem,
    status: "claimed" as RewardStatus,
  },
];

const rareRewards = [
  {
    id: "reward_rare_1",
    title: "Rare Item",
    description: "15,000 steps",
    itemBackground: rareBackground,
    item: rareItem,
    status: "pending" as RewardStatus,
    stars: [
      {
        id: "star1",
        uri: whiteStarUri,
      },
      {
        id: "star2",
        uri: whiteStarUri,
      },
    ],
  },
  {
    id: "reward_rare_2",
    title: "Rare Item",
    description: "15,000 steps",
    itemBackground: rareBackground,
    item: rareItem,
    status: "completed" as RewardStatus,
    stars: [
      {
        id: "star1",
        uri: yellowStarUri,
      },
      {
        id: "star2",
        uri: yellowStarUri,
      },
    ],
  },
  {
    id: "reward_rare_3",
    title: "Rare Item",
    description: "15,000 steps",
    itemBackground: rareBackground,
    item: rareItem,
    status: "claimed" as RewardStatus,
  },
];
const epicRewards = [
  {
    id: "reward_epic_1",
    title: "Epic Item",
    description: "25,000 step",
    itemBackground: epicBackground,
    item: epicItem,
    status: "pending" as RewardStatus,
    animated: true,
    stars: [
      {
        id: "star1",
        uri: whiteStarUri,
      },
      {
        id: "star2",
        uri: whiteStarUri,
      },
      {
        id: "star3",
        uri: whiteStarUri,
      },
    ],
  },
  {
    id: "reward_epic_2",
    title: "Epic Item",
    description: "25,000 step",
    itemBackground: epicBackground,
    item: epicItem,
    status: "completed" as RewardStatus,
    animated: true,
    stars: [
      {
        id: "star1",
        uri: yellowStarUri,
      },
      {
        id: "star2",
        uri: yellowStarUri,
      },
      {
        id: "star3",
        uri: yellowStarUri,
      },
    ],
  },
  {
    id: "reward_epic_3",
    title: "Epic Item",
    description: "25,000 steps",
    itemBackground: epicBackground,
    item: epicItem,
    status: "claimed" as RewardStatus,
    animated: true,
  },
];

export const collectEventRewards = [
  {
    id: "reward_common_2",
    title: "Common Item",
    itemBackground: commonBackground,
    item: commonItem,
    status: "completed" as RewardStatus,
    stars: [
      {
        id: "star1",
        uri: yellowStarUri,
      },
    ],
  },
  {
    id: "reward_rare_2",
    title: "Rare Item",
    itemBackground: rareBackground,
    item: rareItem,
    status: "completed" as RewardStatus,
    stars: [
      {
        id: "star1",
        uri: yellowStarUri,
      },
      {
        id: "star2",
        uri: yellowStarUri,
      },
    ],
  },
  {
    id: "reward_epic_2",
    title: "Epic Item",
    itemBackground: epicBackground,
    item: epicItem,
    status: "completed" as RewardStatus,
    animated: true,
    stars: [
      {
        id: "star1",
        uri: yellowStarUri,
      },
      {
        id: "star2",
        uri: yellowStarUri,
      },
      {
        id: "star3",
        uri: yellowStarUri,
      },
    ],
  },
];

const commonRareRewards = [commonRewards[1], rareRewards[0]];
export const mixedRewards = [commonRewards[1], rareRewards[0], epicRewards[0]];

export default EventRewardsDebug;

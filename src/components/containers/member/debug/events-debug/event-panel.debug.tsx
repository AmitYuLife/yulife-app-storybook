import { EventPanels } from "@components/molecules";
import { Style } from "@styles";
import React from "react";
import { View } from "react-native";
import WrapperDebug from "../wrapper.debug";

const EventPanelDebug = () => (
  <WrapperDebug>
    {[0, 1, 2, 3].map((world) => (
      <View key={world} style={{ marginBottom: Style.adjust(50) }}>
        <EventPanels events={events} currentWorld={world} />
      </View>
    ))}
  </WrapperDebug>
);

export default EventPanelDebug;

const events = [
  {
    id: "id_1",
    stageId: "test_stageId",
    title: "Community Event",
    description: "Community Event",
    descriptionImage: {
      uri:
        "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
    },

    task: "Community Event",
    taskImage: {
      uri:
        "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
    },
    reward: "Community Event",
    rewardImage: {
      uri:
        "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
    },
    startDate: "",
    endDate: "",
    challenges: [
      {
        type: "steps",
        description: "25,000 steps",
        icon: {
          uri:
            "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
        },
      },
    ],
    badge: {
      text: "NEW",
      icon: {
        uri:
          "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
      },
      backgroundColor: "#FF0000",
    },
    tags: {
      tag: "Hard • 30 days",
      joined: "12/100 joined",
      icon: {
        uri:
          "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
      },
    },
    progressBar: {
      max: 6000,
      current: 3000,
    },
    milestones: [
      {
        targetValue: 2500,
        image: {
          uri:
            "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
        },
        animated: false,
        rewardId: "",
        rewardClaimed: false,
      },
      {
        targetValue: 4000,
        image: {
          uri:
            "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
        },
        animated: false,
        rewardId: "",
        rewardClaimed: false,
      },
      {
        targetValue: 6000,
        image: {
          uri:
            "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=47debee80dca111b0762dffa165a0dcb",
        },
        animated: false,
        rewardId: "",
        rewardClaimed: false,
      },
    ],
  },
];

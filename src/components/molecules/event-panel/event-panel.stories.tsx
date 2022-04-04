import React from "react";
import { ScrollView } from "react-native";
import { withDesign } from "storybook-addon-designs";
import { EventPanels } from "@molecules";

const events = [
  {
    id: "id_1",
    stageId: "test_stage",
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

export const EventsPanelStory = () => (
  <ScrollView>
    <EventPanels events={events} currentWorld={0} />
    <EventPanels events={events} currentWorld={1} />
    <EventPanels events={events} currentWorld={2} />
    <EventPanels events={events} currentWorld={3} />
  </ScrollView>
);

export default {
  title: "EventPanel",
  component: EventsPanelStory,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/IOfxRbpijIIG5JnM7iisb3/Event-System?node-id=1404%3A73132",
    },
  },
};

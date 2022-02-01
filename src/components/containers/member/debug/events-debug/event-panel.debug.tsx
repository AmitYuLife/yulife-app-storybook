import { EventPanel } from "@components/molecules";
import { Style } from "@styles";
import React from "react";
import { View } from "react-native";
import WrapperDebug from "../wrapper.debug";

const EventPanelDebug = () => (
  <WrapperDebug>
    {[0, 1, 2, 3].map((world) => (
      <View key={world} style={{ marginBottom: Style.adjust(50) }}>
        <EventPanel events={events} currentWorld={world} />
      </View>
    ))}
  </WrapperDebug>
);

export default EventPanelDebug;

const icon =
  "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&w=32&h=32&fit=clip&fm=png&s=ddb7a3883155879040c84473d46878a9";

const events = [
  {
    title: "Community Event",
    challenges: {
      icon,
      description: "25,000 steps",
    },
    tags: {
      icon,
      tag: "Hard • 30 days",
      joined: "12/100 joined",
    },
  },
  {
    title: "Community Event",
    challenges: {
      icon,
      description: "25,000 steps",
    },
    tags: {
      icon,
      tag: "Hard • 30 days",
      joined: "12/100 joined",
    },
  },
  {
    title: "Community Event",
    challenges: {
      icon,
      description: "25,000 steps",
    },
    tags: {
      icon,
      tag: "Hard • 30 days",
      joined: "12/100 joined",
    },
  },
  {
    title: "Community Event",
    challenges: {
      icon,
      description: "25,000 steps",
    },
    tags: {
      icon,
      tag: "Hard • 30 days",
      joined: "12/100 joined",
    },
  },
  {
    title: "Community Event",
    challenges: {
      icon,
      description: "25,000 steps",
    },
    tags: {
      icon,
      tag: "Hard • 30 days",
      joined: "12/100 joined",
    },
  },
];

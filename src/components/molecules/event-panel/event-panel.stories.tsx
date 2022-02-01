import React from "react";
import { storiesOf } from "@storybook/react-native";
import EventPanel from "./event-panel";
import { ScrollView } from "react-native";

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
storiesOf("EventPanel", module).add("default", () => {
  return (
    <ScrollView>
      <EventPanel events={events} currentWorld={0} />
      <EventPanel events={events} currentWorld={1} />
      <EventPanel events={events} currentWorld={2} />
      <EventPanel events={events} currentWorld={3} />
    </ScrollView>
  );
});

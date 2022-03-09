import React, { FC, useMemo, useCallback } from "react";
import { Colours } from "@styles";
import { mixedRewards } from "../../debug/events-debug/event-rewards-wrapper.debug";
import { useSelector } from "react-redux";
import { getCurrentWorld } from "@utils";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import EventDialogScreen from "@components/screens/member/events/event-dialog/event-dialog.screen";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { Navigation } from "react-native-navigation";

const HEADER_BACKGROUND = [
  {
    source: require("../../../../../../assets/centred-screen/largeForest.png"),
    backgroundColor: "rgb(255, 252, 216)",
    lightText: false,
  },
  {
    source: require("../../../../../../assets/centred-screen/ocean.png"),
    backgroundColor: "rgb(1,62,116)",
    lightText: true,
  },
  {
    source: require("../../../../../../assets/centred-screen/desert.png"),
    backgroundColor: "rgb(235,235,235)",
    lightText: false,
  },
  {
    source: require("../../../../../../assets/centred-screen/mountain.png"),
    backgroundColor: "#F9F9DB",
    lightText: false,
  },
];

// TODO: Pass the unique ID of the event, so we can query details for that specific event
interface IProps {
  componentId: string;
  onLeftIconPress: () => void;
}

const EventDialogContainer: FC<IProps> = ({ componentId, onLeftIconPress }) => {
  // TODO: Event details should be queried from the server
  const { title, labels, ...passProps } = eventDialogTestProps;

  // TODO: Header image and colours should be queried from the server
  const currentLevel = useSelector(getCurrentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const { source, backgroundColor, lightText } = useMemo(() => HEADER_BACKGROUND[currentWorld || 0], [currentWorld]);
  const headerTextColor = useMemo(() => (lightText ? Colours.neutral.white : Colours.neutral.n900), [lightText]);

  const onTakeChallengePress = useCallback(() => {
    handleNavigateToQuestsTab();
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const headerProps = {
    title,
    labels,
    source,
    backgroundColor,
    headerTextColor,
    onLeftIconPress,
  };

  return (
    <EventDialogScreen
      headerProps={headerProps}
      ctaText="Take a Challenge"
      onButtonPress={onTakeChallengePress}
      {...passProps}
    />
  );
};

export default EventDialogContainer;

const eventDialogTestProps = {
  title: "Event Title",
  labels: ["Hard", "29 days"],
  rewards: mixedRewards,
  progressUnit: "steps",
  currentProgress: 12000,
  maxProgress: 25000,
  progressIcon: {
    uri:
      "https://yulife-local.imgix.net/app-system/icons/default/steps-2021-10-06.svg?ixlib=js-3.2.1&w=32&h=32&fit=clip&fm=png&s=ddb7a3883155879040c84473d46878a9",
  },
  milestones: [10000, 15000, 25000],
  about: {
    title: "About the Community Event",
    markdown: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed.",
  },
  infoCards: [
    {
      icon: {
        id: "duotone/policy-tnc.svg",
        uri:
          "https://yulife-local.imgix.net/duotone/policy-tnc.svg?ixlib=js-3.2.1&fm=png&h=48&w=48&s=e316c124a9873eae3b4932b42a7e79c6",
      },
      title: "Task",
      description: `Complete any challenge.\nOnly counted once per day.`,
    },
    {
      icon: {
        id: "content/icons/trophy.svg",
        uri:
          "https://yulife-local.imgix.net/content/icons/trophy.svg?ixlib=js-3.2.1&fm=png&h=48&w=48&s=5f8a92b18d41b120012548df19aed458",
      },
      title: "Rewards",
      description: `Completion: Reward X\nParticipation: Reward Y`,
    },
  ],
  banner: {
    image: {
      id: "content/icons/yugi-status.svg",
      uri:
        "https://yulife-local.imgix.net/content/icons/yugi-status-info.svg?ixlib=js-3.2.1&fm=png&w=112&h=314&s=f2a3cbdd5b592ca9daf0de371435ed74",
    },
    markdown: "Join the event to be able to do reach milestones and earn rewards.",
    type: "info" as const,
  },
};

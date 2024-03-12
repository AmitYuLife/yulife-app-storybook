import {
  ContentItemButtonType,
  ContentItemProgressBarType,
  SduiActionType,
  ContentItem,
  AbsoluteContentItem,
  RnViewPointerEvents,
} from "@graphql/__generated";

const DYNAMIC_HEIGHT_KEY_HEADER = "DYNAMIC_HEIGHT_KEY_HEADER";
const DYNAMIC_HEIGHT_KEY_PROGRESS = "DYNAMIC_HEIGHT_KEY_PROGRESS";
const BODY_HEADER_MARGIN = 24;
/**
 *
 * see src/app/services/sdui/yuniversityQuiz/helpers/mockDb.ts
 * dbJourneys.steps.validation.properties keys
 **/
const ANSWER_KEY = "question1";

const disabledState = JSON.stringify({
  type: "object",
  required: [ANSWER_KEY],
  properties: {
    [ANSWER_KEY]: { type: "string" },
  },
  additionalProperties: true,
});

const body: Array<ContentItem> = [
  {
    __typename: "ContentItemPad",
    id: DYNAMIC_HEIGHT_KEY_HEADER,
    amount: 0,
    styles: [],
    pointerEvents: RnViewPointerEvents.None,
    dynamicStyles: [{ property: "marginTop", value: DYNAMIC_HEIGHT_KEY_HEADER, defaultValue: "0" }],
  },
  {
    __typename: "ContentItemPad",
    id: DYNAMIC_HEIGHT_KEY_PROGRESS,
    amount: BODY_HEADER_MARGIN,
    styles: [],
    pointerEvents: RnViewPointerEvents.None,
    dynamicStyles: [{ property: "marginTop", value: DYNAMIC_HEIGHT_KEY_PROGRESS, defaultValue: "0" }],
  },
  {
    __typename: "ContentItemMarkdown",
    id: "2",
    markdown:
      "## Question 1\n\nIn a 2021 poll, what percentage of UK organisations were seeing a rising demand for mental health support from their staff?",
    parsedMarkdown: `## Question 1\n\nIn a 2021 poll, what percentage of UK organisations were seeing a rising demand for mental health support from their staff?`,
    markdownStyles: "",
    styles: [
      {
        property: "paddingLeft",
        value: "24",
      },
      {
        property: "paddingRight",
        value: "64",
      },
    ],
    title: null,
    perkId: null,
    markdownContainerStyle: null,
  },
  {
    __typename: "ContentItemRadio",
    id: "answers",
    answerKey: ANSWER_KEY,
    iconOptions: false,
    styles: [],
    choices: [
      {
        label: "60%",
        value: "60%",
        renderAsIcon: null,
      },
      {
        label: "70%",
        value: "70%",
        renderAsIcon: null,
      },
      {
        label: "80%",
        value: "80%",
        renderAsIcon: null,
      },
      {
        label: "90%",
        value: "90%",
        renderAsIcon: null,
      },
    ],
  },
  {
    __typename: "ContentItemPad",
    id: "BOTTOM-PAD",
    pointerEvents: RnViewPointerEvents.None,
    amount: 0,
    styles: [{ property: "height", value: "120" }],
    dynamicStyles: null,
  },
];

const absolute: Array<AbsoluteContentItem> = [
  {
    styles: [{ property: "top", value: "0" }],
    isBackground: null,
    dynamicStyles: null,
    item: {
      __typename: "ContentItemHeaderBar",
      id: "header-bar",
      logo: "yulife",
      leftIcon: "BACK",
      rightIcon: "CLOSE",
      onLeftIconPress: {
        type: SduiActionType.SduiActionProductUnderwritingStepPop,
        payload: null,
      },
      onRightIconPress: {
        type: SduiActionType.SduiActionNavigateBack,
        payload:
          '{"title":"Are you sure you want to leave?","message":"Don\'t worry, you can pick up where you left off when you return within 30 days.","cancelLabel":"Cancel","confirmLabel":"Exit"}',
      },
      publishKeyHeight: DYNAMIC_HEIGHT_KEY_HEADER,
      heading: null,
      color: null,
      backgroundColor: undefined,
    },
  },
  {
    dynamicStyles: [{ property: "top", value: DYNAMIC_HEIGHT_KEY_HEADER, defaultValue: "0" }],
    isBackground: null,
    styles: [
      { property: "left", value: "0" },
      { property: "right", value: "0" },
      { property: "backgroundColor", value: "white" },
    ],
    item: {
      __typename: "ContentItemProgressBar",
      id: "progress-bar",
      maxLength: 1000,
      currentPosition: 320,
      type: ContentItemProgressBarType.YuCoin,
      publishKeyHeight: DYNAMIC_HEIGHT_KEY_PROGRESS,
    },
  },
  {
    styles: [
      { property: "bottom", value: "0" },
      { property: "left", value: "0" },
      { property: "right", value: "0" },
    ],
    isBackground: null,
    dynamicStyles: null,
    item: {
      __typename: "ContentItemPad",
      id: "BOTTOM-PAD",
      pointerEvents: RnViewPointerEvents.None,
      amount: null,
      dynamicStyles: null,
      styles: [
        { property: "backgroundColor", value: "white" },
        { property: "height", value: "120" },
      ],
    },
  },
  {
    styles: [
      { property: "bottom", value: "40" },
      { property: "left", value: "24" },
      { property: "right", value: "24" },
    ],
    dynamicStyles: null,
    isBackground: null,
    item: {
      __typename: "ContentItemButton",

      value: null,
      event: null,
      icon: null,
      rightIcon: null,
      styles: null,
      containerStyles: null,
      buttonSize: null,

      id: "1",
      label: "Continue",
      type: ContentItemButtonType.Primary,
      borderColor: "#E30D76",
      backgroundColor: "#E30D76",
      textColor: "#FFFFFF",
      disabledState,
      onPress: {
        type: SduiActionType.SduiActionSendMutation,
        payload: JSON.stringify({
          mutation: "submitSduiJourney",
          action: "action",
          journeyId: "YuniversityQuiz",
          stepId: "YuniversityQuizStep1",
          refetchQueries: ["GetSduiJourney"],
        }),
      },
    },
  },
];

export const sduiStoriesData = {
  body,
  absolute,
};

import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Alert } from "react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { PendingFeedbackForm } from "@graphql/_core/schema";
import FeedbackForm from "./feedback-form";

storiesOf("Feedback Form", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("Feedback Form", () => {
    return (
      <FeedbackForm
        form={EXAMPLE_FORM}
        loading={false}
        submitForm={(answers) => Alert.alert(`Form complete!`, `Answers: ${answers.map((a) => a.value).join(", ")}`)}
      />
    );
  });

const EXAMPLE_FORM = {
  __typename: "FeedbackForm",
  id: "5f5be1e75764ab75aa34a1b1",
  title: "Example Feedback CES",
  questions: [
    {
      __typename: "FeedbackFormQuestion",
      key: "CES_RATING",
      questionText: "How easy was it for you to get started in the app?",
      type: "NUMBER_SLIDER",
      isRoot: true,
      range: {
        __typename: "FeedbackFormQuestionRange",
        id: "5f5be1e75764ab75aa34a1b1",
        min: 0,
        max: 7,
      },
      labels: {
        __typename: "FeedbackFormQuestionLabels",
        id: "5f5be1e75764ab75aa34a1b1_CES_RATING",
        left: "Not easy at all",
        right: "Very easy",
        submit: "Submit rating",
        placeholder: null,
      },
      nextConditions: [
        {
          __typename: "FeedbackFormQuestionNextCondition",
          id: "5f5be1e75764ab75aa34a1b1_5f5be1e798919f75aa2f442b_COMMENT_GOOD",
          questionKey: "COMMENT_GOOD",
          regexMatch: "(7|6)",
        },
        {
          __typename: "FeedbackFormQuestionNextCondition",
          id: "5f5be1e75764ab75aa34a1b1_5f5be1e798919f75aa2f442b_COMMENT_OK",
          questionKey: "COMMENT_OK",
          regexMatch: "(5|4)",
        },
        {
          __typename: "FeedbackFormQuestionNextCondition",
          id: "5f5be1e75764ab75aa34a1b1_5f5be1e798919f75aa2f442b_COMMENT_BAD",
          questionKey: "COMMENT_BAD",
          regexMatch: "(4|3|2|1|0)",
        },
      ],
    },
    {
      __typename: "FeedbackFormQuestion",
      key: "COMMENT_GOOD",
      questionText: "Thank you! We’re so glad to have you on board!",
      type: "COMMENT",
      isRoot: null,
      range: null,
      labels: {
        __typename: "FeedbackFormQuestionLabels",
        id: "5f5be1e75764ab75aa34a1b1_COMMENT_GOOD",
        left: null,
        right: null,
        placeholder: "Help us by explaining your score...",
        submit: "Submit feedback",
      },
      nextConditions: [],
    },
    {
      __typename: "FeedbackFormQuestion",
      key: "COMMENT_OK",
      questionText: "Thank you for your score! What can we do better?",
      type: "COMMENT",
      isRoot: null,
      range: null,
      labels: {
        __typename: "FeedbackFormQuestionLabels",
        id: "5f5be1e75764ab75aa34a1b1_COMMENT_OK",
        left: null,
        right: null,
        placeholder: "Help us build an app that’s perfect for you...",
        submit: "Submit feedback",
      },
      nextConditions: [],
    },
    {
      __typename: "FeedbackFormQuestion",
      key: "COMMENT_BAD",
      questionText: "We're sorry to hear that. How can we improve?",
      type: "COMMENT",
      isRoot: null,
      range: null,
      labels: {
        __typename: "FeedbackFormQuestionLabels",
        id: "5f5be1e75764ab75aa34a1b1_COMMENT_BAD",
        left: null,
        right: null,
        placeholder: "Help us by explaining your score...",
        submit: "Submit feedback",
      },
      nextConditions: [],
    },
  ],
} as PendingFeedbackForm["pendingFeedbackForm"];

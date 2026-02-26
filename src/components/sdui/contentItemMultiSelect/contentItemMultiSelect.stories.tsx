import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemMultiSelect } from "./contentItemMultiSelect";

type Story = StoryObj<typeof ContentItemMultiSelect>;

const meta: Meta<typeof ContentItemMultiSelect> = {
  component: ContentItemMultiSelect,
  title: "Design System/SDUI/ContentItemMultiSelect",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "5",
    answerKey: "answerKey",

    choices: [
      {
        id: "BLOOD_PRESSURE_SELECTED",
        label: "High blood pressure",
        icon: {
          id: "highBloodPressureSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/high_blood_pressure.svg?ixlib=js-3.2.1&w=128&h=128&s=e38d13ad266703e724dea86436a2337c",
        },
      },
      {
        id: "CHOLESTEROL_SELECTED",
        label: "High cholesterol",
        icon: {
          id: "highCholesterolSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/high_cholesterol.svg?ixlib=js-3.2.1&w=128&h=128&s=72c748c879080cec64d6d90d9b629096",
        },
      },
      {
        id: "ENT_SELECTED",
        label: "Ears, nose, throat",
        icon: {
          id: "earNoseThroatSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/earn_nose_throat.svg?ixlib=js-3.2.1&w=128&h=128&s=0f64a153adc5295da7d5219cde52ef93",
        },
      },
      {
        id: "DIGESTIVE_SELECTED",
        label: "Digestive",
        icon: {
          id: "digestiveSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/digestive.svg?ixlib=js-3.2.1&w=128&h=128&s=f76e1e7023ba61dc09e627e389b2ac5b",
        },
      },
      {
        id: "KIDNEY_AND_BLADDER_SELECTED",
        label: "Kidneys & bladder",
        icon: {
          id: "kidneyAndBladderSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/kidneys_bladder.svg?ixlib=js-3.2.1&w=128&h=128&s=882caf268977d1b937239b27f78179a0",
        },
      },
      {
        id: "EYE_SELECTED",
        label: "Eye",
        icon: {
          id: "eyeSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/eye.svg?ixlib=js-3.2.1&w=128&h=128&s=7a0dd14ab9a5059c3658f36e9e48954a",
        },
      },
      {
        id: "MINOR_INJURIES_SELECTED",
        label: "Minor injuries",
        icon: {
          id: "minorInjuriesSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/minor_injuries.svg?ixlib=js-3.2.1&w=128&h=128&s=fc13c610364e85be4bd9fef808464161",
        },
      },
      {
        id: "LUNGS_SELECTED",
        label: "Lungs",
        icon: {
          id: "lungsSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/lungs.svg?ixlib=js-3.2.1&w=128&h=128&s=1e6209afd81a33251452c126bb52a524",
        },
      },
      {
        id: "MUSCLES_AND_JOINTS_SELECTED",
        label: "Muscles & joints",
        icon: {
          id: "musclesAndJointsSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/muscles_joints.svg?ixlib=js-3.2.1&w=128&h=128&s=f8a0f7fccfb58e6a264ffb945ceab9a2",
        },
      },
      {
        id: "SKIN_SELECTED",
        label: "Skin",
        icon: {
          id: "skinSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/skin.svg?ixlib=js-3.2.1&w=128&h=128&s=fde54734a6b8f6823db691e174b0487d",
        },
      },
      {
        id: "PREGNANCY_SELECTED",
        label: "Pregnancy",
        icon: {
          id: "pregnancySelected",
          uri: "https://yulife-local.imgix.net/personalProducts/pregnancy.svg?ixlib=js-3.2.1&w=128&h=128&s=667af02edf785bb8aa1a4749f99b3f7f",
        },
      },
      {
        id: "OTHER_SELECTED",
        label: "Other",
        icon: {
          id: "otherSelected",
          uri: "https://yulife-local.imgix.net/personalProducts/other.svg?ixlib=js-3.2.1&w=128&h=128&s=851ea6ba8ec2891a30213ee758585afe",
        },
      },
    ],
    onChange: () => {
      /* */
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};

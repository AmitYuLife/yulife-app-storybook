import { SduiScreen } from "@components/screens";
import { ComponentProps } from "react";

export const debugSmokingJourneyTreeData = {
  getSduiJourney: {
    stepId: "smoking_cessation_commitment_2",
    stepData: "{}",
    isSafeAreaView: true,
    body: [
      {
        __typename: "ContentItemPad",
        id: "DYNAMIC_HEIGHT_KEY_HEADER",
        amount: 0,
        pointerEvents: "NONE",
        styles: null,
        dynamicStyles: [
          {
            property: "marginTop",
            value: "DYNAMIC_HEIGHT_KEY_HEADER",
            defaultValue: "0",
            __typename: "SduiStyleDynamic",
          },
        ],
      },
      {
        __typename: "ContentItemWrapper",
        id: "none-to-flex-text",
        styles: [{ property: "display", value: "none", conditionalValue: null, __typename: "SduiStyle" }],
        children:
          '[{"__typename":"ContentItemText","id":"heading-b1b","text":"Well done!","textType":"b1b","textAlign":"center","styles":[{"property":"paddingLeft","value":"24"},{"property":"paddingRight","value":"24"}]},{"__typename":"ContentItemText","id":"description-2","text":"Now that you’ve committed to quitting smoking for the next 28 days, let’s set you up for success.","textType":"b1b","textAlign":"center","styles":[{"property":"marginTop","value":"24"},{"property":"paddingLeft","value":"24"},{"property":"paddingRight","value":"24"}]}]',
        pointerEvents: null,
        absolute: null,
        onPress: null,
        scrollViewProps: null,
        gestureViewProps: null,
        sharedValue: null,
        dynamicStyleKey: "DISPLAY_NONE_TO_FLEX_STYLE_KEY",
        localDispatchActions: null,
        localDispatchActionsOnMount: null,
      },
      {
        __typename: "ContentItemWrapper",
        id: "flex-to-none-text",
        styles: null,
        children:
          '[{"__typename":"ContentItemText","id":"heading-b1b","text":"Jane’s pledge","textType":"b1b","textAlign":"center","styles":[{"property":"paddingLeft","value":"24"},{"property":"paddingRight","value":"24"}]},{"__typename":"ContentItemText","id":"description-1","text":"Press and hold to secure your commitment.","textType":"b2","textAlign":"center","styles":[{"property":"marginTop","value":"8"},{"property":"paddingLeft","value":"24"},{"property":"paddingRight","value":"24"}]}]',
        pointerEvents: null,
        absolute: null,
        onPress: null,
        scrollViewProps: null,
        gestureViewProps: null,
        sharedValue: null,
        dynamicStyleKey: "DISPLAY_FLEX_TO_NONE_STYLE_KEY",
        localDispatchActions: null,
        localDispatchActionsOnMount: null,
      },
    ],
    absolute: [
      {
        isBackground: true,
        item: {
          __typename: "ContentItemImage",
          id: "smoking_cessation_commitment_2_background-image",
          image: {
            id: "https://yulife-local.imgix.net/journeys/smoking-cessation/smoking-background-2024-07-16.png?ixlib=js-3.2.1&s=bf7117f422a2439a69e2f7aa531297bd",
            uri: "https://yulife-local.imgix.net/journeys/smoking-cessation/smoking-background-2024-07-16.png?ixlib=js-3.2.1&s=bf7117f422a2439a69e2f7aa531297bd",
            __typename: "RemoteImage",
          },
          styles: null,
          wrapperStyles: [
            { property: "position", value: "absolute", conditionalValue: null, __typename: "SduiStyle" },
            { property: "left", value: "0", conditionalValue: null, __typename: "SduiStyle" },
            { property: "right", value: "0", conditionalValue: null, __typename: "SduiStyle" },
            { property: "bottom", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          ],
          onPress: null,
          contentItemImageSize: "fill",
        },
        styles: [
          { property: "left", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "right", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "bottom", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "top", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "backgroundColor", value: "#F6D9FF", conditionalValue: null, __typename: "SduiStyle" },
        ],
        dynamicStyles: null,
        __typename: "AbsoluteContentItem",
      },
      {
        isBackground: null,
        item: {
          __typename: "ContentItemHeaderBar",
          id: "smoking_cessation_commitment_2_header-claim",
          logo: "yulife",
          heading: null,
          leftIcon: null,
          contentItemHeaderBarRightIcon: "CLOSE",
          onLeftIconPress: {
            type: "SDUI_ACTION_NAVIGATE_BACK",
            payload: null,
            __typename: "SduiAction",
          },
          onRightIconPress: { type: "SDUI_ACTION_NAVIGATE_BACK", payload: null, __typename: "SduiAction" },
          publishKeyHeight: "DYNAMIC_HEIGHT_KEY_HEADER",
          color: null,
          backgroundColor: "transparent",
        },
        styles: [
          { property: "top", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "left", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "right", value: "0", conditionalValue: null, __typename: "SduiStyle" },
        ],
        dynamicStyles: null,
        __typename: "AbsoluteContentItem",
      },
      {
        isBackground: null,
        item: {
          __typename: "ContentItemWrapper",
          id: "smoking_cessation_commitment_2_footer",
          styles: [
            { property: "paddingBottom", value: "40", conditionalValue: null, __typename: "SduiStyle" },
            { property: "paddingTop", value: "40", conditionalValue: null, __typename: "SduiStyle" },
            { property: "width", value: "100%", conditionalValue: null, __typename: "SduiStyle" },
            { property: "justifyContent", value: "center", conditionalValue: null, __typename: "SduiStyle" },
            { property: "alignItems", value: "center", conditionalValue: null, __typename: "SduiStyle" },
          ],
          children: JSON.stringify([
            {
              id: "gesture-wrapper",
              dynamicStyleKey: "DISPLAY_FLEX_TO_NONE_STYLE_KEY",
              pointerEvents: "AUTO",
              sharedValue: '{"key":"LOTTIE_PROGRESS_KEY","payload":0}',
              styles: [
                {
                  property: "width",
                  value: "108",
                },
              ],
              gestureViewProps:
                '{"config":{"start":{"target":1,"config":{"duration":3000}},"end":{"target":0,"config":{"duration":300},"terminateOnEnd":true},"gesture":{"minDurationMs":0,"maxDist":1000}},"dispatchOnEnd":[{"type":"SDUI_ACTION_UPDATE_DYNAMIC_STYLES","payload":"{\\"DISPLAY_FLEX_TO_NONE_STYLE_KEY\\":[{\\"property\\":\\"display\\",\\"value\\":\\"none\\"}],\\"DISPLAY_NONE_TO_FLEX_STYLE_KEY\\":[{\\"property\\":\\"display\\",\\"value\\":\\"flex\\"}]}"}]}',
              children:
                '[{"__typename":"ContentItemImage","id":"holding-processing-age-image","styles":[{"property":"width","value":"108"},{"property":"height","value":"108"}],"wrapperStyles":[{"property":"flexDirection","value":"row"},{"property":"justifyContent","value":"center"}],"image":{"id":"https://yulife-local.imgix.net/journeys/smoking-cessation/fingerprint.svg?ixlib=js-3.2.1&w=324&h=345&s=563ffbc9d8380adb93e2fe94c8133e06"}}]',
              __typename: "ContentItemWrapper",
            },
            {
              id: "dynamic-button",
              dynamicStyleKey: "DISPLAY_NONE_TO_FLEX_STYLE_KEY",
              pointerEvents: "AUTO",
              styles: [
                {
                  property: "display",
                  value: "none",
                },
              ],
              children: JSON.stringify([
                {
                  borderColor: "#E30D76",
                  backgroundColor: "#E30D76",
                  textColor: "#FFFFFF",
                  id: "smoking_cessation_commitment_2_cta",
                  label: "Take your first steps",
                  onPress: {
                    type: "SDUI_ACTION_NAVIGATE_BACK",
                    payload: null,
                  },
                  buttonSize: "Large",
                  __typename: "ContentItemButton",
                  buttonType: "primary",
                  icon: {
                    id: "",
                  },
                  rightIcon: {
                    id: "",
                  },
                },
              ]),
              __typename: "ContentItemWrapper",
            },
          ]),
          pointerEvents: "BOX_NONE",
          absolute: null,
          onPress: null,
          scrollViewProps: null,
          gestureViewProps: null,
          sharedValue: null,
          dynamicStyleKey: null,
          localDispatchActions: null,
          localDispatchActionsOnMount: null,
        },
        styles: [
          { property: "bottom", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "left", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "right", value: "0", conditionalValue: null, __typename: "SduiStyle" },
        ],
        dynamicStyles: null,
        __typename: "AbsoluteContentItem",
      },
      {
        isBackground: true,
        item: {
          __typename: "ContentItemWrapper",
          id: "lottie-wrapper",
          styles: null,
          children:
            '[{"id":"progress-lottie-wrapper","dynamicStyleKey":"DISPLAY_FLEX_TO_NONE_STYLE_KEY","styles":[{"property":"position","value":"absolute"},{"property":"left","value":"0"},{"property":"right","value":"0"},{"property":"bottom","value":"1"}],"children":"[{\\"__typename\\":\\"ContentItemLottie\\",\\"progressKey\\":\\"LOTTIE_PROGRESS_KEY\\",\\"autoPlay\\":false,\\"id\\":\\"progress-controlled-lottie\\",\\"loop\\":false,\\"uri\\":\\"https://yulife-local.imgix.net/journeys/smoking-cessation/commitment-tree-crop-1.json?ixlib=js-3.2.1&s=a55e3ac5a42256b841da5aed74dd05f7\\"}]","__typename":"ContentItemWrapper"},{"id":"loop-lottie-wrapper","dynamicStyleKey":"DISPLAY_NONE_TO_FLEX_STYLE_KEY","styles":[{"property":"position","value":"absolute"},{"property":"display","value":"none"},{"property":"left","value":"0"},{"property":"right","value":"0"},{"property":"bottom","value":"0"}],"children":"[{\\"__typename\\":\\"ContentItemLottie\\",\\"autoPlay\\":true,\\"id\\":\\"repeat-lottie\\",\\"loop\\":true,\\"uri\\":\\"https://yulife-local.imgix.net/journeys/smoking-cessation/commitment-tree-success-crop.json?ixlib=js-3.2.1&s=0d0f9e79f7a3db35b48df69c51b4784e\\"}]","__typename":"ContentItemWrapper"}]',
          pointerEvents: null,
          absolute: null,
          onPress: null,
          scrollViewProps: null,
          gestureViewProps: null,
          sharedValue: null,
          dynamicStyleKey: null,
          localDispatchActions: null,
          localDispatchActionsOnMount: null,
        },
        styles: [
          { property: "left", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "right", value: "0", conditionalValue: null, __typename: "SduiStyle" },
          { property: "bottom", value: "200", conditionalValue: null, __typename: "SduiStyle" },
        ],
        dynamicStyles: null,
        __typename: "AbsoluteContentItem",
      },
    ],
    containerStyles: [],
    __typename: "JourneyData",
  } as ComponentProps<typeof SduiScreen>,
};

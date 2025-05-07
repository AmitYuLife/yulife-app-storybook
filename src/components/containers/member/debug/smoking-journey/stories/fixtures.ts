import { UseIntroModalProps } from "@components/containers/member/smoking/smoking-hub/hooks/useIntroModal";

export const debugSmokingJourneyStories = {
  id: "swiper-1",
  title: "Steps into a smoke-free world",
  theme: {
    primaryColor: "white",
    titleColor: "#464647",
    progressBarForegroundColor: "#E30D76",
    progressBarBackgroundColor: "#EFF0FA",
  },
  dismissMinVisibleIndex: 2,
  ctaMinVisibleIndex: 2,
  autoPlaySpeedMs: 10000,
  close: {
    icon: {
      id: "",
      uri: "https://yulife-local.imgix.net/app-system/icons/default/close.png?ixlib=js-3.2.1&s=4e3d861b15c06509661e0493aeaaf5ec",
    },
    onPress: {
      type: "SDUI_ACTION_LOG_EVENT",
      payload:
        '{"name":"button_pressed","props":{"name":"smoking_intro_modal_dismiss","button_id":"smoking_intro_modal_dismiss","location":"smoking_hub","sdui_location":"app"}}',
    },
  },
  items: [
    {
      id: "step-1",
      heading: "Step 1: Throw out your smoking items",
      textColor: "#464647",
      paragraph:
        "Remove all cigarettes, lighters, and ashtrays from your home, car, and workplace. Clearing these items will help reduce temptations and create a smoke-free environment.",
      image: {
        uri: "https://yulife-local.imgix.net/smoking-cessation/swiper/house.svg?ixlib=js-3.2.1&fm=png&w=744&h=744&s=2fe07535cf0b432326f62f23d3f29d6b",
      },
    },
    {
      id: "step-2",
      heading: "Step 2: Let your loved ones know",
      textColor: "#464647",
      paragraph:
        "Quitting smoking is easier with support. Tell your friends, family, and coworkers about your decision to quit. Their encouragement and understanding can make a big difference on your journey to a smoke-free life.",
      image: {
        uri: "https://yulife-local.imgix.net/smoking-cessation/swiper/people.svg?ixlib=js-3.2.1&fm=png&w=846&h=744&s=93b64f0bea8c0aa59abfe20019c12c5b",
      },
    },
    {
      id: "step-3",
      heading: "Step 3: Stay positive and celebrate",
      textColor: "#464647",
      paragraph:
        "Every smoke-free day is a victory! Focus on the benefits of quitting and take time to celebrate your progress — we’ll celebrate with you. Remember, you’re taking important steps toward a healthier, happier life.",
      image: {
        uri: "https://yulife-local.imgix.net/smoking-cessation/swiper/yugi.svg?ixlib=js-3.2.1&fm=png&w=744&h=744&s=2d662f7c289088a7fc13c963d038828b",
      },
    },
  ],
  button: {
    id: "smoking_intro_modal_cta",
    label: "Start tracking my progress",
    onPress: {
      type: "SDUI_ACTION_LOG_EVENT",
      payload:
        '{"name":"button_pressed","props":{"name":"smoking_intro_modal_cta","button_id":"smoking_intro_modal_cta","location":"smoking_hub","sdui_location":"app"}}',
    },
    type: "primary",
  },
  onlyAllowForward: true,
  forwardOnScreenPress: true,
  enablePause: true,
  enableSwiping: true,
} as UseIntroModalProps;

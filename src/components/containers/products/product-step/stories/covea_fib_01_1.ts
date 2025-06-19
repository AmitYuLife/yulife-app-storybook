/**
 * For quick test data testing purposes
 * doesn't need to maintain API parity
 */

export const covea_fib_01_1 = {
  stepId: "Covea_FIB_01_1",
  introStep: true,
  containerStyles: [{ property: "backgroundColor", value: "#FAFAFE" }],
  header: [
    {
      id: "Covea_FIB_01_1-header",
      logo: "yulife",
      leftIcon: "BACK",
      rightIcon: "CLOSE",
      onLeftIconPress: { type: "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP" },
      onRightIconPress: { type: "SDUI_ACTION_NAVIGATE_BACK" },
      __typename: "ContentItemHeaderBar",
    },
  ],
  footer: [],
  body: [
    {
      id: "9",
      label: "Or choose a customer cover (%)",
      onPress: {
        type: "SDUI_ACTION_NAVIGATE",
        payload: '{"routeId":"yulife.product.DetachedProductStep","props":{"stepId":"Covea_FIB_01_DOCS_DEFAULT"}}',
      },
      styles: [
        { property: "marginTop", value: "30" },
        { property: "paddingHorizontal", value: "20" },
      ],
      buttonSize: "Fill",
      __typename: "ContentItemButton",
      buttonType: "tertiary",
      icon: {
        id: "personalProducts/policy-terms-conditions.svg",
        uri: "https://yulife-local.imgix.net/personalProducts/policy-terms-conditions.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=66be59019e750a30db2e3efb5ab70fee",
      },
      rightIcon: {
        id: "content/icons/right_arrow.svg",
        uri: "https://yulife-local.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=f61782a69bde82bb65f61da34a8fd1d4",
      },
    },
    {
      id: "qweqwe",
      __typename: "ContentItemPackageCards",
    },
    {
      id: "adsladsfflks",
      markdown: "Our policies also come with a virtual GP service.",
      __typename: "ContentItemInfoCard",
      image: {
        id: "personalProducts/signed-contract.png",
        uri: "https://yulife-local.imgix.net/personalProducts/signed-contract.png?ixlib=js-3.2.1&fit=clip&fm=png&s=072cd1e397ebad8b9e22b327641ddfba",
        __typename: "RemoteImage",
      },
      styles: [
        {
          property: "paddingHorizontal",
          value: "24",
          __typename: "SduiStyle",
        },
        {
          property: "marginTop",
          value: "16",
          __typename: "SduiStyle",
        },
      ],
    },
    {
      id: "10",
      label: "FAQs",
      onPress: {
        type: "SDUI_ACTION_NAVIGATE",
        payload: '{"routeId":"yulife.product.DetachedProductStep","props":{"stepId":"Covea_FIB_01_FAQ_DEFAULT"}}',
      },
      styles: [
        { property: "marginTop", value: "10" },
        { property: "paddingHorizontal", value: "20" },
      ],
      buttonSize: "Fill",
      __typename: "ContentItemButton",
      buttonType: "tertiary",
      icon: {
        id: "personalProducts/faqs.svg",
        uri: "https://yulife-local.imgix.net/personalProducts/faqs.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=d43312cb84e3668c8a912436037f0795",
        __typename: "RemoteImage",
      },
      rightIcon: {
        id: "content/icons/right_arrow.svg",
        uri: "https://yulife-local.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=f61782a69bde82bb65f61da34a8fd1d4",
      },
    },
    {
      id: "10",
      label: "Continue to checkout",
      onPress: {
        type: "SDUI_ACTION_NAVIGATE",
        payload: '{"routeId":"yulife.product.DetachedProductStep","props":{"stepId":"Covea_FIB_01_FAQ_DEFAULT"}}',
      },
      styles: [
        { property: "marginTop", value: "10" },
        { property: "paddingHorizontal", value: "20" },
      ],
      buttonSize: "Fill",
      __typename: "ContentItemButton",
      buttonType: "primary",
      icon: {},
      rightIcon: {},
    },
  ],
  nextSteps: [{ stepId: "Covea_FIB_01_2" }],
  customerProductId: "YUCPID0000000001",
} as any;

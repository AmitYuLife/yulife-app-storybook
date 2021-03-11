export const PRODUCT_DETAILS_MODAL_FIXTURE = {
  keyValuePairs: [
    {
      label: "Client name",
      value: "Mario Balotelli",
    },
    {
      label: "Company name",
      value: "Yulife Ltd.",
    },
    {
      label: "Policy number",
      value: "JE00827Q3481",
    },
    {
      label: "Date joined",
      value: "17/03/19",
    },
  ],
  title: "Group Life Insurance",
  content: [
    {
      type: "pair",
      content: {
        label: "Total cover",
        value: "6x salary",
      },
    },
    {
      type: "body",
      content: "In the event of a claim your loved ones will receive a single payment equal to 6x your salary.",
    },
    {
      type: "pair",
      content: {
        label: "Paid as",
        value: "Lump sum",
      },
    },
  ],
};

const GLI = PRODUCT_DETAILS_MODAL_FIXTURE;
const GCI = {
  ...PRODUCT_DETAILS_MODAL_FIXTURE,
  title: "Group Critical Illness",
  content: [
    {
      type: "pair",
      content: {
        label: "Total cover",
        value: "£100,000",
      },
    },
    {
      type: "body",
      content:
        "If you are diagnosed with any serious illness covered in the policy you will be paid a lump sum of £100,000.",
    },
    {
      type: "pair",
      content: {
        label: "Paid as",
        value: "Lump sum",
      },
    },
  ],
};
const GIP = {
  ...PRODUCT_DETAILS_MODAL_FIXTURE,
  title: "Group Income Protection",
  content: [
    {
      type: "pair",
      content: {
        label: "Total cover",
        value: "25% of salary",
      },
    },
    {
      type: "body",
      content: "Provides financial support if you cannot work due to ill health.",
    },
    {
      type: "pairs",
      content: [
        {
          label: "Paid over",
          value: "24 months",
        },
        {
          label: "Deferred Period",
          value: "12 weeks",
        },
      ],
    },
  ],
};

const GDISP = {
  ...PRODUCT_DETAILS_MODAL_FIXTURE,
  title: "Group Death in Service Pension",
  content: [
    {
      type: "pair",
      content: {
        label: "Total cover",
        value: "25% of salary",
      },
    },
    {
      type: "body",
      content:
        "Your loved ones will receive a proportion of your salary should the worst happen.\n\nTo know more about how your salary will be used to calculate your benefit, please speak with the HR manager in your company.",
    },
    {
      type: "pair",
      content: {
        label: "Paid as",
        value: "Monthly payments",
      },
    },
  ],
};

export const PRODUCT_DETAILS_FIXTURES = [GLI, GCI, GIP, GDISP];

export const TEST_POLICY_FIXTURES = [
  {
    productName: "Group Life Insurance",
    productIconUri:
      "http://res.cloudinary.com/yu-life-develop/image/upload/s--aOCkQPZJ--/h_200,w_200/v1/api/local/yuscreen_products_assets/default/compass_active_plain.png",
    benefitDescription: "x salary as lump sum",
    benefitValue: "6",
    yuCoinDescription: "YuCoin Power",
    yuCoinValue: "20",
    benefitDescriptionLong: "Your loved ones will receive a single payment equal to £1000000 in the event of a claim.",
    lastUpdated: "Policy last updated on 17/03/2020",
  },
  {
    productName: "Group Critical Illness",
    productIconUri:
      "http://res.cloudinary.com/yu-life-develop/image/upload/s--MU5hg4C0--/h_200,w_200/v1/api/local/yuscreen_products_assets/default/binoculars_active_plain.png",

    benefitDescription: " total cover",
    benefitValue: "£100,000",
    yuCoinDescription: "YuCoin Power",
    yuCoinValue: "20",
    benefitDescriptionLong:
      "If you are diagnosed with any serious illness covered in the policy. You will be paid a lump sum equal to £100,000.",
    lastUpdated: "Policy last updated on 17/03/2020",
  },
  {
    productName: "Group Income Protection",
    productIconUri:
      "http://res.cloudinary.com/yu-life-develop/image/upload/s--3JblOGcQ--/h_200,w_200/v1/api/local/yuscreen_products_assets/default/map_active_plain.png",
    benefitDescription: " total cover",
    benefitValue: "£100,000",
    yuCoinDescription: "YuCoin Power",
    yuCoinValue: "20",
    benefitDescriptionLong:
      "If you are diagnosed with any serious illness covered in the policy. You will be paid a lump sum equal to £100,000.",
    lastUpdated: "Policy last updated on 17/03/2020",
  },
  {
    productName: "Group Death in Service Pension",
    productIconUri:
      "http://res.cloudinary.com/yu-life-develop/image/upload/s--jGP7GfGz--/h_200,w_200/v1/api/local/yuscreen_products_assets/default/lantern_active_plain.png",
    benefitDescription: " total cover",
    benefitValue: "£100,000",
    yuCoinDescription: "YuCoin Power",
    yuCoinValue: "20",
    benefitDescriptionLong:
      "If you are diagnosed with any serious illness covered in the policy. You will be paid a lump sum equal to £100,000.",
    lastUpdated: "Policy last updated on 17/03/2020",
  },
];

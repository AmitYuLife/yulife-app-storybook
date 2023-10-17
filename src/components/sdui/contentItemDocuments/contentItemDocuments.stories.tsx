import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemDocuments } from "./contentItemDocuments";

type Story = StoryObj<typeof ContentItemDocuments>;

const meta: Meta<typeof ContentItemDocuments> = {
  component: ContentItemDocuments,
  title: "Design System/SDUI/ContentItemDocuments",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "2",
    headingImage: {
      id: "1",
      image: {
        id: "personalProducts/yugi_documents.png",
        uri: "https://yulife-develop.imgix.net/personalProducts/yugi_documents.png?ixlib=js-3.2.1&fit=clip&fm=png&s=9a6236a03c18e8b7fdbce490cb8f20ac",
      },
    },
    headingMarkdown: {
      id: "2",
      markdown: "Your policy docs, in one easy place.",
      parsedMarkdown: "Your policy docs, in one easy place.",
    },
    documents: [
      {
        id: "ef0bfb7c-6bf4-4a4a-a40f-70de2d19a53b",
        linkLabel: "Application Details",
        rightIcon: {
          id: "content/icons/right_arrow.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        },
        leftIcon: {
          id: "personalProducts/policy-terms-conditions.svg",
          uri: "https://yulife-develop.imgix.net/personalProducts/policy-terms-conditions.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=e348c020560d8d95fda81faa97a8aa1d",
        },
        url: "https://yu-eu-west-2-develop-covea-documents-files.s3.eu-west-2.amazonaws.com/fib/YUCPID0000019622/pli-application-details-011a978a-2c74-4986-9e71-855a258fcf95.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4KLP47WRGBN3Q2NM%2F20230928%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230928T205303Z&X-Amz-Expires=7200&X-Amz-Signature=a75cb7074a98440f8b42652570dcbfc03a20b1df5c9ae3c9a68abdab66248893&X-Amz-SignedHeaders=host&response-content-type=application%2Fpdf&x-id=GetObject",
      },
      {
        id: "3e509b2c-e2ec-4272-8c46-d46edcadbd52",
        linkLabel: "Policy Payment Schedule",
        rightIcon: {
          id: "content/icons/right_arrow.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        },
        leftIcon: {
          id: "personalProducts/policy-terms-conditions.svg",
          uri: "https://yulife-develop.imgix.net/personalProducts/policy-terms-conditions.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=e348c020560d8d95fda81faa97a8aa1d",
        },
        url: "https://yu-eu-west-2-develop-covea-documents-files.s3.eu-west-2.amazonaws.com/fib/YUCPID0000019622/pli-policy-schedule-17e67d1e-9b28-4d77-b9eb-f65c1fcac306.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4KLP47WRGBN3Q2NM%2F20230928%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230928T205303Z&X-Amz-Expires=7200&X-Amz-Signature=d19205c911f29703686627f3357e12fd9c7701982ab884e1d840eaf6bd079f75&X-Amz-SignedHeaders=host&response-content-type=application%2Fpdf&x-id=GetObject",
      },
      {
        id: "policy_wording",
        linkLabel: "Policy Wording",
        rightIcon: {
          id: "content/icons/right_arrow.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        },
        leftIcon: {
          id: "content/icons/pdf.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/pdf.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=14a445d8a1e6c19a8e72b655fc936c3f",
        },
        url: "https://yulife-develop.imgix.net/personalProducts/pdfs/coveaFib01/policy_wording/0.0.3/policy_wording.pdf?ixlib=js-3.2.1&s=18c850d478848771590974b89966b8c0",
      },
      {
        id: "policy_summary",
        linkLabel: "Policy Summary",
        rightIcon: {
          id: "content/icons/right_arrow.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        },
        leftIcon: {
          id: "content/icons/pdf.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/pdf.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=14a445d8a1e6c19a8e72b655fc936c3f",
        },
        url: "https://yulife-develop.imgix.net/personalProducts/pdfs/coveaFib01/policy_summary/0.0.2/policy_summary.pdf?ixlib=js-3.2.1&s=9fb0371b2f05166fe96072f2d5dc3f9c",
      },
      {
        id: "terms_of_business",
        linkLabel: "Terms of Business",
        rightIcon: {
          id: "content/icons/right_arrow.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        },
        leftIcon: {
          id: "content/icons/pdf.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/pdf.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=14a445d8a1e6c19a8e72b655fc936c3f",
        },
        url: "https://yulife-develop.imgix.net/personalProducts/pdfs/coveaFib01/terms_of_business/0.0.1/terms_of_business.pdf?ixlib=js-3.2.1&s=4116b39174455d4588354d7725094737",
      },
      {
        id: "privacy_policy",
        linkLabel: "Privacy Policy",
        rightIcon: {
          id: "content/icons/right_arrow.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        },
        leftIcon: {
          id: "content/icons/shield.svg",
          uri: "https://yulife-develop.imgix.net/content/icons/shield.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=cce1ac47c8385112b96ef41d2bd86061",
        },
        url: "https://yulife.com/privacy-policy/",
      },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};

import Config from "react-native-config";

const policyTermsConditions = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#E3F7FC"/>
<path d="M11.25 29.2864V10.001H21.8427L26.6813 14.7572V29.2864H11.25Z" stroke="#00C0F3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5293 20.4648H22.3694" stroke="#00C0F3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5293 17.5244H22.3694" stroke="#00C0F3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5293 23.4043H22.3694" stroke="#00C0F3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4092 26.3452L22.3692 26.3452" stroke="#00C0F3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8428 10V14.6911H26.6814" stroke="#00C0F3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.7769 22.3091L30.4863 16.936L32.5012 19.0771L26.7918 24.4502L24.357 24.7229L24.7769 22.3091Z" fill="#E3F7FC" stroke="#00C0F3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.9139 15.5924C32.5051 15.036 33.4354 15.0643 33.9918 15.6555C34.5482 16.2467 34.52 17.1771 33.9288 17.7335L32.8582 18.7409L30.8433 16.5999L31.9139 15.5924Z" fill="#E3F7FC" stroke="#00C0F3" stroke-width="1.3"/>
</svg>
`;

const policySymmary = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#EAE1FF"/>
<path d="M14.7598 30.0002V11.5515H25.8141L30.8636 16.1014V30.0002H14.7598Z" fill="#EAE1FF" stroke="#956AFF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1035 19.9023H27.5202" stroke="#956AFF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1035 23.3936H27.5202" stroke="#956AFF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1035 26.6345H27.5202" stroke="#956AFF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8135 11.5515V16.039H30.863" stroke="#956AFF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.1177C10 10.1177 13.9577 9.74377 14.8448 7.5C14.8448 7.5 15.9366 9.74377 19.6896 10.1177V12.9848C19.6896 12.9848 20.372 16.2258 14.8448 18.9058C14.8448 18.9058 10 16.2881 10 13.2341C10 10.1801 10 10.1177 10 10.1177Z" fill="#EAE1FF" stroke="#956AFF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8564 13.1717L14.2843 14.4805L17.14 11.8628" stroke="#956AFF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default [
  {
    id: "policy-terms-conditions",
    question: "Policy Terms & Conditions",
    iconSvgXml: policyTermsConditions,
    url: `${Config.WEB_SITE_URL}static/docs/insurance-top-up/terms-and-conditions/4.0.0/life-Insurance-top-up-cover-terms-and-conditions.pdf`,
  },
  {
    id: "Policy-summary",
    question: "Policy summary",
    iconSvgXml: policySymmary,
    url: `${Config.WEB_SITE_URL}static/docs/insurance-top-up/policy/4.0.0/life-insurance-top-up-policy-guide.pdf`,
  },
];

import Config from "react-native-config";

const policySchedule = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#CAF8E8"/>
<path d="M12.3301 13.5791V29.9996H28.7505V13.5791H12.3301Z" fill="#CAF8E8" stroke="#34DBA3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.1934 23.2373H17.6422M20.057 23.2373H24.8865" stroke="#34DBA3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.1934 26.1377H20.54M22.9547 26.1377H24.8865" stroke="#34DBA3" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="13.2955" cy="14.5455" r="5.14545" fill="#CAF8E8" stroke="#34DBA3" stroke-width="1.3"/>
<path d="M13.2949 12.6123V15.0271H15.2267" stroke="#34DBA3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.8857 11.6465L24.8857 15.5101" stroke="#34DBA3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.8862 20.3408H20.0566" stroke="#34DBA3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const pdfIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.05469 22C4.95012 22 4.05469 21.1046 4.05469 20V4C4.05469 2.89543 4.95012 2 6.05469 2H15.0547L20.0547 7V20C20.0547 21.1046 19.1593 22 18.0547 22H6.05469Z" fill="#FAD4D4"/>
<path d="M15.0547 2L20.0547 7H17.0547C15.9501 7 15.0547 6.10457 15.0547 5V2Z" fill="#FB4848"/>
<path d="M7.87759 13.0926C8.3194 13.0926 8.71664 12.9636 9.0041 12.6963C9.29248 12.4281 9.46198 12.0286 9.46198 11.5051C9.46198 10.9741 9.2887 10.5761 8.99812 10.3116C8.70872 10.0482 8.31163 9.925 7.87759 9.925H6.50477C6.23185 9.925 6.01289 10.151 6.01289 10.4258V14.5742C6.01289 14.849 6.23185 15.075 6.50477 15.075C6.77769 15.075 6.99665 14.849 6.99665 14.5742V13.0926H7.87759ZM7.8129 10.8386C8.01756 10.8386 8.17416 10.8983 8.2797 11.0053C8.38533 11.1124 8.44947 11.2767 8.44947 11.5051C8.44947 11.7302 8.38695 11.8967 8.28163 12.0067C8.17673 12.1162 8.02029 12.179 7.8129 12.179H6.99665V10.8386H7.8129ZM11.269 10.8386H11.7474C12.1969 10.8386 12.5411 10.9444 12.7746 11.1914C13.0091 11.4394 13.1459 11.8444 13.1459 12.4743C13.1459 13.1042 13.0091 13.5072 12.7748 13.7534C12.5414 13.9986 12.1972 14.1027 11.7474 14.1027H11.269V10.8386ZM10.7771 9.925C10.5042 9.925 10.2852 10.151 10.2852 10.4258V14.5154C10.2852 14.7903 10.5042 15.0163 10.7771 15.0163H11.7474C12.4726 15.0163 13.079 14.8507 13.5038 14.4419C13.929 14.0325 14.1584 13.3925 14.1584 12.4743C14.1584 11.5561 13.929 10.9143 13.5039 10.5032C13.0792 10.0924 12.4727 9.925 11.7474 9.925H10.7771ZM15.9635 12.9458H17.2469C17.4911 12.9458 17.6885 12.7418 17.6885 12.4963C17.6885 12.2508 17.4911 12.0469 17.2469 12.0469H15.9635V10.8386H17.7141C17.9655 10.8386 18.1629 10.6346 18.1629 10.3818C18.1629 10.129 17.9655 9.925 17.7141 9.925H15.4716C15.1987 9.925 14.9797 10.151 14.9797 10.4258V14.5742C14.9797 14.849 15.1987 15.075 15.4716 15.075C15.7445 15.075 15.9635 14.849 15.9635 14.5742V12.9458Z" fill="#FB4848" stroke="#FB4848" stroke-width="0.15"/>
</svg>
`;

const blueDocWithShieldIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 23C6.89543 23 6 22.1046 6 21V7C6 4.79086 7.79086 3 10 3H17L22 8V21C22 22.1046 21.1046 23 20 23H8Z" fill="#D9EAFF"/>
<path d="M17 3L22 8H19C17.8954 8 17 7.10457 17 6V3Z" fill="#8CC1FF"/>
<path d="M14.9102 13L18.9102 13" stroke="#8CC1FF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9102 10L18.9102 10" stroke="#8CC1FF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9102 16L18.9102 16" stroke="#8CC1FF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.91016 19L18.9102 19" stroke="#8CC1FF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.16602 6.38563C3.16602 5.76877 3.72995 5.28641 4.33847 5.18533C4.86773 5.09742 5.48923 4.884 6.00845 4.39998C6.05659 4.3551 6.09852 4.3026 6.1359 4.24843C7.29147 2.57345 8.70448 2.29352 9.41104 3C10.5863 4.17512 11.9265 4.94695 13.758 5.10797C14.3206 5.15742 14.7896 5.6021 14.7896 6.16682V8.71168C14.7896 8.72115 14.7897 8.73005 14.7897 8.73952C14.7909 9.00527 14.714 13.0985 8.91104 16C8.91104 16 7.82827 16.5694 6.66271 14.8211C5.49714 13.0727 3.16602 12.124 3.16602 9.03161C3.16602 7.79004 3.16602 6.95167 3.16602 6.38563Z" fill="#469BFF"/>
<path d="M2 6.1165C2 5.60146 2.39011 5.16897 2.89539 5.06915C4.06146 4.83878 6.0832 4.27114 7.20774 2.98485C7.49652 2.65452 8.19744 2.61111 8.49747 2.93126C9.19857 3.67936 10.5064 4.67069 12.7281 5.08249C13.2326 5.17599 13.6235 5.60034 13.6235 6.11339V8.72587C13.6235 8.72587 13.9031 12.8889 8.0479 15.8689C7.9025 15.9429 7.72918 15.9411 7.58899 15.8576C6.52365 15.2233 2 12.3357 2 9.03159C2 7.57601 2 6.67462 2 6.1165Z" fill="#8CC1FF"/>
<path d="M5.91016 9.5L7.24349 11L9.91016 8" stroke="#F4F9FF" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const yellowDoc = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H15L20 7V20C20 21.1046 19.1046 22 18 22H6Z" fill="#FFDE32"/>
<path d="M15 2L20 7H17C15.8954 7 15 6.10457 15 5V2Z" fill="#FFB13B"/>
<path d="M7.18945 11.9303H17.1895" stroke="#FFB13B" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.18945 8.92947H17.1895" stroke="#FFB13B" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.18945 14.9298H17.1895" stroke="#FFB13B" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17.9306L16 17.9306" stroke="#FFB13B" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// Generated document, linking to website for now
export const policyScheduleDocument = {
  id: "policy-schedule",
  question: "Policy schedule",
  iconSvgXml: policySchedule,
  url: `${Config.WEB_SITE_URL}`,
};

export default [
  {
    id: "policy-terms-conditions",
    question: "Terms & Conditions",
    iconSvgXml: yellowDoc,
    url: `${Config.WEB_SITE_URL}static/docs/insurance/personal/1.0.0/personal-life-insurance-terms-and-conditions.pdf`,
  },
  {
    id: "privacy-policy",
    question: "Privacy Policy",
    iconSvgXml: blueDocWithShieldIcon,
    url: `${Config.WEB_SITE_URL}privacy-policy/`,
  },
  {
    id: "rewards-policy",
    question: "Rewards Policy",
    iconSvgXml: blueDocWithShieldIcon,
    url: `${Config.WEB_SITE_URL}rewards-policy/`,
  },
  {
    id: "key-facts",
    question: "Key Facts",
    iconSvgXml: pdfIcon,
    url: `${Config.WEB_SITE_URL}static/docs/insurance/personal/1.0.0/personal-life-insurance-key-facts.pdf`,
  },
  {
    id: "policy-summary",
    question: "Policy Guide",
    iconSvgXml: pdfIcon,
    url: `${Config.WEB_SITE_URL}static/docs/insurance/personal/1.0.0/personal-life-insurance-policy-guide.pdf`,
  },
  {
    id: "general-term-of-business",
    question: "General Terms of Business",
    iconSvgXml: pdfIcon,
    url: `${Config.WEB_SITE_URL}`, // TODO: Change placeholder
  },
];

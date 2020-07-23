import * as React from "react";
import { SvgXml } from "react-native-svg";

interface IPersonalProductsIconProps {
  icon: string;
  active: boolean;
}

const chestSlot = `
<svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 17C0 7.61116 7.61116 0 17 0H47C56.3888 0 64 7.61116 64 17V57C64 66.3888 56.3888 74 47 74H17C7.61116 74 0 66.3888 0 57V17Z" fill="#F9F9F9"/>
<rect x="1.5" y="1.5" width="61" height="61" rx="8.5" fill="#FAFAFA" stroke="#CFCFCF" stroke-width="3"/>
<g opacity="0.4" filter="url(#filter0_d)">
<path d="M45.5956 25.5775L50.4458 16.004L48.6487 14.9284L45.3618 20.0926L40.6919 17.1263L43.8987 12.0823L42.6427 11.3341C39.5027 10.8932 39.1019 13.1446 39.1019 13.1446C38.7879 16.4115 37.0508 19.3644 31.7329 19.3644C26.4217 19.3644 24.8384 15.7234 24.3707 13.2114C23.9031 10.6927 21.0169 11.441 21.0169 11.441L19.614 12.2226L22.5869 17.3602L17.7968 20.126L14.7905 14.915L13 15.9104C13 15.9104 17.0419 23.6201 17.9705 26.0252C18.9058 28.4236 17.4828 30.1472 17.4828 30.1472L14.3696 34.0621L14.8573 36.4539L22.5469 35.0843L22.627 39.1462L15.6656 40.3822L16.14 42.687L22.5469 41.5446L22.627 45.5999L16.9417 46.6153L17.4828 49.2543C32.0937 54.198 45.8428 49.2543 45.8428 49.2543L46.4106 46.622L40.6986 45.5999L40.7787 41.5446L47.2524 42.7004L47.7401 40.4022L40.6986 39.1462L40.7787 35.0843L48.5819 36.4739L49.1097 34.0287C49.1097 34.0287 47.5531 32.3519 45.8762 30.3009C44.1993 28.2499 45.5956 25.5775 45.5956 25.5775ZM35.1869 46.5886H28.3525V25.484H35.1869V46.5886Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-width="0.5" stroke-miterlimit="10"/>
<path d="M35.1865 25.4839H28.3521V46.5885H35.1865V25.4839Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M22.5872 17.36L17.7971 20.1259L14.7907 14.9149L14.1694 13.8392L18.9529 11.0801L19.6143 12.2225L22.5872 17.36Z" fill="#6B6B6B" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M49.2567 13.9663L48.6487 14.9283L45.3618 20.0926L40.6919 17.1263L43.8987 12.0823L44.5868 11L49.2567 13.9663Z" fill="#6B6B6B" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M22.7957 39.5302L14.8171 40.7766L13.8906 36.8148L22.7038 35.4336L22.7957 39.5302Z" fill="#6B6B6B" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M22.7954 45.9405L16.5518 47.0105L15.6714 42.8712L22.7074 41.6675L22.7954 45.9405Z" fill="#6B6B6B" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M49.5105 36.8298L48.5597 40.7766L40.6055 39.5147L40.696 35.4336L49.5105 36.8298Z" fill="#6B6B6B" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M47.7295 42.8837L46.8145 47.0105L40.6055 45.9349L40.6926 41.6675L47.7295 42.8837Z" fill="#6B6B6B" stroke="#6B6B6B" stroke-miterlimit="10"/>
</g>
<defs>
<filter id="filter0_d" x="12.6655" y="10.3101" width="40.1088" height="45.3914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="2" dy="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

const pantsSlot = `
<svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 17C0 7.61116 7.61116 0 17 0H47C56.3888 0 64 7.61116 64 17V57C64 66.3888 56.3888 74 47 74H17C7.61116 74 0 66.3888 0 57V17Z" fill="#F9F9F9"/>
<rect x="1.5" y="1.5" width="61" height="61" rx="8.5" fill="#FAFAFE" stroke="#CFCFCF" stroke-width="3"/>
<g opacity="0.4" filter="url(#filter0_d)">
<path d="M49.0636 49.5627L33.1978 50.4063L32.0942 35.5458C32.052 34.9623 31.1874 34.9623 31.1452 35.5458L30.0415 50.4063L14.1758 49.5627L14.6749 40.2837L15.42 26.1824L16.0175 14.8647H47.2218L47.8193 26.1753L48.5645 40.2767L49.0636 49.5627Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-width="0.5" stroke-miterlimit="10"/>
<path d="M48.0794 16.376H15.1177V20.4039H48.0794V16.376Z" fill="#6B6B6B" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M22.9982 14H19.856V22.2457H22.9982V14Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M43.735 14H40.5928V22.2457H43.735V14Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M33.5846 22.2457H30.2807C29.0576 22.2457 28.0664 21.2545 28.0664 20.0314V16.2143C28.0664 14.9912 29.0576 14 30.2807 14H33.5846C34.8078 14 35.7989 14.9912 35.7989 16.2143V20.0384C35.7989 21.2545 34.8078 22.2457 33.5846 22.2457Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M20.8046 32.3541L20.6078 34.8988C20.3758 38.0059 17.4234 40.3889 14 40.2835L14.8295 26.1821C14.8365 26.1821 14.8365 26.1821 14.8435 26.1821C18.3724 26.4 21.0507 29.1767 20.8046 32.3541Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M14.6396 29.4932L18.4145 30.0907" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M14.499 33.2324L18.4145 33.7175" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M14.2178 36.6631L17.4162 37.1552" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M49.2531 40.2761C45.7313 40.4941 42.6523 38.0759 42.4133 34.8985L42.2165 32.3538C41.9775 29.1764 44.6558 26.3998 48.1776 26.1818C48.2619 26.1748 48.3463 26.1748 48.4236 26.1748L49.2531 40.2761Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M48.6623 29.4927L44.8804 30.0902" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M48.8029 33.2324L44.8804 33.7175" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M49.0772 36.6631L45.8857 37.1552" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M33.3734 22.2456H30.9131V31.855C32.2698 31.855 33.3734 30.7584 33.3734 29.3947V22.2456Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
</g>
<defs>
<filter id="filter0_d" x="13.4707" y="13.5" width="39.3107" height="41.1689" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="3" dy="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

const glovesSlot = `
<svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 17C0 7.61116 7.61116 0 17 0H47C56.3888 0 64 7.61116 64 17V57C64 66.3888 56.3888 74 47 74H17C7.61116 74 0 66.3888 0 57V17Z" fill="#F9F9F9"/>
<rect x="1.5" y="1.5" width="61" height="61" rx="8.5" fill="#FAFAFA" stroke="#CFCFCF" stroke-width="3"/>
<g opacity="0.4" filter="url(#filter0_d)">
<path d="M47.8589 16.3091L45.5968 27.4125L45.0589 27.8125C37.9968 28.1711 37.1279 33.7573 37.1279 33.7573L36.2589 38.047L29.3072 36.6263C27.2383 34.2539 27.9141 30.3642 27.9141 30.3642L31.0176 15.1781C31.2245 14.1712 32.2038 13.5367 33.1969 13.7298C34.2038 13.9367 34.8382 14.916 34.6451 15.9091L35.3072 12.654C35.5417 11.4816 36.6865 10.7092 37.8589 10.9574C39.0313 11.2057 39.8037 12.3505 39.5555 13.5229L39.9279 11.7298C40.1623 10.5574 41.3072 9.79882 42.4796 10.0471C43.652 10.2954 44.4244 11.4264 44.1761 12.5988L43.5968 15.454C43.8313 14.2816 44.9761 13.5229 46.1485 13.7712C47.3209 14.0195 48.1071 15.1367 47.8589 16.3091Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M52.0522 28.6535L46.6729 32.9707C46.6729 32.9707 45.8177 37.619 41.5833 39.1224L36.2729 38.0328L37.1419 33.7431C37.1419 33.7431 38.0109 28.1569 45.0729 27.7983L45.6108 27.3983L49.0729 24.7639C50.1349 23.9363 51.666 24.1294 52.4936 25.1914C52.9487 25.7707 53.0867 26.5018 52.9487 27.1776C52.8246 27.7707 52.5211 28.2811 52.0522 28.6535Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M34.6449 15.9092L33.4587 21.716" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M39.5687 13.5229L37.7205 22.585" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M43.6111 15.4399L41.9697 23.4537" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M39.2522 46.1299L28.7695 43.9919C28.2592 43.8954 27.942 43.3988 28.0385 42.8885L29.3213 36.6265L41.6246 39.1368L40.3419 45.3988C40.2453 45.9092 39.7626 46.2264 39.2522 46.1299Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M32.3279 21.688L43.514 23.9638" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M12.011 21.8124L13.6524 37.233C13.6524 37.233 14.1903 41.1365 16.88 42.7778L29.3213 41.4537C32.9075 38.7365 32.3006 34.0469 32.3006 34.0469L36.135 28.2952C36.4661 27.7986 36.604 27.2193 36.5488 26.6538C36.4799 25.9641 36.1212 25.3159 35.5143 24.8883C34.4109 24.1159 32.8799 24.4055 32.1213 25.509L29.6109 29.0676L28.4109 17.7987C28.2868 16.5987 27.2109 15.7435 26.0109 15.8814C24.811 16.0194 23.9558 17.0676 24.0799 18.2676L23.7765 15.3711C23.6523 14.1849 22.5765 13.3159 21.3765 13.4539C20.1903 13.578 19.3213 14.6401 19.4593 15.84L19.6524 17.6607C19.5282 16.4607 18.4524 15.5918 17.2524 15.7297C16.0524 15.8676 15.1972 16.9297 15.3351 18.1159L15.6938 21.4262C15.5696 20.4055 14.6593 19.6745 13.6524 19.7849C12.6317 19.8952 11.9007 20.8055 12.011 21.8124Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M15.6938 21.4268L16.3145 27.3164" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.6526 17.6611L20.6457 26.8611" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.094 18.2681L24.963 26.3922" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8801 42.7784L17.556 49.1232C17.6112 49.6335 18.0801 50.0059 18.5905 49.9507L29.2249 48.8197C29.749 48.7645 30.1076 48.2956 30.0525 47.7852L29.3766 41.4404L16.8801 42.7784Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M23.3354 42.1021C21.3216 42.3227 19.8733 44.1158 20.0802 46.1296C20.3009 48.1434 22.094 49.5917 24.1078 49.3848" fill="#A8A8A8"/>
<path d="M23.3354 42.1021C21.3216 42.3227 19.8733 44.1158 20.0802 46.1296C20.3009 48.1434 22.094 49.5917 24.1078 49.3848" stroke="#6B6B6B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d" x="11.5" y="9.5" width="44.9997" height="44.9563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="3" dy="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

const bootsSlot = `
<svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 17C0 7.61116 7.61116 0 17 0H47C56.3888 0 64 7.61116 64 17V57C64 66.3888 56.3888 74 47 74H17C7.61116 74 0 66.3888 0 57V17Z" fill="#F9F9F9"/>
<rect x="1.5" y="1.5" width="61" height="61" rx="8.5" fill="#FAFAFA" stroke="#CFCFCF" stroke-width="3"/>
<g opacity="0.4" filter="url(#filter0_d)">
<path d="M44.9676 36.6227C42.5794 38.8565 41.8308 41.5061 41.6526 43.4547C41.605 43.9063 41.5932 44.2984 41.605 44.6667L28.4875 43.6092C28.4994 43.5854 28.4994 43.5617 28.4875 43.5498C28.3093 41.2923 27.6439 39.1654 25.2794 36.8009C23.2714 34.781 19.7663 34.5434 17.5325 34.6265C18.1503 31.9769 18.483 28.3886 18.3642 25.3706H29.7351V26.4043H32.8244V26.6895L37.9692 33.8186L44.9676 36.6227Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M28.4879 43.5499L21.9767 43.5975H17.1645C17.1645 43.5975 16.8318 37.5496 17.4853 34.8168C17.5091 34.7574 17.521 34.698 17.5328 34.6267C19.7666 34.5435 23.2718 34.7812 25.2798 36.8011C27.6443 39.1655 28.3097 41.2805 28.4879 43.5499Z" fill="#C1C1C1" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M28.4876 43.5503C28.4994 43.5622 28.4994 43.5859 28.4876 43.6097L28.3569 43.5978H21.9763L28.4876 43.5503Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M32.8366 14V19.1805H29.7474V20.5112H18.3765V14H32.8366Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M29.7474 20.5112V25.359H18.3765C18.3765 25.2758 18.3765 25.1927 18.3765 25.1095V20.5112H29.7474Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M18.3765 25.3589V25.1094C18.3765 25.1925 18.3765 25.2757 18.3765 25.3589Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M32.8368 19.1802H29.7476V26.3924H32.8368V19.1802Z" fill="#D6D6D6" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M53 44.667V49.396H49.4117V48.3147H46.8809V49.396H44.5164V48.3147H42.2351V49.396H39.7161V48.3623H37.3516V49.396H35.0228V48.3979H27.8581V49.396H25.5886V48.3623H23.1291V49.396H20.6933V48.3147H18.3764V49.396H16V43.6333L21.9766 43.5977H28.3571L28.4878 43.6095L41.6053 44.667H53Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M51.8118 42.1248V44.6675H41.5934C41.5815 44.3111 41.6053 43.9071 41.6409 43.4556C41.8192 41.507 42.5559 38.8454 44.956 36.6235L49.079 38.287C49.079 38.287 51.7286 39.0831 51.8118 42.1248Z" fill="#C1C1C1" stroke="#6B6B6B" stroke-miterlimit="10"/>
<path d="M28.4876 43.5503C28.4994 43.5622 28.4994 43.5859 28.4876 43.6097L28.3569 43.5978H21.9763L28.4876 43.5503Z" fill="#A8A8A8" stroke="#6B6B6B" stroke-miterlimit="10"/>
</g>
<defs>
<filter id="filter0_d" x="15.5" y="13.5" width="42" height="40.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="4" dy="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

const lockerIcon = `<path d="M56.7636 49.2759L56.3511 49.2798L56.3295 47.0084C56.3139 45.3583 54.8203 44.03 53 44.0473C51.1793 44.0646 49.711 45.4209 49.7266 47.071L49.7482 49.3425L49.3356 49.3464C48.6256 49.3531 48.0549 49.8801 48.061 50.5238L48.1123 55.9289C48.1184 56.5724 48.699 57.0887 49.409 57.0819L56.837 57.0115C57.547 57.0047 58.1179 56.4776 58.1118 55.8341L58.0605 50.4289C58.0544 49.7852 57.4737 49.2692 56.7636 49.2759ZM50.8817 47.0601C50.8716 45.9873 51.8263 45.1054 53.0099 45.0942C54.1931 45.083 55.1642 45.9466 55.1744 47.0193L55.1959 49.2908L50.9033 49.3315L50.8817 47.0601ZM53.7437 53.1137L53.7575 54.5686C53.7606 54.8978 53.4688 55.1674 53.1053 55.1708C52.742 55.1743 52.4451 54.9103 52.442 54.581L52.4282 53.1262C52.1183 52.9386 51.9132 52.6198 51.9097 52.2565C51.9042 51.6716 52.4226 51.1928 53.0675 51.1867C53.7124 51.1805 54.2398 51.6497 54.2454 52.2344C54.2488 52.5976 54.0497 52.9199 53.7437 53.1137Z" fill="#979799"/>`;

const getXmlStringFromIcon = (icon: string, active: boolean): string => {
  let iconSlot;
  switch (icon) {
    case "LifeInsurance":
      iconSlot = chestSlot;
      break;
    case "IncomeProtection":
      iconSlot = pantsSlot;
      break;
    case "CriticalIllness":
      iconSlot = glovesSlot;
      break;
    case "TravelInsurance":
      iconSlot = bootsSlot;
      break;
    default:
      iconSlot = null;
      break;
  }
  if (iconSlot && !active) {
    return addLockerIconToSVG(iconSlot);
  }
  return iconSlot;
};

const addLockerIconToSVG = (icon: string): string => {
  return icon.replace("</svg>", lockerIcon + "</svg>");
};

export default function PersonalProductsSVG({ icon, active }: IPersonalProductsIconProps) {
  const iconXml = getXmlStringFromIcon(icon, active);

  if (!iconXml) {
    return null;
  }

  return <SvgXml xml={iconXml} />;
}

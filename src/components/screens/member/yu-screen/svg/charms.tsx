import React from "react";
import { SvgXml } from "react-native-svg";
import { Style } from "@styles";
import { StyleProp, ViewStyle, TextStyle, View, Text } from "react-native";

interface ICharmsIconProps {
  active: boolean;
  icon: string;
  xmlStyle?: StyleProp<ViewStyle>;
  rateViewStyle: StyleProp<ViewStyle>;
  rateTextStyle: StyleProp<TextStyle>;
  earnRate: number;
  showEarnRate?: boolean;
  height?: string;
  width?: string;
}

const alphaActive = `<svg width="77" height="77" viewBox="0 0 77 77" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.2923 36.3538C23.2923 45.218 28.9586 52.7587 36.8667 55.5514C35.9001 55.6693 35.2139 56.5484 35.2139 57.58C35.2139 58.0299 35.3589 58.4362 35.5984 58.7654C28.3598 59.7309 23.2923 61.9592 23.2923 64.5538C23.2923 68.0332 32.405 70.8538 43.6462 70.8538C54.8873 70.8538 64 68.0332 64 64.5538C64 61.9061 58.7229 59.6398 51.2464 58.7077C51.4673 58.378 51.5939 57.986 51.5939 57.58C51.5939 56.6447 50.9671 55.8975 50.1672 55.6406C58.2099 52.9222 64 45.3142 64 36.3538C64 25.1127 54.8872 16 43.6461 16C32.405 16 23.2923 25.1127 23.2923 36.3538Z" fill="#E4FCF4"/>
<path d="M39.3814 9.11035H48.1045V13.0842H39.3814V9.11035Z" fill="#1CD697"/>
<path d="M43.6462 51.8542C32.405 51.8542 23.2923 42.7414 23.2923 31.5003C23.2923 20.2592 32.405 11.1465 43.6462 11.1465C54.8873 11.1465 64 20.2592 64 31.5003C64 42.7414 54.8873 51.8542 43.6462 51.8542Z" fill="#80F6CD"/>
<path d="M43.6461 47.5901C34.8138 47.5901 27.6538 40.4301 27.6538 31.5978C27.6538 22.7655 34.8138 15.6055 43.6461 15.6055C52.4784 15.6055 59.6384 22.7655 59.6384 31.5978C59.6384 40.4301 52.4784 47.5901 43.6461 47.5901Z" fill="white"/>
<path d="M43.6461 47.585L43.6461 15.6003L43.5492 15.6003C34.7292 15.6003 27.5569 22.7727 27.5569 31.5927C27.5569 40.4127 34.7292 47.585 43.5492 47.585L43.6461 47.585Z" fill="#D8FFF1"/>
<path d="M58.0876 31.5967H54.4046" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.7908 31.5H29.1077" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 21.501L51.3573 24.0773" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.3574 21.501L36.0001 24.0773" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 41.0781L51.3573 38.5018" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.3574 41.0781L36.0001 38.5018" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.6462 17.0586V20.8386" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.5493 42.3555V46.0385" stroke="#87EECA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.6463 33.1484C42.6827 33.1484 41.9016 32.3673 41.9016 31.4038C41.9016 30.4403 42.6827 29.6592 43.6463 29.6592C44.6098 29.6592 45.3909 30.4403 45.3909 31.4038C45.3909 32.3673 44.6098 33.1484 43.6463 33.1484Z" fill="#1CD697"/>
<path d="M43.5494 22.6807V31.5007H49.8494" stroke="#1CD697" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.8309 9.11128H49.6555C49.6555 5.91282 47.0386 3.2959 43.8401 3.2959H43.5494C40.3509 3.2959 37.8309 5.91282 37.8309 9.11128Z" stroke="#1CD697" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.7386 5.42772C38.897 3.58618 37.734 2.42311 34.6324 3.29541C30.8524 4.36157 30.5617 7.56003 24.5524 13.0846C16.5078 20.5477 13.6971 19.5738 11.6617 23.8385C7.9786 31.6892 22.614 35.1785 20.8694 47.5846C19.4155 57.7615 10.4986 56.5015 11.6617 62.7046C13.3094 71.6215 34.2448 78.7938 49.9463 72.7846" stroke="#FFD600" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.214 52.7266C35.214 53.8897 36.1832 54.762 37.2494 54.762H49.5586C50.7217 54.762 51.594 53.7928 51.594 52.7266C51.594 51.5636 50.6248 50.6913 49.5586 50.6913H37.2494C36.0863 50.5943 35.214 51.5636 35.214 52.7266Z" fill="#1CD697"/>
<path d="M43.6462 66.0004C32.405 66.0004 23.2923 63.1798 23.2923 59.7004C23.2923 56.221 32.405 53.4004 43.6462 53.4004C54.8873 53.4004 64 56.221 64 59.7004C64 63.1798 54.8873 66.0004 43.6462 66.0004Z" fill="#80F6CD"/>
<path d="M28.1384 58.7312C28.1384 60.185 32.3678 61.445 38.1949 61.9296C39.8867 62.0266 41.7664 62.1235 43.6461 62.1235C52.1988 62.1235 59.1538 60.5727 59.1538 58.7312C59.1538 58.1496 58.4959 57.5681 57.2741 57.0835C54.6425 56.0173 49.4732 55.3389 43.6461 55.3389C35.0934 55.3389 28.1384 56.8896 28.1384 58.7312Z" fill="#CAF8E8"/>
<path d="M36.3152 60.282C36.3152 60.8635 36.9731 61.445 38.1949 61.9296C39.8867 62.0266 41.7664 62.1235 43.6461 62.1235C52.1988 62.1235 59.1538 60.5727 59.1538 58.7312C59.1538 58.1496 58.4959 57.5681 57.2741 57.0835C55.5823 56.9866 53.7966 56.8896 51.9169 56.8896C43.2702 56.8896 36.3152 58.4404 36.3152 60.282Z" fill="white"/>
</svg>
`;

const alphaNonActive = `
<svg width="77" height="77" viewBox="0 0 77 77" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.7077 36.3538C53.7077 45.218 48.0414 52.7587 40.1333 55.5514C41.0999 55.6693 41.7861 56.5484 41.7861 57.58C41.7861 58.0299 41.6411 58.4362 41.4016 58.7654C48.6402 59.7309 53.7077 61.9592 53.7077 64.5538C53.7077 68.0332 44.595 70.8538 33.3538 70.8538C22.1127 70.8538 13 68.0332 13 64.5538C13 61.9061 18.2771 59.6398 25.7536 58.7077C25.5327 58.378 25.4061 57.986 25.4061 57.58C25.4061 56.6447 26.0329 55.8975 26.8328 55.6406C18.7901 52.9222 13 45.3142 13 36.3538C13 25.1127 22.1128 16 33.3539 16C44.595 16 53.7077 25.1127 53.7077 36.3538Z" fill="#F2F2F2"/>
<path d="M37.6186 9.11084H28.8955V13.0847H37.6186V9.11084Z" fill="#878787"/>
<path d="M33.3538 51.8537C44.595 51.8537 53.7077 42.741 53.7077 31.4998C53.7077 20.2587 44.595 11.146 33.3538 11.146C22.1127 11.146 13 20.2587 13 31.4998C13 42.741 22.1127 51.8537 33.3538 51.8537Z" fill="#C0C0C0"/>
<path d="M33.3539 47.5891C42.1862 47.5891 49.3462 40.4291 49.3462 31.5968C49.3462 22.7645 42.1862 15.6045 33.3539 15.6045C24.5216 15.6045 17.3616 22.7645 17.3616 31.5968C17.3616 40.4291 24.5216 47.5891 33.3539 47.5891Z" fill="#F5F5F5"/>
<path d="M33.3539 47.5845L33.3539 15.5999L33.4508 15.5999C42.2708 15.5999 49.4431 22.7722 49.4431 31.5922C49.4431 40.4122 42.2708 47.5845 33.4508 47.5845L33.3539 47.5845Z" fill="#CDCDCD" fill-opacity="0.36"/>
<path d="M18.9124 31.5967H22.5954" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.2092 31.5H47.8923" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 21.5015L25.6427 24.0778" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.6426 21.5015L40.9999 24.0778" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 41.0776L25.6427 38.5013" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.6426 41.0776L40.9999 38.5013" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.3538 17.0581V20.8381" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.4507 42.355V46.0381" stroke="#999999" stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.3537 33.1474C34.3173 33.1474 35.0984 32.3663 35.0984 31.4028C35.0984 30.4393 34.3173 29.6582 33.3537 29.6582C32.3902 29.6582 31.6091 30.4393 31.6091 31.4028C31.6091 32.3663 32.3902 33.1474 33.3537 33.1474Z" fill="#9A9A9A"/>
<path d="M33.4506 22.6797V31.4997H27.1506" stroke="#9A9A9A" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.1691 9.1108H27.3445C27.3445 5.91233 29.9614 3.29541 33.1599 3.29541H33.4506C36.6491 3.29541 39.1691 5.91233 39.1691 9.1108Z" stroke="#878787" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.2614 5.42772C38.103 3.58618 39.266 2.42311 42.3676 3.29541C46.1476 4.36157 46.4383 7.56003 52.4476 13.0846C60.4922 20.5477 63.3029 19.5738 65.3383 23.8385C69.0214 31.6892 54.386 35.1785 56.1306 47.5846C57.5845 57.7615 66.5014 56.5015 65.3383 62.7046C63.6906 71.6215 42.7552 78.7938 27.0537 72.7846" stroke="#CFCFCF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.786 52.7262C41.786 53.8892 40.8168 54.7615 39.7506 54.7615H27.4414C26.2783 54.7615 25.406 53.7923 25.406 52.7262C25.406 51.5631 26.3752 50.6908 27.4414 50.6908H39.7506C40.9137 50.5939 41.786 51.5631 41.786 52.7262Z" fill="#878787"/>
<path d="M33.3538 65.9999C44.595 65.9999 53.7077 63.1793 53.7077 59.6999C53.7077 56.2205 44.595 53.3999 33.3538 53.3999C22.1127 53.3999 13 56.2205 13 59.6999C13 63.1793 22.1127 65.9999 33.3538 65.9999Z" fill="#C0C0C0"/>
<path d="M48.8616 58.7307C48.8616 60.1845 44.6322 61.4445 38.8051 61.9291C37.1133 62.0261 35.2336 62.123 33.3539 62.123C24.8012 62.123 17.8462 60.5722 17.8462 58.7307C17.8462 58.1491 18.5041 57.5676 19.7259 57.083C22.3575 56.0168 27.5268 55.3384 33.3539 55.3384C41.9066 55.3384 48.8616 56.8891 48.8616 58.7307Z" fill="#E7E7E7"/>
<path d="M40.6848 60.2815C40.6848 60.863 40.0269 61.4445 38.8051 61.9292C37.1133 62.0261 35.2336 62.123 33.3539 62.123C24.8012 62.123 17.8462 60.5722 17.8462 58.7307C17.8462 58.1492 18.5041 57.5676 19.7259 57.083C21.4177 56.9861 23.2034 56.8892 25.0831 56.8892C33.7298 56.8892 40.6848 58.4399 40.6848 60.2815Z" fill="#F5F5F5"/>
</svg>
`;

const getXmlStringFromIcon = (icon: string, active: boolean): string => {
  switch (icon) {
    case "Alpha":
      return active ? alphaActive : alphaNonActive;
    default:
      return null;
  }
};

export default (props: ICharmsIconProps) => {
  const {
    rateViewStyle,
    rateTextStyle,
    earnRate,
    icon,
    active,
    showEarnRate = true,
    height = String(Style.SCALE_UP_AND_DOWN(95)),
    width = String(Style.SCALE_UP_AND_DOWN(95)),
  } = props;
  const iconXml = getXmlStringFromIcon(icon, active);

  return (
    <View>
      <SvgXml xml={iconXml} width={width} height={height} />
      {showEarnRate ? (
        <View style={rateViewStyle}>
          <Text style={rateTextStyle}>{`${earnRate}x`}</Text>
        </View>
      ) : null}
    </View>
  );
};

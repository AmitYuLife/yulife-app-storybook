import { Colours, Style } from "@styles";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  colour?: string;
}

export const ExclamationIcon = memo(({ colour = Colours.status.er300 }: Props) => (
  <Svg width={Style.adjust(26)} height={Style.adjust(26)} viewBox="0 0 26 26" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM13.0092 15.5971C12.4595 15.5971 12.0197 15.1627 12.0197 14.6198L12.0197 6.8864C12.0197 6.34345 12.4595 5.90909 13.0092 5.90909C13.5588 5.90909 13.9986 6.34345 13.9986 6.8864L13.9986 14.6198C13.9986 15.1627 13.5588 15.5971 13.0092 15.5971ZM11.8182 18.8964C11.8182 18.1906 12.2396 17.7562 13.0092 17.7562C13.7604 17.7562 14.1818 18.1906 14.1818 18.8964C14.1818 19.7289 13.7604 20.0909 13.0092 20.0909C12.2396 20.0909 11.8182 19.7289 11.8182 18.8964Z"
      fill={colour}
    />
  </Svg>
));

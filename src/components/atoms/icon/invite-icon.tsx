import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  colour?: string;
  size?: number;
}

export const InviteIcon = memo(({ colour, size = 24 }: IProps) => (
  <Svg width={Style.adjust(size)} height={Style.adjust(size)} viewBox="0 0 24 24" fill="none">
    <Path
      fill={colour}
      fillRule="evenodd"
      d="M3.772 8.4A2 2 0 0 0 3 9.977V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.978a2 2 0 0 0-.772-1.579l-6.386-4.966a3 3 0 0 0-3.684 0L3.772 8.399Zm.39 2.137a.1.1 0 0 0-.162.079V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.384a.1.1 0 0 0-.161-.08l-6.304 4.904a2.5 2.5 0 0 1-3.07 0l-6.304-4.903Zm15.515-1.141a.1.1 0 0 0 0-.158l-6.45-5.016a2 2 0 0 0-2.455 0L4.323 9.238a.1.1 0 0 0 0 .158l6.756 5.254a1.5 1.5 0 0 0 1.842 0l6.756-5.254Z"
      clipRule="evenodd"
    />
    <Path
      fill={colour}
      fillRule="evenodd"
      d="M8.854 15.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0ZM15.146 15.146a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0ZM12.184 7.045l-.03.03-.155.153-.153-.154a1.96 1.96 0 1 0-2.772 2.772L12 12.772l2.926-2.926a1.96 1.96 0 0 0-2.742-2.8ZM12 11.358l2.219-2.22a.96.96 0 0 0-1.358-1.357v.001l-.865.861-.858-.863A.96.96 0 0 0 9.781 9.14L12 11.358Z"
      clipRule="evenodd"
    />
  </Svg>
));

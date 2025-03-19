import Svg, { Path } from "react-native-svg";
import { memo } from "react";
import { Style } from "@styles";

interface IVoucherIconProps {
  size?: number;
}

export const VoucherIcon = memo(({ size = 21 }: IVoucherIconProps) => {
  return (
    <Svg width={Style.adjust(size)} height={Style.adjust(size * 0.8)} viewBox="0 0 21 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.48 0C1.388 0 .5.91.5 2.03V5.4a1.5 1.5 0 110 3v2.77c0 1.12.887 2.03 1.98 2.03h14.04c1.093 0 1.98-.91 1.98-2.03V8.4a1.5 1.5 0 010-3V2.03C18.5.91 17.613 0 16.52 0H2.48zm8.82 8.1a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"
        fill="#956AFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.48 3C3.388 3 2.5 3.91 2.5 5.03V8.4a1.5 1.5 0 110 3v2.57c0 1.12.887 2.03 1.98 2.03H18.5c1.094 0 1.98-.91 1.98-2.03l.02-2.57a1.5 1.5 0 010-3V5.03c0-1.12-.887-2.03-1.98-2.03H4.48zm8.82 8.1a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"
        fill="#C7B4FD"
      />
      <Path fill="#fff" d="M6.5 3H7.5V16H6.5z" />
    </Svg>
  );
});

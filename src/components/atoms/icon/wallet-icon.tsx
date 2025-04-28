import Svg, { Path } from "react-native-svg";
import { memo } from "react";
import { Style } from "@styles";

interface IWalletIconProps {
  size?: number;
}

export const WalletIcon = memo(({ size = 16 }: IWalletIconProps) => {
  return (
    <Svg width={Style.adjust(size)} height={Style.adjust(size)} viewBox="0 0 21 21" fill="none">
      <Path
        d="M18.14 3.632c.44.203.63.723.427 1.162l-6.252 13.498a.875.875 0 01-1.162.426l-6.749-3.126a.875.875 0 01-.426-1.161L10.23.932a.875.875 0 011.162-.426l6.749 3.126z"
        fill="#FFD600"
      />
      <Path
        d="M12.63 2.402c.48.054.826.487.772.968l-1.65 14.676a.875.875 0 01-.968.772l-7.39-.832a.875.875 0 01-.772-.967l1.65-14.676a.875.875 0 01.968-.772l7.39.831z"
        fill="#956AFF"
      />
      <Path d="M0 8a2 2 0 012-2h15.5a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V8z" fill="#E59D40" />
      <Path
        d="M14.5 13.375c0-1.588 1.395-2.875 3.115-2.875h2.347c.573 0 1.038.43 1.038.958v4.084c0 .529-.465.958-1.038.958h-2.347c-1.72 0-3.115-1.287-3.115-2.875v-.25z"
        fill="#F0BF58"
      />
      <Path d="M18.5 13.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#D67A4D" />
    </Svg>
  );
});

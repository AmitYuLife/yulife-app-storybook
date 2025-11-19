import React from "react";
import { Colours, Style } from "@styles/index";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

type IType = "full" | "logo-only" | "text-only" | "inverted";
export interface IYuLifeLogoProps {
  type?: IType;
  scale?: number;
  colour?: string;
  onLayout?: () => void;
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}

export const Logo = ({
  type,
  scale = 1,
  colour = Colours.darkHotPink,
  onLayout = null,
  style = {},
  width,
  height,
}: IYuLifeLogoProps) => {
  switch (type) {
    case "full":
      return (
        <Svg
          width={String(width || Style.SCALE_UP_AND_DOWN(228 * scale))}
          height={String(height || Style.SCALE_UP_AND_DOWN(120 * scale))}
          viewBox="0 0 228 120"
          style={style}
        >
          <Path
            /*tslint:disable-next-line*/
            d="M161.22 36.9601C158.7 36.9601 156.72 35.1001 156.72 32.5201C156.72 30.0001 158.7 28.0801 161.22 28.0801C163.74 28.0801 165.72 30.0001 165.72 32.5201C165.72 35.1001 163.74 36.9601 161.22 36.9601ZM157.74 44.3401H164.34V80.6401H157.74V44.3401Z"
            fill={colour}
          />
          <Path
            /*tslint:disable-next-line*/
            d="M181.26 39.6V44.34H192.84V49.8H181.26V80.64H174.72V49.86H169.62V44.4H174.72V39.6C174.72 32.22 180.42 27.3 187.92 27.3C190.02 27.3 192.66 27.66 193.32 27.96L193.02 33.66C192.12 33.3 189.84 33 188.28 33C183.42 33 181.26 36 181.26 39.6Z"
            fill={colour}
          />
          <Path
            /*tslint:disable-next-line*/
            d="M227.04 64.2H199.92C200.46 71.1 204.36 75.48 210.72 75.48C217.08 75.48 219.54 72.12 220.2 69.18H226.8C225.42 75.78 220.38 81.06 210.66 81.06C199.32 81.06 193.2 73.26 193.2 62.64C193.2 51.78 200.4 44.04 210.54 44.04C220.68 44.04 227.04 50.94 227.04 62.64V64.2ZM200.04 59.4H220.38C219.54 52.86 216 49.56 210.54 49.56C205.02 49.56 201.12 53.34 200.04 59.4Z"
            fill={colour}
          />
          <Path
            /*tslint:disable-next-line*/
            d="M150.24 74.3401L149.88 74.4601C148.8 74.8801 147.6 75.2401 146.46 75.2401C144.66 75.2401 141.54 74.4601 141.54 69.2401V28.0801H135.06V69.1801C135.06 77.9401 140.46 81.0001 145.56 81.0001C147.84 81.0001 150.24 80.4001 152.16 79.3201L152.52 79.1401L150.24 74.3401Z"
            fill={colour}
          />
          <Path
            /*tslint:disable-next-line*/
            d="M115.2 0H4.8C2.16 0 0 2.16 0 4.8V115.2C0 117.84 2.16 120 4.8 120H115.2C117.84 120 120 117.84 120 115.2V4.8C120 2.16 117.84 0 115.2 0ZM34.44 97.08H26.82C26.82 97.08 34.38 79.44 35.22 77.34L18.66 37.92H26.58L39.06 68.46L51.54 37.92H59.52L34.44 97.08ZM100.68 63.18C100.68 79.14 90.3 81 82.5 81C70.08 81 64.32 75.36 64.32 63.18V37.92H71.58V63.18C71.58 68.22 72.84 73.98 82.5 73.98C92.16 73.98 93.42 68.22 93.42 63.18V37.92H100.68V63.18Z"
            fill={colour}
          />
        </Svg>
      );
    case "text-only":
      return (
        <Svg
          onLayout={onLayout}
          width={String(Style.SCALE_UP_AND_DOWN(228 * scale))}
          height={String(Style.SCALE_UP_AND_DOWN(120 * scale))}
          viewBox="60 0 228 120"
          style={style}
        >
          <Path
            /*tslint:disable-next-line*/
            d="M161.22 36.9601C158.7 36.9601 156.72 35.1001 156.72 32.5201C156.72 30.0001 158.7 28.0801 161.22 28.0801C163.74 28.0801 165.72 30.0001 165.72 32.5201C165.72 35.1001 163.74 36.9601 161.22 36.9601ZM157.74 44.3401H164.34V80.6401H157.74V44.3401Z"
            fill={colour}
          />
          <Path
            /*tslint:disable-next-line*/
            d="M181.26 39.6V44.34H192.84V49.8H181.26V80.64H174.72V49.86H169.62V44.4H174.72V39.6C174.72 32.22 180.42 27.3 187.92 27.3C190.02 27.3 192.66 27.66 193.32 27.96L193.02 33.66C192.12 33.3 189.84 33 188.28 33C183.42 33 181.26 36 181.26 39.6Z"
            fill={colour}
          />
          <Path
            /*tslint:disable-next-line*/
            d="M227.04 64.2H199.92C200.46 71.1 204.36 75.48 210.72 75.48C217.08 75.48 219.54 72.12 220.2 69.18H226.8C225.42 75.78 220.38 81.06 210.66 81.06C199.32 81.06 193.2 73.26 193.2 62.64C193.2 51.78 200.4 44.04 210.54 44.04C220.68 44.04 227.04 50.94 227.04 62.64V64.2ZM200.04 59.4H220.38C219.54 52.86 216 49.56 210.54 49.56C205.02 49.56 201.12 53.34 200.04 59.4Z"
            fill={colour}
          />
          <Path
            /*tslint:disable-next-line*/
            d="M150.24 74.3401L149.88 74.4601C148.8 74.8801 147.6 75.2401 146.46 75.2401C144.66 75.2401 141.54 74.4601 141.54 69.2401V28.0801H135.06V69.1801C135.06 77.9401 140.46 81.0001 145.56 81.0001C147.84 81.0001 150.24 80.4001 152.16 79.3201L152.52 79.1401L150.24 74.3401Z"
            fill={colour}
          />
        </Svg>
      );
    case "logo-only":
      return (
        <Svg
          width={String(Style.SCALE_UP_AND_DOWN(120 * scale))}
          height={String(Style.SCALE_UP_AND_DOWN(120 * scale))}
          viewBox="0 0 120 120"
          style={style}
        >
          <Path
            /*tslint:disable-next-line*/
            d="M115.2 0H4.8C2.16 0 0 2.16 0 4.8V115.2C0 117.84 2.16 120 4.8 120H115.2C117.84 120 120 117.84 120 115.2V4.8C120 2.16 117.84 0 115.2 0ZM34.44 97.08H26.82C26.82 97.08 34.38 79.44 35.22 77.34L18.66 37.92H26.58L39.06 68.46L51.54 37.92H59.52L34.44 97.08ZM100.68 63.18C100.68 79.14 90.3 81 82.5 81C70.08 81 64.32 75.36 64.32 63.18V37.92H71.58V63.18C71.58 68.22 72.84 73.98 82.5 73.98C92.16 73.98 93.42 68.22 93.42 63.18V37.92H100.68V63.18Z"
            fill={colour}
          />
        </Svg>
      );
    case "inverted":
      return (
        <Svg
          width={Style.adjust(width || 24)}
          height={Style.adjust(height || 24)}
          viewBox="0 0 15 16"
          fill="none"
          style={style}
        >
          <G clipPath="url(#prefix__clip0)">
            <Path
              d="M14.4.5H.6c-.33 0-.6.27-.6.6v13.8c0 .33.27.6.6.6h13.8c.33 0 .6-.27.6-.6V1.1c0-.33-.27-.6-.6-.6zM4.305 12.635h-.952s.945-2.205 1.05-2.467L2.333 5.24h.99l1.56 3.817 1.56-3.817h.997l-3.135 7.395zm8.28-4.237c0 1.995-1.298 2.227-2.273 2.227-1.552 0-2.272-.705-2.272-2.227V5.24h.908v3.158c0 .63.157 1.35 1.364 1.35 1.208 0 1.366-.72 1.366-1.35V5.24h.907v3.158z"
              fill="#fff"
            />
          </G>
          <Defs>
            <ClipPath id="prefix__clip0">
              <Path fill="#fff" transform="translate(0 .5)" d="M0 0h15v15H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    default:
      return (
        <Svg
          width={Style.adjust(width || 26)}
          height={Style.adjust(height || 26)}
          viewBox="0 0 15 16"
          fill="none"
          style={style}
        >
          <G clipPath="url(#prefix__clip0)">
            <Path
              d="M14.4.5H.6c-.33 0-.6.27-.6.6v13.8c0 .33.27.6.6.6h13.8c.33 0 .6-.27.6-.6V1.1c0-.33-.27-.6-.6-.6z"
              fill="#E30D76"
            />
            <Path
              d="M3.352 12.635h.953L7.44 5.24h-.998l-1.56 3.818-1.56-3.818h-.99l2.07 4.928c-.105.262-1.05 2.467-1.05 2.467zM10.312 10.625c.975 0 2.273-.232 2.273-2.227V5.24h-.908v3.158c0 .63-.157 1.35-1.365 1.35-1.207 0-1.365-.72-1.365-1.35V5.24H8.04v3.158c0 1.522.72 2.227 2.272 2.227z"
              fill="#fff"
            />
          </G>
          <Defs>
            <ClipPath id="prefix__clip0">
              <Path fill="#fff" transform="translate(0 .5)" d="M0 0h15v15H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
  }
};

export default Logo;

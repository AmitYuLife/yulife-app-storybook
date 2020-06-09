/* tslint:disable */
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles/index";

interface IProps {
  color?: string;
}

export const BodyColor = ({ color }: IProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(40))}
      width={String(Style.SCALE_UP_AND_DOWN(40))}
      viewBox="0 0 40 40"
    >
      <Path
        d="M35.72,20.88A2.42,2.42,0,0,1,38,23.75c-.47,2.5-3.05,1.86-3.05,1.86C31.72,39,21.47,38.17,21.47,38.17S10.7,38.94,8,25.61c0,0-2.55.73-3.16-1.68,0,0-.47-2.77,2.26-2.85,0,0-3.74-12.28,6.1-17.32S31.36,4.9,32.5,6.53C37.67,12.13,35.72,20.88,35.72,20.88Z"
        fill={color === "#F9BDD9" ? color : "none"}
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2.2167301177978516px"
      />
      <Path
        d="M13.82,10.27a5.94,5.94,0,0,1-11.88,0A5.52,5.52,0,0,1,2,9.56a5.84,5.84,0,0,1,1.43-3.2L4,5.8,7.88,1.89l3.89,3.89h0l.57.57,0,0a5.92,5.92,0,0,1,1.4,3.18A5.53,5.53,0,0,1,13.82,10.27Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652px"
      />
      <Path
        d="M7.66,13a2.57,2.57,0,0,1-2.57-2.57"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652px"
      />
    </Svg>
  );
};

export const HairItem = ({ color }: IProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(40))}
      width={String(Style.SCALE_UP_AND_DOWN(40))}
      viewBox="0 0 40 40"
    >
      <Path
        d="M26,11C23.77,18.83,9.72,18,9.72,18L7.48,24A14.48,14.48,0,0,1,5.11,10.79C8.06.1,26.27-.6,29.07,5.67c0,0,5.73.1,6.1,8.51.36,7-3,9.85-3,9.85s.2-7.59-3.6-11.28a7.66,7.66,0,0,1-2.6,3.8Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.0541200637817383"
      />
      <Path
        d="M33.37,22.29a2.24,2.24,0,1,1-.7,4.39c-3,12.4-12.51,11.63-12.51,11.63S10.19,39,7.65,26.68c0,0-2.37.67-2.93-1.56,0,0-.44-2.57,2.1-2.64"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2.0541200637817383"
      />
    </Svg>
  );
};

export const FacialHairItem = ({ color }: IProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(40))}
      width={String(Style.SCALE_UP_AND_DOWN(40))}
      viewBox="0 0 40 40"
    >
      <Path
        d="M23.14,29.57a5.08,5.08,0,0,1-2.48-.65,3.45,3.45,0,0,1-.41-.25.23.23,0,0,0-.3,0,5.24,5.24,0,0,1-2.09.84,6,6,0,0,1-2.45-.11A6.55,6.55,0,0,1,12,27.19a3.73,3.73,0,0,1-.35-.46.36.36,0,0,1,0-.43.34.34,0,0,1,.39-.14,3.05,3.05,0,0,0,2.41-.41c.39-.21.76-.44,1.14-.66a4.92,4.92,0,0,1,2-.71,3.05,3.05,0,0,1,1.46.25,3.49,3.49,0,0,1,.88.51c.15.12.24.1.38,0a3.65,3.65,0,0,1,1.45-.68,3,3,0,0,1,1.79.14,8.2,8.2,0,0,1,1.56.8,7.22,7.22,0,0,0,1.58.77,2.57,2.57,0,0,0,1.32,0,.5.5,0,0,1,.36,0,.37.37,0,0,1,.16.6,5.21,5.21,0,0,1-.41.52,6.17,6.17,0,0,1-5,2.27Z"
        fill={color}
      />
      <Path
        d="M34.19,20.44a2.41,2.41,0,0,1,2.27,2.86c-.46,2.48-3,1.85-3,1.85-3.22,13.3-13.39,12.48-13.39,12.48S9.38,38.4,6.67,25.15c0,0-2.54.72-3.14-1.67,0,0-.47-2.76,2.25-2.83,0,0-3.72-12.21,6-17.22S29.86,4.56,31,6.18C36.11,11.75,34.19,20.44,34.19,20.44Z"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2.1975901126861572"
      />
      <Path
        d="M34.2,25.85a13.37,13.37,0,0,1-4.35,9.84l-.26.23a14.63,14.63,0,0,1-19,.16l-.21-.19a13.34,13.34,0,0,1-4.58-10c0-1.39,1.85-1.25,2.39,0a14,14,0,0,0,3,4.44,14.59,14.59,0,0,0,1.26,1.1,11.39,11.39,0,0,0,5,2.37C17.75,32.19,18.78,31,20,31s2.2,1.13,2.5,2.66a13.65,13.65,0,0,0,5.18-2.36A15.08,15.08,0,0,0,29,30.17a14.27,14.27,0,0,0,2.87-4.3C32.36,24.6,34.2,24.47,34.2,25.85Z"
        fill={color}
      />
    </Svg>
  );
};

export const EyesItem = ({ color }: IProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(40))}
      width={String(Style.SCALE_UP_AND_DOWN(40))}
      viewBox="0 0 40 40"
    >
      <Path
        d="M4.39,18.52A21.35,21.35,0,0,1,20,11.29a21.35,21.35,0,0,1,15.61,7.23"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652"
      />
      <Path
        d="M26.73,19.29a3.14,3.14,0,1,1-4.56-3.83,7.67,7.67,0,0,0-2.36-.36,7.81,7.81,0,1,0,7.81,7.8A7.71,7.71,0,0,0,26.73,19.29Z"
        fill={color}
        // fill-rule:evenodd"
      />
    </Svg>
  );
};

export const GlassesItem = ({ color }: IProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(40))}
      width={String(Style.SCALE_UP_AND_DOWN(40))}
      viewBox="0 0 40 40"
    >
      <Path
        d="M10.92,26.5A6.5,6.5,0,1,0,4.46,20,6.48,6.48,0,0,0,10.92,26.5Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652"
      />
      <Path
        d="M29,26.5A6.5,6.5,0,1,0,22.52,20,6.48,6.48,0,0,0,29,26.5Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652"
      />
      <Path
        d="M17.37,20.09A3.09,3.09,0,0,1,20,18.59,3.05,3.05,0,0,1,22.52,20"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652"
      />
      <Path
        d="M1.54,19.4H4.46"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652"
      />
      <Path
        d="M35.54,19.4h2.92"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1742300987243652"
      />
    </Svg>
  );
};

export const ColorItem = ({ color }: IProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(40))}
      width={String(Style.SCALE_UP_AND_DOWN(40))}
      viewBox="0 0 40 40"
    >
      <Path
        d="M32.91,22.65A12.91,12.91,0,1,1,7.18,21.12a12.76,12.76,0,0,1,3.11-7l1.21-1.21L20,4.44l8.45,8.45,0,0,1.25,1.25,0,0a12.83,12.83,0,0,1,3.06,6.91A13.13,13.13,0,0,1,32.91,22.65Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.399019956588745px"
      />
      <Path
        d="M20.06,31.82a9.51,9.51,0,0,1-9.51-9.51"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.399019956588745px"
      />
    </Svg>
  );
};

export const SavingItem = ({ color }: IProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(40))}
      width={String(Style.SCALE_UP_AND_DOWN(40))}
      viewBox="0 0 40 40"
    >
      <Path
        d="M20,36.5A16.5,16.5,0,1,0,3.5,20,16.5,16.5,0,0,0,20,36.5ZM11.88,17.78a1.77,1.77,0,0,1,2.56,0l3.46,3.46,6.93-6.92a1.81,1.81,0,1,1,2.56,2.56L19.19,25a1.85,1.85,0,0,1-2.57,0l-4.7-4.7A1.81,1.81,0,0,1,11.88,17.78Z"
        fill={color}
      />
    </Svg>
  );
};

interface INoneProps {
  selected: boolean;
}

export const NoneBodyItem = ({ selected }: INoneProps) => {
  return (
    <Svg
      data-name="Layer 1"
      height={String(Style.SCALE_UP_AND_DOWN(52))}
      width={String(Style.SCALE_UP_AND_DOWN(52))}
      viewBox="0 0 52 52"
    >
      <Path
        d="M26,0A26,26,0,1,0,52,26,26,26,0,0,0,26,0ZM4,26a21.91,21.91,0,0,1,6.88-16l26.66,34.7A22,22,0,0,1,4,26ZM40.74,42.33,14,7.55A22,22,0,0,1,40.74,42.33Z"
        fill={selected ? "#F9BDD9" : "silver"}
      />
    </Svg>
  );
};

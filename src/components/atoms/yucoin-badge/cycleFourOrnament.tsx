import React, { memo } from "react";
import { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Colours } from "@styles";

interface IProps {
  isGrayScale?: boolean;
}
const DEFAULT_COLORS = [
  "#2E936F",
  "#EDB720",
  "#F8CB31",
  "#FEED6A",
  "#FEEA58",
  "#FDE754",
  "#F9DC49",
  "#F4CB36",
  "#F7D84D",
  "#F2C634",
  "#EEBB25",
  "#FCE762",
  "#F4CD3E",
  "#EFBD28",
  "#00A688",
  "#08AB8E",
  "#1EB89D",
  "#42CDB7",
  "#7CEFE0",
  "#74EADA",
  "#5FDECC",
  "#3DCAB3",
  "#22BAA0",
  "#0FAF93",
  "#04A88B",
  "#FDEA66",
  "#FAE25B",
  "#F6D448",
  "#F0C02D",
];

const CycleFourOrnament = ({ isGrayScale }: IProps) => {
  const colors = isGrayScale ? Colours.toGrayScaleArray(DEFAULT_COLORS) : DEFAULT_COLORS;
  return (
    <>
      <Path
        d="M164.513 80.305a3.665 3.665 0 100-7.33 3.665 3.665 0 000 7.33z"
        fill="url(#cycleFourOrnament__paint0_linear)"
      />
      <Path
        d="M35.487 80.305a3.665 3.665 0 110-7.33 3.665 3.665 0 010 7.33z"
        fill="url(#cycleFourOrnament__paint1_linear)"
      />
      <Path
        d="M162.68 142.277s-1.332-5.414-4.664-5.248c-3.332.167-6.414 3.832-6.414 3.832s4.415 4.998-1.749 9.829c-.084 0 11.828-2.832 12.827-8.413zM37.32 142.277s1.332-5.414 4.664-5.248c3.332.167 6.414 3.832 6.414 3.832s-4.415 4.998 1.75 9.829c.082 0-11.829-2.832-12.828-8.413z"
        fill={colors[0]}
      />
      <Path
        d="M146.688 63.73s-2.499 9.83 4.331 14.327c6.83 4.498 11.745 4.248 11.745 4.248L146.688 63.73z"
        fill={colors[1]}
      />
      <Path
        d="M146.688 63.73s6.33.916 10.745 4.164c4.415 3.165 6.33 9.413 5.248 14.41.083 0-17.659-3.915-15.993-18.575z"
        fill="url(#cycleFourOrnament__paint2_linear)"
      />
      <Path d="M148.521 65.812s9.079 6.663 12.494 14.16c0 0-8.579-8.33-12.494-14.16z" fill={colors[2]} />
      <Path
        d="M53.312 63.73s2.5 9.83-4.331 14.327c-6.83 4.498-11.745 4.248-11.745 4.248L53.312 63.73z"
        fill={colors[1]}
      />
      <Path
        d="M53.312 63.73s-6.33.916-10.745 4.164c-4.415 3.165-6.33 9.413-5.248 14.41-.083 0 17.66-3.915 15.993-18.575z"
        fill="url(#cycleFourOrnament__paint3_linear)"
      />
      <Path d="M51.48 65.812s-9.08 6.663-12.495 14.16c0 0 8.58-8.33 12.495-14.16z" fill={colors[2]} />
      <Path
        d="M163.013 83.053a2.249 2.249 0 100-4.498 2.249 2.249 0 000 4.498z"
        fill="url(#cycleFourOrnament__paint4_linear)"
      />
      <Path
        d="M36.987 83.053a2.249 2.249 0 110-4.498 2.249 2.249 0 010 4.498z"
        fill="url(#cycleFourOrnament__paint5_linear)"
      />
      <Path
        d="M186.598 100.806s-2.985 12.67-7.629 15.027c-8.867 4.443-15.206 1.281-19.84 3.98l27.469-19.007z"
        fill={colors[1]}
      />
      <Path
        d="M186.597 100.805s-5.609 13.771-13.96 15.204c-8.349 1.518-8.701 1.185-13.509 3.803.003.085-1.591-20.164 27.469-19.007z"
        fill="url(#cycleFourOrnament__paint6_linear)"
      />
      <Path
        d="M183.814 102.338s-16.694 3.207-22.132 13.892c.002.085 11.535-10.085 22.132-13.892z"
        fill="url(#cycleFourOrnament__paint7_linear)"
      />
      <Path
        d="M13.402 100.806s2.986 12.67 7.63 15.027c8.866 4.443 15.205 1.281 19.84 3.98l-27.47-19.007z"
        fill={colors[1]}
      />
      <Path
        d="M13.403 100.805s5.609 13.771 13.96 15.204c8.35 1.518 8.701 1.185 13.509 3.803-.003.085 1.591-20.164-27.47-19.007z"
        fill="url(#cycleFourOrnament__paint8_linear)"
      />
      <Path
        d="M16.186 102.338s16.694 3.207 22.132 13.892c-.003.085-11.535-10.085-22.132-13.892z"
        fill="url(#cycleFourOrnament__paint9_linear)"
      />
      <Path
        d="M170.385 108.787a3.082 3.082 0 100-6.164 3.082 3.082 0 000 6.164z"
        fill="url(#cycleFourOrnament__paint10_linear)"
      />
      <Path
        d="M30.332 108.787a3.082 3.082 0 110-6.164 3.082 3.082 0 010 6.164z"
        fill="url(#cycleFourOrnament__paint11_linear)"
      />
      <Path
        d="M181.792 112.765s-1.956 6.169-17.386 5.312c-8.693-.483-9.659 10.142-10.142 11.591-.483 1.449-1.449 8.21-1.449 8.21s2.061-1.781 12.557-6.279c15.937-3.863 16.42-4.829 16.42-18.834z"
        fill="url(#cycleFourOrnament__paint12_linear)"
      />
      <Path
        d="M18.208 112.765s1.956 6.169 17.386 5.312c8.693-.483 9.66 10.142 10.142 11.591.483 1.449 1.449 8.21 1.449 8.21s-2.061-1.781-12.556-6.279c-15.938-3.863-16.42-4.829-16.42-18.834z"
        fill="url(#cycleFourOrnament__paint13_linear)"
      />
      <Path
        d="M162.681 142.278s-2 5.664-10.163 6.747c-6.747.916-10.495-1.916-14.327 4.248 0 0-1.332 3.915-1.082 6.913 2.582-2.915 14.826.667 20.074-3.498 4.248-3.165 6.414-6.914 5.498-14.41z"
        fill="url(#cycleFourOrnament__paint14_linear)"
      />
      <Path
        d="M37.32 142.278s1.999 5.664 10.162 6.747c6.747.916 10.495-1.916 14.327 4.248 0 0 1.332 3.915 1.082 6.913-2.582-2.915-14.826.667-20.074-3.498-4.248-3.165-6.414-6.914-5.498-14.41z"
        fill="url(#cycleFourOrnament__paint15_linear)"
      />
      <Path
        d="M180.256 131.948s-2.332 10.912-10.079 13.411c-7.746 2.582-9.745-1.083-21.906 1.082.083.084 12.827-14.576 31.985-14.493z"
        fill={colors[1]}
      />
      <Path
        d="M180.258 131.948s-5.664 11.745-14.41 11.578c-8.746-.167-12.661-.5-17.492 2.999 0 0 2.499-21.574 31.902-14.577z"
        fill="url(#cycleFourOrnament__paint16_linear)"
      />
      <Path
        d="M177.341 132.864c-10.745 5.164-14.66-.916-24.323 8.08 8.746-5.914 16.326-1.25 24.323-8.08z"
        fill={colors[2]}
      />
      <Path
        d="M19.744 131.948s2.332 10.912 10.079 13.411c7.746 2.582 9.745-1.083 21.906 1.082-.083.084-12.827-14.576-31.985-14.493z"
        fill={colors[1]}
      />
      <Path
        d="M19.74 131.948s5.665 11.745 14.411 11.578c8.746-.167 12.661-.5 17.492 2.999 0 0-2.499-21.574-31.902-14.577z"
        fill="url(#cycleFourOrnament__paint17_linear)"
      />
      <Path
        d="M22.659 132.864c10.745 5.164 14.66-.916 24.322 8.08-8.746-5.914-16.326-1.25-24.322-8.08z"
        fill={colors[2]}
      />
      <Path
        d="M146.521 150.607a2.25 2.25 0 100-4.498 2.25 2.25 0 000 4.498z"
        fill="url(#cycleFourOrnament__paint18_linear)"
      />
      <Path
        d="M53.48 150.607a2.249 2.249 0 110-4.498 2.249 2.249 0 010 4.498z"
        fill="url(#cycleFourOrnament__paint19_linear)"
      />
      <Path
        d="M150.102 149.691a3.332 3.332 0 100-6.663 3.332 3.332 0 000 6.663z"
        fill="url(#cycleFourOrnament__paint20_linear)"
      />
      <Path
        d="M49.897 149.691a3.332 3.332 0 110-6.664 3.332 3.332 0 010 6.664z"
        fill="url(#cycleFourOrnament__paint21_linear)"
      />
      <Path
        d="M149.769 156.687s-1.416 4.748-5.83 7.247c-4.415 2.499-8.247 3.582-15.244 1.416-6.997-2.082-14.91 1.166-14.91 1.166s4.165-10.079 35.984-9.829z"
        fill={colors[1]}
      />
      <Path
        d="M113.785 166.516s14.327-17.242 25.905-13.91c0 0 6.747 1.666 10.079 4.081 0 0-4.831 6.247-11.578 7.414-6.747 1.166-10.912-3.582-24.406 2.415z"
        fill="url(#cycleFourOrnament__paint22_linear)"
      />
      <Path d="M145.604 156.771s-14.66-2.666-21.323 3.415c0 .083 6.663-2.416 21.323-3.415z" fill={colors[2]} />
      <Path
        d="M50.23 156.687s1.417 4.748 5.832 7.247c4.414 2.499 8.246 3.582 15.243 1.416 6.997-2.082 14.91 1.166 14.91 1.166s-4.165-10.079-35.984-9.829z"
        fill={colors[1]}
      />
      <Path
        d="M86.215 166.516s-14.327-17.242-25.905-13.91c0 0-6.747 1.666-10.08 4.081 0 0 4.832 6.247 11.579 7.414 6.747 1.166 10.912-3.582 24.406 2.415z"
        fill="url(#cycleFourOrnament__paint23_linear)"
      />
      <Path d="M54.395 156.771s14.66-2.666 21.324 3.415c0 .083-6.663-2.416-21.323-3.415z" fill={colors[2]} />
      <Path
        d="M158.016 42.738s-3.749 3.248-4.998 13.077c0 0-1.583 8.247 2.499 13.411 4.165 5.165 11.661 12.245 11.661 12.245s-10.745-33.735-9.162-38.733z"
        fill={colors[1]}
      />
      <Path
        d="M158.016 42.738s.25 3.998 5.497 9.745c3.082 3.499 11.329 16.66 3.665 28.904 0 0-12.91-14.41-12.91-21.24 0-6.83 1.332-14.16 3.748-17.41z"
        fill="url(#cycleFourOrnament__paint24_linear)"
      />
      <Path
        d="M158.682 51.317s9.163 14.16 8.08 25.405c0 .334-.083.584-.083.834-1.75 11.328-1.333-14.91-7.997-26.239z"
        fill={colors[2]}
      />
      <Path
        d="M41.984 42.738s3.749 3.248 4.998 13.077c0 0 1.583 8.247-2.499 13.411-4.165 5.165-11.661 12.245-11.661 12.245s10.745-33.735 9.162-38.733z"
        fill={colors[1]}
      />
      <Path
        d="M41.984 42.738s-.25 3.998-5.497 9.745c-3.082 3.499-11.329 16.66-3.665 28.904 0 0 12.91-14.41 12.91-21.24 0-6.83-1.332-14.16-3.748-17.41z"
        fill="url(#cycleFourOrnament__paint25_linear)"
      />
      <Path
        d="M41.318 51.317s-9.163 14.16-8.08 25.405c0 .334.084.584.084.834 1.749 11.328 1.332-14.91 7.996-26.239z"
        fill={colors[2]}
      />
      <Path
        d="M181.672 59.064s3.832 10.579-1.749 15.993c-5.581 5.414-12.328 3.082-12.328 3.082l14.077-19.075z"
        fill={colors[1]}
      />
      <Path
        d="M181.672 59.065s4.415 16.742-14.077 18.991c.083.084-6.664-9.912 14.077-18.991z"
        fill="url(#cycleFourOrnament__paint26_linear)"
      />
      <Path d="M179.59 62.396s-9.995 8.163-10.828 12.828c0 0 6.164-3.832 10.828-12.828z" fill={colors[2]} />
      <Path
        d="M18.328 59.064s-3.832 10.579 1.749 15.993c5.58 5.414 12.328 3.082 12.328 3.082L18.327 59.064z"
        fill={colors[1]}
      />
      <Path
        d="M18.328 59.065s-4.415 16.742 14.077 18.991c-.084.084 6.663-9.912-14.077-18.991z"
        fill="url(#cycleFourOrnament__paint27_linear)"
      />
      <Path d="M20.41 62.396s9.995 8.163 10.828 12.828c0 0-6.164-3.832-10.828-12.828z" fill={colors[2]} />
      <Path
        d="M160.015 104.711s-3.665-9.83-1.666-17.242c1.999-7.414 12.744-9.996 16.076-12.412 3.332-2.332 8.58-8.746 9.246-10.995l.833 8.996 9.496-1s-6.164 10.58-11.745 13.078c-5.497 2.583-16.493 7.58-22.24 19.575z"
        fill="url(#cycleFourOrnament__paint28_linear)"
      />
      <Path
        d="M39.985 104.711s3.665-9.83 1.666-17.242c-2-7.414-12.744-9.996-16.076-12.412-3.332-2.332-8.58-8.746-9.246-10.995l-.833 8.996-9.496-1s6.164 10.58 11.745 13.078c5.497 2.583 16.492 7.58 22.24 19.575z"
        fill="url(#cycleFourOrnament__paint29_linear)"
      />
      <Path
        d="M180.291 86.39s3.332 10.162-2.832 16.409c-6.081 6.247-13.411 5.831-13.411 5.831l16.243-22.24z"
        fill={colors[1]}
      />
      <Path
        d="M180.291 86.39s-20.241-3.749-17.575 22.323c0 0 5.747-1.249 10.745-5.081 4.248-3.332 7.996-8.746 6.83-17.242z"
        fill="url(#cycleFourOrnament__paint30_linear)"
      />
      <Path d="M178.292 87.64s-12.411 6.246-13.827 18.074c0 0 5.83-11.828 13.827-18.075z" fill={colors[2]} />
      <Path
        d="M19.709 86.39s-3.332 10.162 2.832 16.409c6.08 6.247 13.41 5.831 13.41 5.831L19.71 86.39z"
        fill={colors[1]}
      />
      <Path
        d="M19.708 86.39s20.241-3.749 17.576 22.323c0 0-5.747-1.249-10.745-5.081-4.248-3.332-7.997-8.746-6.83-17.242z"
        fill="url(#cycleFourOrnament__paint31_linear)"
      />
      <Path d="M21.708 87.64s12.411 6.246 13.827 18.074c0 0-5.83-11.828-13.827-18.075z" fill={colors[2]} />
      <Defs>
        <LinearGradient
          id="cycleFourOrnament__paint0_linear"
          x1={164.473}
          y1={72.965}
          x2={164.473}
          y2={80.376}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint1_linear"
          x1={35.527}
          y1={72.965}
          x2={35.527}
          y2={80.376}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint2_linear"
          x1={154.794}
          y1={63.715}
          x2={154.794}
          y2={82.263}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[4]} />
          <Stop offset={0.275} stopColor={colors[5]} />
          <Stop offset={0.536} stopColor={colors[6]} />
          <Stop offset={0.791} stopColor={colors[7]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint3_linear"
          x1={45.206}
          y1={63.715}
          x2={45.206}
          y2={82.263}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[4]} />
          <Stop offset={0.275} stopColor={colors[5]} />
          <Stop offset={0.536} stopColor={colors[6]} />
          <Stop offset={0.791} stopColor={colors[7]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint4_linear"
          x1={162.977}
          y1={78.599}
          x2={162.977}
          y2={83.034}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint5_linear"
          x1={37.023}
          y1={78.599}
          x2={37.023}
          y2={83.034}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint6_linear"
          x1={176.14}
          y1={106.16}
          x2={161.633}
          y2={117.875}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.255} stopColor={colors[8]} />
          <Stop offset={0.535} stopColor={colors[9]} />
          <Stop offset={0.791} stopColor={colors[10]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint7_linear"
          x1={182.032}
          y1={101.951}
          x2={162.907}
          y2={113.883}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.083} stopColor={colors[11]} />
          <Stop offset={0.474} stopColor={colors[12]} />
          <Stop offset={0.794} stopColor={colors[13]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint8_linear"
          x1={23.86}
          y1={106.16}
          x2={38.367}
          y2={117.875}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.255} stopColor={colors[8]} />
          <Stop offset={0.535} stopColor={colors[9]} />
          <Stop offset={0.791} stopColor={colors[10]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint9_linear"
          x1={17.968}
          y1={101.951}
          x2={37.093}
          y2={113.883}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.083} stopColor={colors[11]} />
          <Stop offset={0.474} stopColor={colors[12]} />
          <Stop offset={0.794} stopColor={colors[13]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint10_linear"
          x1={170.518}
          y1={102.467}
          x2={170.518}
          y2={108.653}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint11_linear"
          x1={30.198}
          y1={102.467}
          x2={30.199}
          y2={108.653}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint12_linear"
          x1={186.339}
          y1={113.272}
          x2={149.593}
          y2={134.488}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.074} stopColor={colors[15]} />
          <Stop offset={0.189} stopColor={colors[16]} />
          <Stop offset={0.331} stopColor={colors[17]} />
          <Stop offset={0.475} stopColor={colors[18]} />
          <Stop offset={0.493} stopColor={colors[19]} />
          <Stop offset={0.572} stopColor={colors[20]} />
          <Stop offset={0.653} stopColor={colors[21]} />
          <Stop offset={0.735} stopColor={colors[22]} />
          <Stop offset={0.819} stopColor={colors[23]} />
          <Stop offset={0.904} stopColor={colors[24]} />
          <Stop offset={0.995} stopColor={colors[14]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint13_linear"
          x1={13.661}
          y1={113.272}
          x2={50.407}
          y2={134.488}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.074} stopColor={colors[15]} />
          <Stop offset={0.189} stopColor={colors[16]} />
          <Stop offset={0.331} stopColor={colors[17]} />
          <Stop offset={0.475} stopColor={colors[18]} />
          <Stop offset={0.493} stopColor={colors[19]} />
          <Stop offset={0.572} stopColor={colors[20]} />
          <Stop offset={0.653} stopColor={colors[21]} />
          <Stop offset={0.735} stopColor={colors[22]} />
          <Stop offset={0.819} stopColor={colors[23]} />
          <Stop offset={0.904} stopColor={colors[24]} />
          <Stop offset={0.995} stopColor={colors[14]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint14_linear"
          x1={162.655}
          y1={151.496}
          x2={137.13}
          y2={151.068}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.055} stopColor={colors[15]} />
          <Stop offset={0.142} stopColor={colors[16]} />
          <Stop offset={0.248} stopColor={colors[17]} />
          <Stop offset={0.37} stopColor={colors[19]} />
          <Stop offset={0.388} stopColor={colors[18]} />
          <Stop offset={0.459} stopColor={colors[20]} />
          <Stop offset={0.562} stopColor={colors[21]} />
          <Stop offset={0.666} stopColor={colors[22]} />
          <Stop offset={0.772} stopColor={colors[23]} />
          <Stop offset={0.88} stopColor={colors[24]} />
          <Stop offset={0.995} stopColor={colors[14]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint15_linear"
          x1={37.345}
          y1={151.496}
          x2={62.87}
          y2={151.068}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.055} stopColor={colors[15]} />
          <Stop offset={0.142} stopColor={colors[16]} />
          <Stop offset={0.248} stopColor={colors[17]} />
          <Stop offset={0.37} stopColor={colors[19]} />
          <Stop offset={0.388} stopColor={colors[18]} />
          <Stop offset={0.459} stopColor={colors[20]} />
          <Stop offset={0.562} stopColor={colors[21]} />
          <Stop offset={0.666} stopColor={colors[22]} />
          <Stop offset={0.772} stopColor={colors[23]} />
          <Stop offset={0.88} stopColor={colors[24]} />
          <Stop offset={0.995} stopColor={colors[14]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint16_linear"
          x1={164.307}
          y1={130.587}
          x2={164.307}
          y2={146.537}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint17_linear"
          x1={35.692}
          y1={130.587}
          x2={35.692}
          y2={146.537}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint18_linear"
          x1={146.62}
          y1={145.946}
          x2={146.62}
          y2={150.495}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint19_linear"
          x1={53.38}
          y1={145.946}
          x2={53.38}
          y2={150.495}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint20_linear"
          x1={150.247}
          y1={142.874}
          x2={150.247}
          y2={149.521}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint21_linear"
          x1={49.752}
          y1={142.874}
          x2={49.753}
          y2={149.521}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint22_linear"
          x1={131.806}
          y1={152.211}
          x2={131.806}
          y2={166.541}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint23_linear"
          x1={68.194}
          y1={152.211}
          x2={68.194}
          y2={166.541}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint24_linear"
          x1={162.261}
          y1={42.708}
          x2={162.261}
          y2={81.397}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint25_linear"
          x1={37.739}
          y1={42.708}
          x2={37.739}
          y2={81.397}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint26_linear"
          x1={174.391}
          y1={59.084}
          x2={174.391}
          y2={78.117}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint27_linear"
          x1={25.609}
          y1={59.084}
          x2={25.609}
          y2={78.117}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint28_linear"
          x1={188.942}
          y1={67.159}
          x2={155.651}
          y2={100.45}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.055} stopColor={colors[15]} />
          <Stop offset={0.142} stopColor={colors[16]} />
          <Stop offset={0.248} stopColor={colors[17]} />
          <Stop offset={0.37} stopColor={colors[19]} />
          <Stop offset={0.388} stopColor={colors[18]} />
          <Stop offset={0.459} stopColor={colors[20]} />
          <Stop offset={0.562} stopColor={colors[21]} />
          <Stop offset={0.666} stopColor={colors[22]} />
          <Stop offset={0.772} stopColor={colors[23]} />
          <Stop offset={0.88} stopColor={colors[24]} />
          <Stop offset={0.995} stopColor={colors[14]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint29_linear"
          x1={11.058}
          y1={67.159}
          x2={44.349}
          y2={100.45}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.055} stopColor={colors[15]} />
          <Stop offset={0.142} stopColor={colors[16]} />
          <Stop offset={0.248} stopColor={colors[17]} />
          <Stop offset={0.37} stopColor={colors[19]} />
          <Stop offset={0.388} stopColor={colors[18]} />
          <Stop offset={0.459} stopColor={colors[20]} />
          <Stop offset={0.562} stopColor={colors[21]} />
          <Stop offset={0.666} stopColor={colors[22]} />
          <Stop offset={0.772} stopColor={colors[23]} />
          <Stop offset={0.88} stopColor={colors[24]} />
          <Stop offset={0.995} stopColor={colors[14]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint30_linear"
          x1={171.469}
          y1={86.241}
          x2={171.469}
          y2={108.738}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFourOrnament__paint31_linear"
          x1={28.531}
          y1={86.241}
          x2={28.531}
          y2={108.738}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[3]} />
          <Stop offset={0.241} stopColor={colors[25]} />
          <Stop offset={0.469} stopColor={colors[26]} />
          <Stop offset={0.693} stopColor={colors[27]} />
          <Stop offset={0.912} stopColor={colors[28]} />
          <Stop offset={1} stopColor={colors[1]} />
        </LinearGradient>
      </Defs>
    </>
  );
};

export default memo(CycleFourOrnament);

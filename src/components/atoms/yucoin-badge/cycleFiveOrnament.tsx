import React, { memo } from "react";
import { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Colours } from "@styles";

interface IProps {
  isGrayScale?: boolean;
}

const DEFAULT_COLORS = [
  "#EDB720",
  "#F8CB31",
  "#BA4747",
  "#00AFD8",
  "#00C0F3",
  "#CAEFF9",
  "#C7B4FD",
  "#FC748D",
  "#F9B4B4",
  "#FF839B",
  "#9F81FC",
  "#00ED9D",
  "#CAF8E8",
  "#956AFF",
  "#FEED6A",
  "#FDEA66",
  "#FAE25B",
  "#F6D448",
  "#F0C02D",
  "#F03754",
  "#F23F5C",
  "#F65570",
  "#FD7992",
  "#F75974",
  "#F34662",
  "#F13B58",
  "#FEEA58",
  "#FDE754",
  "#F9DC49",
  "#F4CB36",
];

const CycleFiveOrnament = ({ isGrayScale }: IProps) => {
  const colors = isGrayScale ? Colours.toGrayScaleArray(DEFAULT_COLORS) : DEFAULT_COLORS;
  return (
    <>
      <Path
        d="M18.574 58.539s-3.893 10.75 1.693 16.251c5.587 5.502 12.527 3.132 12.527 3.132l-14.22-19.383z"
        fill={colors[0]}
      />
      <Path
        d="M18.574 58.538s-4.486 17.014 14.22 19.383c0 0 6.856-10.157-14.22-19.383z"
        fill="url(#cycleFiveOrnament__paint0_linear)"
      />
      <Path d="M20.69 61.924s10.073 8.295 10.92 13.12c0-.085-6.18-3.979-10.92-13.12z" fill={colors[1]} />
      <Path
        d="M42.697 41.948s3.809 3.301 5.079 13.29c0 0 1.608 8.379-2.624 13.627-4.232 5.247-11.85 12.442-11.85 12.442s10.919-34.196 9.395-39.359z"
        fill={colors[0]}
      />
      <Path
        d="M42.697 41.949s-.339 4.063-5.586 9.903c-3.132 3.555-11.512 16.844-3.81 29.37 0 0 13.12-14.558 13.12-21.583 0-6.94-1.354-14.305-3.724-17.69z"
        fill="url(#cycleFiveOrnament__paint1_linear)"
      />
      <Path
        d="M42.02 50.666s-9.31 14.39-8.295 25.816c0 .339.085.593.085.847 1.693 11.511 1.354-15.067 8.21-26.663z"
        fill={colors[1]}
      />
      <Path
        d="M37.703 143.181s1.354-5.502 4.74-5.333c3.386.17 6.518 3.894 6.518 3.894s-4.486 5.079 1.777 9.988c-.085 0-12.104-2.963-13.035-8.549z"
        fill={colors[2]}
      />
      <Path d="M36.01 80.207a3.724 3.724 0 100-7.448 3.724 3.724 0 000 7.448z" fill={colors[3]} />
      <Path
        d="M37.365 103.229s3.809-9.987 1.777-17.52c-2.031-7.534-12.95-10.242-16.336-12.612-3.385-2.37-8.633-8.972-9.31-11.258l-.847 9.142L3 69.965s6.264 10.75 11.85 13.289c5.586 2.624 16.674 7.702 22.515 19.975z"
        fill="url(#cycleFiveOrnament__paint2_linear)"
      />
      <Path
        d="M54.123 63.362s2.539 9.988-4.486 14.559c-7.026 4.57-11.935 4.317-11.935 4.317l16.42-18.876z"
        fill={colors[0]}
      />
      <Path
        d="M54.124 63.363s-6.433.93-10.92 4.147c-4.485 3.217-6.432 9.48-5.416 14.643 0 0 18.029-3.893 16.336-18.79z"
        fill="url(#cycleFiveOrnament__paint3_linear)"
      />
      <Path d="M52.261 65.478s-9.226 6.772-12.696 14.305c0 0 8.633-8.38 12.696-14.305z" fill={colors[1]} />
      <Path
        d="M19.111 85.793s-3.385 10.326 2.793 16.759c6.18 6.433 13.628 5.925 13.628 5.925l-16.42-22.684z"
        fill={colors[0]}
      />
      <Path
        d="M19.111 85.793s20.517-3.109 17.723 23.385c0 0-5.788-1.97-10.782-5.864-4.486-3.47-8.21-8.972-6.94-17.52z"
        fill="url(#cycleFiveOrnament__paint4_linear)"
      />
      <Path d="M21.058 87.063S33.67 93.41 35.024 105.43c0 0-5.84-12.02-13.966-18.367z" fill={colors[1]} />
      <Path
        d="M20.521 106.277s1.27 6.094 11.68 10.411c10.518 4.748 15.744 6.94 16.337 13.712.592 6.771.169 13.035.169 13.035s-1.778-7.449-12.442-12.02c-10.665-4.57-13.374-4.316-15.744-25.138z"
        fill="url(#cycleFiveOrnament__paint5_linear)"
      />
      <Path d="M37.534 83a2.285 2.285 0 100-4.57 2.285 2.285 0 000 4.57z" fill={colors[4]} />
      <Path
        opacity={0.61}
        d="M38.211 80.46a.677.677 0 100-1.353.677.677 0 000 1.354zM36.688 75.636a1.016 1.016 0 100-2.031 1.016 1.016 0 000 2.031z"
        fill={colors[5]}
      />
      <Path d="M165.09 76.06a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032z" fill={colors[6]} />
      <Path
        d="M37.703 143.181s2.032 5.756 10.242 6.941c6.856.931 10.665-1.862 14.559 4.401 0 0 1.354 3.978 1.1 7.025-2.54-2.962-15.066.593-20.399-3.555-4.316-3.47-6.517-7.194-5.502-14.812z"
        fill="url(#cycleFiveOrnament__paint6_linear)"
      />
      <Path
        d="M13.869 100.944s2.515 12.603 7.124 15.066c8.642 4.638 14.991 1.772 19.497 4.568l-26.621-19.634z"
        fill={colors[0]}
      />
      <Path
        d="M13.868 100.945s5.163 13.769 13.374 15.501c8.211 1.732 8.35 1.204 13.025 4.01.005-.085 2.44-19.759-26.399-19.511z"
        fill="url(#cycleFiveOrnament__paint7_linear)"
      />
      <Path d="M16.577 102.538s16.408 3.718 21.487 14.43c0 0-11.117-10.373-21.487-14.43z" fill={colors[1]} />
      <Path d="M31.102 108.477a3.132 3.132 0 100-6.263 3.132 3.132 0 000 6.263z" fill={colors[3]} />
      <Path
        d="M19.76 132.601s2.285 11.088 10.156 13.712c7.872 2.624 9.903-1.101 22.177 1.185.084 0-12.781-14.982-32.334-14.897z"
        fill={colors[0]}
      />
      <Path
        d="M19.76 132.6s5.755 11.935 14.643 11.766c8.887-.17 12.865-.508 17.775 3.047 0 .085-2.455-21.838-32.418-14.813z"
        fill="url(#cycleFiveOrnament__paint8_linear)"
      />
      <Path
        d="M22.807 133.447c10.919 5.332 14.897-.847 24.715 8.295-8.972-6.01-16.674-1.27-24.715-8.295z"
        fill={colors[1]}
      />
      <Path d="M54.04 151.645a2.285 2.285 0 100-4.57 2.285 2.285 0 000 4.57z" fill={colors[7]} />
      <Path d="M54.8 149.106a.678.678 0 100-1.356.678.678 0 000 1.356z" fill={colors[8]} />
      <Path d="M50.4 150.714a3.386 3.386 0 100-6.772 3.386 3.386 0 000 6.772z" fill={colors[9]} />
      <Path d="M51.246 146.905a.931.931 0 100-1.862.931.931 0 000 1.862z" fill={colors[8]} />
      <Path
        d="M50.654 157.398s1.439 4.824 5.925 7.364c4.486 2.539 8.38 3.639 15.49 1.523 7.11-2.116 15.272.754 15.272.754s-4.354-9.811-36.687-9.641z"
        fill={colors[0]}
      />
      <Path
        d="M87.341 167.039s-14.595-17.175-26.445-13.789c0 0-6.856 1.693-10.242 4.063 0 0 4.91 6.348 11.765 7.533 6.856 1.185 11.21-3.901 24.922 2.193z"
        fill="url(#cycleFiveOrnament__paint9_linear)"
      />
      <Path d="M54.886 157.482s14.897-2.624 21.669 3.555c0 0-6.772-2.539-21.669-3.555z" fill={colors[1]} />
      <Path
        d="M161.958 143.519s-1.354-5.502-4.74-5.332c-3.385.169-6.517 3.893-6.517 3.893s4.486 5.079-1.778 9.988c-.084-.085 12.02-2.878 13.035-8.549z"
        fill={colors[2]}
      />
      <Path
        d="M145.961 63.617s-2.624 9.988 4.402 14.559c7.025 4.57 11.85 4.316 11.85 4.316l-16.252-18.875z"
        fill={colors[0]}
      />
      <Path
        d="M145.961 63.616s6.433 1.016 10.919 4.232c4.486 3.217 6.348 9.565 5.333 14.644 0 0-18.029-3.979-16.252-18.876z"
        fill="url(#cycleFiveOrnament__paint10_linear)"
      />
      <Path d="M147.823 65.733s9.226 6.771 12.612 14.39c0 0-8.634-8.38-12.612-14.39z" fill={colors[1]} />
      <Path
        d="M179.31 106.785s-1.269 6.094-11.765 10.411c-10.496 4.316-15.743 6.856-16.421 13.627-.677 6.772-.254 13.035-.254 13.035s1.863-7.448 12.528-11.935c10.665-4.486 13.458-4.401 15.912-25.138z"
        fill="url(#cycleFiveOrnament__paint11_linear)"
      />
      <Path d="M162.466 83.339a2.285 2.285 0 10.001-4.571 2.285 2.285 0 00-.001 4.57z" fill={colors[10]} />
      <Path
        d="M161.959 143.519s-2.032 5.756-10.327 6.856c-6.856.931-10.665-1.947-14.558 4.317 0 0-1.355 3.978-1.101 7.025 2.624-2.962 15.067.677 20.399-3.47 4.317-3.386 6.518-7.11 5.587-14.728z"
        fill="url(#cycleFiveOrnament__paint12_linear)"
      />
      <Path
        d="M179.902 133.107s-2.37 11.088-10.241 13.628c-7.872 2.539-9.903-1.101-22.261 1.015 0 0 12.95-14.897 32.502-14.643z"
        fill={colors[0]}
      />
      <Path
        d="M179.903 133.108s-5.756 11.85-14.728 11.681c-8.972-.169-12.866-.593-17.775 2.962 0 0 2.624-21.837 32.503-14.643z"
        fill="url(#cycleFiveOrnament__paint13_linear)"
      />
      <Path
        d="M176.855 133.954c-11.003 5.248-14.897-.931-24.715 8.126 8.887-6.01 16.59-1.185 24.715-8.126z"
        fill={colors[1]}
      />
      <Path d="M145.538 151.899a2.285 2.285 0 100-4.57 2.285 2.285 0 000 4.57z" fill={colors[7]} />
      <Path d="M149.177 150.968a3.386 3.386 0 100-6.772 3.386 3.386 0 000 6.772z" fill={colors[9]} />
      <Path
        d="M148.84 157.738s-1.439 4.825-5.925 7.364c-4.486 2.54-8.38 3.555-15.49 1.439-7.11-2.116-15.566.989-15.566.989s4.647-10.215 36.981-9.792z"
        fill={colors[0]}
      />
      <Path
        d="M111.859 167.53s14.975-17.494 26.825-14.024c0 0 6.856 1.777 10.157 4.147 0 0-4.909 6.349-11.85 7.449-6.941 1.1-11.42-3.582-25.132 2.428z"
        fill="url(#cycleFiveOrnament__paint14_linear)"
      />
      <Path d="M144.608 157.738s-14.897-2.708-21.669 3.471c0 0 6.772-2.54 21.669-3.471z" fill={colors[1]} />
      <Path d="M163.313 80.8a.678.678 0 100-1.356.678.678 0 000 1.355z" fill={colors[6]} />
      <Path d="M150.109 146.905a.931.931 0 100-1.862.931.931 0 000 1.862z" fill={colors[8]} />
      <Path
        d="M181.031 87.312s3.301 10.326-2.878 16.675c-6.179 6.348-13.627 5.84-13.627 5.84l16.505-22.515z"
        fill={colors[0]}
      />
      <Path
        d="M181.031 87.312s-20.309-3.156-17.685 23.337c0 0 5.581-1.922 10.66-5.9 4.401-3.386 8.21-8.888 7.025-17.437z"
        fill="url(#cycleFiveOrnament__paint15_linear)"
      />
      <Path d="M179 88.496s-12.612 6.349-14.051 18.283c0 .085 5.925-11.934 14.051-18.282z" fill={colors[1]} />
      <Path
        d="M187.613 100.004s-2.358 12.655-6.92 15.205c-8.558 4.718-15.837 2.366-20.289 5.248l27.209-20.453z"
        fill={colors[0]}
      />
      <Path
        d="M187.613 100.005s-4.99 13.787-13.166 15.675c-8.183 1.803-9.416 1.966-14.043 4.776 0 0-1.641-20.319 27.209-20.451z"
        fill="url(#cycleFiveOrnament__paint16_linear)"
      />
      <Path d="M184.936 101.649s-16.34 3.945-21.299 14.758c-.006-.084 11.002-10.588 21.299-14.758z" fill={colors[1]} />
      <Path d="M167.75 108.9a3.131 3.131 0 100-6.263 3.131 3.131 0 000 6.263z" fill={colors[11]} />
      <Path d="M168.849 105.346a.678.678 0 100-1.355.678.678 0 000 1.355z" fill={colors[12]} />
      <Path opacity={0.61} d="M32.118 105.138a.677.677 0 100-1.354.677.677 0 000 1.354z" fill={colors[5]} />
      <Path
        d="M181.595 59.046s3.809 10.75-1.862 16.167c-5.671 5.502-12.527 3.132-12.527 3.132l14.389-19.299z"
        fill={colors[0]}
      />
      <Path
        d="M181.595 59.047s4.402 17.014-14.389 19.299c0 0-6.771-10.242 14.389-19.299z"
        fill="url(#cycleFiveOrnament__paint17_linear)"
      />
      <Path d="M179.395 62.347s-10.158 8.21-11.004 13.035c0 0 6.179-3.894 11.004-13.035z" fill={colors[1]} />
      <Path
        d="M157.472 42.287s-3.808 3.301-5.163 13.204c0 0-1.693 8.38 2.54 13.628 4.147 5.248 11.765 12.527 11.765 12.527s-10.665-34.196-9.142-39.359z"
        fill={colors[0]}
      />
      <Path
        d="M157.473 42.287s.254 4.063 5.502 9.988c3.131 3.555 11.426 16.928 3.639 29.37 0 0-13.035-14.642-13.035-21.668 0-7.025 1.524-14.304 3.894-17.69z"
        fill="url(#cycleFiveOrnament__paint18_linear)"
      />
      <Path
        d="M158.15 51.005s9.226 14.474 8.126 25.816c0 .338-.085.592-.085.846-1.777 11.596-1.269-15.066-8.041-26.662z"
        fill={colors[1]}
      />
      <Path d="M163.99 80.545a3.724 3.724 0 100-7.448 3.724 3.724 0 000 7.448z" fill={colors[13]} />
      <Path
        d="M162.466 103.568s-3.724-9.988-1.693-17.52c2.031-7.534 13.035-10.158 16.336-12.528 3.386-2.37 8.718-8.887 9.48-11.088l.762 9.141L197 70.558s-6.348 10.665-11.935 13.288c-5.586 2.455-16.759 7.534-22.599 19.722z"
        fill="url(#cycleFiveOrnament__paint19_linear)"
      />
      <Defs>
        <LinearGradient
          id="cycleFiveOrnament__paint0_linear"
          x1={25.973}
          y1={58.559}
          x2={25.917}
          y2={77.898}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint1_linear"
          x1={38.346}
          y1={41.955}
          x2={38.231}
          y2={81.269}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint2_linear"
          x1={8.015}
          y1={64.95}
          x2={41.744}
          y2={98.877}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[19]} />
          <Stop offset={0.079} stopColor={colors[20]} />
          <Stop offset={0.202} stopColor={colors[21]} />
          <Stop offset={0.352} stopColor={colors[22]} />
          <Stop offset={0.389} stopColor={colors[9]} />
          <Stop offset={0.45} stopColor={colors[7]} />
          <Stop offset={0.582} stopColor={colors[23]} />
          <Stop offset={0.717} stopColor={colors[24]} />
          <Stop offset={0.855} stopColor={colors[25]} />
          <Stop offset={1} stopColor={colors[19]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint3_linear"
          x1={45.872}
          y1={63.322}
          x2={45.817}
          y2={82.169}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[26]} />
          <Stop offset={0.275} stopColor={colors[27]} />
          <Stop offset={0.536} stopColor={colors[28]} />
          <Stop offset={0.791} stopColor={colors[29]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint4_linear"
          x1={27.999}
          y1={85.621}
          x2={27.933}
          y2={108.481}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint5_linear"
          x1={16.017}
          y1={114.079}
          x2={53.292}
          y2={135.745}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[19]} />
          <Stop offset={0.113} stopColor={colors[20]} />
          <Stop offset={0.288} stopColor={colors[21]} />
          <Stop offset={0.504} stopColor={colors[22]} />
          <Stop offset={0.557} stopColor={colors[9]} />
          <Stop offset={0.601} stopColor={colors[7]} />
          <Stop offset={0.697} stopColor={colors[23]} />
          <Stop offset={0.794} stopColor={colors[24]} />
          <Stop offset={0.894} stopColor={colors[25]} />
          <Stop offset={1} stopColor={colors[19]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint6_linear"
          x1={37.518}
          y1={152.491}
          x2={63.456}
          y2={152.131}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[19]} />
          <Stop offset={0.079} stopColor={colors[20]} />
          <Stop offset={0.202} stopColor={colors[21]} />
          <Stop offset={0.352} stopColor={colors[22]} />
          <Stop offset={0.389} stopColor={colors[9]} />
          <Stop offset={0.45} stopColor={colors[7]} />
          <Stop offset={0.582} stopColor={colors[23]} />
          <Stop offset={0.717} stopColor={colors[24]} />
          <Stop offset={0.855} stopColor={colors[25]} />
          <Stop offset={1} stopColor={colors[19]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint7_linear"
          x1={27.722}
          y1={101.619}
          x2={26.65}
          y2={119.796}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint8_linear"
          x1={36.01}
          y1={131.248}
          x2={35.962}
          y2={147.455}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint9_linear"
          x1={68.969}
          y1={152.891}
          x2={68.927}
          y2={167.452}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint10_linear"
          x1={154.193}
          y1={63.637}
          x2={154.138}
          y2={82.485}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[26]} />
          <Stop offset={0.275} stopColor={colors[27]} />
          <Stop offset={0.536} stopColor={colors[28]} />
          <Stop offset={0.791} stopColor={colors[29]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint11_linear"
          x1={183.768}
          y1={114.568}
          x2={146.367}
          y2={136.016}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[19]} />
          <Stop offset={0.109} stopColor={colors[20]} />
          <Stop offset={0.28} stopColor={colors[21]} />
          <Stop offset={0.49} stopColor={colors[22]} />
          <Stop offset={0.541} stopColor={colors[9]} />
          <Stop offset={0.587} stopColor={colors[7]} />
          <Stop offset={0.686} stopColor={colors[23]} />
          <Stop offset={0.787} stopColor={colors[24]} />
          <Stop offset={0.891} stopColor={colors[25]} />
          <Stop offset={1} stopColor={colors[19]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint12_linear"
          x1={162.043}
          y1={152.852}
          x2={136.109}
          y2={152.342}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[19]} />
          <Stop offset={0.079} stopColor={colors[20]} />
          <Stop offset={0.202} stopColor={colors[21]} />
          <Stop offset={0.352} stopColor={colors[22]} />
          <Stop offset={0.389} stopColor={colors[9]} />
          <Stop offset={0.45} stopColor={colors[7]} />
          <Stop offset={0.582} stopColor={colors[23]} />
          <Stop offset={0.717} stopColor={colors[24]} />
          <Stop offset={0.855} stopColor={colors[25]} />
          <Stop offset={1} stopColor={colors[19]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint13_linear"
          x1={163.66}
          y1={131.62}
          x2={163.613}
          y2={147.827}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint14_linear"
          x1={130.574}
          y1={153.072}
          x2={130.531}
          y2={167.634}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint15_linear"
          x1={172.088}
          y1={87.089}
          x2={172.021}
          y2={109.95}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint16_linear"
          x1={173.776}
          y1={100.869}
          x2={175.088}
          y2={119.03}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint17_linear"
          x1={174.12}
          y1={58.992}
          x2={174.063}
          y2={78.331}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint18_linear"
          x1={161.843}
          y1={42.315}
          x2={161.729}
          y2={81.629}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[14]} />
          <Stop offset={0.241} stopColor={colors[15]} />
          <Stop offset={0.469} stopColor={colors[16]} />
          <Stop offset={0.693} stopColor={colors[17]} />
          <Stop offset={0.912} stopColor={colors[18]} />
          <Stop offset={1} stopColor={colors[0]} />
        </LinearGradient>
        <LinearGradient
          id="cycleFiveOrnament__paint19_linear"
          x1={192.056}
          y1={65.487}
          x2={158.13}
          y2={99.216}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[19]} />
          <Stop offset={0.079} stopColor={colors[20]} />
          <Stop offset={0.202} stopColor={colors[21]} />
          <Stop offset={0.352} stopColor={colors[22]} />
          <Stop offset={0.389} stopColor={colors[9]} />
          <Stop offset={0.45} stopColor={colors[7]} />
          <Stop offset={0.582} stopColor={colors[23]} />
          <Stop offset={0.717} stopColor={colors[24]} />
          <Stop offset={0.855} stopColor={colors[25]} />
          <Stop offset={1} stopColor={colors[19]} />
        </LinearGradient>
      </Defs>
    </>
  );
};

export default memo(CycleFiveOrnament);

import React, { memo } from "react";
import Svg, { Path, Rect, Mask, G } from "react-native-svg";
import { Style } from "@styles";

interface Props {
  height?: number;
  width?: number;
}

export const FlagSA = memo(({ width = Style.adjust(32), height = Style.adjust(24) }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
    <Mask id="mask0_236_6135" x="0" y="0" width="32" height="24">
      <Rect width="32" height="24" fill="white" />
    </Mask>
    <G mask="url(#mask0_236_6135)">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H32V24H0V0Z" fill="#F7FCFF" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V8H32V0H0Z" fill="#E31D1C" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 16V24H32V16H0Z" fill="#3D58DB" />
      <Mask id="path-5-outside-1_236_6135" x="-2" y="-7" width="36" height="38" fill="black">
        <Rect fill="white" x="-2" y="-7" width="36" height="38" />
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.4286 10L0 -2V26L15.4286 14H32V10H15.4286Z" />
      </Mask>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.4286 10L0 -2V26L15.4286 14H32V10H15.4286Z" fill="#5EAA22" />
      <Path
        d="M0 -2L1.22788 -3.5787L-2 -6.08928V-2H0ZM15.4286 10L14.2007 11.5787L14.7424 12H15.4286V10ZM0 26H-2V30.0893L1.22788 27.5787L0 26ZM15.4286 14V12H14.7424L14.2007 12.4213L15.4286 14ZM32 14V16H34V14H32ZM32 10H34V8H32V10ZM-1.22788 -0.421296L14.2007 11.5787L16.6565 8.4213L1.22788 -3.5787L-1.22788 -0.421296ZM2 26V-2H-2V26H2ZM14.2007 12.4213L-1.22788 24.4213L1.22788 27.5787L16.6565 15.5787L14.2007 12.4213ZM32 12H15.4286V16H32V12ZM30 10V14H34V10H30ZM15.4286 12H32V8H15.4286V12Z"
        fill="#F7FCFF"
        mask="url(#path-5-outside-1_236_6135)"
      />
      <Path
        d="M0.6 5.2L-1 4V6V18V20L0.6 18.8L8.6 12.8L9.66667 12L8.6 11.2L0.6 5.2Z"
        fill="#272727"
        stroke="#FECA00"
        stroke-width="2"
      />
    </G>
  </Svg>

  // <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
  //   <Path
  //     d="M4 13.5V22.9086C4 23.6455 4.7699 24.1293 5.43383 23.8096L12 20.648L18.5662 23.8096C19.2301 24.1293 20 23.6455 20 22.9086V13.5L12 17.82L4 13.5Z"
  //     fill="#F9D337"
  //   />
  //   <Circle cx="11.9999" cy="10.4999" r="9.49994" fill="#FCE93D" stroke="#F9D337" />
  //   <Path
  //     d="M18.364 16.8639C20.0518 15.1761 21 12.8869 21 10.4999C21 8.11301 20.0518 5.82384 18.364 4.13602C16.6762 2.44821 14.387 1.5 12.0001 1.5C9.61313 1.5 7.32396 2.4482 5.63615 4.13602L12.0001 10.4999L18.364 16.8639Z"
  //     fill="#F9D337"
  //   />
  //   <Path
  //     d="M11.4189 7.7V13.412C11.4189 13.784 11.7309 14.096 12.1029 14.096C12.4749 14.096 12.7869 13.784 12.7869 13.412V6.512C12.7869 6.14 12.4749 5.828 12.1029 5.828C11.9229 5.828 11.8149 5.888 11.6829 5.972L9.95487 7.088C9.78687 7.196 9.66687 7.4 9.66687 7.64C9.66687 8 9.96687 8.3 10.3269 8.3C10.4829 8.3 10.6149 8.252 10.7229 8.168L11.4189 7.7Z"
  //     fill="#F8A528"
  //   />
  // </Svg>
));

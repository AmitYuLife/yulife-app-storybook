import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Style } from "@styles";

const _Award = () => {
  return (
    <Svg width={Style.adjust(18)} height={Style.adjust(18)} viewBox="0 0 18 18" fill="none">
      <Path
        d="M4.268 10.233C2.252 9.971.75 8.451.75 6.62V4.33c0-.378.35-.685.776-.685h1.906v1.193H2.063v2.09c0 .754.676 1.66 1.574 1.987.144.474.354.917.631 1.32zM13.732 10.233c2.017-.262 3.518-1.782 3.518-3.614V4.33c0-.378-.349-.685-.776-.685H14.57v1.193h1.368v2.09c0 .754-.676 1.66-1.573 1.987a4.614 4.614 0 01-.632 1.32z"
        fill="#F8CB31"
      />
      <Path d="M10.39 12.216H7.649v1.546h2.743v-1.546z" fill="url(#prefix__paint0_linear)" />
      <Path
        d="M12.023 14.902h-6.07c0-.654.489-1.183 1.094-1.183h3.876c.611 0 1.1.529 1.1 1.183z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M13 16.5H4.978v-.84c0-.524.465-.947 1.041-.947h5.934c.576 0 1.042.423 1.042.946v.841H13z"
        fill="#F8CB31"
      />
      <Path
        d="M14.607 2.451v5.11c0 2.798-2.504 5.073-5.585 5.073-2.006 0-3.762-.961-4.748-2.4a4.616 4.616 0 01-.632-1.32 4.597 4.597 0 01-.205-1.354V2.451c0-.523.465-.951 1.047-.951h9.076c.576.005 1.047.428 1.047.951z"
        fill="url(#prefix__paint2_linear)"
      />
      <Path
        opacity={0.4}
        d="M14.625 5.836v1.749c0 2.733-2.525 4.952-5.637 4.952-2.026 0-3.796-.939-4.789-2.341a4.478 4.478 0 01-.638-1.285 4.387 4.387 0 01-.21-1.32V5.835c0 .459.076.897.21 1.32.139.465.36.893.638 1.286.993 1.402 2.77 2.34 4.79 2.34 3.11.005 5.636-2.213 5.636-4.946z"
        fill="#E2B51A"
        fillOpacity={0.24}
      />
      <Path
        opacity={0.59}
        d="M12.718 3.106H5.26c-.155 0-.282-.116-.282-.257 0-.14.127-.257.282-.257h7.452c.155 0 .283.116.283.257.005.14-.122.257-.277.257z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={8.987}
          y1={12.202}
          x2={9.008}
          y2={13.785}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF48E" />
          <Stop offset={1} stopColor="#FFED44" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={8.917}
          y1={13.708}
          x2={8.923}
          y2={14.92}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF48E" />
          <Stop offset={1} stopColor="#FFED44" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={8.891}
          y1={1.397}
          x2={9.153}
          y2={12.8}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF48E" />
          <Stop offset={1} stopColor="#FFED44" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default React.memo(_Award);

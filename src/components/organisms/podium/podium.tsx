import { Style, StyleSheet } from "@styles";
import React, { memo } from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from "react-native-svg";
import { Dimensions, View } from "react-native";
import Rays from "../rays/rays";

const variation = Dimensions.get("window").scale * 4 - Dimensions.get("window").fontScale;
const podiumHeight = Math.round(Style.DEVICE_WIDTH - variation);

interface IPodiumProps {
  enableAnimatedRays?: boolean;
}

const Podium = ({ enableAnimatedRays }: IPodiumProps) => (
  <View style={styles.wrapper}>
    {enableAnimatedRays ? <Rays /> : null}

    <Svg width={Style.DEVICE_WIDTH} height={podiumHeight} viewBox="0 0 375 353" fill="none">
      <G clipPath="url(#a)">
        {!enableAnimatedRays ? (
          <G clipPath="url(#b)">
            <Path fill="#CEEBFF" d="M0 0h375v397H0z" />
            <Path fill="url(#c)" d="M159.693 447.052-.5-1h375L215.417 447.052h-55.724Z" />
            <Path fill="url(#d)" fillOpacity={0.8} d="m-5 283.246 108 185.419h52L-5 64.84v218.406Z" />
            <Path fill="url(#e)" fillOpacity={0.8} d="M379 283.246 271 477.765h-52v-9.1L379 64.84v218.406Z" />
            <Path
              fill="#C8E8FF"
              d="M-12.5 406c-34.518 0-62.5-27.982-62.5-62.5S-47.018 281-12.5 281c24.242 0 45.26 13.802 55.626 33.976A32.08 32.08 0 0 1 51 314c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-3.601 0-7.063-.595-10.293-1.692C29.696 394.127 9.984 406-12.5 406ZM409 314c0 17.673-14.327 32-32 32-.154 0-.308-.001-.461-.003.304 2.124.461 4.295.461 6.503 0 25.129-20.371 45.5-45.5 45.5S286 377.629 286 352.5s20.371-45.5 45.5-45.5c4.835 0 9.494.754 13.865 2.151C347.702 293.779 360.975 282 377 282c17.673 0 32 14.327 32 32Z"
            />
          </G>
        ) : null}

        <G clipPath="url(#f)">
          <Path fill="#00ED9D" d="M225 318.225h76.667v54.76H225z" />
          <Path fill="#00ED9D" d="M224.841 377.776h13.239l-12.637-59.551h-.602v59.551Z" opacity={0.8} />
          <Path fill="#B1F9E0" d="M225.333 309.971h62.292L302 318.225h-76.667v-8.254Z" />
          <Path fill="#00C0F3" d="M72 307h77v66H72z" />
          <Path fill="#00C0F3" d="M149.022 366.799h-8.424L148.421 307h.601v59.799Z" opacity={0.6} />
          <Path fill="#B2ECFB" d="M86.438 299H149v8H72l14.438-8Z" />
          <Path fill="#956AFF" d="M149 285h77v88h-77z" />
          <Path fill="#DFD3FF" d="M153.812 276h67.376l4.812 9h-77l4.812-9Z" />
          <Path
            fill="#CEEBFF"
            d="M136.812 476.527c20.278 0 36.716-16.39 36.716-36.607 0-20.218-16.438-36.608-36.716-36.608-20.277 0-36.715 16.39-36.715 36.608 0 20.217 16.438 36.607 36.715 36.607Z"
          />

          <Path
            fill="#CEEBFF"
            d="M136.812 476.527c20.278 0 36.716-16.39 36.716-36.607 0-20.218-16.438-36.608-36.716-36.608-20.277 0-36.715 16.39-36.715 36.608 0 20.217 16.438 36.607 36.715 36.607Z"
          />
        </G>
      </G>
      <G>
        <Path
          fill="#fff"
          d="M129.091 470.436c20.277 0 36.716-16.39 36.716-36.607 0-20.218-16.439-36.607-36.716-36.607-20.278 0-36.716 16.389-36.716 36.607 0 20.217 16.438 36.607 36.716 36.607Z"
        />
        <Path
          fill="#CEEBFF"
          d="M24.193 483.499c38.837 0 70.32-31.39 70.32-70.112 0-38.722-31.483-70.112-70.32-70.112-38.837 0-70.32 31.39-70.32 70.112 0 38.722 31.483 70.112 70.32 70.112Z"
        />
        <Path
          fill="#fff"
          d="M-22.68 437.224c38.838 0 70.321-31.39 70.321-70.112 0-38.722-31.483-70.112-70.32-70.112C-61.516 297-93 328.39-93 367.112c0 38.722 31.484 70.112 70.32 70.112ZM368.724 412.608c17.89 0 32.392-14.459 32.392-32.296 0-17.836-14.502-32.296-32.392-32.296-17.889 0-32.392 14.46-32.392 32.296 0 17.837 14.503 32.296 32.392 32.296ZM267.75 453.146c32.999 0 59.751-26.672 59.751-59.573 0-32.901-26.752-59.573-59.751-59.573-32.999 0-59.75 26.672-59.75 59.573 0 32.901 26.751 59.573 59.75 59.573Z"
        />
        <Path
          fill="#fff"
          d="M59.983 417.717c17.89 0 32.392-14.459 32.392-32.296 0-17.836-14.503-32.295-32.392-32.295-17.89 0-32.392 14.459-32.392 32.295 0 17.837 14.502 32.296 32.392 32.296Z"
        />
        <Path
          fill="#fff"
          d="M115.454 425.627c26.208 0 47.454-21.183 47.454-47.314 0-26.13-21.246-47.313-47.454-47.313C89.246 331 68 352.183 68 378.313c0 26.131 21.246 47.314 47.454 47.314Z"
        />
        <Path
          fill="#fff"
          d="M52.5 421c26.234 0 47.5-21.49 47.5-48s-21.266-48-47.5-48C26.267 325 5 346.49 5 373s21.267 48 47.5 48ZM173.789 421.341c21.975 0 39.789-17.761 39.789-39.67 0-21.91-17.814-39.671-39.789-39.671S134 359.761 134 381.671c0 21.909 17.814 39.67 39.789 39.67Z"
        />
        <Path
          fill="#fff"
          d="M216 408c16.569 0 30-13.208 30-29.5S232.569 349 216 349c-16.569 0-30 13.208-30 29.5s13.431 29.5 30 29.5ZM341.5 421c29.547 0 53.5-23.953 53.5-53.5S371.047 314 341.5 314 288 337.953 288 367.5s23.953 53.5 53.5 53.5Z"
        />
        <Path
          fill="#fff"
          d="M381.5 362c16.845 0 30.5-13.655 30.5-30.5S398.345 301 381.5 301 351 314.655 351 331.5s13.655 30.5 30.5 30.5Z"
        />
      </G>
      <Defs>
        <LinearGradient id="c" x1={184} x2={186.561} y1={138.5} y2={446.671} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.661} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient id="d" x1={-51.5} x2={120.374} y1={141.623} y2={503.865} gradientUnits="userSpaceOnUse">
          <Stop offset={0.003} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient id="e" x1={405.5} x2={255.637} y1={160.393} y2={504.931} gradientUnits="userSpaceOnUse">
          <Stop offset={0.003} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h375v353H0z" />
        </ClipPath>
        <ClipPath id="b">
          <Path fill="#fff" d="M0-1h375v354H0z" />
        </ClipPath>
        <ClipPath id="f">
          <Path fill="#fff" d="M0 276h375v77H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    backgroundColor: "#CEEBFF",
  },
});

export default memo(Podium);

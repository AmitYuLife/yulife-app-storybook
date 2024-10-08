import React, { memo } from "react";
import Svg, { Circle, Defs, G, LinearGradient, Path, RadialGradient, Stop } from "react-native-svg";
import { Style } from "@styles";

export const GlowStarsIcon = memo(() => (
  <Svg width={Style.adjust(103)} height={Style.adjust(102)} viewBox="0 0 103 102">
    <G x={-3} y={-10}>
      <Circle cx={52.069} cy={50.456} r={36.917} fill="url(#a)" opacity={0.6} />
      <G opacity={0.7}>
        <G filter="url(#b)">
          <Path fill="url(#c)" d="M42.943 12h16.715l-3.82 33.429h-9.074L42.944 12Z" />
        </G>
        <G filter="url(#d)">
          <Path fill="url(#e)" d="M59.654 90H42.94l3.82-33.429h9.074L59.654 90Z" />
        </G>
        <G filter="url(#f)">
          <Path fill="url(#g)" d="M12.299 59.217V42.503l33.428 3.82v9.074L12.3 59.217Z" />
        </G>
        <G filter="url(#h)">
          <Path fill="url(#i)" d="M90.3 42.449v16.714l-33.428-3.82v-9.074l33.429-3.82Z" />
        </G>
        <G filter="url(#j)">
          <Path fill="url(#k)" d="m17.812 29.332 11.82-11.819 20.935 26.34-6.416 6.416-26.339-20.937Z" />
        </G>
        <G filter="url(#l)">
          <Path fill="url(#m)" d="M84.783 72.668 72.964 84.487l-20.936-26.34 6.416-6.415 26.34 20.936Z" />
        </G>
        <G filter="url(#n)">
          <Path fill="url(#o)" d="M29.535 84.388 17.716 72.569l26.34-20.936 6.415 6.416-20.936 26.339Z" />
        </G>
        <G filter="url(#p)">
          <Path fill="url(#q)" d="m72.826 17.376 11.819 11.819-26.34 20.936-6.415-6.416 20.936-26.339Z" />
        </G>
        <Path fill="url(#r)" d="M48 13.2h6.6l-1.509 33.6H49.51L48 13.2Z" />
        <Path fill="url(#s)" d="M54.6 88.2H48l1.508-33.6h3.583L54.6 88.2Z" />
        <Path fill="url(#t)" d="M9 54v-6.6l33.6 1.509v3.582L9 54Z" />
        <Path fill="url(#u)" d="M93.6 47.4V54L60 52.49v-3.583L93.6 47.4Z" />
        <Path fill="url(#v)" d="m21 25.2 4.667-4.667L48.359 45.36l-2.534 2.533L21 25.2Z" />
        <Path fill="url(#w)" d="m81.824 76.2-4.667 4.667L54.465 56.04 57 53.508 81.824 76.2Z" />
        <Path fill="url(#x)" d="m25.2 81-4.668-4.667 24.826-22.692 2.533 2.534L25.2 81Z" />
        <Path fill="url(#y)" d="m77.16 20.4 4.667 4.667-24.825 22.692-2.534-2.534L77.16 20.4Z" />
      </G>
      <Path
        fill="#fff"
        d="m72.032 16 .694 2.289L75 19.03l-2.274.68L72.032 22l-.758-2.289-2.274-.68 2.274-.742.758-2.289ZM22.526 27.5l.58 1.907 1.894.619-1.895.567-.579 1.907-.631-1.907L20 30.026l1.895-.619.631-1.907ZM17.79 33.5l.868 2.86 2.842.929-2.842.85L17.789 41l-.947-2.86L14 37.288l2.842-.928.948-2.861ZM72.063 76l1.39 4.577L78 82.062l-4.547 1.36L72.063 88l-1.516-4.577L66 82.062l4.547-1.485L72.063 76Z"
      />
      <Defs>
        <LinearGradient id="c" x1={51.106} x2={45.615} y1={46.026} y2={9.01} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="e" x1={51.491} x2={56.983} y1={55.974} y2={92.99} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="g" x1={46.324} x2={9.309} y1={51.054} y2={56.546} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="i" x1={56.275} x2={93.291} y1={50.611} y2={45.12} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="k" x1={47.644} x2={17.587} y1={47.62} y2={25.329} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="m" x1={54.951} x2={85.008} y1={54.38} y2={76.671} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="o" x1={47.823} x2={25.532} y1={54.556} y2={84.613} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="q" x1={54.538} x2={76.829} y1={47.208} y2={17.151} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD601" />
          <Stop offset={0.412} stopColor="#FFD601" stopOpacity={0.6} />
          <Stop offset={0.73} stopColor="#FFF4D1" stopOpacity={0.4} />
          <Stop offset={1} stopColor="#FFE79D" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="r" x1={51.6} x2={35.927} y1={52.2} y2={24.453} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="s" x1={51} x2={66.673} y1={49.2} y2={76.947} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="t" x1={48} x2={20.253} y1={50.4} y2={66.073} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.7} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="u" x1={54.6} x2={82.347} y1={51} y2={35.327} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="v" x1={51.123} x2={20.42} y1={50.232} y2={41.694} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="w" x1={51.702} x2={82.404} y1={51.168} y2={59.706} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="x" x1={50.231} x2={41.693} y1={50.877} y2={81.58} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient id="y" x1={52.129} x2={60.666} y1={50.523} y2={19.82} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFBF00" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <RadialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(90 .807 51.263) scale(36.9172)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.415} stopColor="#fff" />
          <Stop offset={1} stopColor="#AFAFAF" stopOpacity={0} />
        </RadialGradient>
      </Defs>
    </G>
  </Svg>
));

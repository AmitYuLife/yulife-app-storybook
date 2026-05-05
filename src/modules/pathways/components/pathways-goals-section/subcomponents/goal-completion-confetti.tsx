import { memo } from "react";
import Svg, { Path } from "react-native-svg";

const GoalCompletionConfetti = () => (
  <Svg width="100%" height="100%" viewBox="0 0 281 60" fill="none">
    <Path
      d="M202.631 46.2329C207.228 38.13 217.383 39.2833 218.477 45.6653C219.618 52.3159 211.374 52.5604 210.317 47.6515"
      stroke="#36CB95"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path
      d="M76.1471 48.2942C70.2621 41.0726 60.4423 43.9055 60.4289 50.3807C60.4149 57.1284 68.5838 55.9928 68.8064 50.9763"
      stroke="#FF7991"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path d="M237.713 5.74562L235.399 12.7717L239.843 13.5198L242.877 2.77258L237.713 5.74562Z" fill="#FFDF3A" />
    <Path d="M40.4021 5.54535L36.1956 2.27463L39.8772 0L46.8268 4.26683L40.4021 5.54535Z" fill="#57F8EB" />
    <Path d="M3.38979 34.0139L8.38371 32.1623L8.37305 36.4932L1.08635 40.1503L3.38979 34.0139Z" fill="#FFDF3A" />
    <Path d="M273.026 40.7621L280.424 41.4261L280.152 36.9456L268.962 36.4189L273.026 40.7621Z" fill="#57F8EB" />
    <Path d="M33.0387 50.115L29.6443 51.2637L32.3835 56.9465L36.1955 55.6603L33.0387 50.115Z" fill="#18C6C6" />
    <Path d="M247.046 54.6299L245.92 58.0189L252.126 59.2631L253.391 55.4581L247.046 54.6299Z" fill="#FFDF3A" />
  </Svg>
);

export default memo(GoalCompletionConfetti);

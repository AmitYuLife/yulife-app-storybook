import React from "react";
import Svg, { Path } from "react-native-svg";

export const LungsSvg = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path
      d="M15.01 25.427s3.709-3.4 4.574-8.723V4M24.405 25.294s-4.328-3.025-4.823-8.59"
      stroke="#6E6E70"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.523 11.38S9.318 9.445 3.629 21.422c-4.948 11.252 2.597 13.067 6.43 12.462 3.835-.605 5.814-2.662 4.948-8.71-1.113-5.93 2.597-11.858-1.484-13.794zM25.891 11.38s4.205-1.935 9.894 10.042c4.947 11.252-2.597 13.067-6.431 12.462-3.834-.605-5.813-2.662-4.947-8.71.99-5.93-2.721-11.858 1.484-13.794z"
      fill="#5BA9D5"
      stroke="#5BA9D5"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

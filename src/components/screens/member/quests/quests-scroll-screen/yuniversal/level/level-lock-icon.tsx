import React, { memo } from "react";
import { Path } from "react-native-svg";

export const LevelLockIcon = memo(() => (
  <>
    <Path
      d="M29.5 23.843V21.32c0-2.303-1.889-4.195-4.219-4.195a4.223 4.223 0 0 0-4.218 4.227v2.523"
      stroke="#4692E4"
      strokeMiterlimit={10}
    />
    <Path stroke="#4692E4" strokeLinecap="round" strokeLinejoin="round" d="M18.188 23.813h13.625v9.125H18.188z" />
    <Path
      d="M25 29.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      stroke="#4692E4"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </>
));

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BUTTON_CLOSE } from "@ids";
import { Style, Colours } from "@styles";

interface Props {
  type?: "encircled";
  stroke?: string;
}

const ENCIRCLED_SIZE = Style.adjust(30);
const DEFAULT_SIZE = Style.adjust(24);

function CloseSvg({ type }: Props) {
  if (type === "encircled") {
    return (
      <Svg width={ENCIRCLED_SIZE} height={ENCIRCLED_SIZE} viewBox="0 0 30 30">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"
          fill="#767680"
          fillOpacity={0.12}
        />
        <Path
          d="M9.906 19c-.383.375-.398 1.063.008 1.46.399.4 1.086.384 1.461.009L15 16.844l3.625 3.617c.39.39 1.063.398 1.46-.008a1.05 1.05 0 00.009-1.46l-3.625-3.618 3.625-3.625a1.05 1.05 0 00-.008-1.46 1.042 1.042 0 00-1.461-.009L15 13.898l-3.625-3.625c-.375-.375-1.063-.39-1.46.008-.407.399-.392 1.086-.009 1.469l3.625 3.625L9.906 19z"
          fill="#3C3C43"
          fillOpacity={0.6}
        />
      </Svg>
    );
  }

  return (
    <Svg width={DEFAULT_SIZE} height={DEFAULT_SIZE} viewBox="0 0 24 24" fill="none" testID={BUTTON_CLOSE}>
      <Path d="M4 20L20 4" stroke={Colours.neutral.n800} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M20 20L4 4" stroke={Colours.neutral.n800} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default CloseSvg;
